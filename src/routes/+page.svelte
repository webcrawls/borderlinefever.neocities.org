<script lang="ts" context="module">
	import { createMachine } from 'xstate';

	export const makeLogoMachine = (initial: 'grayscale' | 'colour') => createMachine({
		id: 'logo',
		initial,
		states: {
			grayscale: {
				on: {  },
			},
			colour: {
				on: {  },
			},
			off: {
			}
		}
	});

	export const pathState = (pathname: string): string => {
		return {
			'': 'grayscale',
			'/': 'grayscale'
		}[pathname] ?? 'colour';
	};
</script>

<script lang="ts">
	import { useMachine } from '@xstate/svelte';
	import { onNavigate, afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	const initialState = pathState($page.url.pathname)

	const logo = useMachine(makeLogoMachine(initialState));
	const { snapshot, send } = logo;

	let resolver;
	$: if ($snapshot.hasTag('complete') && !!resolver) {
		resolver();
		resolver = undefined;
	}

	$: console.log($snapshot.value)

	afterNavigate((nav) => {
		console.log({afterNav: nav})
		if (!nav.from) return;
		if (!nav.to) return;

		if (nav?.from.url.pathname !== '/') {
			send({type: 'toggle'})
		}
		// const next = pathState(nav.to.url.pathname)
		// send({ type: next === 'colour' ? 'forceColour' : 'forceGrayscale' })
	})

	onNavigate((nav) => {
		console.log({onNav: nav})

		const current = $snapshot.value
		const next = pathState(nav.to.url.pathname)
		if (current === next) return;

		return new Promise((resolve) => {
			if (!$snapshot.matches('transition'))
				send({type: "toggle"})

			resolver = resolve;
		});
	});
</script>

<div class="image-container"
		 class:skiptransition={!$snapshot.hasTag('transition')}
		 class:coloured={$snapshot.hasTag('colour')}
		 on:transitionend={() => send({type: 'finish'})}>
	<img id="logo-grayscale"
			 alt="The Interference Pattern logo, grayscale." src="/logo/logo-grayscale.png" />
	<img id="logo-colour"
			 alt="The Interference Pattern logo, coloured." src="/logo/logo-colour.png" />
</div>

<style>
    @property --progress {
        syntax: "<number>";
        inherits: true;
        initial-value: 0.0;
    }

    @property --fade {
        syntax: "<number>";
        inherits: true;
        initial-value: 0.0;
    }

    .image-container {
        width: 100%;
        height: 100%;
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;

        --progress: 0.0;
        --fade: 1.0;

        opacity: var(--fade);
        transition: --progress 1s ease-in-out,
        opacity 0.2s ease-in-out,
        --fade 0.2s ease-in-out;
    }

		.image-container.skiptransition {
		}

    .image-container.coloured {
        --progress: 1.0;
    }

    .image-container.fade {
        --fade: 0.0;
    }

    #logo-grayscale {
        padding: 4rem;
        height: 100%;
        max-width: 80ch;
        object-fit: contain;
        position: absolute;
    }

    #logo-colour {
        padding: 4rem;
        height: 100%;
        max-width: 80ch;
        object-fit: contain;
        position: absolute;
        transition: opacity 1.0s ease-in-out;
        opacity: var(--progress);
    }
</style>
