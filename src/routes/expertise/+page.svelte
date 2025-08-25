<script>
	import ScrollAnimation from '$lib/components/ScrollAnimation.svelte';
	import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
	<title>Expertise - Alma Partners</title>
	<meta name="description" content="Réactivité et discrétion - Entourés d'une équipe à taille humaine, les associés d'Alma Partners sont garants d'une réactivité à la hauteur des enjeux de leurs clients" />
</svelte:head>

<!-- Hero Section -->
<section class="bg-dark text-white py-24 relative">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-5xl md:text-6xl font-bold text-white mb-8 animate-fade-in-up tracking-tight">
				{m['expertise.title']()}
			</h1>
			<p class="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
				{m['expertise.subtitle']()}
			</p>
		</div>
	</div>
</section>

<!-- Notre accompagnement Section -->
<section class="py-20 bg-white">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollAnimation>
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{m['expertise.approach_title']()}</h2>
				<p class="text-xl text-gray-600 max-w-2xl mx-auto">{m['expertise.approach_subtitle']()}</p>
			</div>
		</ScrollAnimation>

		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
			<!-- Buy-side Advisory -->
			<ScrollAnimation delay={100}>
				<div class="relative bg-white rounded-1xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full overflow-hidden flex flex-col">
					<div class="flex-1">
						<h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight">
							{m['homepage.buyside_title']()}
						</h3>
						<p class="text-gray-600 leading-relaxed text-sm">
							{m['homepage.buyside_desc']()}
						</p>
					</div>
					<div class="mt-6 flex justify-center">
						<!-- Buy-side logo - Growth/Target icon -->
						<svg class="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
						</svg>
					</div>
				</div>
			</ScrollAnimation>

			<!-- Sell-side Advisory -->
			<ScrollAnimation delay={200}>
				<div class="relative bg-white rounded-1xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full overflow-hidden flex flex-col">
					<div class="flex-1">
						<h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight">
							{m['homepage.sellside_title']()}
						</h3>
						<p class="text-gray-600 leading-relaxed text-sm">
							{m['homepage.sellside_desc']()}
						</p>
					</div>
					<div class="mt-6 flex justify-center">
						<!-- Sell-side logo - Handshake/Exchange icon -->
						<svg class="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
						</svg>
					</div>
				</div>
			</ScrollAnimation>

			<!-- LBO -->
			<ScrollAnimation delay={300}>
				<div class="relative bg-white rounded-1xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full overflow-hidden flex flex-col">
					<div class="flex-1">
						<h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight">
							{m['homepage.lbo_title']()}
						</h3>
						<p class="text-gray-600 leading-relaxed text-sm">
							{m['homepage.lbo_desc']()}
						</p>
					</div>
					<div class="mt-6 flex justify-center">
						<!-- LBO logo - Leverage/Scale icon -->
						<svg class="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-1m-3 1l-3-1"/>
						</svg>
					</div>
				</div>
			</ScrollAnimation>

			<!-- Stratégie -->
			<ScrollAnimation delay={400}>
				<div class="relative bg-white rounded-1xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full overflow-hidden flex flex-col">
					<div class="flex-1">
						<h3 class="text-xl font-bold text-gray-900 mb-4 leading-tight">
							{m['homepage.strategy_title']()}
						</h3>
						<p class="text-gray-600 leading-relaxed text-sm">
							{m['homepage.strategy_desc']()}
						</p>
					</div>
					<div class="mt-6 flex justify-center">
						<!-- Strategy logo - Chess piece/Strategic thinking icon -->
						<svg class="w-8 h-8 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
						</svg>
					</div>
				</div>
			</ScrollAnimation>
		</div>
	</div>
</section>

