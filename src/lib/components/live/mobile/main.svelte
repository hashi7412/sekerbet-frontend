<script>
	import FilterHeader from './FilterHeader.svelte';
	import LiveSportsPageWrapper from './LiveSportsPageWrapper.svelte';
	import Navigation from './Navigation.svelte';
	import ProvidersNav from './ProvidersNav.svelte';
	import SearchInput from './SearchInput.svelte';
</script>

<div class="main-content-wrapper_a4af2 home-mobile">
	<FilterHeader />
	<ProvidersNav />
	<SearchInput />
	<!-- <div class="slider-wrapper_7fbc5">
		<div class="slick-slider top-slider_065dd slick-initialized">
			<div class="slick-list">
				<div class="slick-track" style="opacity: 1; transform: translate3d(0px, 0px, 0px);"></div>
			</div>
		</div>
	</div> -->
	<LiveSportsPageWrapper />
	<Navigation />
</div>
