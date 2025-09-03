<script lang="ts">
	import { type Writable, writable } from 'svelte/store';
	import { onMount, setContext } from 'svelte';
	import Metadata from '$lib/Metadata.svelte';
	import { browser } from '$app/environment';
	import TvLoadingControl from '$lib/tv/TVLoadingControl.svelte';
	import band from '$lib/data/band.json'
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const prefersReducedQuery = browser ? window.matchMedia('(prefers-reduced-motion: reduce)') : undefined
	const prefersReduced: Writable<boolean> = writable(prefersReducedQuery?.matches)
	setContext("prefersReduced", prefersReduced)

	const control = $state({ element: undefined, props: {}})
	const ControlElement = $derived(control.element ?? TvLoadingControl)

	setContext('control', control);

	const centerTv = () => {
		const wrapper = document.querySelector('.main-wrapper main');
		wrapper.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
	};

	onMount(() => {
		new ResizeObserver(() => setTimeout(() => centerTv(), 10)).observe(document.body);
		prefersReducedQuery?.addEventListener("change", () => {$prefersReduced = prefersReducedQuery.matches})
	});
</script>

<svelte:window onload={centerTv} />
<Metadata />

<div id="app">
	<header>
		<div class="top">
			<h1><a href="/">INTERFERENCE PATTERN</a></h1>
		</div>
		<div class="bottom">
			<p>a Borderline Fever Music Video</p>
		</div>
	</header>
	<div class="main-wrapper">
		<main class="tv-frame">
			<nav class="tv-nav">
				<a href="/about">About</a>
				<a href="/team">Team</a>
				<a href="/stills">Stills</a>
			</nav>
			<aside class="tv-control">
				<ControlElement {...control.props}></ControlElement>
			</aside>
			<section>
				<div class="section-bg"></div>
				<div class="content-wrapper">
					{@render children?.()}
				</div>
			</section>
		</main>
	</div>
	<footer>
		<div class="footer-container">
			<div class="footer-wrapper">
				<div class="section-group">
					<nav class="section">
						<h1>follow us <span class="arrows">>></span></h1>
						<a href={band.links.instagram}
							 rel="external"
							 class="icon-link"><img
							alt="instagram"
							src="/icons/instagram.svg" /></a>
						<a href={band.links.tiktok}
							 rel="external"
							 class="icon-link"><img
							alt="tiktok"
							src="/icons/tiktok.svg" /></a>
						<a href={band.links.youtube}
							 rel="external"
							 class="icon-link"><img
							alt="youtube"
							src="/icons/youtube.svg" /></a>
					</nav>
					<nav class="section">
						<h1><a rel="external" href={band.links.hearnow}>stream us</a> <span
							class="arrows">>></span></h1>
						<a
							href={band.links.spotify}
							rel="external"
							class="icon-link">
							<img alt="spotify"
									 src="/icons/spotify.svg" /></a>
						<a href={band.links.apple}
							 rel="external"
							 class="icon-link">
							<img alt="apple"
									 src="/icons/apple.svg" />
						</a>
						<a href={band.links.amazon}
							 rel="external"
							 class="icon-link">
							<img alt="amazon"
									 src="/icons/amazon.svg" /></a>
					</nav>
				</div>
			</div>
			<div class="image-bin">
				<a rel="external" href="https://www.sheridancollege.ca">
					<img src="/logo/sheridan-logo.png" alt="The Sheridan college logo."
							 style="filter: invert(94%) sepia(94%) saturate(0%) hue-rotate(241deg) brightness(106%) contrast(105%);" />
				</a>
				<img src="/logo/blf-logo.png" alt="The Borderline Fever logo." />
			</div>
		</div>
	</footer>
</div>

<style>
    .icon-link img {
        filter: invert(100%) sepia(9%) saturate(1%) hue-rotate(67deg) brightness(101%) contrast(101%);
        width: 24px;
        height: 24px;
    }

    #credits {
        opacity: 0.7;
        font-style: italic;
    }
</style>