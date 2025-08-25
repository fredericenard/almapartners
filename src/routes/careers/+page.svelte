<script>
	import ScrollAnimation from '$lib/components/ScrollAnimation.svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { getLocale } from '$lib/paraglide/runtime.js';
	
	let currentLocale = $state(getLocale());
	
	// Helper function to get text based on current locale
	function t(frenchText, englishKey) {
		if (currentLocale === 'en') {
			try {
				// Check if the key exists in the messages
				if (m[englishKey] && typeof m[englishKey] === 'function') {
					return m[englishKey]();
				}
				// If key doesn't exist, return French text as fallback
				return frenchText;
			} catch (e) {
				return frenchText;
			}
		}
		return frenchText;
	}
</script>

<!-- Hero Section -->
<section class="bg-dark text-white py-24 relative">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-5xl md:text-7xl font-bold text-white mb-12 animate-fade-in-up tracking-tight">
				{t("Rejoindre Alma Partners", "careers.title")}
			</h1>
			<p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
				{t("Banque d'affaires indépendante basée à Paris, nous sommes toujours à la recherche de nouveaux talents pour rejoindre l'équipe.", "careers.subtitle")}
			</p>
		</div>
	</div>
</section>

<!-- Opportunities Section -->
<section class="py-20 bg-gray-50">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollAnimation>
			<div class="text-center mb-16">
				<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{t("Opportunités", "careers.opportunities_title")}</h2>
				<p class="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
					{t("Rejoignez une équipe d'experts passionnés dans un environnement stimulant où l'excellence et l'innovation sont au cœur de nos valeurs.", "careers.opportunities_subtitle")}
				</p>
			</div>
		</ScrollAnimation>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<ScrollAnimation delay={100}>
				<div class="bg-white border border-gray-200 p-8">
					<h3 class="text-xl font-semibold text-gray-900 mb-4">
						{t("Professionnels expérimentés", "careers.experienced_title")}
					</h3>
					<p class="text-gray-700 mb-6 leading-relaxed">
						{t("Rejoignez notre équipe d'associés et directeurs pour accompagner nos clients dans leurs projets stratégiques les plus complexes.", "careers.experienced_desc")}
					</p>
					<ul class="text-gray-700 space-y-2">
						<li>• {t("Expertise en M&A et financement", "careers.experienced_expertise")}</li>
						<li>• {t("Gestion de mandats prestigieux", "careers.experienced_mandates")}</li>
						<li>• {t("Développement commercial", "careers.experienced_business")}</li>
						<li>• {t("Encadrement d'équipes juniors", "careers.experienced_management")}</li>
					</ul>
				</div>
			</ScrollAnimation>

			<ScrollAnimation delay={200}>
				<div class="bg-white border border-gray-200 p-8">
					<h3 class="text-xl font-semibold text-gray-900 mb-4">
						{t("Jeunes diplômés", "careers.graduates_title")}
					</h3>
					<p class="text-gray-700 mb-6 leading-relaxed">
						{t("Développez vos compétences dans un environnement d'apprentissage exceptionnel aux côtés d'experts reconnus du secteur.", "careers.graduates_desc")}
					</p>
					<ul class="text-gray-700 space-y-2">
						<li>• {t("Formation complète aux métiers de la banque d'affaires", "careers.graduates_training")}</li>
						<li>• {t("Accompagnement personnalisé", "careers.graduates_support")}</li>
						<li>• {t("Participation à des transactions d'envergure", "careers.graduates_participation")}</li>
						<li>• {t("Évolution de carrière rapide", "careers.graduates_evolution")}</li>
					</ul>
				</div>
			</ScrollAnimation>
		</div>
	</div>
</section>

<!-- Contact CTA -->
<section class="py-20 bg-dark text-white">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
		<ScrollAnimation>
			<h2 class="text-4xl md:text-5xl font-bold mb-8">{t("Prêt à nous rejoindre ?", "careers.cta_title")}</h2>
			<p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
				{t("Envoyez-nous votre candidature et rejoignez une équipe d'experts passionnés dans un environnement d'excellence.", "careers.cta_subtitle")}
			</p>
		</ScrollAnimation>
		<ScrollAnimation delay={200}>
			<a href="/contact" class="inline-flex items-center px-8 py-3 border-2 border-white text-white font-medium rounded hover:bg-white hover:text-gray-900 transition-all duration-300">
				{t("Postuler maintenant", "careers.apply_now")}
				<svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</a>
		</ScrollAnimation>
	</div>
</section>
