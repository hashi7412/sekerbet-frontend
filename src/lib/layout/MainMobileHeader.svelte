<script>
	import Logo_Dark_Large_Mobi from '$lib/images/mobile/logo-dark-large-mobi.png';

	export let handleOpen;
</script>

<div class="header-container_82e94">
	<header class="header_ae6dc">
		<a href="/" aria-label="Main page" class="logo-link_05d11"
			><img src={Logo_Dark_Large_Mobi} alt="betine site logo" /></a
		>
		<div class="user-block-container_e3629">
			<div class="header-auth_2a84f">
				<a href="/login" class="header-auth-button_62bf2">Login</a>
				<a href="/registration" class="header-auth-button_62bf2 orange_49773">Register</a>
			</div>
			<button class="header-burger_6fbb6" on:click={handleOpen}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					class="header-burger-icon_6c642"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0 1C0 0.447715 0.447715 0 1 0H5C5.55228 0 6 0.447715 6 1C6 1.55228 5.55228 2 5 2H1C0.447715 2 0 1.55228 0 1ZM0 8C0 7.44772 0.447715 7 1 7H15C15.5523 7 16 7.44772 16 8C16 8.55229 15.5523 9 15 9H1C0.447715 9 0 8.55229 0 8ZM1 14C0.447715 14 0 14.4477 0 15C0 15.5523 0.447715 16 1 16H11C11.5523 16 12 15.5523 12 15C12 14.4477 11.5523 14 11 14H1Z"
						fill="currentColor"
					></path>
				</svg>
			</button>
		</div>
	</header>
</div>
