<script>
	// @ts-nocheck

	import Banner from '$lib/components/_utils/Banner.svelte';
	import TopWinner from './TopWinner.svelte';
	import TopGames from './TopGames.svelte';
	import UpcomingEvents from './UpcomingEvents.svelte';
	import PopularLiveCasinos from './PopularLiveCasinos.svelte';
	import PopularSlots from './PopularSlots.svelte';
	import NewGames from './NewGames.svelte';
	import AllProviders from './AllProviders.svelte';
	import Matches from './Matches.svelte';
	import MobileApp from './MobileApp.svelte';
</script>

<div class="home-desktop">
	<Banner></Banner>
	<TopWinner />
	<TopGames />
	<div class="home-container_23d76 container_ac2c7">
		<div class="home-main-section_a6158">
			<UpcomingEvents />
			<PopularLiveCasinos />
		</div>
		<div class="casino-games-section_82ea9">
			<PopularSlots />
			<NewGames />
			<AllProviders />
		</div>
		<Matches />
		<MobileApp />
	</div>
</div>
