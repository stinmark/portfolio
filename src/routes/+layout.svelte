<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';
	import '@fontsource/chakra-petch';

	let { children } = $props();
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>About Austine Mark</title>
	<meta
		name="description"
		content="Austine Mark is a product-focused software engineer building scalable, AI-powered digital systems from interface to infrastructure."
	/>
	<meta name="google-site-verification" content="SuKdyYLeKsPsvdvAqSG-guG4fvanUlvywxRmNxIF-tg" />

	<!-- Just use {favicon} directly; Vite handles the /portfolio base prefix for you -->
	<link rel="icon" type="image/x-icon" href={favicon} />
</svelte:head>

{@render children()}
