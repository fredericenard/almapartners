<script>
	import ScrollAnimation from '$lib/components/ScrollAnimation.svelte';
	import { onMount } from 'svelte';
	import * as m from '$lib/paraglide/messages.js';

	let scrollY = 0;
	let innerHeight = 0;
	let statsSection;

	onMount(() => {
		const updateScroll = () => scrollY = window.scrollY;
		window.addEventListener('scroll', updateScroll);
		return () => window.removeEventListener('scroll', updateScroll);
	});
</script>

<svelte:window bind:scrollY bind:innerHeight />

<!-- Hero Section -->
<section class="relative overflow-hidden py-32" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);">
	<div class="absolute inset-0" style="transform: translateY({scrollY * 0.5}px);">
		<!-- Enhanced classic elegant line system -->
		<div class="absolute inset-0">
			<!-- Architectural grid lines -->
			<div class="absolute inset-0">
				<!-- Primary horizontal lines -->
				<div class="absolute top-1/6 left-0 w-full h-px opacity-12" style="transform: translateX({scrollY * 0.1}px);">
					<div class="w-full h-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" style="animation: classic-shimmer 18s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute top-1/3 left-0 w-full h-px opacity-8" style="transform: translateX({scrollY * -0.15}px);">
					<div class="w-full h-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" style="animation: classic-shimmer 16s ease-in-out infinite reverse;"></div>
				</div>
				
				<div class="absolute top-1/2 left-0 w-full h-px opacity-15" style="transform: translateX({scrollY * 0.08}px);">
					<div class="w-full h-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" style="animation: classic-shimmer 20s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute top-2/3 left-0 w-full h-px opacity-10" style="transform: translateX({scrollY * -0.12}px);">
					<div class="w-full h-full bg-gradient-to-r from-transparent via-slate-500 to-transparent" style="animation: classic-shimmer 22s ease-in-out infinite reverse;"></div>
				</div>
				
				<div class="absolute bottom-1/6 left-0 w-full h-px opacity-8" style="transform: translateX({scrollY * 0.18}px);">
					<div class="w-full h-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" style="animation: classic-shimmer 19s ease-in-out infinite;"></div>
				</div>
				
				<!-- Vertical structural lines -->
				<div class="absolute left-1/6 top-0 w-px h-full opacity-6" style="transform: translateY({scrollY * 0.06}px);">
					<div class="w-full h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent" style="animation: classic-shimmer 15s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute left-1/3 top-0 w-px h-full opacity-8" style="transform: translateY({scrollY * -0.08}px);">
					<div class="w-full h-full bg-gradient-to-b from-transparent via-slate-400 to-transparent" style="animation: classic-shimmer 17s ease-in-out infinite reverse;"></div>
				</div>
				
				<div class="absolute left-1/2 top-0 w-px h-full opacity-10" style="transform: translateY({scrollY * 0.04}px);">
					<div class="w-full h-full bg-gradient-to-b from-transparent via-slate-500 to-transparent" style="animation: classic-shimmer 14s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute right-1/3 top-0 w-px h-full opacity-7" style="transform: translateY({scrollY * -0.1}px);">
					<div class="w-full h-full bg-gradient-to-b from-transparent via-slate-300 to-transparent" style="animation: classic-shimmer 16s ease-in-out infinite reverse;"></div>
				</div>
				
				<div class="absolute right-1/6 top-0 w-px h-full opacity-9" style="transform: translateY({scrollY * 0.12}px);">
					<div class="w-full h-full bg-gradient-to-b from-transparent via-slate-400 to-transparent" style="animation: classic-shimmer 18s ease-in-out infinite;"></div>
				</div>
				
				<!-- Diagonal accent lines -->
				<div class="absolute top-1/4 left-1/4 w-32 h-px opacity-6 transform rotate-45 origin-left" style="transform: rotate(45deg) translateX({scrollY * 0.2}px);">
					<div class="w-full h-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" style="animation: classic-shimmer 24s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute bottom-1/4 right-1/4 w-24 h-px opacity-8 transform -rotate-45 origin-right" style="transform: rotate(-45deg) translateX({scrollY * -0.25}px);">
					<div class="w-full h-full bg-gradient-to-r from-transparent via-slate-400 to-transparent" style="animation: classic-shimmer 21s ease-in-out infinite reverse;"></div>
				</div>
			</div>
			
			<!-- Enhanced geometric shapes -->
			<div class="absolute inset-0">
				<!-- Classic rectangles -->
				<div class="absolute top-1/5 left-1/5 w-16 h-10 opacity-8" style="transform: translate({scrollY * 0.3}px, {scrollY * 0.1}px) rotate({scrollY * 0.05}deg);">
					<div class="w-full h-full border border-slate-300" style="animation: classic-rectangle 12s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute bottom-1/4 right-1/5 w-12 h-8 opacity-10" style="transform: translate({scrollY * -0.2}px, {scrollY * -0.15}px) rotate({scrollY * -0.03}deg);">
					<div class="w-full h-full border border-slate-400" style="animation: classic-rectangle 15s ease-in-out infinite reverse;"></div>
				</div>
				
				<div class="absolute top-2/3 left-1/3 w-20 h-6 opacity-6" style="transform: translate({scrollY * 0.25}px, {scrollY * 0.08}px) rotate({scrollY * 0.04}deg);">
					<div class="w-full h-full border border-slate-500" style="animation: classic-rectangle 11s ease-in-out infinite;"></div>
				</div>
				
				<!-- Circles of varying sizes -->
				<div class="absolute top-1/6 right-1/3 w-8 h-8 opacity-12" style="transform: translate({scrollY * -0.4}px, {scrollY * 0.2}px) scale({1 + scrollY * 0.0005});">
					<div class="w-full h-full border border-slate-300 rounded-full" style="animation: classic-circle 9s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute bottom-1/3 left-1/4 w-6 h-6 opacity-15" style="transform: translate({scrollY * 0.35}px, {scrollY * -0.18}px) scale({1 + scrollY * 0.0003});">
					<div class="w-full h-full border border-slate-400 rounded-full" style="animation: classic-circle 13s ease-in-out infinite reverse;"></div>
				</div>
				
				<div class="absolute top-1/3 right-1/6 w-10 h-10 opacity-8" style="transform: translate({scrollY * -0.3}px, {scrollY * 0.12}px) scale({1 + scrollY * 0.0004});">
					<div class="w-full h-full border border-slate-500 rounded-full" style="animation: classic-circle 10s ease-in-out infinite;"></div>
				</div>
				
				<!-- Diamond shapes -->
				<div class="absolute top-1/2 left-1/6 w-6 h-6 opacity-10" style="transform: translate({scrollY * 0.4}px, {scrollY * 0.15}px) rotate({45 + scrollY * 0.1}deg);">
					<div class="w-full h-full border border-slate-300" style="animation: classic-diamond 14s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute bottom-1/5 right-1/3 w-8 h-8 opacity-12" style="transform: translate({scrollY * -0.35}px, {scrollY * -0.2}px) rotate({45 + scrollY * -0.08}deg);">
					<div class="w-full h-full border border-slate-400" style="animation: classic-diamond 16s ease-in-out infinite reverse;"></div>
				</div>
				
				<div class="absolute top-3/4 left-2/3 w-4 h-4 opacity-14" style="transform: translate({scrollY * 0.28}px, {scrollY * 0.18}px) rotate({45 + scrollY * 0.06}deg);">
					<div class="w-full h-full border border-slate-500" style="animation: classic-diamond 13s ease-in-out infinite;"></div>
				</div>
			</div>
			
			<!-- Floating refined particles -->
			<div class="absolute top-1/8 left-1/8 w-1.5 h-1.5 opacity-25" style="transform: translate({scrollY * 0.6}px, {scrollY * 0.3}px);">
				<div class="w-full h-full bg-slate-400 rounded-full" style="animation: classic-drift 8s ease-in-out infinite;"></div>
			</div>
			
			<div class="absolute top-5/8 right-1/8 w-1 h-1 opacity-30" style="transform: translate({scrollY * -0.5}px, {scrollY * 0.4}px);">
				<div class="w-full h-full bg-slate-300 rounded-full" style="animation: classic-drift 7s ease-in-out infinite reverse;"></div>
			</div>
			
			<div class="absolute bottom-1/8 left-3/8 w-2 h-2 opacity-20" style="transform: translate({scrollY * 0.45}px, {scrollY * -0.35}px);">
				<div class="w-full h-full bg-slate-500 rounded-full" style="animation: classic-drift 10s ease-in-out infinite;"></div>
			</div>
			
			<div class="absolute top-3/8 right-3/8 w-1 h-1 opacity-35" style="transform: translate({scrollY * -0.55}px, {scrollY * 0.25}px);">
				<div class="w-full h-full bg-slate-400 rounded-full" style="animation: classic-drift 6s ease-in-out infinite reverse;"></div>
			</div>
			
			<div class="absolute bottom-3/8 left-5/8 w-1.5 h-1.5 opacity-28" style="transform: translate({scrollY * 0.38}px, {scrollY * -0.42}px);">
				<div class="w-full h-full bg-slate-300 rounded-full" style="animation: classic-drift 9s ease-in-out infinite;"></div>
			</div>
			
			<div class="absolute top-7/8 right-5/8 w-1 h-1 opacity-32" style="transform: translate({scrollY * -0.48}px, {scrollY * 0.32}px);">
				<div class="w-full h-full bg-slate-500 rounded-full" style="animation: classic-drift 8s ease-in-out infinite reverse;"></div>
			</div>
			
			<!-- Central focal elements -->
			<div class="absolute top-1/2 left-1/2 w-12 h-12 opacity-8 transform -translate-x-1/2 -translate-y-1/2" style="transform: translate(-50%, -50%) rotate({scrollY * 0.2}deg) scale({1 + scrollY * 0.0008});">
				<div class="w-full h-full border border-slate-400 transform rotate-45" style="animation: classic-rotate 20s linear infinite;"></div>
			</div>
			
			<!-- Ultra-subtle background texture -->
			<div class="absolute inset-0 opacity-4" style="transform: translate({scrollY * 0.05}px, {scrollY * 0.03}px);">
				<div class="w-full h-full" style="background-image: radial-gradient(circle at 20% 30%, rgba(148, 163, 184, 0.08) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(148, 163, 184, 0.06) 0%, transparent 60%), radial-gradient(circle at 50% 50%, rgba(148, 163, 184, 0.04) 0%, transparent 80%); animation: classic-ambient 25s ease-in-out infinite;"></div>
			</div>
		</div>
		
		<!-- Very subtle grid overlay -->
		<div class="absolute inset-0 opacity-3" style="background-image: linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px); background-size: 100px 100px; transform: translate({scrollY * -0.02}px, {scrollY * -0.01}px);"></div>
	</div>
	
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="h-64"></div>
	</div>
