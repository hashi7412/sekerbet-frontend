<script>
	import AffiliateList from './AffiliateList.svelte';
	import DpAccountMenuWrapper from './DpAccountMenuWrapper.svelte';
	import DpAccountMenuList from './DpAccountMenuList.svelte';
</script>

<div class="account_f3f82 home-desktop">
	<div class="account-container_bba75">
		<DpAccountMenuWrapper />
		<div class=" content_92bf7 powr"><AffiliateList /></div>
	</div>
</div>

<div class="main-content-wrapper_a4af2 home-mobile">
	<div>
		<nav>
			<DpAccountMenuList />
		</nav>

		<div class="container_6266f">
			<AffiliateList />
		</div>
	</div>
</div>

<style>
	.powr {
		width: 100%;
		background-color: #fff;
		margin-left: 10%;
	}
</style>
