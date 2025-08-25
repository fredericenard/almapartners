<script lang="ts">
	import ScrollAnimation from '$lib/components/ScrollAnimation.svelte';
	import * as m from '$lib/paraglide/messages.js';
</script>

<!-- Technology Sector -->
<section class="py-20 bg-white">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollAnimation>
			<div class="mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{m['transactions.technology']()}</h2>
			</div>
		</ScrollAnimation>

		<div class="space-y-8">
			<!-- Effixis -->
			<ScrollAnimation delay={100}>
				<div class="border-l-4 border-gray-900 pl-6">
					<div class="flex items-center justify-between mb-2">
						<div class="text-sm text-gray-600">2024</div>
						<div class="text-lg font-semibold text-gray-900">10-20 M€</div>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Effixis</h3>
					<p class="text-gray-700 mb-4 leading-relaxed">
						{m['transactions.ma_sellside_tech']()}
					</p>
					<div class="flex flex-wrap gap-3">
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.ma_sellside']()}
						</span>
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.technology']()}
						</span>
					</div>
				</div>
			</ScrollAnimation>

			<!-- Energisme -->
			<ScrollAnimation delay={200}>
				<div class="border-l-4 border-gray-900 pl-6">
					<div class="flex items-center justify-between mb-2">
						<div class="text-sm text-gray-600">2024</div>
						<div class="text-lg font-semibold text-gray-900">10-20 M€</div>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Energisme</h3>
					<p class="text-gray-700 mb-4 leading-relaxed">
						{m['transactions.financing_tech']()}
					</p>
					<div class="flex flex-wrap gap-3">
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.financing']()}
						</span>
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.technology']()}
						</span>
					</div>
				</div>
			</ScrollAnimation>
		</div>
	</div>
</section>

<!-- Life Science Sector -->
<section class="py-20 bg-gray-50">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollAnimation>
			<div class="mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{m['transactions.life_science']()}</h2>
			</div>
		</ScrollAnimation>

		<div class="space-y-8">
			<!-- Groupe Epione -->
			<ScrollAnimation delay={100}>
				<div class="border-l-4 border-gray-900 pl-6">
					<div class="flex items-center justify-between mb-2">
						<div class="text-sm text-gray-600">2024</div>
						<div class="text-lg font-semibold text-gray-900">5-10 M€</div>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Groupe Epione</h3>
					<p class="text-gray-700 mb-4 leading-relaxed">
						{m['transactions.ma_buyside_lifescience']()}
					</p>
					<div class="flex flex-wrap gap-3">
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.ma_buyside']()}
						</span>
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.life_science']()}
						</span>
					</div>
				</div>
			</ScrollAnimation>

			<!-- Inbeeo -->
			<ScrollAnimation delay={200}>
				<div class="border-l-4 border-gray-900 pl-6">
					<div class="flex items-center justify-between mb-2">
						<div class="text-sm text-gray-600">2024</div>
						<div class="text-lg font-semibold text-gray-900">5-10 M€</div>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Inbeeo</h3>
					<p class="text-gray-700 mb-4 leading-relaxed">
						{m['transactions.ma_buyside_lifescience']()}
					</p>
					<div class="flex flex-wrap gap-3">
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.ma_buyside']()}
						</span>
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.life_science']()}
						</span>
					</div>
				</div>
			</ScrollAnimation>

			<!-- Vyoo Agency -->
			<ScrollAnimation delay={300}>
				<div class="border-l-4 border-gray-900 pl-6">
					<div class="flex items-center justify-between mb-2">
						<div class="text-sm text-gray-600">2024</div>
						<div class="text-lg font-semibold text-gray-900">{m['transactions.confidential']()}</div>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Vyoo Agency</h3>
					<p class="text-gray-700 mb-4 leading-relaxed">
						{m['transactions.ma_buyside_lifescience']()}
					</p>
					<div class="flex flex-wrap gap-3">
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.ma_buyside']()}
						</span>
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.life_science']()}
						</span>
					</div>
				</div>
			</ScrollAnimation>
		</div>
	</div>
</section>

<!-- Consumer Sector -->
<section class="py-20 bg-white">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollAnimation>
			<div class="mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{m['transactions.consumer']()}</h2>
			</div>
		</ScrollAnimation>

		<div class="space-y-8">
			<!-- Louise Misha -->
			<ScrollAnimation delay={100}>
				<div class="border-l-4 border-gray-900 pl-6">
					<div class="flex items-center justify-between mb-2">
						<div class="text-sm text-gray-600">2024</div>
						<div class="text-lg font-semibold text-gray-900">{m['transactions.confidential']()}</div>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Louise Misha</h3>
					<p class="text-gray-700 mb-4 leading-relaxed">
						{m['transactions.capital_dev_consumer']()}
					</p>
					<div class="flex flex-wrap gap-3">
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.capital_development']()}
						</span>
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.consumer']()}
						</span>
					</div>
				</div>
			</ScrollAnimation>

			<!-- Nubiance -->
			<ScrollAnimation delay={200}>
				<div class="border-l-4 border-gray-900 pl-6">
					<div class="flex items-center justify-between mb-2">
						<div class="text-sm text-gray-600">2024</div>
						<div class="text-lg font-semibold text-gray-900">{m['transactions.confidential']()}</div>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Nubiance</h3>
					<p class="text-gray-700 mb-4 leading-relaxed">
						{m['transactions.capital_reorg_consumer']()}
					</p>
					<div class="flex flex-wrap gap-3">
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.capital_reorganization']()}
						</span>
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.consumer']()}
						</span>
					</div>
				</div>
			</ScrollAnimation>
		</div>
	</div>
</section>

<!-- Media Sector -->
<section class="py-20 bg-gray-50">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollAnimation>
			<div class="mb-16">
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{m['transactions.media']()}</h2>
			</div>
		</ScrollAnimation>

		<div class="space-y-8">
			<!-- Animaj -->
			<ScrollAnimation delay={100}>
				<div class="border-l-4 border-gray-900 pl-6">
					<div class="flex items-center justify-between mb-2">
						<div class="text-sm text-gray-600">2023</div>
						<div class="text-lg font-semibold text-gray-900">100 M€</div>
					</div>
					<h3 class="text-xl font-bold text-gray-900 mb-3">Animaj</h3>
					<p class="text-gray-700 mb-4 leading-relaxed">
						{m['transactions.financial_eng_media']()}
					</p>
					<div class="flex flex-wrap gap-3">
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.financial_engineering']()}
						</span>
						<span class="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
							{m['transactions.media']()}
						</span>
					</div>
				</div>
			</ScrollAnimation>
		</div>
	</div>
</section>
