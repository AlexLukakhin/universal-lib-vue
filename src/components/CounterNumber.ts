//@ts-nocheck
import { ref, defineComponent, h } from 'vue';

export const CounterNumber = defineComponent({
	name: 'Awesome',
	setup(props, ctx) {
		const value = ref(640);
		const clickEvent = (): void => {
			value.value++
		}
		return () =>
			h(
				'span',
				{
					class: 'counter-number',
					onClick() {
						clickEvent()
					}
				},
				value.value,
			);
	},
});