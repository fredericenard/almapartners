<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { setLocale, getLocale } from '$lib/paraglide/runtime.js';
	import * as m from '$lib/paraglide/messages.js';

	let { children } = $props();
	let mobileMenuOpen = $state(false);
	
	// Get current locale
	let currentLocale = $state(getLocale());
	
	// Function to switch language
	function switchLanguage(locale: 'en' | 'fr') {
		setLocale(locale);
		currentLocale = locale;
		// Reload the page to apply translations
		window.location.reload();
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Alma Partners</title>
	<meta name="description" content="Banque d'affaires indépendante basée à Paris" />
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Header -->
	<header class="bg-white border-b border-gray-200 sticky top-0 z-50">
		<nav class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 justify-between items-center">
				<!-- Logo -->
				<div class="flex-shrink-0">
					<a href="/" class="text-xl hover:opacity-80 transition-opacity duration-300">
						<span class="font-bold text-blue-1000">ALMA</span> <span class="font-light text-blue-1000">PARTNERS</span>
					</a>
				</div>

				<!-- Desktop Navigation -->
				<div class="hidden md:block">
					<div class="ml-10 flex items-baseline space-x-6">
						<a href="/" class="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-300">
							{m['navigation.about']().toUpperCase()}
						</a>
						<a href="/expertise" class="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-300">
							{m['navigation.expertise']().toUpperCase()}
						</a>
						<a href="/transactions" class="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-300">
							{m['navigation.transactions']().toUpperCase()}
						</a>
						<a href="/careers" class="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-300">
							{m['navigation.careers']().toUpperCase()}
						</a>
						<a href="/contact" class="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-300">
							{m['navigation.contact']().toUpperCase()}
						</a>
					</div>
				</div>

				<!-- Language Toggle -->
				<div class="hidden md:flex items-center space-x-4">
					<button 
						onclick={() => switchLanguage('en')}
						class="{currentLocale === 'en' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'} text-sm font-medium"
					>
						English
					</button>
					<button 
						onclick={() => switchLanguage('fr')}
						class="{currentLocale === 'fr' ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'} text-sm font-medium"
					>
						Français
					</button>
				</div>

				<!-- Mobile menu button -->
				<div class="md:hidden">
					<button
						type="button"
						class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
						onclick={() => mobileMenuOpen = !mobileMenuOpen}
					>
						<span class="sr-only">Open main menu</span>
						<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Navigation -->
			{#if mobileMenuOpen}
				<div class="md:hidden">
					<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
						<a href="/" class="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">{m['navigation.about']().toUpperCase()}</a>
						<a href="/expertise" class="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">{m['navigation.expertise']().toUpperCase()}</a>
						<a href="/transactions" class="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">{m['navigation.transactions']().toUpperCase()}</a>
						<a href="/careers" class="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">{m['navigation.careers']().toUpperCase()}</a>
						<a href="/contact" class="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">{m['navigation.contact']().toUpperCase()}</a>
						<div class="border-t pt-2 mt-2">
							<button 
								onclick={() => switchLanguage('en')}
								class="{currentLocale === 'en' ? 'text-blue-600' : 'text-gray-600'} block px-3 py-2 text-base font-medium"
							>
								English
							</button>
							<button 
								onclick={() => switchLanguage('fr')}
								class="{currentLocale === 'fr' ? 'text-blue-600' : 'text-gray-600'} block px-3 py-2 text-base font-medium"
							>
								Français
							</button>
						</div>
					</div>
				</div>
			{/if}
		</nav>
	</header>

	<!-- Main Content -->
	<main>
		{@render children?.()}
	</main>

	<!-- Footer -->
	<footer class="bg-gray-900 text-white">
		<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div class="md:col-span-2">
					<h3 class="text-lg font-semibold mb-4">ALMA PARTNERS</h3>
					<p class="text-gray-300 text-sm">
						29 rue de Courcelles 75008 Paris, France
					</p>
				</div>
				<div>
					<h4 class="text-sm font-semibold mb-4">{m['footer.navigation_title']()}</h4>
					<ul class="space-y-2 text-sm text-gray-300">
						<li><a href="/expertise" class="hover:text-white">{m['navigation.expertise']().toUpperCase()}</a></li>
						<li><a href="/transactions" class="hover:text-white">{m['navigation.transactions']().toUpperCase()}</a></li>
						<li><a href="/careers" class="hover:text-white">{m['navigation.careers']().toUpperCase()}</a></li>
						<li><a href="/contact" class="hover:text-white">{m['navigation.contact']().toUpperCase()}</a></li>
						<li><a href="/mentions-legales" class="hover:text-white">{m['footer.legal_mentions']()}</a></li>
					</ul>
				</div>
				<div>
					<h4 class="text-sm font-semibold mb-4">{m['footer.languages_title']()}</h4>
					<ul class="space-y-2 text-sm text-gray-300">
						<li>
							<button 
								onclick={() => switchLanguage('en')}
								class="{currentLocale === 'en' ? 'text-white' : 'hover:text-white'}"
							>
								English
							</button>
						</li>
						<li>
							<button 
								onclick={() => switchLanguage('fr')}
								class="{currentLocale === 'fr' ? 'text-white' : 'hover:text-white'}"
							>
								Français
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</div>
