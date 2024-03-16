<script lang="ts">
	type Animation = 'spinner' | 'dots' | 'ring' | 'ball' | 'infinity';
	type Size = 'lg' | 'md' | 'sm' | 'xs';

	export let prefix: `${daisy_ui_component_prefix}loading`;
	export let animation: null | `${daisy_ui_component_prefix}loading-${Animation}` = null;
	export let size: null | `${daisy_ui_component_prefix}loading-${Size}` = null;
	export let color:
		| ''
		| 'primary'
		| 'secondary'
		| 'accent'
		| 'neutral'
		| 'info'
		| 'success'
		| 'warning'
		| 'error' = '';
</script>

<span
	on:*
	{...$$restProps}
	class="{prefix} {animation ? animation : ''} {size ? size : ''}
{color !== '' ? `text-${color}` : ''}
{$$restProps.class ? $$restProps.class : ''}"
></span>
