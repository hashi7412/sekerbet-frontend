<script>
	import MainHeader from '$lib/layout/MainHeader.svelte';
	import MainFooter from '$lib/layout/MainFooter.svelte';
	import MainStickBar from '$lib/layout/MainStickBar.svelte';

	import MainMobileBurgerMenu from '$lib/layout/MainMobileBurgerMenu.svelte';
	import MainMobileHeader from '$lib/layout/MainMobileHeader.svelte';
	import MainMobileFooter from '$lib/layout/MainMobileFooter.svelte';

	import '$lib/plugins/css/home.css';
	import '$lib/plugins/css/home-mobile.css';

	let isOpen = false;

	const handleOpen = () => {
		isOpen = !isOpen;
	};
</script>

<div class="home-desktop">
	<MainHeader />
	<div style="margin-top: 154px;">
		<slot />
	</div>
	<MainStickBar />
	<MainFooter />
</div>

<div class="home-mobile">
	<MainMobileBurgerMenu {isOpen} {handleOpen} />
	<MainMobileHeader {handleOpen} />
	<slot />
	<MainMobileFooter />
</div>
