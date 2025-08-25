<script>
	import ScrollAnimation from '$lib/components/ScrollAnimation.svelte';
	import * as m from '$lib/paraglide/messages.js';
</script>

<!-- Contact Section -->
<section class="py-20 bg-white">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
			<!-- Contact Form -->
			<ScrollAnimation>
				<div>
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{m['contact.form_title']()}</h2>
					<form class="space-y-6">
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div>
								<label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
									{m['contact.form_first_name']()}
								</label>
								<input 
									type="text" 
									name="firstName" 
									id="firstName" 
									required
									class="block w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
								>
							</div>
							<div>
								<label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
									{m['contact.form_last_name']()}
								</label>
								<input 
									type="text" 
									name="lastName" 
									id="lastName" 
									required
									class="block w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
								>
							</div>
						</div>
						
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
								{m['contact.form_email_label']()}
							</label>
							<input 
								type="email" 
								name="email" 
								id="email" 
								required
								class="block w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
							>
						</div>
						
						<div>
							<label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
								{m['contact.form_subject_label']()}
							</label>
							<select 
								name="subject" 
								id="subject" 
								required
								class="block w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
							>
								<option value="">{m['contact.form_subject_placeholder']()}</option>
								<option value="fusion-acquisition">{m['contact.subject_ma']()}</option>
								<option value="restructuration">{m['contact.subject_restructuring']()}</option>
								<option value="financement">{m['contact.subject_financing']()}</option>
								<option value="autre">{m['contact.subject_other']()}</option>
							</select>
						</div>
						
						<div>
							<label for="message" class="block text-sm font-medium text-gray-700 mb-2">
								{m['contact.form_message_label']()}
							</label>
							<textarea 
								name="message" 
								id="message" 
								rows="6" 
								required
								placeholder="{m['contact.form_message_placeholder']()}"
								class="block w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-gray-900"
							></textarea>
						</div>
						
						<div>
							<button 
								type="submit" 
								class="w-full bg-gray-900 text-white py-3 px-4 rounded font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors"
							>
								{m['contact.form_send']()}
							</button>
						</div>
					</form>
				</div>
			</ScrollAnimation>
			
			<!-- Contact Information -->
			<ScrollAnimation delay={200}>
				<div>
					<h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">{m['contact.info_title']()}</h2>
					
					<div class="space-y-8">
						<!-- Address -->
						<div class="border-l-4 border-gray-900 pl-6">
							<h3 class="text-xl font-bold text-gray-900 mb-2">{m['contact.address_label']()}</h3>
							<p class="text-gray-700 leading-relaxed">
								ALMA PARTNERS<br>
								29 rue de Courcelles<br>
								75008 Paris, France
							</p>
						</div>
						
						<!-- Email -->
						<div class="border-l-4 border-gray-900 pl-6">
							<h3 class="text-xl font-bold text-gray-900 mb-2">{m['contact.email_label']()}</h3>
							<p class="text-gray-700">
								<a href="mailto:contact@almapartners.eu" class="text-gray-900 hover:underline">
									contact@almapartners.eu
								</a>
							</p>
						</div>
						
						<!-- Phone -->
						<div class="border-l-4 border-gray-900 pl-6">
							<h3 class="text-xl font-bold text-gray-900 mb-2">{m['contact.phone_label']()}</h3>
							<p class="text-gray-700">
								<a href="tel:+33123456789" class="text-gray-900 hover:underline">
									+33 1 42 89 42 89
								</a>
							</p>
						</div>
					</div>

				</div>
			</ScrollAnimation>
		</div>
	</div>
</section>