</section>




<!-- Independence and Experience Section -->
<section class="py-20 bg-gray-50">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
			<ScrollAnimation animation="slide-in-left">
				<div class="text-center lg:text-left">
					<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						{m['homepage.independence_section_title']()}
					</h2>
					<p class="text-lg text-gray-700 leading-relaxed">
						{m['homepage.independence_section_desc']()}
					</p>
				</div>
			</ScrollAnimation>

			<ScrollAnimation animation="slide-in-right" delay={200}>
				<div class="text-center lg:text-left">
					<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						{m['homepage.projects_section_title']()}
					</h2>
					<p class="text-lg text-gray-700 leading-relaxed">
						{m['homepage.projects_section_desc']()}
					</p>
				</div>
			</ScrollAnimation>
		</div>
	</div>
</section>


<!-- Services Section -->
<section class="py-20 bg-white">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			<ScrollAnimation delay={0}>
				<div class="relative bg-white rounded-1xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-60 overflow-hidden">
					<div class="absolute top-4 right-4 text-4xl font-light text-gray-200 group-hover:text-gray-300 transition-colors duration-300 leading-none">01</div>
					<div class="relative z-10">
						<h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight pr-10">
							{m['homepage.service1_title']()}
						</h3>
						<p class="text-gray-600 leading-relaxed text-sm">
							{m['homepage.service1_desc']()}
						</p>
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation delay={100}>
				<div class="relative bg-white rounded-1xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-60 overflow-hidden">
					<div class="absolute top-4 right-4 text-4xl font-light text-gray-200 group-hover:text-gray-300 transition-colors duration-300 leading-none">02</div>
					<div class="relative z-10">
						<h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight pr-10">
							{m['homepage.service2_title']()}
						</h3>
						<p class="text-gray-600 leading-relaxed text-sm">
							{m['homepage.service2_desc']()}
						</p>
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation delay={200}>
				<div class="relative bg-white rounded-1xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-60 overflow-hidden">
					<div class="absolute top-4 right-4 text-4xl font-light text-gray-200 group-hover:text-gray-300 transition-colors duration-300 leading-none">03</div>
					<div class="relative z-10">
						<h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight pr-10">
							{m['homepage.service3_title']()}
						</h3>
						<p class="text-gray-600 leading-relaxed text-sm">
							{m['homepage.service3_desc']()}
						</p>
					</div>
				</div>
			</ScrollAnimation>

			<ScrollAnimation delay={300}>
				<div class="relative bg-white rounded-1xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-60 overflow-hidden">
					<div class="absolute top-4 right-4 text-4xl font-light text-gray-200 group-hover:text-gray-300 transition-colors duration-300 leading-none">04</div>
					<div class="relative z-10">
						<h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight pr-10">
							{m['homepage.service4_title']()}
						</h3>
						<p class="text-gray-600 leading-relaxed text-sm">
							{m['homepage.service4_desc']()}
						</p>
					</div>
				</div>
			</ScrollAnimation>
		</div>
	</div>
