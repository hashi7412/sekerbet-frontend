<script>
	import { IconBrandYoutubeFilled } from '@tabler/icons-svelte';
</script>

<header class="Navtop">
	<div class="Navtop-top">
		<div class="container">
			<div class="Navtop-top-in">
				<a href="/" class="navbar-brand"> </a>
				<div class="Navtop-top-right">
					<a href="/" class="Navtop-top-link Navtop-top-link-tv">
						<IconBrandYoutubeFilled style="margin-right: 8px;" size={16} color={'#fbcf44'} />
						<span>Betine TV</span>
					</a>
					<div class="Navtop-language dropdown">
						<button
							class="dropdown-button"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							TR
						</button>
						<div
							class="dropdown-menu"
							aria-labelledby="dropdownMenuButton"
							style="position: absolute; transform: translate3d(21px, 27px, 0px); top: 0px; left: 0px; will-change: transform;"
						>
							<div class="Navtop-language-in">
								<a class="dropdown-item active" href="/">
									Turkish
									<span>TR</span>
								</a>
								<a class="dropdown-item" href="/">English<span>MOST</span></a>
								<a class="dropdown-item" href="/">Русский<span>RU</span></a>
							</div>
						</div>
					</div>

					<div class="Navtop-notlogin desktop-header">
						<a href="/login" class="Navtop-notlogin-link button button-grey">Login to the Site</a>
						<a href="/registration" class="Navtop-notlogin-link button button-yellow">Create Account</a>
					</div>
					<div class="Navtop-notlogin mobile-header">
						<a href="/login" class="Navtop-notlogin-link button button-grey">Login</a>
						<a href="/registration" class="Navtop-notlogin-link button button-yellow">Register</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
