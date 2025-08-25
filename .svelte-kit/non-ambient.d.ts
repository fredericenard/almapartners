
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/careers" | "/contact" | "/demo" | "/demo/paraglide" | "/expertise" | "/transactions";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/careers": Record<string, never>;
			"/contact": Record<string, never>;
			"/demo": Record<string, never>;
			"/demo/paraglide": Record<string, never>;
			"/expertise": Record<string, never>;
			"/transactions": Record<string, never>
		};
		Pathname(): "/" | "/careers" | "/careers/" | "/contact" | "/contact/" | "/demo" | "/demo/" | "/demo/paraglide" | "/demo/paraglide/" | "/expertise" | "/expertise/" | "/transactions" | "/transactions/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/images/alexandre-eischen.jpg" | "/images/presca-ahn.jpeg" | "/images/samuel-koubi.jpg" | "/images/simon-henochsberg.png" | "/images/stanislas-chertok.jpeg" | "/robots.txt" | string & {};
	}
}