<script lang="ts">
	import { projects as initialProjects } from '$lib/projects';
	import { SquareArrowOutUpRight, ChevronRight, ChevronLeft } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	// Map the projects to include a reactive 'showImage' state for each project
	let projects = initialProjects.map((project) => ({ ...project, showImage: false }));
</script>

<div class="relative flex w-full flex-col gap-5 pt-14">
	<h3 class="font-bold text-accent">/ ls projects</h3>

	{#each projects as project}
		<div
			class="relative flex w-full items-center gap-4 overflow-hidden border-l-0 border-accent bg-overlay p-3"
		>
			{#if !project.showImage}
				<div
					in:fly={{ x: -20, duration: 300 }}
					class="flex w-full flex-col items-start justify-between gap-4"
				>
					<div class="flex w-full items-start justify-between">
						<h4 class="text-lg font-bold uppercase">/{project.title}</h4>
						<div class="flex items-center gap-2 self-end text-sm max-sm:text-xs">
							{#if project.github}
								<a href={project.github} class="text-accent"> github </a>
							{/if}
							<span>|</span>
							{#if project.link}
								<a href={project.link} class="text-accent">live</a>
							{/if}
						</div>
					</div>
					<p class="w-9/10 text-sm leading-5 max-sm:text-xs">
						{project.description}.
					</p>

					<div class="flex w-full items-center gap-10">
						<button
							on:click={() => (project.showImage = true)}
							class="flex flex-1 cursor-pointer items-center justify-center p-2 grayscale transition-colors duration-200 hover:grayscale-75"
							aria-label="Reveal image"
						>
							<img src={`./projects/${project.image}.jpg`} alt="shot" class="h-8 w-full" />
						</button>
						<p class="text-xs">{project.date}</p>
					</div>
				</div>
			{:else}
				<div in:fly={{ x: 20, duration: 300 }} class="flex w-full items-center gap-4">
					<button
						on:click={() => (project.showImage = false)}
						class="text-muted-foreground flex h-full items-center justify-center p-2 transition-colors duration-200 hover:text-accent"
						aria-label="Reveal content"
					>
						<ChevronLeft class="h-6 w-6" />
					</button>

					<div class="w-full flex-1 overflow-hidden rounded-md border border-neutral-800">
						<img
							src={`./projects/${project.image}.jpg`}
							alt={`${project.title} screenshot`}
							class="h-auto w-full object-cover"
						/>
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