</section>

<!-- Statistics Section -->
<section class="py-32 relative overflow-hidden" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);" bind:this={statsSection}>
	<!-- Animated background elements moving opposite to hero section -->
	<div class="absolute inset-0" style="transform: translateY({scrollY * -0.3}px);">
		<!-- Reverse moving geometric line system -->
		<div class="absolute inset-0">
			<!-- Architectural grid lines moving opposite direction -->
			<div class="absolute inset-0">
				<!-- Eiffel Tower structural lattice lines moving opposite -->
				<div class="absolute top-1/6 left-0 w-full h-px opacity-8" style="transform: translateX({scrollY * -0.08}px);">
					<div class="w-full h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent" style="animation: eiffel-lattice-shimmer 20s ease-in-out infinite reverse;"></div>
				</div>
				
				<div class="absolute top-1/3 left-0 w-full h-px opacity-6" style="transform: translateX({scrollY * 0.12}px);">
					<div class="w-full h-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent" style="animation: eiffel-lattice-shimmer 18s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute top-1/2 left-0 w-full h-px opacity-10" style="transform: translateX({scrollY * -0.06}px);">
					<div class="w-full h-full bg-gradient-to-r from-transparent via-blue-300 to-transparent" style="animation: eiffel-lattice-shimmer 22s ease-in-out infinite reverse;"></div>
				</div>
				
				<div class="absolute top-2/3 left-0 w-full h-px opacity-7" style="transform: translateX({scrollY * 0.1}px);">
					<div class="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" style="animation: eiffel-lattice-shimmer 16s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute bottom-1/6 left-0 w-full h-px opacity-9" style="transform: translateX({scrollY * -0.14}px);">
					<div class="w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" style="animation: eiffel-lattice-shimmer 24s ease-in-out infinite reverse;"></div>
				</div>
				
				<!-- Vertical Eiffel tower spire lines moving opposite -->
				<div class="absolute left-1/6 top-0 w-px h-full opacity-5" style="transform: translateY({scrollY * -0.04}px);">
					<div class="w-full h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent" style="animation: eiffel-lattice-shimmer 19s ease-in-out infinite reverse;"></div>
				</div>
				
				<div class="absolute left-1/3 top-0 w-px h-full opacity-7" style="transform: translateY({scrollY * 0.07}px);">
					<div class="w-full h-full bg-gradient-to-b from-transparent via-blue-300 to-transparent" style="animation: eiffel-lattice-shimmer 21s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute left-1/2 top-0 w-px h-full opacity-8" style="transform: translateY({scrollY * -0.03}px);">
					<div class="w-full h-full bg-gradient-to-b from-transparent via-cyan-300 to-transparent" style="animation: eiffel-lattice-shimmer 17s ease-in-out infinite reverse;"></div>
				</div>
				
				<div class="absolute right-1/3 top-0 w-px h-full opacity-6" style="transform: translateY({scrollY * 0.09}px);">
					<div class="w-full h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent" style="animation: eiffel-lattice-shimmer 23s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute right-1/6 top-0 w-px h-full opacity-9" style="transform: translateY({scrollY * -0.11}px);">
					<div class="w-full h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent" style="animation: eiffel-lattice-shimmer 15s ease-in-out infinite reverse;"></div>
				</div>
			</div>
			
			<!-- Eiffel Tower inspired architectural elements -->
			<div class="absolute inset-0">
				<!-- Iron lattice rectangles with Eiffel tower sway -->
				<div class="absolute top-1/5 left-1/5 w-12 h-8 opacity-6" style="transform: translate({scrollY * -0.25}px, {scrollY * -0.08}px) rotate({scrollY * -0.04}deg);">
					<div class="w-full h-full border border-blue-400" style="animation: eiffel-arch-flex 14s ease-in-out infinite reverse;"></div>
				</div>
				
				<div class="absolute bottom-1/4 right-1/5 w-16 h-6 opacity-8" style="transform: translate({scrollY * 0.18}px, {scrollY * 0.12}px) rotate({scrollY * 0.02}deg);">
					<div class="w-full h-full border border-cyan-300" style="animation: eiffel-arch-flex 18s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute top-2/3 left-1/3 w-10 h-12 opacity-5" style="transform: translate({scrollY * -0.2}px, {scrollY * -0.06}px) rotate({scrollY * -0.03}deg);">
					<div class="w-full h-full border border-blue-500" style="animation: eiffel-tower-sway 16s ease-in-out infinite reverse;"></div>
				</div>
				
				<!-- Eiffel tower base circles with iron breathing -->
				<div class="absolute top-1/6 right-1/3 w-6 h-6 opacity-10" style="transform: translate({scrollY * 0.35}px, {scrollY * -0.15}px) scale({1 - scrollY * 0.0003});">
					<div class="w-full h-full border border-cyan-400" style="animation: eiffel-iron-breathe 11s ease-in-out infinite reverse;"></div>
				</div>
				
				<div class="absolute bottom-1/3 left-1/4 w-8 h-8 opacity-12" style="transform: translate({scrollY * -0.3}px, {scrollY * 0.16}px) scale({1 - scrollY * 0.0002});">
					<div class="w-full h-full border border-blue-300" style="animation: eiffel-iron-breathe 15s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute top-1/3 right-1/6 w-7 h-7 opacity-7" style="transform: translate({scrollY * 0.28}px, {scrollY * -0.1}px) scale({1 - scrollY * 0.0004});">
					<div class="w-full h-full border border-cyan-500" style="animation: eiffel-iron-breathe 13s ease-in-out infinite reverse;"></div>
				</div>
				
				<!-- Eiffel spire diamonds ascending -->
				<div class="absolute top-1/2 left-1/6 w-5 h-5 opacity-8" style="transform: translate({scrollY * -0.35}px, {scrollY * -0.12}px) rotate({45 - scrollY * 0.08}deg);">
					<div class="w-full h-full border border-blue-400" style="animation: eiffel-spire-ascend 17s ease-in-out infinite reverse;"></div>
				</div>
				
				<div class="absolute bottom-1/5 right-1/3 w-6 h-6 opacity-11" style="transform: translate({scrollY * 0.32}px, {scrollY * 0.18}px) rotate({45 + scrollY * 0.06}deg);">
					<div class="w-full h-full border border-cyan-300" style="animation: eiffel-spire-ascend 19s ease-in-out infinite;"></div>
				</div>
				
				<div class="absolute top-3/4 left-2/3 w-4 h-4 opacity-9" style="transform: translate({scrollY * -0.26}px, {scrollY * -0.14}px) rotate({45 - scrollY * 0.05}deg);">
					<div class="w-full h-full border border-blue-500" style="animation: eiffel-spire-ascend 12s ease-in-out infinite reverse;"></div>
				</div>
			</div>
			
			<!-- Parisian atmospheric particles with Eiffel drift -->
			<div class="absolute top-1/8 left-1/8 w-1 h-1 opacity-20" style="transform: translate({scrollY * -0.5}px, {scrollY * -0.25}px);">
				<div class="w-full h-full bg-blue-300 rounded-full" style="animation: eiffel-parisian-drift 10s ease-in-out infinite reverse;"></div>
			</div>
			
			<div class="absolute top-5/8 right-1/8 w-1.5 h-1.5 opacity-25" style="transform: translate({scrollY * 0.45}px, {scrollY * -0.35}px);">
				<div class="w-full h-full bg-cyan-400 rounded-full" style="animation: eiffel-parisian-drift 8s ease-in-out infinite;"></div>
			</div>
			
			<div class="absolute bottom-1/8 left-3/8 w-1 h-1 opacity-18" style="transform: translate({scrollY * -0.4}px, {scrollY * 0.3}px);">
				<div class="w-full h-full bg-blue-500 rounded-full" style="animation: eiffel-rivet-pulse 12s ease-in-out infinite reverse;"></div>
			</div>
			
			<div class="absolute top-3/8 right-3/8 w-1.5 h-1.5 opacity-28" style="transform: translate({scrollY * 0.48}px, {scrollY * -0.22}px);">
				<div class="w-full h-full bg-cyan-300 rounded-full" style="animation: eiffel-parisian-drift 7s ease-in-out infinite;"></div>
			</div>
			
			<!-- Central Eiffel tower spire with tower sway -->
			<div class="absolute top-1/2 left-1/2 w-8 h-8 opacity-6 transform -translate-x-1/2 -translate-y-1/2" style="transform: translate(-50%, -50%) rotate({scrollY * -0.15}deg) scale({1 - scrollY * 0.0006});">
				<div class="w-full h-full border border-cyan-400 transform rotate-45" style="animation: eiffel-tower-sway 25s linear infinite reverse;"></div>
			</div>
		</div>
		
		<!-- Eiffel Tower structural grid overlay with reverse movement -->
		<div class="absolute inset-0 opacity-2" style="background-image: linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.08) 1px, transparent 1px); background-size: 120px 120px; transform: translate({scrollY * 0.015}px, {scrollY * 0.01}px); animation: eiffel-structural-grid 30s ease-in-out infinite reverse;"></div>
	</div>

			<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
		<div class="text-center mb-16">
			<h2 class="text-3xl md:text-4xl font-bold text-white mb-8" style="animation: subtle-title-variation 15s ease-in-out infinite;">{m['homepage.stats_title']()}</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<div class="text-center">
				<div class="text-5xl md:text-6xl font-bold text-white mb-4" style="animation: subtle-number-variation 12s ease-in-out infinite; animation-delay: 0s;">5</div>
				<p class="text-gray-300 text-sm leading-relaxed" style="animation: subtle-text-variation 18s ease-in-out infinite; animation-delay: 2s;">
						{m['homepage.stats_mandates']()}
					</p>
				</div>

				<div class="text-center">
				<div class="text-5xl md:text-6xl font-bold text-white mb-4" style="animation: subtle-number-variation 14s ease-in-out infinite; animation-delay: 3s;">8</div>
				<p class="text-gray-300 text-sm leading-relaxed" style="animation: subtle-text-variation 20s ease-in-out infinite; animation-delay: 5s;">
						{m['homepage.stats_professionals']()}
					</p>
				</div>

				<div class="text-center">
				<div class="text-5xl md:text-6xl font-bold text-white mb-4" style="animation: subtle-number-variation 16s ease-in-out infinite; animation-delay: 6s;">3</div>
				<p class="text-gray-300 text-sm leading-relaxed" style="animation: subtle-text-variation 22s ease-in-out infinite; animation-delay: 8s;">
						{m['homepage.stats_businesses']()}<br>{m['homepage.stats_businesses_detail']()}
					</p>
				</div>

				<div class="text-center">
				<div class="text-5xl md:text-6xl font-bold text-white mb-4" style="animation: subtle-number-variation 18s ease-in-out infinite; animation-delay: 9s;">&lt;100M€</div>
				<p class="text-gray-300 text-sm leading-relaxed" style="animation: subtle-text-variation 24s ease-in-out infinite; animation-delay: 11s;">
						{m['homepage.stats_value']()}
					</p>
				</div>
		</div>
	</div>
