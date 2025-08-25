<script lang="ts">
	import { onMount } from 'svelte';

	let { 
		children,
		animation = 'fade-in',
		delay = 0,
		threshold = 0.1
	}: {
		children: any;
		animation?: 'fade-in' | 'slide-in-left' | 'slide-in-right';
		delay?: number;
		threshold?: number;
	} = $props();

	let element: HTMLElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => {
							entry.target.classList.add('visible');
						}, delay);
						observer.unobserve(entry.target);
					}
				});
			},
			{ 
				threshold,
				rootMargin: '50px 0px -50px 0px'
			}
		);

		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	});
</script>

<div bind:this={element} class={animation}>
	{@render children()}
</div>
