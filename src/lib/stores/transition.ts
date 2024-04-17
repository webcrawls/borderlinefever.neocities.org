import { get, writable, type Writable } from 'svelte/store';

export type TransitionValue = { value: number; transitioning: boolean };
export type TransitionWritable = Writable<TransitionValue> | { set: (value: number) => void };

export const makeTransitionStore = (
	initialValue: number,
	opts: {
		/**
		 * total millisecond duration for animation
		 */
		length: number;
	} = { length: 20 }
): TransitionWritable => {
	const { set, update, subscribe } = writable<TransitionValue>({
		value: initialValue,
		transitioning: false
	});

	let currentValue: number = 0.0;

	const tweenedSet = (value: number) => {
		// new value is greater than current: '0.0' -> '1.0', positive direction
		// new value is less than current: '1.0' -> '0.0', negative direction
		// new value is equal: no direction, fast return
		//                                 (also, tf prettier? github.com/prettier/prettier/issues/5814)
		const tweenDirection: 'positive' | 'negative' | 'none' =
			value > currentValue ? 'positive' // (shouldn't be automatically indented, dudes!!!)
				: value < currentValue ? 'negative' // (apparently people of the opinion that this is ok)
					: 'none'; // (they are wrong)

		if (tweenDirection === 'none') return;

		// todo fast override if prefers reduced motion
		// if (get(prefersReducedMotion)) set({value, transitioning: true})

		console.log('set called', new Error());

		const startingValue = currentValue;
		const endingValue = tweenDirection === 'positive' ? 1.0 : 0.0;
		const valueStep = (Math.max(startingValue, endingValue) / opts.length) * (tweenDirection === 'negative' ? -1.0 : 1.0)
		console.log({valueStep})

		set({ value: startingValue, transitioning: true });

		const tick = () => {
			currentValue += valueStep;
			const isEnd = tweenDirection === 'positive' ? currentValue >= endingValue : currentValue <= endingValue;
			if (isEnd) {
				currentValue = endingValue;
			} else {
				setTimeout(tick, 1);
			}
			set({ value: currentValue, transitioning: !isEnd });
		};

		tick();
	};

	return { set: tweenedSet, update, subscribe };
};