</section>

<!-- Team Section -->
<section class="py-20 bg-white">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollAnimation>
			<div class="text-center mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{m['homepage.team_title']()}</h2>
			</div>
		</ScrollAnimation>

		<!-- Founding Associates -->
		<ScrollAnimation>
			<div class="mb-16">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					<ScrollAnimation delay={0}>
						<div class="text-center">
							<div class="mb-6">
								<img 
									src="/images/alexandre-eischen.jpg" 
									alt="Alexandre Eischen" 
									class="w-full h-80 object-contain rounded-lg"
								/>
							</div>
							<h4 class="text-xl font-bold text-gray-900 mb-2">Alexandre Eischen</h4>
							<a href="/equipe#alexandre" class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300">
								{m['homepage.team_learn_more']()} 
								<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</ScrollAnimation>

					<ScrollAnimation delay={100}>
						<div class="text-center">
							<div class="mb-6">
								<img 
									src="/images/samuel-koubi.jpg" 
									alt="Samuel Koubi" 
									class="w-full h-80 object-contain rounded-lg"
								/>
							</div>
							<h4 class="text-xl font-bold text-gray-900 mb-2">Samuel Koubi</h4>
							<a href="/equipe#samuel" class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300">
								{m['homepage.team_learn_more']()} 
								<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
								</svg>
							</a>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</ScrollAnimation>

		<!-- Strategic Committee -->
		<ScrollAnimation>
			<div>
				<h3 class="text-2xl font-bold text-gray-900 mb-8 text-center">{m['homepage.strategic_committee_title']()}</h3>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
					<ScrollAnimation delay={0}>
						<div class="text-center">
							<div class="mb-6">
								<img 
									src="/images/simon-henochsberg.png" 
									alt="Simon Henochsberg" 
									class="w-full h-64 object-contain rounded-lg"
								/>
							</div>
							<h4 class="text-xl font-bold text-gray-900 mb-3">Simon Henochsberg</h4>
							<p class="text-gray-600 text-sm leading-relaxed">
								{m['homepage.simon_bio']()}
							</p>
						</div>
					</ScrollAnimation>

					<ScrollAnimation delay={100}>
						<div class="text-center">
							<div class="mb-6">
								<img 
									src="/images/presca-ahn.jpeg" 
									alt="Presca Ahn" 
									class="w-full h-64 object-contain rounded-lg"
								/>
							</div>
							<h4 class="text-xl font-bold text-gray-900 mb-3">Presca Ahn</h4>
							<p class="text-gray-600 text-sm leading-relaxed">
								{m['homepage.presca_bio']()}
							</p>
						</div>
					</ScrollAnimation>

					<ScrollAnimation delay={200}>
						<div class="text-center">
							<div class="mb-6">
								<img 
									src="/images/stanislas-chertok.jpeg" 
									alt="Stanislas Chertok" 
									class="w-full h-64 object-contain rounded-lg"
								/>
							</div>
							<h4 class="text-xl font-bold text-gray-900 mb-3">Stanislas Chertok</h4>
							<p class="text-gray-600 text-sm leading-relaxed">
								{m['homepage.stanislas_bio']()}
							</p>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</ScrollAnimation>
	</div>