<!-- Process Overview -->
<section class="py-20 bg-gray-50">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-16 items-center">
			<!-- Left side - Text content -->
			<div class="space-y-8">
				<ScrollAnimation>
					<div class="flex items-start space-x-4">
						<div class="w-1 h-16 bg-gray-900 rounded-full flex-shrink-0 mt-2"></div>
						<p class="text-lg text-gray-700 leading-relaxed">
							{m['expertise.process_intro_1']()}
						</p>
					</div>
				</ScrollAnimation>

				<ScrollAnimation delay={100}>
					<div class="flex items-start space-x-4">
						<div class="w-1 h-16 bg-gray-900 rounded-full flex-shrink-0 mt-2"></div>
						<p class="text-lg text-gray-700 leading-relaxed">
							{m['expertise.process_intro_2']()}
						</p>
					</div>
				</ScrollAnimation>

				<ScrollAnimation delay={200}>
					<div class="flex items-start space-x-4">
						<div class="w-1 h-16 bg-gray-900 rounded-full flex-shrink-0 mt-2"></div>
						<p class="text-lg text-gray-700 leading-relaxed">
							{m['expertise.process_intro_3']()}
						</p>
					</div>
				</ScrollAnimation>

				<ScrollAnimation delay={300}>
					<div class="flex items-start space-x-4">
						<div class="w-1 h-16 bg-gray-900 rounded-full flex-shrink-0 mt-2"></div>
						<p class="text-lg text-gray-700 leading-relaxed">
							{m['expertise.process_intro_4']()}
						</p>
					</div>
				</ScrollAnimation>
			</div>

			<!-- Right side - 4 Steps Process Diagram -->
			<div>
				<ScrollAnimation>
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-12">{m['expertise.process_title']()}</h2>
				</ScrollAnimation>

				<div class="space-y-8">
					<!-- Step 1 -->
					<ScrollAnimation delay={100}>
						<div class="relative">
							<div class="flex items-center justify-between mb-2">
								<h3 class="text-lg font-bold text-gray-900 tracking-wide">{m['expertise.step_analysis']().toUpperCase()}</h3>
								<span class="text-2xl font-bold text-gray-900">#1</span>
							</div>
							<div class="relative h-2">
								<div class="w-full h-full bg-gray-200 rounded-full"></div>
								<div class="absolute top-0 left-0 h-full bg-gray-900 rounded-full" style="width: 25%;"></div>
								<div class="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-900 rounded-full" style="left: 25%; margin-left: -8px;"></div>
							</div>
						</div>
					</ScrollAnimation>

					<!-- Step 2 -->
					<ScrollAnimation delay={200}>
						<div class="relative">
							<div class="flex items-center justify-between mb-2">
								<h3 class="text-lg font-bold text-gray-900 tracking-wide">{m['expertise.step_strategy']().toUpperCase()}</h3>
								<span class="text-2xl font-bold text-gray-900">#2</span>
							</div>
							<div class="relative h-2">
								<div class="w-full h-full bg-gray-200 rounded-full"></div>
								<div class="absolute top-0 left-0 h-full bg-gray-900 rounded-full" style="width: 50%;"></div>
								<div class="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-900 rounded-full" style="left: 50%; margin-left: -8px;"></div>
							</div>
						</div>
					</ScrollAnimation>

					<!-- Step 3 -->
					<ScrollAnimation delay={300}>
						<div class="relative">
							<div class="flex items-center justify-between mb-2">
								<h3 class="text-lg font-bold text-gray-900 tracking-wide">{m['expertise.step_execution']().toUpperCase()}</h3>
								<span class="text-2xl font-bold text-gray-900">#3</span>
							</div>
							<div class="relative h-2">
								<div class="w-full h-full bg-gray-200 rounded-full"></div>
								<div class="absolute top-0 left-0 h-full bg-gray-900 rounded-full" style="width: 75%;"></div>
								<div class="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-900 rounded-full" style="left: 75%; margin-left: -8px;"></div>
							</div>
						</div>
					</ScrollAnimation>

					<!-- Step 4 -->
					<ScrollAnimation delay={400}>
						<div class="relative">
							<div class="flex items-center justify-between mb-2">
								<h3 class="text-lg font-bold text-gray-900 tracking-wide">{m['expertise.step_closing']().toUpperCase()}</h3>
								<span class="text-2xl font-bold text-gray-900">#4</span>
							</div>
							<div class="relative h-2">
								<div class="w-full h-full bg-gray-200 rounded-full"></div>
								<div class="absolute top-0 left-0 h-full bg-gray-900 rounded-full" style="width: 100%;"></div>
								<div class="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-900 rounded-full" style="left: 100%; margin-left: -8px;"></div>
							</div>
						</div>
					</ScrollAnimation>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Detailed Steps Section -->
<section class="py-20 bg-white">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<!-- Step 1 - Preparation -->
		<ScrollAnimation>
			<div class="mb-20">
				<div class="flex items-start mb-8">
					<div class="w-24 h-24 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-8 flex-shrink-0">
						<span class="text-4xl font-bold">#1</span>
					</div>
					<div>
						<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{m['expertise.detailed_step1_title']()}</h2>
						<div class="max-w-4xl space-y-4 text-gray-700 leading-relaxed">
							<p>
								{m['expertise.detailed_step1_desc1']()}
							</p>
							<p>
								{m['expertise.detailed_step1_desc2']()}
							</p>
							<p>
								{m['expertise.detailed_step1_desc3']()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</ScrollAnimation>

		<!-- Step 2 - Approche discrète -->
		<ScrollAnimation>
			<div class="mb-20">
				<div class="flex items-start mb-8">
					<div class="w-24 h-24 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-8 flex-shrink-0">
						<span class="text-4xl font-bold">#2</span>
					</div>
					<div>
						<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{m['expertise.detailed_step2_title']()}</h2>
						<div class="max-w-4xl space-y-4 text-gray-700 leading-relaxed">
							<p>
								{m['expertise.detailed_step2_desc1']()}
							</p>
							<p>
								{m['expertise.detailed_step2_desc2']()}
							</p>
							<p>
								{m['expertise.detailed_step2_desc3']()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</ScrollAnimation>

		<!-- Step 3 - Structuration & Exécution -->
		<ScrollAnimation>
			<div class="mb-20">
				<div class="flex items-start mb-8">
					<div class="w-24 h-24 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-8 flex-shrink-0">
						<span class="text-4xl font-bold">#3</span>
					</div>
					<div>
						<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{m['expertise.detailed_step3_title']()}</h2>
						<div class="max-w-4xl space-y-4 text-gray-700 leading-relaxed">
							<p>
								{m['expertise.detailed_step3_desc1']()}
							</p>
							<p>
								{m['expertise.detailed_step3_desc2']()}
							</p>
							<p>
								{m['expertise.detailed_step3_desc3']()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</ScrollAnimation>

		<!-- Step 4 - Négociation & Closing -->
		<ScrollAnimation>
			<div class="mb-20">
				<div class="flex items-start mb-8">
					<div class="w-24 h-24 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-8 flex-shrink-0">
						<span class="text-4xl font-bold">#4</span>
					</div>
					<div>
						<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{m['expertise.detailed_step4_title']()}</h2>
						<div class="max-w-4xl space-y-4 text-gray-700 leading-relaxed">
							<p>
								{m['expertise.detailed_step4_desc1']()}
							</p>
							<p>
								{m['expertise.detailed_step4_desc2']()}
							</p>
						</div>
					</div>
				</div>
			</div>
		</ScrollAnimation>
	</div>
</section>
