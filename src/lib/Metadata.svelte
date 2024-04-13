<script lang="ts">
    import {page} from '$app/stores'

    const title = 'INTERFERENCE PATTERN'
    const url = 'borderlinefever.neocities.org'
    const domain = 'https://borderlinefever.neocities.org'
    const locale = 'en_US'
    const description = 'Two brothers decide to explore an old warehouse, out of curiosity of what lies inside. A short film by Borderline Fever and Sheridan college.'
    const image = 'https://borderlinefever.neocities.org/logo/logo-colour.png'
    const rating = 'general'

    let route = $page.route.id ? ' - ' + $page.route.id : ''
    $: route = $page.route.id ? ' - ' + $page.route.id : ''
</script>

<svelte:head>
    <!-- html -->
    <title>{title}{route}</title>
    <meta charset="UTF-8"/>

    <!-- opengraph -->
    <meta property="og:title" content="{title}"/>
    <meta property="og:description" content="{description}"/>
    <meta property="og:image" content="{image}"/>
    <meta property="og:locale" content="{locale}"/>
    <meta property="og_site_name" content="{title}"/>

    <!-- twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="{domain}">
    <meta property="twitter:url" content="{url}">
    <meta name="twitter:title" content="{title}">
    <meta name="twitter:description" content="{description}">
    <meta name="twitter:image" content="{image}">

    <!-- google -->
    <meta
</svelte:head>