</section>

<!-- Nos mandats Section -->
<section class="py-20 bg-white">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollAnimation>
			<div class="mb-16">
				<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{m['homepage.recent_transactions_title']()}</h2>
			</div>
		</ScrollAnimation>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
			<!-- Transaction 1: Inbeeo -->
			<ScrollAnimation delay={0}>
				<div class="space-y-4">
					<h3 class="text-2xl font-bold text-gray-900">Inbeeo</h3>
					<div class="text-sm text-gray-600 font-medium">2024 | M&A Buy-side</div>
					<p class="text-gray-700 leading-relaxed">
						{m['homepage.inbeeo_desc']()}
					</p>
				</div>
			</ScrollAnimation>

			<!-- Transaction 2: Energisme SA -->
			<ScrollAnimation delay={100}>
				<div class="space-y-4">
					<h3 class="text-2xl font-bold text-gray-900">Energisme SA</h3>
					<div class="text-sm text-gray-600 font-medium">2024 | Financing</div>
					<p class="text-gray-700 leading-relaxed">
						{m['homepage.energisme_desc']()}
					</p>
				</div>
			</ScrollAnimation>

			<!-- Transaction 3: Groupe Epione -->
			<ScrollAnimation delay={200}>
				<div class="space-y-4">
					<h3 class="text-2xl font-bold text-gray-900">Groupe Epione</h3>
					<div class="text-sm text-gray-600 font-medium">2024 | M&A Buy-side</div>
					<p class="text-gray-700 leading-relaxed">
						{m['homepage.epione_desc']()}
					</p>
				</div>
			</ScrollAnimation>

			<!-- Transaction 4: Effixis -->
			<ScrollAnimation delay={300}>
				<div class="space-y-4">
					<h3 class="text-2xl font-bold text-gray-900">Effixis</h3>
					<div class="text-sm text-gray-600 font-medium">2024 | M&A Sell-side</div>
					<p class="text-gray-700 leading-relaxed">
						{m['homepage.effixis_desc']()}
					</p>
				</div>
			</ScrollAnimation>

			<!-- Transaction 5: Vyoo Agency -->
			<ScrollAnimation delay={400}>
				<div class="space-y-4">
					<h3 class="text-2xl font-bold text-gray-900">Vyoo Agency</h3>
					<div class="text-sm text-gray-600 font-medium">2024 | M&A Buy-side</div>
					<p class="text-gray-700 leading-relaxed">
						{m['homepage.vyoo_desc']()}
					</p>
				</div>
			</ScrollAnimation>

			<!-- Transaction 6: Louise Misha -->
			<ScrollAnimation delay={500}>
				<div class="space-y-4">
					<h3 class="text-2xl font-bold text-gray-900">Louise Misha</h3>
					<div class="text-sm text-gray-600 font-medium">2024 | Capital Development</div>
					<p class="text-gray-700 leading-relaxed">
						{m['homepage.louise_misha_desc']()}
					</p>
				</div>
			</ScrollAnimation>
		</div>

		<ScrollAnimation delay={700}>
			<div class="mt-16">
				<a href="/transactions" class="inline-flex items-center px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded hover:bg-gray-900 hover:text-white transition-all duration-300">
					{m['homepage.all_transactions']()}
				</a>
			</div>
		</ScrollAnimation>
	</div>
</section>
