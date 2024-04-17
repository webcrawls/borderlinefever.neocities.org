<script lang="ts">
	import BackgroundVideo from '$lib/layout/BackgroundVideo.svelte';
	import Metadata from '$lib/Metadata.svelte';
	import { prefersReducedMotion } from '$lib/stores/media';
	import TVFrame from '$lib/tv/TVFrame.svelte';
</script>

<Metadata />

<div id="app">
	<BackgroundVideo />
	<header>
		<div class="top">
			<h1><a href="/">INTERFERENCE PATTERN</a></h1>
		</div>
		<div class="bottom">
			<p>a Borderline Fever Music Video</p>
<!--			<button style="{$prefersReducedMotion ? 'opacity: 0.0 !important;' : ''}"-->
<!--							on:click|preventDefault={() => toggleState = !toggleState}>-->
<!--				{toggleState ? 'pause' : 'play'}-->
<!--			</button>-->
		</div>
	</header>
	<div class="main-wrapper">
		<TVFrame>
			<slot />
		</TVFrame>
	</div>
	<footer>
		<div class="footer-container">
			<div class="footer-wrapper">
				<div class="section-group">
					<nav class="section">
						<h1>follow us <span class="arrows">>></span></h1>
						<a href="https://www.instagram.com/borderlinefeverband?igsh=MXMwYW5jMGkxejgybA=="
							 rel="external"
							 class="icon-link"><img
							alt="instagram"
							src="/icons/instagram.svg" /></a>
						<a href="https://www.tiktok.com/@borderlinefever?_t=8l2BBwqG2sf&_r=10"
							 rel="external"
							 class="icon-link"><img
							alt="tiktok"
							src="/icons/tiktok.svg" /></a>
						<a href="https://www.youtube.com/channel/UCJ0BtK0-p1aHk923Z0u70gg"
							 rel="external"
							 class="icon-link"><img
							alt="youtube"
							src="/icons/youtube.svg" /></a>
					</nav>
					<nav class="section">
						<h1><a rel="external" href="https://borderlinefever.hearnow.com/">stream us</a> <span
							class="arrows">>></span></h1>
						<a
							href="https://open.spotify.com/album/2CKCOGT6588ksI1bVJ7GXB?referral=labelaffiliate&utm_source=1100lypAhjU6&utm_medium=Indie_CDBaby&utm_campaign=labelaffiliate"
							rel="external"
							class="icon-link">
							<img alt="spotify"
									 src="/icons/spotify.svg" /></a>
						<a href="https://music.apple.com/ca/album/goin-steady-single/1717085006?at=1000lM6c&uo=4&app=itunes"
							 rel="external"
							 class="icon-link">
							<img alt="apple"
									 src="/icons/apple.svg" />
						</a>
						<a href="https://music.apple.com/ca/album/goin-steady-single/1717085006"
							 rel="external"
							 class="icon-link">
							<img alt="amazon"
									 src="/icons/amazon.svg" /></a>
					</nav>
				</div>
				<div class="section">
					<p id="credits"><span class="madewith"><span class="made">made</span> with 💖 </span>by <a rel="external"
																																																		href="https://webcrawls.live">webcrawls</a>
					</p>
				</div>
			</div>
			<div class="image-bin">
				<a rel="external" href="https://www.sheridancollege.ca">
					<img src="/logo/sheridan-logo.png" alt="The Sheridan college logo."
							 style="filter: invert(94%) sepia(94%) saturate(0%) hue-rotate(241deg) brightness(106%) contrast(105%);" />
				</a>
				<a rel="external" href="https://borderlinefever.hearnow.com/">
					<img src="/logo/blf-logo.png" alt="The Borderline Fever logo." />
				</a>
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