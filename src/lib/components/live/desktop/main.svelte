<script>
	import Banner from '$lib/components/_utils/Banner.svelte';
	import LeftColumn from './LeftColumn.svelte';
	import CenterColumn from './CenterColumn.svelte';
	import RightColumn from './RightColumn.svelte';
	import Navigation from './Navigation.svelte';
</script>

<div class="main-content-wrapper_d5326 home-desktop">
	<Banner />
	<div>
		<div class="pt20 pb40 page-wrapper_5e55b" style="padding-top: 20px; padding-bottom: 40px;">
			<div class="container_ac2c7 large_6e58f">
				<div class="sportsbook-page-grid_944d2">
					<LeftColumn />
					<CenterColumn />
					<RightColumn />
				</div>
				<Navigation />
			</div>
		</div>
	</div>
</div>
