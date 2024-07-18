<script>
	import Banner from '$lib/components/_utils/Banner.svelte';
	import SportsLeftColumn from './SportsLeftColumn.svelte';
	import SportOverFlowColumn from './SportOverFlowColumn.svelte';
	import SportsRightColumn from './SportsRightColumn.svelte';
</script>

<div class="main-content-wrapper_d5326 home-desktop">
	<Banner></Banner>
	<div>
		<div class="slider-container_2f39a">
			<div>
				<div class="main-slider_9a25c">
					<div class="slick-wrapper_061f7">
						<div class="slick-slider slick-initialized">
							<div class="slick-list">
								<div
									class="slick-track"
									style="opacity: 1; transform: translate3d(0px, 0px, 0px);"
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="pt20 pb40 page-wrapper_5e55b" style="padding-top: 20px; padding-bottom: 40px;">
			<div class="container_ac2c7 large_6e58f">
				<div class="sportsbook-page-grid_944d2">
					<!-- for left column -->
					<SportsLeftColumn></SportsLeftColumn>
					<!-- for middle column -->
					<SportOverFlowColumn></SportOverFlowColumn>
					<!-- fir left cloumn -->
					<SportsRightColumn></SportsRightColumn>
				</div>
			</div>
		</div>
	</div>
</div>
