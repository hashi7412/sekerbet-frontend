<script>
	import Banner from '$lib/components/landing/banner.svelte';
	import Info from '$lib/components/landing/info.svelte';
	import OurGame from '$lib/components/landing/our_game.svelte';
	import PopularMatches from '$lib/components/landing/popular_matches.svelte';
	import Leagues from '$lib/components/landing/leagues.svelte';
	import Support from '$lib/components/landing/support.svelte';
	import Blog from '$lib/components/landing/blog.svelte';
	import Banks from '$lib/components/landing/banks.svelte';
</script>

<svelte:head>
	<title>Landing</title>
	<meta name="description" content="Landing page" />
</svelte:head>

<Banner />
<Info />
<OurGame />
<PopularMatches />
<Leagues />
<Support />
<Blog />
<Banks />
