import { assign, setup, StateNode, StateNodeConfig } from 'xstate';

export const makePageMachine = () => {
	return setup({}).createMachine({
		id: 'page',
		initial: 'off',
		context: {
		},
		states: {
			off: {},
			on: {},
			broken: {}
		}
	});
};