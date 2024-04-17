<script lang="ts">
	import { page } from '$app/stores';

	const title = 'INTERFERENCE PATTERN';
	const url = 'https://borderlinefever.neocities.org';
	const domain = 'borderlinefever.neocities.org';
	const locale = 'en_US';
	const description = 'Two brothers decide to explore an old warehouse, out of curiosity of what lies inside. A short film by Borderline Fever and Sheridan college.';
	const image = 'https://borderlinefever.neocities.org/logo/logo-colour.png';

	const country = 'canada';

	const routeTitles = {
		'/': 'Index',
		'/stills': 'Stills',
		'/team': 'Meet the Team',
		'/about': 'About the Film'
	};

	const getRoute = (id, status) => {
		let route = routeTitles[id] ?? '';
		route = status === 200 ? route : 'Fell down the wrong hole?';
		return route;
	};

	let route: string = getRoute($page.route.id, $page.status);
	$: route = getRoute($page.route.id, $page.status)

	let pageTitle = `${title} - ${route}`;
	$: pageTitle = `${title} - ${route}`;
</script>

<svelte:head>
	<!-- html -->
	<title>{pageTitle}</title>
	<meta charset="UTF-8" />
	<meta name="keywords" content="film, short, band, music, video, borderline, fever">
	<meta name="description" content="{description}" />
	<meta name="language" content="{locale}" />
	<meta name="author" content="Kaden Scott" />
	<meta name="url" content="{url}" />
	<link rel="canonical" href="{url}" />
	<link rel="me" type="text/html" href="https://github.com/webcrawls" />


	<!-- opengraph -->
	<meta property="og:title" content="{pageTitle}" />
	<meta property="og:description" content="{description}" />
	<meta property="og:image" content="{image}" />
	<meta property="og:locale" content="{locale}" />
	<meta property="og:country-name" content="{country}" />

	<!-- twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="{domain}" />
	<meta property="twitter:url" content="{url}" />
	<meta name="twitter:title" content="{pageTitle}" />
	<meta name="twitter:description" content="{description}" />
	<meta name="twitter:image" content="{image}" />

	<!-- google -->
	<meta name="thumbnail" content="{image}" />

	<!-- apple -->
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-title" content="{title}" />
	<meta name="application-name" content="{title}" />

</svelte:head>