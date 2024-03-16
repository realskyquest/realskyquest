<script lang="ts">
	import { RippleEffect } from '$lib/components/daisyui/index'

	type Appearance =
		| 'btn-neutral'
		| 'btn-primary'
		| 'btn-secondary'
		| 'btn-accent'
		| 'btn-ghost'
		| 'btn-link'
		| 'btn-info'
		| 'btn-success'
		| 'btn-warning'
		| 'btn-error';

	type Size = 'btn-lg' | 'btn-sm' | 'btn-xs';
	type Width = 'btn-wide' | 'btn-block';
	type Shape = 'btn-square' | 'btn-circle';

	export let prefix: `${daisy_ui_component_prefix}btn`;

	export let appearance: null | `${daisy_ui_component_prefix}${Appearance}` = null;
	export let outline: null | `${daisy_ui_component_prefix}btn-outline` = null;
	export let glass: boolean = false;

	export let size: null | `${daisy_ui_component_prefix}${Size}` = null;
	export let width: null | `${daisy_ui_component_prefix}${Width}` = null;
	export let shape: null | `${daisy_ui_component_prefix}${Shape}` = null;

	export let href: string = '';
	export let active: null | `${daisy_ui_component_prefix}btn-active` = null;
	
	export let centerRipple: boolean = false;
	export let disableAnimation: boolean = false;
	export let disableRipple: boolean = false;

	let button: HTMLButtonElement;

	$: if (button && disableRipple === false) {
		button.addEventListener('click', (event: MouseEvent) =>
			RippleEffect(event as MouseEvent, centerRipple)
		);
	}
</script>

{#if href === ''}
	<button
		bind:this={button}
		on:*
		{...$$restProps}
		class="{prefix} {appearance ? appearance : ''} {outline ? outline : ''} {glass
			? 'glass'
			: ''} {size ? size : ''} {width ? width : ''} {shape ? shape : ''} {active
			? active
			: ''} {!disableRipple ? 'ripple' : ''} {disableAnimation
			? 'no-animation'
			: ''} {$$restProps.class ? $$restProps.class : ''}"
	>
		<slot />
	</button>
{:else}
	<a
		{href}
		on:*
		{...$$restProps}
		class="{prefix} {appearance ? appearance : ''} {outline ? outline : ''} {glass
			? 'glass'
			: ''} {size ? size : ''} {width ? width : ''} {shape ? shape : ''} {active
			? active
			: ''} {disableAnimation ? 'no-animation' : ''} {$$restProps.class ? $$restProps.class : ''}"
	>
		<slot />
	</a>
{/if}
