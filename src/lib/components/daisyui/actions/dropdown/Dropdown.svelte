<script lang="ts">
	export let hoverOpen: boolean = false;
	export let forceOpen: boolean = false;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	on:*
	{...$$restProps}
	class="{$$restProps.class ? $$restProps.class : ''} dropdown {hoverOpen ? 'dropdown-hover' : ''} {forceOpen ? 'dropdown-open' : ''}"
>
	<slot />
</div>
