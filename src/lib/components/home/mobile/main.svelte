<script>
	// @ts-nocheck

	import VipBanner from './VipBanner.svelte';
	import PromotionBlocks from './PromotionBlocks.svelte';

	import BonusBanner from '$lib/images/mobile/home/bonus-banner.png';
	import VipClubBanner from '$lib/images/mobile/home/vip-club-banner.png';
	import EditorChoice from './EditorChoice.svelte';
	import PopularCasino from './PopularCasino.svelte';
	import TopWinners from './TopWinners.svelte';
	import DownloadApp from './DownloadApp.svelte';
	import Navigation from './Navigation.svelte';
</script>

<div class="main-content-wrapper_a4af2 home-mobile">
	<div>
		<div>
			<div>
				<VipBanner />
			</div>
			<div class="home-wrapper_2c57c" style="margin-top: 16px;">
				<div>
					<PromotionBlocks />
					<EditorChoice />
					<PopularCasino />
					<div class="banner_d389d">
						<a href="/info/help/vipclub"><img src={VipClubBanner} alt="banner" /></a>
					</div>
					<TopWinners />
					<div class="banner_d389d">
						<a href="/promo"><img src={BonusBanner} alt="banner" /></a>
					</div>
					<DownloadApp />
				</div>
			</div>
		</div>
	</div>
	<Navigation />
</div>
