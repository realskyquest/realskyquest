<script lang="ts">

	type Appearance =
		| 'default'
		| 'neutral'
		| 'primary'
		| 'secondary'
		| 'accent'
		| 'ghost'
		| 'link'
		| 'info'
		| 'success'
		| 'warning'
		| 'error';

	export let active: boolean = false;
	export let appearance: Appearance = 'default';
	export let outline: boolean = false;
	export let glass: boolean = false;

	export let size: 'lg' | 'md' | 'sm' | 'xs' = 'md';
	export let width: '' | 'wide' | 'block' = '';
	export let shape: '' | 'square' | 'circle' = '';

	export let disableAnimation: boolean = false;
	export let disableRipple: boolean = false;
	export let centerRipple: boolean = false;

	let button: HTMLDivElement;

	function createRipple(event: any) {
		const button = event.currentTarget;
		const circle = document.createElement('span');
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		circle.style.width = circle.style.height = `${diameter}px`;
		
		if (centerRipple === false) {
			circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
			circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
		}

		circle.classList.add('ripple');

		const ripple = button.getElementsByClassName('ripple')[0];

		if (ripple) {
			ripple.remove();
		}

		button.appendChild(circle);
	}

	$: if (button && disableRipple === false) {
		button.addEventListener('click', createRipple);
	}
</script>

<div
	bind:this={button}
	on:*
	{...$$restProps}
	tabindex="0"
	role="button"
	class="{$$restProps.class ? $$restProps.class : ''} 
	btn
	{active ? 'btn-active' : ''} 
	{appearance !== 'default' ? 'btn-' + appearance : ''}
	{outline ? 'btn-outline' : ''}
	{glass ? 'glass' : ''}
	{size !== 'md' ? 'btn-' + size : ''}
	{width !== '' ? 'btn-' + width : ''}
	{shape !== '' ? 'btn-' + shape : ''}
	{disableAnimation ? 'no-animation' : ''}
	ripple
	"

	style="{$$restProps.style ? $$restProps.style : ''} {disableRipple === false ? 'position: relative; overflow: hidden;' : ''}"
	>
	<slot />
</div>
