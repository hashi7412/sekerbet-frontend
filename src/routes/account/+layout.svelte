<script>
	import AccountHeader from '$lib/layout/AccountHeader.svelte';

	import AccountMobileBurgerMenu from '$lib/layout/AccountMobileBurgerMenu.svelte';
	import AccountMobileHeader from '$lib/layout/AccountMobileHeader.svelte';

	import '$lib/plugins/css/home.css';
	import '$lib/plugins/css/home-mobile.css';

	let isOpen = false;

	const handleOpen = () => {
		isOpen = !isOpen;
	};
</script>

<div class="home-desktop">
	<AccountHeader />
	<slot />
</div>

<div class="home-mobile">
	<AccountMobileBurgerMenu {isOpen} {handleOpen} />
	<AccountMobileHeader {handleOpen} />
	<slot />
</div>
