<script lang="ts">
	export let z: number = 1;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<ul on:* {...$$restProps} tabindex="0" class="{$$restProps.class ? $$restProps.class : ''} dropdown-content" style="z-index: {z};">
	<slot />
</ul>
