<script>

	import DAccountMenuWrapper from './desktop/deposits/DAccountMenuWrapper.svelte';
	import DAccountMenuContent from './desktop/deposits/DAccountMenuContent.svelte';
	import DAccountMenuList from './mobile/deposits/DAccountMenuList.svelte';
	import DAccountMenuContainer from './affiliate/DAccountMenuContainer.svelte';
	// import DAccountMenuContainer from './desktop/deposits/DAccountMenuContainer.svelte';

	let crypto_accordian = false;
	let wire_accordian = false;
	let payfix_accordian = false;
	let papara_accordian = false;
	let ewallet_accordian = false;
	let qr_accordian = false;
	let credit_accordian = false;

	let crypto_mobile_accordian = false;
	let wire_mobile_accordian = false;
	let payfix_mobile_accordian = false;
	let impatient_mobile_accordian = false;
	let ewallet_mobile_accordian = false;
	let qr_mobile_accordian = false;
	let credit_mobile_accordian = false;
</script>








<div class="account_f3f82 home-desktop">
	<div class="account-container_bba75">
        <DAccountMenuWrapper />

       <DAccountMenuContent />
		
	</div>
</div>

<div class="main-content-wrapper_a4af2 home-mobile">
	<div>

<DAccountMenuList />
		

<DAccountMenuContainer />
	
	</div>
</div>
