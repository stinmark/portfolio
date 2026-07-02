<!-- src/lib/components/TreeLine.svelte -->
<script lang="ts">
	// Svelte 5 Props
	let {
		id = '',
		title = '',
		lineHeight = 'h-6', // Tailored height for the vertical drop
		lineWidth = 'w-3', // Tailored width for the horizontal hook
		children
	} = $props();
</script>

<div class="relative flex flex-col pl-6">
	<!-- Top hook (┌) -->
	<div class="absolute top-1 left-0 border-t border-l border-zinc-500 {lineWidth} h-2"></div>

	<!-- Bottom hook & spine (└) -->
	<div
		class="absolute top-1 left-0 border-b border-l border-zinc-500 {lineWidth} {lineHeight}"
	></div>

	<!-- Header Content Row -->
	<div class="flex h-6 items-center gap-1.5">
		{#if id}
			<span class="font-mono text-sm font-semibold tracking-tight text-zinc-500">{id}\</span>
		{/if}
		{#if title}
			<h3 class="text-lg font-bold tracking-wide text-zinc-100">{title}</h3>
		{/if}
	</div>

	<!-- Sub-Content Dropdown -->
	{#if children}
		<div class="mt-2 pl-4 text-sm text-zinc-400 md:text-base">
			{@render children()}
		</div>
	{/if}
</div>
