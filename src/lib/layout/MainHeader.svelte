<script>
	import { page } from '$app/stores';
	import LogoDark from '$lib/images/logo-dark.webp';

	import LionImg from '$lib/images/brand/40_dd191f0221a53594e19968060f65aaae.png';
	import KickImg from '$lib/images/brand/56_024e0574ee615156b57175bfc69e97a9.png';
	import CupImg from '$lib/images/brand/69_439069839149fb2ff69565ee4d0bce28.png';
	import StarImg from '$lib/images/brand/72_1250bcfc11a717ebc6b49b3898217269.png';
	import SerieaImg from '$lib/images/brand/78_0a848f6c0b43da6eb1be5365a33f30a3.png';
	import ColorImg from '$lib/images/brand/110_8be3c87298e09f45d6f81c1c6238ee60.png';
	import RedStarImg from '$lib/images/brand/116_7c0485cee9ccb44896c94e535cf63db9.png';
	import BigCupImg from '$lib/images/brand/1333228_1015b938bbde0d4d3fd188feee869392.png';

	import Crazy_Time from '$lib/images/virtual/Crazy_Time_8841.webp';
	import Live_Mega_Roulette from '$lib/images/virtual/Live_Mega_Roulette_9963.webp';
	import Live_Mega_Wheel from '$lib/images/virtual/Live_Mega_Wheel_9432.webp';
	import Live_Sweet_Bonanza_CandyLand from '$lib/images/virtual/Live_Sweet_Bonanza_CandyLand_9447.webp';
	import Lucky_6_Roulette from '$lib/images/virtual/Lucky_6_Roulette_11017.webp';
	import Turkish_Mega_Roulette from '$lib/images/virtual/Turkish_Mega_Roulette_11729.webp';

	import Gates_of_Olympus from '$lib/images/slots/Gates_of_Olympus_9334.png';
	import Twilight_Princess from '$lib/images/slots/Twilight_Princess_10406.png';
	import Immortal_Ways_88_Charms from '$lib/images/slots/Immortal_Ways_88_Charms_96_11527.webp';
	import Starlight_Princess from '$lib/images/slots/Starlight_Princess_9354.webp';
	import Sugar_Rush from '$lib/images/slots/Sugar_Rush_9363.webp';
	import Sweet_Bonanza from '$lib/images/slots/Sweet_Bonanza_11003.webp';

	import Big_Bass_Crash from '$lib/images/other_games/Big_Bass_Crash_10338.png';
	import Raptor from '$lib/images/other_games/Raptor_10996.png';
	import T_Basket from '$lib/images/other_games/T_Basket_10980.png';
	import T_Kick from '$lib/images/other_games/T_Kick_10981.png';
	import Twain_Sport from '$lib/images/other_games/Twain_Sport_10982.png';
	import Live_Spaceman from '$lib/images/other_games/Live_Spaceman_9441.webp';

	let currentUrl;
	$: currentUrl = $page.url.pathname;

	let sports_modal_show = false;
	let inplay_modal_show = false;
	let livecasino_modal_show = false;
	let slots_modal_show = false;
	let games_modal_show = false;
</script>

<header class="header_cd62d">
	<div class="top_aeca5">
		<div class="header-container_c0c17 wide_06ef6">
			<div class="header-menu_2b10f">
				<nav class="df aic" style="display: flex;">
					<a href="/" aria-label="Main page" class="site-logo_492f1">
						<img src={LogoDark} alt="betine site logo" />
					</a>
				</nav>
				<div
					class="df aic header-account-wrapper_db7a7"
					style="display: flex; align-items: center;"
				>
					<ul class="control-header-list_d4a35">
						<li class="control-header-link-border-none_46c3c">
							<a href="/casino/special_tournaments" class="header-menu-link_9d437">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="header-menu-link-icon_7b56f"
								>
									<path
										d="M19.6229 2.61402C19.1781 1.96072 18.3698 1.60579 17.4046 1.63922C16.6206 1.66653 15.7292 2.08919 15.0528 2.48946C15.0528 2.48775 15.0528 2.48613 15.0528 2.48442C15.0534 2.46769 15.0554 2.45133 15.0554 2.43434C15.0554 1.64696 14.4045 1.00862 13.6014 1.00862C13.5789 1.00862 9.99299 1 9.99299 1V1.003C9.99299 1.003 6.42122 1.01145 6.39868 1.01145C5.59566 1.01145 4.94474 1.64979 4.94474 2.43726C4.94474 2.45408 4.94674 2.4706 4.94733 2.48725C4.94733 2.48896 4.94733 2.49067 4.94733 2.49229C4.27091 2.09211 3.37959 1.66936 2.59559 1.64197C1.62998 1.60829 0.82178 1.96364 0.377097 2.61697C-0.185645 3.44377 -0.118274 4.61848 0.577342 6.10852C1.6279 8.3583 4.09685 10.0467 5.32032 10.7778C5.91927 12.142 7.15661 13.1668 8.78273 13.4882C8.81143 13.5549 8.82671 13.62 8.82671 13.6865C8.82671 14.0022 8.82671 15.1029 8.82671 15.8763H7.84964C7.33572 15.8763 6.91914 16.1877 6.91914 16.5719V16.6748H6.58373C5.93701 16.6748 5.41278 17.189 5.41278 17.8231V19C8.26142 19 11.4231 18.9972 14.5872 18.9972V17.8203C14.5872 17.1862 14.063 16.672 13.4163 16.672H13.0809V16.5692C13.0809 16.1849 12.6643 15.8736 12.1504 15.8736H11.1733C11.1733 15.1001 11.1733 13.9994 11.1733 13.6836C11.1733 13.6171 11.1886 13.5521 11.2173 13.4854C12.8433 13.164 14.0807 12.1392 14.6797 10.7751C15.9031 10.0439 18.3721 8.35551 19.4226 6.10565C20.1183 4.61556 20.1857 3.44082 19.6229 2.61402ZM1.76179 5.5767C1.28085 4.54662 1.17392 3.74738 1.4606 3.32617C1.73547 2.92232 2.36316 2.91217 2.54902 2.91866C3.21301 2.94193 4.27638 3.54743 4.94419 4.02072C4.94245 5.72615 4.92301 8.93903 4.92416 8.98324C3.80224 8.18662 2.4223 6.99123 1.76179 5.5767ZM18.2382 5.57375C17.5795 6.98453 16.1986 8.18079 15.0759 8.97858C15.077 8.93491 15.0575 5.7232 15.0558 4.01785C15.7236 3.54456 16.787 2.93898 17.451 2.91587C17.6368 2.90921 18.2646 2.91953 18.5394 3.3233C18.8261 3.74446 18.7191 4.54371 18.2382 5.57375Z"
										fill="#69808C"
									></path>
								</svg>
								pecial Tournaments
							</a>
						</li>
						<li class="control-header-link-border-none_46c3c">
							<a href="/casino/tournaments" class="header-menu-link_9d437"
								><svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="header-menu-link-icon_7b56f"
								>
									<path
										d="M19.6229 2.61402C19.1781 1.96072 18.3698 1.60579 17.4046 1.63922C16.6206 1.66653 15.7292 2.08919 15.0528 2.48946C15.0528 2.48775 15.0528 2.48613 15.0528 2.48442C15.0534 2.46769 15.0554 2.45133 15.0554 2.43434C15.0554 1.64696 14.4045 1.00862 13.6014 1.00862C13.5789 1.00862 9.99299 1 9.99299 1V1.003C9.99299 1.003 6.42122 1.01145 6.39868 1.01145C5.59566 1.01145 4.94474 1.64979 4.94474 2.43726C4.94474 2.45408 4.94674 2.4706 4.94733 2.48725C4.94733 2.48896 4.94733 2.49067 4.94733 2.49229C4.27091 2.09211 3.37959 1.66936 2.59559 1.64197C1.62998 1.60829 0.82178 1.96364 0.377097 2.61697C-0.185645 3.44377 -0.118274 4.61848 0.577342 6.10852C1.6279 8.3583 4.09685 10.0467 5.32032 10.7778C5.91927 12.142 7.15661 13.1668 8.78273 13.4882C8.81143 13.5549 8.82671 13.62 8.82671 13.6865C8.82671 14.0022 8.82671 15.1029 8.82671 15.8763H7.84964C7.33572 15.8763 6.91914 16.1877 6.91914 16.5719V16.6748H6.58373C5.93701 16.6748 5.41278 17.189 5.41278 17.8231V19C8.26142 19 11.4231 18.9972 14.5872 18.9972V17.8203C14.5872 17.1862 14.063 16.672 13.4163 16.672H13.0809V16.5692C13.0809 16.1849 12.6643 15.8736 12.1504 15.8736H11.1733C11.1733 15.1001 11.1733 13.9994 11.1733 13.6836C11.1733 13.6171 11.1886 13.5521 11.2173 13.4854C12.8433 13.164 14.0807 12.1392 14.6797 10.7751C15.9031 10.0439 18.3721 8.35551 19.4226 6.10565C20.1183 4.61556 20.1857 3.44082 19.6229 2.61402ZM1.76179 5.5767C1.28085 4.54662 1.17392 3.74738 1.4606 3.32617C1.73547 2.92232 2.36316 2.91217 2.54902 2.91866C3.21301 2.94193 4.27638 3.54743 4.94419 4.02072C4.94245 5.72615 4.92301 8.93903 4.92416 8.98324C3.80224 8.18662 2.4223 6.99123 1.76179 5.5767ZM18.2382 5.57375C17.5795 6.98453 16.1986 8.18079 15.0759 8.97858C15.077 8.93491 15.0575 5.7232 15.0558 4.01785C15.7236 3.54456 16.787 2.93898 17.451 2.91587C17.6368 2.90921 18.2646 2.91953 18.5394 3.3233C18.8261 3.74446 18.7191 4.54371 18.2382 5.57375Z"
										fill="#69808C"
									></path>
								</svg>Tournaments</a
							>
						</li>
						<li class="control-header-link-border-none_46c3c">
							<a href="/info/help/how_to_deposit" class="header-menu-link_9d437"
								><svg
									width="12"
									height="10"
									viewBox="0 0 12 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="header-menu-link-icon_7b56f"
								>
									<g clip-path="url(#clip0_225_300)">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M12 8.88054C12 9.49798 11.4682 10 10.8146 10H1.18521C0.531631 10 0 9.498 0 8.88054V1.11946C0 0.50213 0.531631 0 1.18521 0H10.8147C11.4682 0 12 0.50213 12 1.11946V8.88054H12ZM8.50998 4.99989L4.0078 2.54433V7.45552L8.50998 4.99989Z"
											fill="#69808C"
										></path>
									</g>
									<defs>
										<clippath id="clip0_225_300">
											<rect width="12" height="10" fill="white"></rect>
										</clippath>
									</defs>
								</svg>How To Deposit</a
							>
						</li>
						<li class="control-header-link-border-none_46c3c">
							<a href="/affiliates" class="header-menu-link_9d437"
								><svg
									width="12"
									height="12"
									viewBox="0 0 12 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="header-menu-link-icon_7b56f"
								>
									<g clip-path="url(#clip0_225_292)">
										<path
											d="M12 10.1944C12.0015 10.5252 11.9115 10.85 11.74 11.133C11.5685 11.4161 11.3221 11.6464 11.0279 11.7986C10.7338 11.9507 10.4033 12.0189 10.0728 11.9955C9.74237 11.9721 9.42478 11.8581 9.15504 11.6661C8.88529 11.474 8.67386 11.2113 8.54402 10.907C8.41418 10.6026 8.37096 10.2684 8.41914 9.94106C8.46732 9.61375 8.60502 9.30606 8.81707 9.05188C9.02913 8.79771 9.30731 8.6069 9.62099 8.50048C9.61066 8.46669 9.60362 8.43197 9.59999 8.39683V7.49806C9.59999 7.41861 9.56838 7.34241 9.51212 7.28622C9.45586 7.23004 9.37955 7.19848 9.29999 7.19848H2.7C2.62043 7.19848 2.54413 7.23004 2.48787 7.28622C2.43161 7.34241 2.4 7.41861 2.4 7.49806V8.39683C2.39636 8.43197 2.38933 8.46669 2.379 8.50048C2.78285 8.63749 3.12487 8.91326 3.34408 9.27864C3.56329 9.64402 3.64545 10.0753 3.57592 10.4955C3.50639 10.9157 3.28969 11.2977 2.96444 11.5732C2.63919 11.8487 2.22652 12 1.8 12C1.37348 12 0.960815 11.8487 0.635564 11.5732C0.310313 11.2977 0.09361 10.9157 0.024081 10.4955C-0.0454479 10.0753 0.0367151 9.64402 0.255925 9.27864C0.475136 8.91326 0.817148 8.63749 1.221 8.50048C1.21067 8.46669 1.20364 8.43197 1.2 8.39683V6.5993C1.2 6.44039 1.26322 6.28799 1.37574 6.17562C1.48826 6.06325 1.64087 6.00013 1.8 6.00013H5.39999V4.71729C4.8344 4.57146 4.34148 4.22463 4.01364 3.74183C3.68579 3.25903 3.54552 2.6734 3.61913 2.0947C3.69273 1.51601 3.97515 0.983995 4.41346 0.598373C4.85176 0.21275 5.41585 0 5.99999 0C6.58414 0 7.14823 0.21275 7.58653 0.598373C8.02483 0.983995 8.30725 1.51601 8.38086 2.0947C8.45446 2.6734 8.3142 3.25903 7.98635 3.74183C7.6585 4.22463 7.16559 4.57146 6.59999 4.71729V6.00013H10.2C10.3591 6.00013 10.5117 6.06325 10.6242 6.17562C10.7368 6.28799 10.8 6.44039 10.8 6.5993V8.39683C10.7963 8.43197 10.7893 8.46669 10.779 8.50048C11.1342 8.61997 11.4431 8.84762 11.6621 9.15145C11.8811 9.45527 11.9993 9.81999 12 10.1944Z"
											fill="#69808C"
										></path>
									</g>
									<defs>
										<clippath id="clip0_225_292">
											<rect width="12" height="12" fill="white"></rect>
										</clippath>
									</defs>
								</svg>Affiliate And Ads</a
							>
						</li>
						<li class="control-header-link-border-none_46c3c">
							<a href="/vip_club" class="header-menu-link_9d437"
								><svg
									viewBox="0 0 12 12"
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									fill="none"
									class="header-menu-link-icon_7b56f"
								>
									<path
										d="M12,4.6c0-0.1-0.1-0.2-0.2-0.2c-0.1-0.1-0.2-0.1-0.2-0.1c-0.1,0-0.2,0-0.3,0.1L8.6,5.8L6.4,1.3 c0-0.1-0.1-0.1-0.2-0.2C6.1,1,6.1,1,6,1S5.8,1,5.8,1.1c-0.1,0-0.1,0.1-0.2,0.2L3.4,5.8L0.7,4.3c-0.1,0-0.2-0.1-0.3-0.1 c-0.1,0-0.2,0-0.2,0.1C0.1,4.4,0.1,4.5,0,4.6c0,0.1,0,0.2,0,0.3l1.1,5.7c0,0.1,0.1,0.2,0.2,0.3C1.4,11,1.5,11,1.6,11h8.8 c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.2,0.2-0.3L12,4.9C12,4.8,12,4.7,12,4.6z"
										fill="currentColor"
									></path>
								</svg>Vip Club</a
							>
						</li>
						<li class="control-header-link-border-none_46c3c">
							<a id="GROSBET_TV" class="header-menu-link_51bcb"
								><svg
									viewBox="0 0 12 12"
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									fill="none"
									class="header-menu-link-icon_fb1ba"
								>
									<g>
										<path
											d="M11.5,1.5C11.1,1.2,10.6,1,10.2,1H1.8c-0.5,0-1,0.2-1.3,0.5S0,2.2,0,2.7v4.6c0,0.4,0.2,0.9,0.5,1.2 C0.9,8.8,1.4,9,1.8,9h8.3c0.5,0,1-0.2,1.3-0.5C11.8,8.2,12,7.8,12,7.3V2.7C12,2.2,11.8,1.8,11.5,1.5z"
											fill="currentColor"
										></path>
										<path
											d="M8.7,10H3.3c-0.1,0-0.3,0.1-0.4,0.1c-0.1,0.1-0.2,0.2-0.2,0.4s0.1,0.3,0.2,0.4C3,10.9,3.1,11,3.3,11h5.5 c0.1,0,0.3-0.1,0.4-0.1s0.2-0.2,0.2-0.4s-0.1-0.3-0.2-0.4S8.9,10,8.7,10z"
											fill="currentColor"
										></path>
									</g>
								</svg>
								<p class="header-menu-link-text_f1999">Betine TV</p>
							</a>
						</li>
						<li class="control-header-link-border-none_46c3c">
							<div class="switcher_8b91b">
								<div class="switcher-wrapper_710e2">
									<a href="/" rel="alternate" hreflang="en" class="selected-lang-link_1afe6"
										><span class="selected-lang-text_72bfe">EN</span><svg
											xmlns="http://www.w3.org/2000/svg"
											width="6"
											height="4"
											viewBox="0 0 6 4"
											fill="none"
											class="switcher-arrow_ebb1b"
										>
											<path
												d="M2.29289 3.29289L0.707107 1.70711C0.0771422 1.07714 0.523309 0 1.41421 0H4.58579C5.47669 0 5.92286 1.07714 5.29289 1.70711L3.70711 3.29289C3.31658 3.68342 2.68342 3.68342 2.29289 3.29289Z"
												fill="currentColor"
											></path>
										</svg></a
									>
									<div class="switcher-list_3dce1">
										<a href="/home" rel="alternate" hreflang="tr" class="switcher-list-link_c5041"
											><span class="switcher-list-text_1150f">Türkçe</span><span
												class="switcher-list-text_1150f short_2ba4c">TR</span
											></a
										>
									</div>
								</div>
							</div>
						</li>
						<li class="control-header-link_bd5ce control-header-blank"></li>
						<li class="control-header-link_bd5ce">
							<a href="/account/notifications">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
								>
									<path
										d="M9.1822 20C10.664 20 11.9035 18.9241 12.1881 17.5H6.17627C6.46106 18.9241 7.70058 20 9.1822 20Z"
										fill="currentColor"
									></path>
									<path
										d="M14.919 9.99902C14.9157 9.99902 14.9124 9.99979 14.9091 9.99979C11.7519 9.99979 9.18207 7.38306 9.18207 4.1665C9.18207 3.28226 9.38177 2.44638 9.72947 1.69473C9.5494 1.67734 9.36693 1.6665 9.18207 1.6665C6.01914 1.6665 3.45499 4.27805 3.45499 7.49979V9.82309C3.45499 11.4723 2.74564 13.029 1.50117 14.1006C1.08635 14.4615 0.902234 15.0364 1.05115 15.5973C1.22462 16.2498 1.85787 16.6665 2.52228 16.6665H15.8378C16.5349 16.6665 17.1919 16.2065 17.3334 15.5107C17.443 14.9723 17.2549 14.4348 16.845 14.084C15.6553 13.0682 14.9673 11.5756 14.919 9.99902Z"
										fill="currentColor"
									></path>
									<path
										d="M18.9999 4.16672C18.9999 6.4679 17.1353 8.33328 14.8348 8.33328C12.5346 8.33328 10.6699 6.4679 10.6699 4.16672C10.6699 1.86554 12.5346 0 14.8348 0C17.1353 0 18.9999 1.86554 18.9999 4.16672Z"
										fill="#F0B905"
									></path>
								</svg>
							</a>
						</li>
						<li class="control-header-link_bd5ce">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								class="search-icon_6a8e3"
							>
								<g clip-path="url(#clip0_1_5944)">
									<path
										d="M13.3611 2.29173C12.0805 1.01146 10.3955 0.214835 8.59336 0.0375945C6.7912 -0.139646 4.98335 0.31346 3.47781 1.31971C1.97228 2.32596 0.862218 3.8231 0.336766 5.55604C-0.188686 7.28898 -0.0970192 9.1505 0.596148 10.8234C1.28932 12.4964 2.5411 13.8772 4.13821 14.7307C5.73532 15.5841 7.57895 15.8574 9.35497 15.504C11.131 15.1505 12.7295 14.1922 13.8782 12.7923C15.0269 11.3924 15.6546 9.63756 15.6545 7.82671C15.6534 5.75077 14.8286 3.76011 13.3611 2.29173Z"
										fill="currentColor"
									></path>
									<path
										d="M19.6867 18.105L15.6858 14.1052C15.4533 14.398 15.2047 14.6776 14.9411 14.9427C14.6761 15.2056 14.3968 15.4538 14.1047 15.6863L18.1045 19.6861C18.3154 19.8897 18.5978 20.0024 18.891 19.9999C19.1842 19.9974 19.4646 19.8798 19.6719 19.6724C19.8793 19.4651 19.9969 19.1847 19.9994 18.8915C20.002 18.5983 19.8893 18.3158 19.6856 18.105H19.6867Z"
										fill="#F0B905"
									></path>
								</g>
								<defs>
									<clippath id="clip0_1_5944">
										<rect width="19.9994" height="20" fill="white"></rect>
									</clippath>
								</defs>
							</svg>
						</li>
					</ul>
					<div class="header-auth_d3d75">
						<a href="/login" class="header-auth-button_504a1">Login</a>
						<a href="/registration" class="header-auth-button_504a1 orange_faf83">Register</a>
					</div>
				</div>
			</div>
			<div class="navigation_7dca8">
				<div class="navigation-container_0fd46 wide_cc135">
					<div class="navigation-inner_108a1">
						<nav class="nav_3fcb2">
							<ul class="nav-menu_02851">
								<li
									class={currentUrl === '/home'
										? 'nav-menu-item_cc30f active_90a45'
										: 'nav-menu-item_cc30f'}
								>
									<a href="/home" id="INDEX" class="nav-menu-link_d5e39"
										><span class="nav-menu-link-icon_8393e"
											><svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												color_secondary="#1B2124"
											>
												<g clip-path="url(#clip0_1_5947)">
													<path
														d="M10 0C9.2671 0 8.53374 0.283181 7.97578 0.841231L2.3202 6.62801C1.24223 7.70608 0.605489 8.34922 0.29039 9.22285C-0.0184247 10.0791 0.000216307 11.0787 0.000216307 12.8612V17.1413C0.000216307 18.7313 1.28835 19.9998 2.8587 19.9998H5.71439L5.71299 14.2842C5.71197 12.7137 6.98707 11.4285 8.57426 11.4285H11.4258C13.013 11.4285 14.288 12.7137 14.287 14.2842L14.2856 19.9998H17.1413C18.7117 19.9998 19.9998 18.7313 19.9998 17.1413V12.8612C19.9998 11.0787 20.0184 10.0791 19.7096 9.22285C19.3945 8.34922 18.7578 7.70608 17.6798 6.62801L12.0243 0.841231C11.4663 0.283181 10.7329 0 10 0Z"
														fill="currentColor"
													></path>
													<path
														d="M8.57416 12.8584C7.78714 12.8584 7.14256 13.4804 7.14282 14.2842L7.14425 19.9998H12.8556L12.8571 14.2842C12.8573 13.4804 12.2127 12.8584 11.4257 12.8584H8.57416Z"
														fill="#1B2124"
													></path>
												</g>
											</svg></span
										><span class="nav-menu-link-title_42160">Home page</span></a
									>
								</li>
								<li
									class={currentUrl === '/sports'
										? 'nav-menu-item_cc30f active_90a45'
										: 'nav-menu-item_cc30f'}
									on:mouseenter={() => (sports_modal_show = true)}
									on:mouseleave={() => (sports_modal_show = false)}
								>
									<a href="/sports" id="PRE_LIVE" class="nav-menu-link_d5e39">
										<span class="nav-menu-link-icon_8393e">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												color_secondary="#F0B905"
											>
												<g clip-path="url(#clip0_1_5868)">
													<path
														d="M10.0002 0C4.477 0 8.98387e-08 4.47676 8.98387e-08 10C-0.000732332 15.5225 4.477 19.9993 10.0002 20C15.5232 20 20.001 15.5232 20 9.99927C20.001 4.47598 15.5223 0 10.0002 0ZM16.7757 14.8388L15.3747 13.82L11.9732 16.2915L12.5107 17.946C11.7182 18.1965 10.875 18.3333 9.99971 18.3333C9.12471 18.3333 8.28223 18.1965 7.4897 17.9467L8.02744 16.2915L4.625 13.82L3.22451 14.838C2.26001 13.4903 1.68452 11.8473 1.67002 10.0675L3.40679 10.0665L4.70552 6.06851L3.30576 5.05127C4.31328 3.68975 5.72227 2.64653 7.36177 2.09951L7.89824 3.75H12.1015L12.6377 2.09951C14.2782 2.64727 15.6868 3.69053 16.6942 5.05127L15.2942 6.06851L16.593 10.0665H18.3307C18.3163 11.8475 17.7405 13.4905 16.7757 14.8388Z"
														fill="currentColor"
													></path>
													<path
														d="M12.0884 7.12573H7.88345L6.58545 11.1237L9.98647 13.5945L13.3875 11.1237L12.0884 7.12573Z"
														fill="#F0B905"
													></path>
												</g>
											</svg>
										</span>
										<span class="nav-menu-link-title_42160">Sports</span>
									</a>
									<div
										class="popup-by-link_f48f3"
										style={sports_modal_show ? 'display: block' : 'display: none'}
									>
										<div class="popup-content_419fb">
											<!-- svelte-ignore a11y-no-static-element-interactions -->
											<!-- svelte-ignore a11y-click-events-have-key-events -->
											<div
												class="close-icon-container_7d498"
												on:click={() => (sports_modal_show = false)}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="8"
													height="8"
													viewBox="0 0 8 8"
													fill="none"
													class="close-icon_bbe65"
												>
													<g clip-path="url(#clip0_34_19925)">
														<path
															d="M5.3158 4.03742C5.29518 4.01679 5.29518 3.98321 5.3158 3.96258L7.83428 1.44287C8.04963 1.22743 8.04963 0.876877 7.83428 0.66143L7.335 0.16191C7.23065 0.0574891 7.0919 0 6.94431 0C6.79672 0 6.65796 0.0574891 6.5536 0.161894L4.03512 2.68164C4.02238 2.69438 4.00784 2.69707 3.9979 2.69707C3.98797 2.69707 3.97343 2.6944 3.96069 2.68164L1.44219 0.161894C1.33783 0.0574891 1.19908 0 1.05148 0C0.903876 0 0.765143 0.0574891 0.660785 0.161894L0.161515 0.66143C-0.0538385 0.876877 -0.0538385 1.22743 0.161515 1.44287L2.68 3.96258C2.70061 3.98321 2.70061 4.01679 2.68 4.03742L0.161515 6.55713C-0.0538229 6.77258 -0.0538229 7.12312 0.161515 7.33857L0.660785 7.83809C0.765143 7.94249 0.903892 7.99998 1.05148 7.99998C1.19907 7.99998 1.33783 7.94249 1.44219 7.83809L3.96067 5.31838C3.97341 5.30562 3.98794 5.30295 3.99789 5.30295C4.00784 5.30295 4.02235 5.30562 4.0351 5.31839L6.55358 7.83811C6.65794 7.94251 6.79669 8 6.94429 8C7.0919 8 7.23063 7.94251 7.33499 7.83811L7.83426 7.33859C8.0496 7.12315 8.0496 6.7726 7.83426 6.55715L5.3158 4.03742Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<div class="first-column_1a5b6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="32"
													height="32"
													viewBox="0 0 32 32"
													class="icon_2481e"
												>
													<path
														d="M16.0004 0C7.1632 0 1.43742e-07 7.16281 1.43742e-07 16C-0.00117173 24.836 7.1632 31.9988 16.0004 32C24.8372 32 32.0016 24.8372 32 15.9988C32.0016 7.16156 24.8356 0 16.0004 0ZM26.8412 23.742L24.5995 22.112L19.1571 26.0664L20.0171 28.7136C18.7491 29.1144 17.3999 29.3332 15.9995 29.3332C14.5995 29.3332 13.2516 29.1144 11.9835 28.7148L12.8439 26.0663L7.4 22.112L5.15922 23.7409C3.61602 21.5845 2.69523 18.9556 2.67203 16.108L5.45086 16.1064L7.52883 9.70961L5.28922 8.08203C6.90125 5.90359 9.15562 4.23445 11.7788 3.35922L12.6372 6H19.3624L20.2204 3.35922C22.8452 4.23563 25.0988 5.90484 26.7108 8.08203L24.4708 9.70961L26.5488 16.1064H29.3291C29.306 18.956 28.3848 21.5848 26.8412 23.742Z"
														fill="#AEBBC2"
													></path>
													<path
														d="M19.3419 11.4014H12.6139L10.5371 17.7982L15.9787 21.7514L21.4203 17.7982L19.3419 11.4014Z"
														fill="#FBCF44"
													></path>
												</svg>
												<div class="title_11523">Bet</div>
												<div class="subtitle_5e9ff">
													Bet on thousands of matches in dozens of different sports with sports
													betting.
												</div>
												<ul class="first-column-links-list_d3603">
													<li class="first-column-link-item_aa6b6">Approaching</li>
													<li class="first-column-link-item_aa6b6">Highlights</li>
													<li class="first-column-link-item_aa6b6">my favorites</li>
													<li class="first-column-link-item_aa6b6">Match results</li>
												</ul>
												<button class="first-column-btn_d8a4c"> Play </button>
											</div>
											<div class="column_bb693">
												<div class="column-title_5f3c2">Important Matches of the Day</div>
												<div class="events-container_cd6d0">
													<div class="event_27022">
														<div class="event-top_b6ba8">
															<div>
																<div class="event-title_2f940">Germany - Scotland</div>
																<div class="event-subtitle_4e75c">
																	Football<span class="dot_13469"></span>

																	International <span class="dot_13469"></span>

																	European cup
																</div>
															</div>
															<div>
																<span class="db time-container_a18e8">
																	<div class="event-time_eebcf">22:00</div>
																	<div class="event-date_cb2c9"><span></span></div>
																	<div class="event-date_cb2c9"></div>
																</span>
															</div>
														</div>
														<div class="outcome-column_f05b5">
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> one </span><span>
																		1.25
																	</span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> X </span><span> 6.05 </span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> 2 </span><span> 12.75 </span></button
																>
															</div>
														</div>
													</div>
													<div class="event_27022">
														<div class="event-top_b6ba8">
															<div>
																<div class="event-title_2f940">Hungary - Switzerland</div>
																<div class="event-subtitle_4e75c">
																	Football<span class="dot_13469"></span>

																	International <span class="dot_13469"></span>

																	European cup
																</div>
															</div>
															<div>
																<span class="db time-container_a18e8">
																	<div class="event-time_eebcf">16:00</div>
																	<div class="event-date_cb2c9"><span></span></div>
																	<div class="event-date_cb2c9"></div>
																</span>
															</div>
														</div>
														<div class="outcome-column_f05b5">
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> one </span><span>
																		3.30
																	</span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> X </span><span> 3.50 </span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> 2 </span><span> 2.20 </span></button
																>
															</div>
														</div>
													</div>
													<div class="event_27022">
														<div class="event-top_b6ba8">
															<div>
																<div class="event-title_2f940">Spain - Croatia</div>
																<div class="event-subtitle_4e75c">
																	Football<span class="dot_13469"></span>

																	International <span class="dot_13469"></span>

																	European cup
																</div>
															</div>
															<div>
																<span class="db time-container_a18e8">
																	<div class="event-time_eebcf">19:00</div>
																	<div class="event-date_cb2c9"><span></span></div>
																	<div class="event-date_cb2c9"></div>
																</span>
															</div>
														</div>
														<div class="outcome-column_f05b5">
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> one </span><span>
																		1.73
																	</span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> X </span><span> 3.85 </span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> 2 </span><span> 4.90 </span></button
																>
															</div>
														</div>
													</div>
													<div class="event_27022">
														<div class="event-top_b6ba8">
															<div>
																<div class="event-title_2f940">Italy - Albania</div>
																<div class="event-subtitle_4e75c">
																	Football<span class="dot_13469"></span>

																	International <span class="dot_13469"></span>

																	European cup
																</div>
															</div>
															<div>
																<span class="db time-container_a18e8">
																	<div class="event-time_eebcf">22:00</div>
																	<div class="event-date_cb2c9"><span></span></div>
																	<div class="event-date_cb2c9"></div>
																</span>
															</div>
														</div>
														<div class="outcome-column_f05b5">
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> one </span><span>
																		1.38
																	</span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> X </span><span> 4.70 </span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> 2 </span><span> 9.40 </span></button
																>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="column_bb693">
												<div class="column-title_5f3c2">Popular Leagues</div>
												<div style="text-align: left;">
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={RedStarImg} alt="Super League logo" />
															</div>
															<div>
																<h4 class="title_66ebf">Super League</h4>
																<span class="sport-country_ded94"> Soccer, Turkey </span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={LionImg} alt="Premier League logo" />
															</div>
															<div>
																<h4 class="title_66ebf">Premier League</h4>
																<span class="sport-country_ded94"> Soccer, England </span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={StarImg} alt="Champions League logo" />
															</div>
															<div>
																<h4 class="title_66ebf">Champions League</h4>
																<span class="sport-country_ded94">
																	Soccer, International Clubs
																</span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={CupImg} alt="UEFA Europa League logo" />
															</div>
															<div>
																<h4 class="title_66ebf">UEFA Europa League</h4>
																<span class="sport-country_ded94">
																	Soccer, International Clubs
																</span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={BigCupImg} alt="UEFA Europa Conference League logo" />
															</div>
															<div>
																<h4 class="title_66ebf">UEFA Europa Conference League</h4>
																<span class="sport-country_ded94">
																	Soccer, International Clubs
																</span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={SerieaImg} alt="Serie A logo" />
															</div>
															<div>
																<h4 class="title_66ebf">Serie A</h4>
																<span class="sport-country_ded94"> Soccer, Italy </span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={ColorImg} alt="LaLiga logo" />
															</div>
															<div>
																<h4 class="title_66ebf">LaLiga</h4>
																<span class="sport-country_ded94"> Soccer, Spain </span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={KickImg} alt="Bundesliga logo" />
															</div>
															<div>
																<h4 class="title_66ebf">Bundesliga</h4>
																<span class="sport-country_ded94"> Soccer, Germany </span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li
									class={currentUrl === '/live'
										? 'nav-menu-item_cc30f active_90a45'
										: 'nav-menu-item_cc30f'}
									on:mouseenter={() => (inplay_modal_show = true)}
									on:mouseleave={() => (inplay_modal_show = false)}
								>
									<a href="/live" id="LIVE" class="nav-menu-link_d5e39">
										<span class="nav-menu-link-icon_8393e">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												color_secondary="#F0B905"
											>
												<g clip-path="url(#clip0_1_5892)">
													<path
														d="M4.81485 8.0195e-05C4.58263 -0.00297043 4.34922 0.0810064 4.16949 0.253188C3.80259 0.604745 3.80185 1.1854 4.16778 1.538L5.53839 2.89024L6.73058 4.06645L7.43009 4.75659H4.21394C2.88488 4.75659 1.79439 5.64037 1.09365 6.8121C0.392912 7.98384 0 9.50583 0 11.1789V13.5786C0 15.2516 0.392912 16.7727 1.09365 17.9445C1.79439 19.1162 2.88488 20 4.21394 20H15.7825C17.1116 20 18.2056 19.1162 18.9063 17.9445C19.6071 16.7727 20 15.2516 20 13.5786V11.1789C20 9.50583 19.6071 7.98384 18.9063 6.8121C18.2056 5.64037 17.1116 4.75659 15.7825 4.75659H12.5699L13.2694 4.06645L14.4616 2.89024L15.8322 1.538C16.1981 1.1854 16.1974 0.604745 15.8305 0.253188C15.6508 0.0810047 15.4174 -0.002945 15.1851 8.0195e-05C14.9529 0.00313082 14.7219 0.0930224 14.5469 0.26983L13.1763 1.62207L11.9841 2.79828L10.0001 4.75659L8.01604 2.79828L6.82385 1.62207L5.45323 0.26983C5.27818 0.0930241 5.04707 0.00310539 4.81485 8.0195e-05ZM4.21388 6.54761H15.7825C16.2846 6.54761 16.8453 6.89658 17.3395 7.72294C17.8337 8.54931 18.181 9.78982 18.181 11.1789V13.5786C18.181 14.9676 17.8337 16.2082 17.3395 17.0345C16.8453 17.8609 16.2846 18.209 15.7825 18.209H4.21388C3.71169 18.209 3.15104 17.8609 2.65684 17.0345C2.16265 16.2082 1.81885 14.9676 1.81885 13.5786V11.1789C1.81885 9.78982 2.16265 8.54931 2.65684 7.72294C3.15104 6.89658 3.71169 6.54761 4.21388 6.54761Z"
														fill="currentColor"
													></path>
													<path
														d="M8.07091 10.3276C7.37097 10.3277 6.67054 10.5887 6.14193 11.1106L5.50011 11.7447C5.1417 12.0901 5.13423 12.6565 5.48328 13.0111C5.83945 13.3729 6.42811 13.3733 6.78554 13.0128L7.42735 12.3787C7.78996 12.0207 8.35085 12.0209 8.71364 12.3787L9.35634 13.0128L9.99904 13.6469C11.0568 14.6902 12.7998 14.6899 13.857 13.646L14.4988 13.0128C14.8647 12.6602 14.8639 12.0795 14.497 11.728C14.1375 11.3836 13.5634 11.391 13.2133 11.7446L12.5706 12.3778C12.208 12.7358 11.6471 12.7365 11.2843 12.3787L10.6416 11.7446L9.99895 11.1096C9.47008 10.588 8.77085 10.3275 8.07091 10.3276Z"
														fill="#F0B905"
													></path>
												</g>
											</svg></span
										>
										<span class="nav-menu-link-title_42160">In-Play</span>
									</a>
									<div
										class="popup-by-link_f48f3"
										style={inplay_modal_show ? 'display: block' : 'display: none'}
									>
										<!-- svelte-ignore a11y-no-static-element-interactions -->
										<!-- svelte-ignore a11y-click-events-have-key-events -->
										<div class="popup-content_419fb">
											<div
												class="close-icon-container_7d498"
												on:click={() => (inplay_modal_show = false)}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="8"
													height="8"
													viewBox="0 0 8 8"
													fill="none"
													class="close-icon_bbe65"
												>
													<g clip-path="url(#clip0_34_19925)">
														<path
															d="M5.3158 4.03742C5.29518 4.01679 5.29518 3.98321 5.3158 3.96258L7.83428 1.44287C8.04963 1.22743 8.04963 0.876877 7.83428 0.66143L7.335 0.16191C7.23065 0.0574891 7.0919 0 6.94431 0C6.79672 0 6.65796 0.0574891 6.5536 0.161894L4.03512 2.68164C4.02238 2.69438 4.00784 2.69707 3.9979 2.69707C3.98797 2.69707 3.97343 2.6944 3.96069 2.68164L1.44219 0.161894C1.33783 0.0574891 1.19908 0 1.05148 0C0.903876 0 0.765143 0.0574891 0.660785 0.161894L0.161515 0.66143C-0.0538385 0.876877 -0.0538385 1.22743 0.161515 1.44287L2.68 3.96258C2.70061 3.98321 2.70061 4.01679 2.68 4.03742L0.161515 6.55713C-0.0538229 6.77258 -0.0538229 7.12312 0.161515 7.33857L0.660785 7.83809C0.765143 7.94249 0.903892 7.99998 1.05148 7.99998C1.19907 7.99998 1.33783 7.94249 1.44219 7.83809L3.96067 5.31838C3.97341 5.30562 3.98794 5.30295 3.99789 5.30295C4.00784 5.30295 4.02235 5.30562 4.0351 5.31839L6.55358 7.83811C6.65794 7.94251 6.79669 8 6.94429 8C7.0919 8 7.23063 7.94251 7.33499 7.83811L7.83426 7.33859C8.0496 7.12315 8.0496 6.7726 7.83426 6.55715L5.3158 4.03742Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<div class="first-column_1a5b6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="33"
													height="32"
													viewBox="0 0 33 32"
													class="icon_2481e"
												>
													<path
														d="M5.92092 5.34726C7.33101 3.96493 9.22691 3.19064 11.2015 3.19064C13.1762 3.19064 15.0721 3.96493 16.4822 5.34726C16.7889 5.62076 17.1892 5.76573 17.5999 5.75215C18.0107 5.73856 18.4005 5.56745 18.6885 5.27428C18.9765 4.98111 19.1407 4.58836 19.147 4.17742C19.1533 3.76649 19.0013 3.36887 18.7224 3.06699C16.7127 1.10093 14.013 0 11.2015 0C8.39007 0 5.69037 1.10093 3.68066 3.06699C3.40177 3.36887 3.24973 3.76649 3.25605 4.17742C3.26236 4.58836 3.42655 4.98111 3.71458 5.27428C4.0026 5.56745 4.39239 5.73856 4.80315 5.75215C5.21391 5.76573 5.61415 5.62076 5.92092 5.34726Z"
														fill="#FBCF44"
													></path>
													<path
														d="M7.52067 6.85619C7.35895 7.00037 7.22819 7.17589 7.13632 7.37211C7.04445 7.56833 6.99339 7.78117 6.98623 7.99771C6.97906 8.21426 7.01595 8.43 7.09465 8.63186C7.17335 8.83373 7.29222 9.01751 7.44407 9.17206C7.59591 9.32661 7.77756 9.44872 7.97799 9.53098C8.17843 9.61324 8.39349 9.65394 8.61013 9.65061C8.82676 9.64728 9.04047 9.6 9.23829 9.51161C9.4361 9.42323 9.61391 9.2956 9.76093 9.13646C10.145 8.75845 10.6622 8.54659 11.2011 8.54659C11.74 8.54659 12.2572 8.75845 12.6413 9.13646C12.7883 9.2956 12.9661 9.42323 13.1639 9.51161C13.3617 9.6 13.5754 9.64728 13.7921 9.65061C14.0087 9.65394 14.2238 9.61324 14.4242 9.53098C14.6246 9.44872 14.8063 9.32661 14.9581 9.17206C15.11 9.01751 15.2289 8.83373 15.3076 8.63186C15.3863 8.43 15.4231 8.21426 15.416 7.99771C15.4088 7.78117 15.3578 7.56833 15.2659 7.37211C15.174 7.17589 15.0433 7.00037 14.8815 6.85619C13.8979 5.89445 12.5768 5.35596 11.2011 5.35596C9.8254 5.35596 8.50435 5.89445 7.52067 6.85619Z"
														fill="#FBCF44"
													></path>
													<path
														d="M31.2995 13.0696C31.0822 12.9263 30.8337 12.837 30.5749 12.8092C30.316 12.7813 30.0542 12.8158 29.8114 12.9096L23.8555 14.6538C23.952 15.0954 24.0013 15.546 24.0027 15.998V27.1993C24.0013 27.6513 23.952 28.1019 23.8555 28.5434L29.8114 30.2876C29.9991 30.3647 30.2005 30.4028 30.4034 30.3997C30.7223 30.3982 31.0337 30.3036 31.2995 30.1276C31.5167 29.9808 31.6945 29.783 31.8173 29.5514C31.94 29.3198 32.004 29.0616 32.0036 28.7995V14.3978C32.004 14.1357 31.94 13.8775 31.8173 13.6459C31.6945 13.4143 31.5167 13.2164 31.2995 13.0696Z"
														fill="#AEBBC2"
													></path>
													<path
														d="M17.6021 11.1978H4.80057C2.14929 11.1978 0 13.347 0 15.9983V27.1996C0 29.8509 2.14929 32.0002 4.80057 32.0002H17.6021C20.2534 32.0002 22.4026 29.8509 22.4026 27.1996V15.9983C22.4026 13.347 20.2534 11.1978 17.6021 11.1978Z"
														fill="#AEBBC2"
													></path>
												</svg>
												<div class="title_11523">Live Betting</div>
												<div class="subtitle_5e9ff">
													Bet on thousands of matches in dozens of different sports with live
													betting.
												</div>
												<ul class="first-column-links-list_d3603">
													<li class="first-column-link-item_aa6b6">Approaching</li>
													<li class="first-column-link-item_aa6b6">Highlights</li>
													<li class="first-column-link-item_aa6b6">my favorites</li>
													<li class="first-column-link-item_aa6b6">Match results</li>
												</ul>
												<button class="first-column-btn_d8a4c"> Play </button>
											</div>
											<div class="column_bb693">
												<div class="column-title_5f3c2">Important Matches of the Day</div>
												<div class="events-container_cd6d0">
													<div class="event_27022">
														<div class="event-top_b6ba8">
															<div>
																<div class="event-title_2f940">
																	Sportivo Luqueno - Red Bull Bragantino SP
																</div>
																<div class="event-subtitle_4e75c">
																	Football<span class="dot_13469"></span>

																	International (Clubs)<span class="dot_13469"></span>

																	Copa Sudamericana
																</div>
															</div>
															<div>
																<span class="db time-container_a18e8">
																	<div class="event-time_eebcf">45`</div>
																	<div class="event-date_cb2c9"><span></span></div>
																	<div class="event-date_cb2c9"></div>
																</span>
															</div>
														</div>
														<div class="outcome-column_f05b5">
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> one </span><span>
																		2.00
																	</span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> X </span><span> 3.00 </span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> 2 </span><span> 3.80 </span></button
																>
															</div>
														</div>
													</div>
													<div class="event_27022">
														<div class="event-top_b6ba8">
															<div>
																<div class="event-title_2f940">
																	Cruzeiro EC MG - Deportes Union La Calera
																</div>
																<div class="event-subtitle_4e75c">
																	Football<span class="dot_13469"></span>

																	International (Clubs)<span class="dot_13469"></span>

																	Copa Sudamericana
																</div>
															</div>
															<div>
																<span class="db time-container_a18e8">
																	<div class="event-time_eebcf">45`</div>
																	<div class="event-date_cb2c9"><span></span></div>
																	<div class="event-date_cb2c9"></div>
																</span>
															</div>
														</div>
														<div class="outcome-column_f05b5">
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> one </span><span>
																		1.05
																	</span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> X </span><span> 8.25 </span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> 2 </span><span> 30.00 </span></button
																>
															</div>
														</div>
													</div>
													<div class="event_27022">
														<div class="event-top_b6ba8">
															<div>
																<div class="event-title_2f940">
																	CA San Lorenzo de Almagro - Liverpool Montevideo
																</div>
																<div class="event-subtitle_4e75c">
																	Football<span class="dot_13469"></span>

																	International (Clubs)<span class="dot_13469"></span>

																	Libertadores Cup
																</div>
															</div>
															<div>
																<span class="db time-container_a18e8">
																	<div class="event-time_eebcf">45`</div>
																	<div class="event-date_cb2c9"><span></span></div>
																	<div class="event-date_cb2c9"></div>
																</span>
															</div>
														</div>
														<div class="outcome-column_f05b5">
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> one </span><span>
																		1.10
																	</span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> X </span><span> 7.00 </span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> 2 </span><span> 30.00 </span></button
																>
															</div>
														</div>
													</div>
													<div class="event_27022">
														<div class="event-top_b6ba8">
															<div>
																<div class="event-title_2f940">Sao Paulo FC SP - Barcelona SC</div>
																<div class="event-subtitle_4e75c">
																	Football<span class="dot_13469"></span>

																	International (Clubs)<span class="dot_13469"></span>

																	Libertadores Cup
																</div>
															</div>
															<div>
																<span class="db time-container_a18e8">
																	<div class="event-time_eebcf">45`</div>
																	<div class="event-date_cb2c9"><span></span></div>
																	<div class="event-date_cb2c9"></div>
																</span>
															</div>
														</div>
														<div class="outcome-column_f05b5">
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> one </span><span>
																		1.55
																	</span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> X </span><span> 2.90 </span></button
																>
															</div>
															<div>
																<button class="outcome_fc6a5"
																	><span class="symbol_07c57"> 2 </span><span> 11.00 </span></button
																>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="column_bb693">
												<div class="column-title_5f3c2">Popular Leagues</div>
												<div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={RedStarImg} alt="Super League logo" />
															</div>
															<div>
																<h4 class="title_66ebf">Super League</h4>
																<span class="sport-country_ded94"> Soccer, Turkey </span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={LionImg} alt="Premier League logo" />
															</div>
															<div>
																<h4 class="title_66ebf">Premier League</h4>
																<span class="sport-country_ded94"> Soccer, England </span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={StarImg} alt="Champions League logo" />
															</div>
															<div>
																<h4 class="title_66ebf">Champions League</h4>
																<span class="sport-country_ded94">
																	Soccer, International Clubs
																</span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={CupImg} alt="UEFA Europa League logo" />
															</div>
															<div>
																<h4 class="title_66ebf">UEFA Europa League</h4>
																<span class="sport-country_ded94">
																	Soccer, International Clubs
																</span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={BigCupImg} alt="UEFA Europa Conference League logo" />
															</div>
															<div>
																<h4 class="title_66ebf">UEFA Europa Conference League</h4>
																<span class="sport-country_ded94">
																	Soccer, International Clubs
																</span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={SerieaImg} alt="Serie A logo" />
															</div>
															<div>
																<h4 class="title_66ebf">Serie A</h4>
																<span class="sport-country_ded94"> Soccer, Italy </span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={ColorImg} alt="LaLiga logo" />
															</div>
															<div>
																<h4 class="title_66ebf">LaLiga</h4>
																<span class="sport-country_ded94"> Soccer, Spain </span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="league-item_f6646">
														<div class="content-container_71a71">
															<div class="item-img-wrapper_6e2fb">
																<img src={KickImg} alt="Bundesliga logo" />
															</div>
															<div>
																<h4 class="title_66ebf">Bundesliga</h4>
																<span class="sport-country_ded94"> Soccer, Germany </span>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="item-icon_f2b32"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li
									class={currentUrl === '/virtual'
										? 'nav-menu-item_cc30f active_90a45'
										: 'nav-menu-item_cc30f'}
								>
									<a href="/virtual" id="VIRTUAL" class="nav-menu-link_d5e39">
										<span class="nav-menu-link-icon_8393e">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												color_secondary="#F0B905"
											>
												<g clip-path="url(#clip0_1_5896)">
													<path
														d="M18.5742 12.0151C16.2574 13.2586 16.0337 10.9947 16.0337 10.9947C14.118 10.7741 12.6919 8.64532 12.6919 8.64532C10.1072 9.97503 11.5473 13.7275 12.6629 15.1664C14.096 17.0123 13.0466 20 13.0466 20C13.0466 20 7.20454 19.5299 4.22299 15.8013C1.9848 13.0041 2.56212 10.3592 3.19933 8.61171C3.96625 6.51238 5.00344 5.3622 6.51692 4.13577C8.76299 2.3131 12.9156 2.08406 12.9156 2.08406C13.0476 1.33002 15.2323 0 15.2323 0C15.0093 0.221618 14.9211 1.41899 14.9211 1.41899C15.1442 1.01976 15.8565 0.619894 15.8565 0.619894C15.4559 1.55058 15.8565 3.54599 15.8565 3.54599C17.0156 4.70084 18.3077 8.69081 18.3077 8.69081L18.799 9.39999C19.4202 10.2877 19.1922 11.6835 18.5742 12.0151Z"
														fill="currentColor"
													></path>
													<path
														d="M11.5751 1.7431C11.8926 1.7431 12.1508 1.48649 12.1508 1.17028C12.1508 0.853762 11.8937 0.597046 11.5751 0.597046C11.2581 0.597046 10.9993 0.853126 10.9993 1.17028C10.9999 1.48585 11.2581 1.7431 11.5751 1.7431ZM9.08229 2.18877C9.39956 2.18877 9.65779 1.93269 9.65779 1.615C9.65779 1.29912 9.4002 1.04251 9.08229 1.04251C8.76416 1.04251 8.50625 1.29848 8.50625 1.615C8.50689 1.93269 8.76416 2.18877 9.08229 2.18877ZM7.03529 3.07874C7.35278 3.07874 7.61144 2.82266 7.61144 2.50646C7.61144 2.18994 7.35353 1.93333 7.03529 1.93333C6.71759 1.93333 6.46021 2.18877 6.46021 2.50646C6.46085 2.82202 6.71823 3.07874 7.03529 3.07874ZM5.11843 4.22384C5.43624 4.22384 5.69447 3.96839 5.69447 3.65071C5.69447 3.33503 5.43688 3.07747 5.11843 3.07747C4.79966 3.07747 4.54303 3.33355 4.54303 3.65071C4.54303 3.96839 4.79966 4.22384 5.11843 4.22384ZM3.64684 5.81482C3.96497 5.81482 4.22299 5.55948 4.22299 5.24232C4.22299 4.92527 3.96561 4.66856 3.64684 4.66856C3.32967 4.66856 3.07144 4.92527 3.07144 5.24232C3.07144 5.55948 3.32978 5.81482 3.64684 5.81482ZM3.13475 7.1511C3.13475 6.83522 2.87801 6.57797 2.55935 6.57797C2.24218 6.57797 1.98416 6.83458 1.98416 7.1511C1.98416 7.46826 2.24154 7.72434 2.55935 7.72434C2.87801 7.72307 3.13475 7.46667 3.13475 7.1511ZM1.79232 10.0133C2.11045 10.0133 2.36847 9.75749 2.36847 9.44044C2.36847 9.12329 2.11109 8.86731 1.79232 8.86731C1.47579 8.86731 1.21692 9.12329 1.21692 9.44044C1.21692 9.75749 1.47579 10.0133 1.79232 10.0133ZM1.9848 11.9217C1.9848 11.6058 1.72721 11.3483 1.40865 11.3483C1.09116 11.3483 0.833252 11.6047 0.833252 11.9217C0.833252 12.237 1.09063 12.4952 1.40865 12.4952C1.72721 12.4952 1.9848 12.2369 1.9848 11.9217ZM1.85755 13.6396C1.53942 13.6396 1.2814 13.8954 1.2814 14.2124C1.2814 14.5296 1.53878 14.7859 1.85755 14.7859C2.17631 14.7859 2.43295 14.5296 2.43295 14.2124C2.43305 13.8954 2.17567 13.6396 1.85755 13.6396Z"
														fill="#F0B905"
													></path>
												</g>
											</svg>
										</span>
										<span class="nav-menu-link-title_42160">Virtual Sports</span>
									</a>
								</li>
								<li
									class={currentUrl === '/live_casino'
										? 'nav-menu-item_cc30f active_90a45'
										: 'nav-menu-item_cc30f'}
									on:mouseenter={() => (livecasino_modal_show = true)}
									on:mouseleave={() => (livecasino_modal_show = false)}
								>
									<a href="/live_casino" id="LIVE_CASINO" class="nav-menu-link_d5e39">
										<span class="nav-menu-link-icon_8393e">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												color_secondary="#F0B905"
											>
												<g clip-path="url(#clip0_1_5900)">
													<path
														d="M12.9589 9.07599L12.5237 8.64239L10.3866 6.51189C10.1724 6.29779 9.82514 6.29779 9.61088 6.51189L7.47916 8.63708L7.04147 9.07356C6.34735 9.77113 6.35015 10.8993 7.04772 11.5934C7.6367 12.1794 8.55252 12.2807 9.25523 11.8373L9.01311 13.1439C8.97004 13.3751 9.12257 13.5975 9.35378 13.6405C9.37957 13.6453 9.40577 13.6477 9.432 13.6477H10.5679C10.8031 13.6478 10.9938 13.4573 10.994 13.2221C10.994 13.1959 10.9916 13.1697 10.9868 13.1439L10.7418 11.83C11.4465 12.2765 12.3664 12.1756 12.9576 11.5871C13.6514 10.8968 13.6542 9.77481 12.9639 9.08106C12.9623 9.07937 12.9606 9.07768 12.9589 9.07599Z"
														fill="#F0B905"
													></path>
													<path
														d="M2.8593 9.75504C2.91735 8.03012 3.60004 6.38498 4.78033 5.12578L4.77665 5.12251L2.75558 3.10144C1.03993 4.89837 0.0572009 7.27126 0 9.75504H2.85808H2.8593Z"
														fill="currentColor"
													></path>
													<path
														d="M5.12623 4.78033C6.38536 3.60014 8.0303 2.91745 9.75508 2.8593C9.75484 2.85781 9.75484 2.85629 9.75508 2.85481V0C7.27161 0.0572009 4.89905 1.03979 3.10229 2.75518L5.12295 4.77665L5.12623 4.78033Z"
														fill="currentColor"
													></path>
													<path
														d="M14.8741 15.2192C13.615 16.3997 11.9699 17.0826 10.2449 17.1407C10.2451 17.1422 10.2451 17.1437 10.2449 17.1452V20C12.7293 19.9434 15.1029 18.9606 16.9001 17.2444L14.879 15.2229L14.8741 15.2192Z"
														fill="currentColor"
													></path>
													<path
														d="M9.75491 17.1407C8.02979 17.0826 6.38449 16.3998 5.12522 15.2192L5.12235 15.2229L3.10132 17.2444C4.89855 18.9606 7.27215 19.9434 9.75657 20V17.1452C9.75576 17.1438 9.75522 17.1423 9.75491 17.1407Z"
														fill="currentColor"
													></path>
													<path
														d="M4.78034 14.8738C3.60015 13.6147 2.91745 11.9698 2.85931 10.245H0.0012207C0.0575088 12.7292 1.03983 15.1028 2.75559 16.9002L4.77665 14.8787C4.77746 14.8768 4.77875 14.8752 4.78034 14.8738Z"
														fill="currentColor"
													></path>
													<path
														d="M17.1408 10.245C17.0827 11.9699 16.4 13.615 15.2197 14.8742C15.2211 14.875 15.2224 14.8759 15.2234 14.8771L17.2445 16.9002C18.9607 15.103 19.9435 12.7294 20.0001 10.245H17.142H17.1408Z"
														fill="currentColor"
													></path>
													<path
														d="M15.2197 5.12615C16.3999 6.38528 17.0826 8.03021 17.1408 9.755H19.9988C19.9419 7.27152 18.9596 4.8988 17.2445 3.10181L15.2234 5.12287L15.2197 5.12615Z"
														fill="currentColor"
													></path>
													<path
														d="M10.2449 2.8593C11.9698 2.91735 13.6149 3.60004 14.8741 4.78033L14.8774 4.77665L16.8981 2.75518C15.1012 1.03969 12.7285 0.0570995 10.2449 0V2.85481C10.2451 2.85629 10.2451 2.85781 10.2449 2.8593Z"
														fill="currentColor"
													></path>
												</g>
											</svg>
										</span>
										<span class="nav-menu-link-title_42160">Live Casino</span>
									</a>
									<div
										class="popup-by-link_f48f3"
										style={livecasino_modal_show ? 'display: block' : 'display: none'}
									>
										<div class="popup-content_419fb">
											<!-- svelte-ignore a11y-no-static-element-interactions -->
											<!-- svelte-ignore a11y-click-events-have-key-events -->
											<div
												class="close-icon-container_7d498"
												on:click={() => (livecasino_modal_show = false)}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="8"
													height="8"
													viewBox="0 0 8 8"
													fill="none"
													class="close-icon_bbe65"
												>
													<g clip-path="url(#clip0_34_19925)">
														<path
															d="M5.3158 4.03742C5.29518 4.01679 5.29518 3.98321 5.3158 3.96258L7.83428 1.44287C8.04963 1.22743 8.04963 0.876877 7.83428 0.66143L7.335 0.16191C7.23065 0.0574891 7.0919 0 6.94431 0C6.79672 0 6.65796 0.0574891 6.5536 0.161894L4.03512 2.68164C4.02238 2.69438 4.00784 2.69707 3.9979 2.69707C3.98797 2.69707 3.97343 2.6944 3.96069 2.68164L1.44219 0.161894C1.33783 0.0574891 1.19908 0 1.05148 0C0.903876 0 0.765143 0.0574891 0.660785 0.161894L0.161515 0.66143C-0.0538385 0.876877 -0.0538385 1.22743 0.161515 1.44287L2.68 3.96258C2.70061 3.98321 2.70061 4.01679 2.68 4.03742L0.161515 6.55713C-0.0538229 6.77258 -0.0538229 7.12312 0.161515 7.33857L0.660785 7.83809C0.765143 7.94249 0.903892 7.99998 1.05148 7.99998C1.19907 7.99998 1.33783 7.94249 1.44219 7.83809L3.96067 5.31838C3.97341 5.30562 3.98794 5.30295 3.99789 5.30295C4.00784 5.30295 4.02235 5.30562 4.0351 5.31839L6.55358 7.83811C6.65794 7.94251 6.79669 8 6.94429 8C7.0919 8 7.23063 7.94251 7.33499 7.83811L7.83426 7.33859C8.0496 7.12315 8.0496 6.7726 7.83426 6.55715L5.3158 4.03742Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<div class="first-column_1a5b6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="32"
													height="32"
													viewBox="0 0 32 32"
													class="icon_2481e"
												>
													<path
														d="M20.7334 14.5216L20.0371 13.8278L16.6178 10.419C16.275 10.0765 15.7194 10.0765 15.3766 10.419L11.9659 13.8193L11.2656 14.5177C10.155 15.6338 10.1595 17.4389 11.2756 18.5495C12.2179 19.4871 13.6833 19.6491 14.8076 18.9397L14.4202 21.0302C14.3513 21.4001 14.5953 21.7559 14.9653 21.8248C15.0065 21.8325 15.0485 21.8363 15.0904 21.8363H16.9078C17.2841 21.8365 17.5894 21.5317 17.5896 21.1554C17.5896 21.1134 17.5857 21.0715 17.5781 21.0302L17.1861 18.928C18.3136 19.6424 19.7855 19.481 20.7314 18.5393C21.8414 17.4348 21.8459 15.6397 20.7414 14.5297C20.7388 14.527 20.7361 14.5243 20.7334 14.5216Z"
														fill="#FBCF44"
													></path>
													<path
														d="M4.57488 15.6082C4.66776 12.8483 5.76006 10.2161 7.64853 8.20135L7.64264 8.19611L4.40893 4.9624C1.66388 7.83749 0.0915215 11.6341 0 15.6082H4.57294H4.57488Z"
														fill="#AEBBC2"
													></path>
													<path
														d="M8.20119 7.64853C10.2158 5.76023 12.8477 4.66792 15.6073 4.57488C15.607 4.5725 15.607 4.57007 15.6073 4.56769V0C11.6338 0.0915215 7.8377 1.66367 4.96289 4.40828L8.19595 7.64264L8.20119 7.64853Z"
														fill="#AEBBC2"
													></path>
													<path
														d="M23.7994 24.3506C21.7847 26.2393 19.1526 27.3319 16.3926 27.4249C16.393 27.4273 16.393 27.4297 16.3926 27.4321V31.9998C20.3676 31.9092 24.1654 30.3367 27.0409 27.5908L23.8072 24.3565L23.7994 24.3506Z"
														fill="#AEBBC2"
													></path>
													<path
														d="M15.6086 27.4249C12.8484 27.332 10.216 26.2395 8.20114 24.3506L8.19654 24.3565L4.96289 27.5908C7.83846 30.3367 11.6362 31.9092 15.6113 31.9998V27.4321C15.61 27.4298 15.6091 27.4274 15.6086 27.4249Z"
														fill="#AEBBC2"
													></path>
													<path
														d="M7.64854 23.7982C5.76023 21.7836 4.66792 19.1517 4.57489 16.3921H0.00195312C0.0920141 20.3668 1.66373 24.1646 4.40894 27.0404L7.64264 23.8061C7.64394 23.8031 7.646 23.8004 7.64854 23.7982Z"
														fill="#AEBBC2"
													></path>
													<path
														d="M27.4252 16.3921C27.3323 19.152 26.24 21.7842 24.3516 23.7989C24.3538 23.8 24.3558 23.8016 24.3575 23.8035L27.5912 27.0404C30.3371 24.1649 31.9095 20.3671 32.0001 16.3921H27.4272H27.4252Z"
														fill="#AEBBC2"
													></path>
													<path
														d="M24.3516 8.20184C26.2399 10.2164 27.3322 12.8483 27.4252 15.608H31.9981C31.907 11.6344 30.3353 7.83808 27.5912 4.96289L24.3575 8.19659L24.3516 8.20184Z"
														fill="#AEBBC2"
													></path>
													<path
														d="M16.3926 4.57488C19.1524 4.66776 21.7847 5.76006 23.7994 7.64853L23.8046 7.64264L27.0377 4.40828C24.1627 1.66351 20.3664 0.0913592 16.3926 0V4.56769C16.393 4.57007 16.393 4.5725 16.3926 4.57488Z"
														fill="#AEBBC2"
													></path>
												</svg>
												<div class="title_11523">Live Casino</div>
												<div class="subtitle_5e9ff">
													Multiply your earnings with the most profitable demonstration games from
													popular providers!
												</div>
												<ul class="first-column-links-list_d3603">
													<li class="first-column-link-item_aa6b6">Popular</li>
													<li class="first-column-link-item_aa6b6">favorites</li>
													<li class="first-column-link-item_aa6b6">Roulette</li>
													<li class="first-column-link-item_aa6b6">blackjack</li>
													<li class="first-column-link-item_aa6b6">Games</li>
												</ul>
												<button class="first-column-btn_d8a4c"> Play </button>
											</div>
											<div class="column_bb693">
												<div class="column-title_5f3c2">Popular Games</div>
												<div>
													<div class="game-container_6b25a">
														<div class="game-content_557e9">
															<div class="live-casino-game-image_755bb">
																<img src={Lucky_6_Roulette} alt="game" />
															</div>
															<div>
																<div class="game-title_41a8a">Lucky 6 Roulette</div>
																<div class="game-provider_58233">Pragmatic Play</div>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="icon_d8f4c"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="game-container_6b25a">
														<div class="game-content_557e9">
															<div class="live-casino-game-image_755bb">
																<img src={Turkish_Mega_Roulette} alt="game" />
															</div>
															<div>
																<div class="game-title_41a8a">Turkish Mega Roulette</div>
																<div class="game-provider_58233">Pragmatic Play</div>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="icon_d8f4c"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="game-container_6b25a">
														<div class="game-content_557e9">
															<div class="live-casino-game-image_755bb">
																<img src={Live_Mega_Wheel} alt="game" />
															</div>
															<div>
																<div class="game-title_41a8a">Live - Mega Wheel</div>
																<div class="game-provider_58233">Pragmatic Play</div>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="icon_d8f4c"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="game-container_6b25a">
														<div class="game-content_557e9">
															<div class="live-casino-game-image_755bb">
																<img src={Live_Mega_Roulette} alt="game" />
															</div>
															<div>
																<div class="game-title_41a8a">Live - Mega Roulette</div>
																<div class="game-provider_58233">Pragmatic Play</div>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="icon_d8f4c"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="game-container_6b25a">
														<div class="game-content_557e9">
															<div class="live-casino-game-image_755bb">
																<img src={Crazy_Time} alt="game" />
															</div>
															<div>
																<div class="game-title_41a8a">Crazy Time</div>
																<div class="game-provider_58233">evolution</div>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="icon_d8f4c"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="game-container_6b25a">
														<div class="game-content_557e9">
															<div class="live-casino-game-image_755bb">
																<img src={Live_Sweet_Bonanza_CandyLand} alt="game" />
															</div>
															<div>
																<div class="game-title_41a8a">Live - Sweet Bonanza CandyLand</div>
																<div class="game-provider_58233">Pragmatic Play</div>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="icon_d8f4c"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
												</div>
											</div>
											<div class="column_bb693">
												<div class="column-title_5f3c2">Popular Providers</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 ezugi_evolution_9c4fa"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">evolution</div>
															<span class="item-count_b76d4"> 101 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 pragmatic_play_casino_61c8d"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Pragmatic Play</div>
															<span class="item-count_b76d4"> 112 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 ezugi_cd96b"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Ezugi</div>
															<span class="item-count_b76d4"> 32 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 bgaming_casino_5eea3"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Bgaming Casino</div>
															<span class="item-count_b76d4"> 21 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 onetouch_casino_6a4b6"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">OneTouch Casino</div>
															<span class="item-count_b76d4"> 48 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 playtech_casino_e02ca"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Playtech Casino</div>
															<span class="item-count_b76d4"> 41 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 egt_casino_c0589"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Amusnet (EGT)</div>
															<span class="item-count_b76d4"> 7 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 lucky_streak_5f655"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Lucky Streak</div>
															<span class="item-count_b76d4"> 15 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 vivo_casino_78b28"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">vivo</div>
															<span class="item-count_b76d4"> 21 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 alg_net_87bd7"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Absolute Gaming</div>
															<span class="item-count_b76d4"> 15 </span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li
									class={currentUrl === '/casino'
										? 'nav-menu-item_cc30f active_90a45'
										: 'nav-menu-item_cc30f'}
								>
									<a
										href="/casino"
										id="CASINO_PROVIDER"
										class="nav-menu-link_d5e39"
										on:mouseenter={() => (slots_modal_show = true)}
										on:mouseleave={() => (slots_modal_show = false)}
									>
										<span class="nav-menu-link-icon_8393e">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												color_secondary="#F0B905"
											>
												<path
													d="M14.5292 3.94167C15.1383 3.32038 15.5384 2.57968 15.5384 1.75757C15.5384 1.4337 15.2632 1.17163 14.9231 1.17163C14.2657 1.17163 13.5512 1.31604 12.8604 1.56308C12.9859 1.96878 13.0769 2.41323 13.0769 2.92944C13.0769 3.19253 13.0455 3.4312 13.0091 3.66514C13.5086 3.72678 14.0197 3.81663 14.5292 3.94167Z"
													fill="#F0B905"
												></path>
												<path
													d="M5.0768 1.17163C4.73666 1.17163 4.46143 1.4337 4.46143 1.75757C4.46143 2.57968 4.86158 3.32042 5.47064 3.94167C5.98017 3.81663 6.49143 3.72682 6.99075 3.66514C6.95448 3.4312 6.92293 3.19245 6.92293 2.92944C6.92293 2.41315 7.01396 1.96862 7.13942 1.56304C6.44864 1.31604 5.73411 1.17163 5.0768 1.17163Z"
													fill="#F0B905"
												></path>
												<path
													d="M11.7884 3.55402C11.8222 3.35866 11.8461 3.15347 11.8461 2.92944C11.8461 0.959299 10.3737 0.115304 10.3113 0.079835C10.1189 -0.0266117 9.88099 -0.0266117 9.68866 0.079835C9.62618 0.115304 8.15381 0.959338 8.15381 2.92944C8.15381 3.15347 8.17769 3.35866 8.21149 3.55402C8.90671 3.51546 9.52677 3.51538 9.99996 3.51538C10.4732 3.51538 11.0932 3.5155 11.7884 3.55402Z"
													fill="#F0B905"
												></path>
												<path
													d="M2 9.41388C2 14.5398 7.20254 19.9999 10 19.9999C12.7975 19.9999 18 14.5398 18 9.41388C18 4.72632 12.5968 4.68726 10 4.68726C7.40324 4.68726 2 4.72632 2 9.41388ZM5.69231 9.99982C5.69231 10.3237 5.41707 10.5858 5.07692 10.5858C4.73678 10.5858 4.46154 10.3237 4.46154 9.99982V8.82793C4.46154 8.50406 4.73678 8.24199 5.07692 8.24199C5.41707 8.24199 5.69231 8.50406 5.69231 8.82793V9.99982ZM14.3077 8.82793C14.3077 8.50406 14.5829 8.24199 14.9231 8.24199C15.2632 8.24199 15.5385 8.50406 15.5385 8.82793V9.99982C15.5385 10.3237 15.2632 10.5858 14.9231 10.5858C14.5829 10.5858 14.3077 10.3237 14.3077 9.99982V8.82793ZM8.15385 13.5155C8.15385 13.8394 7.87861 14.1014 7.53846 14.1014C7.19832 14.1014 6.92308 13.8394 6.92308 13.5155V12.3436C6.92308 12.0197 7.19832 11.7577 7.53846 11.7577C7.87861 11.7577 8.15385 12.0197 8.15385 12.3436V13.5155ZM10.6154 17.0312C10.6154 17.355 10.3401 17.6171 10 17.6171C9.65986 17.6171 9.38462 17.355 9.38462 17.0312V15.8593C9.38462 15.5354 9.65986 15.2733 10 15.2733C10.3401 15.2733 10.6154 15.5354 10.6154 15.8593V17.0312ZM11.8462 12.3436C11.8462 12.0197 12.1214 11.7577 12.4615 11.7577C12.8017 11.7577 13.0769 12.0197 13.0769 12.3436V13.5155C13.0769 13.8394 12.8017 14.1014 12.4615 14.1014C12.1214 14.1014 11.8462 13.8394 11.8462 13.5155V12.3436ZM10.6154 8.82793V9.99982C10.6154 10.3237 10.3401 10.5858 10 10.5858C9.65986 10.5858 9.38462 10.3237 9.38462 9.99982V8.82793C9.38462 8.50406 9.65986 8.24199 10 8.24199C10.3401 8.24199 10.6154 8.50406 10.6154 8.82793Z"
													fill="currentColor"
												></path>
											</svg>
										</span>
										<span class="nav-menu-link-title_42160">3D Slots</span>
										<div
											class="popup-by-link_f48f3"
											style={slots_modal_show ? 'display: none' : 'display: none'}
										>
											<div class="popup-content_419fb">
												<!-- svelte-ignore a11y-no-static-element-interactions -->
												<!-- svelte-ignore a11y-click-events-have-key-events -->
												<div
													class="close-icon-container_7d498"
													on:click={() => (slots_modal_show = false)}
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="8"
														height="8"
														viewBox="0 0 8 8"
														fill="none"
														class="close-icon_bbe65"
													>
														<g clip-path="url(#clip0_34_19925)">
															<path
																d="M5.3158 4.03742C5.29518 4.01679 5.29518 3.98321 5.3158 3.96258L7.83428 1.44287C8.04963 1.22743 8.04963 0.876877 7.83428 0.66143L7.335 0.16191C7.23065 0.0574891 7.0919 0 6.94431 0C6.79672 0 6.65796 0.0574891 6.5536 0.161894L4.03512 2.68164C4.02238 2.69438 4.00784 2.69707 3.9979 2.69707C3.98797 2.69707 3.97343 2.6944 3.96069 2.68164L1.44219 0.161894C1.33783 0.0574891 1.19908 0 1.05148 0C0.903876 0 0.765143 0.0574891 0.660785 0.161894L0.161515 0.66143C-0.0538385 0.876877 -0.0538385 1.22743 0.161515 1.44287L2.68 3.96258C2.70061 3.98321 2.70061 4.01679 2.68 4.03742L0.161515 6.55713C-0.0538229 6.77258 -0.0538229 7.12312 0.161515 7.33857L0.660785 7.83809C0.765143 7.94249 0.903892 7.99998 1.05148 7.99998C1.19907 7.99998 1.33783 7.94249 1.44219 7.83809L3.96067 5.31838C3.97341 5.30562 3.98794 5.30295 3.99789 5.30295C4.00784 5.30295 4.02235 5.30562 4.0351 5.31839L6.55358 7.83811C6.65794 7.94251 6.79669 8 6.94429 8C7.0919 8 7.23063 7.94251 7.33499 7.83811L7.83426 7.33859C8.0496 7.12315 8.0496 6.7726 7.83426 6.55715L5.3158 4.03742Z"
																fill="currentColor"
															></path>
														</g>
													</svg>
												</div>
												<div class="first-column_1a5b6">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="32"
														height="32"
														viewBox="0 0 32 32"
														class="icon_2481e"
													>
														<path
															d="M22.5865 7.916C24.0478 6.54975 24.9592 4.62694 24.9592 2.5V1.25C24.9592 0.559625 24.3862 0 23.6792 0H22.3992C19.7308 0 17.3762 1.33619 15.9992 3.35912C14.6222 1.33619 12.2676 0 9.59922 0H8.31922C7.61228 0 7.03922 0.559625 7.03922 1.25V2.5C7.03922 4.62694 7.95064 6.54981 9.41196 7.916C5.88581 9.01706 3.19922 12.263 3.19922 16.25C3.19922 17.8337 3.6341 19.3787 4.45675 20.7181C4.46085 20.7243 9.73682 28.8283 9.39327 28.311C10.721 30.5358 13.1857 32 15.9992 32C18.8145 32 21.2783 30.5344 22.6051 28.3111C22.6092 28.3048 27.9435 20.1299 27.5418 20.7179C28.3644 19.3787 28.7992 17.8337 28.7992 16.25C28.7992 12.2638 26.1137 9.01731 22.5865 7.916ZM22.3992 2.5C22.3992 5.257 20.1024 7.5 17.2792 7.5C17.2792 4.743 19.5761 2.5 22.3992 2.5ZM14.7192 7.5C11.8961 7.5 9.59922 5.257 9.59922 2.5C12.4224 2.5 14.7192 4.743 14.7192 7.5ZM25.3466 19.4317C25.3425 19.438 20.4652 26.93 20.3966 27.0469C19.4825 28.5829 17.8386 29.5 15.9992 29.5C14.1598 29.5 12.5159 28.5829 11.6018 27.0469C11.5181 26.9064 9.42066 23.6823 6.65202 19.4319C6.05957 18.4675 5.75922 17.3969 5.75922 16.25C5.75922 12.8038 8.6302 10 12.1592 10H19.8392C23.3682 10 26.2392 12.8038 26.2392 16.25C26.2392 17.3969 25.9389 18.4675 25.3466 19.4317Z"
															fill="#AEBBC2"
														></path>
														<path
															d="M10.8796 16.25C11.5865 16.25 12.1596 15.6904 12.1596 15C12.1596 14.3096 11.5865 13.75 10.8796 13.75C10.1727 13.75 9.59961 14.3096 9.59961 15C9.59961 15.6904 10.1727 16.25 10.8796 16.25Z"
															fill="#FBCF44"
														></path>
														<path
															d="M15.9988 16.25C16.7057 16.25 17.2788 15.6904 17.2788 15C17.2788 14.3096 16.7057 13.75 15.9988 13.75C15.2918 13.75 14.7188 14.3096 14.7188 15C14.7188 15.6904 15.2918 16.25 15.9988 16.25Z"
															fill="#FBCF44"
														></path>
														<path
															d="M21.1198 16.25C21.8268 16.25 22.3998 15.6904 22.3998 15C22.3998 14.3096 21.8268 13.75 21.1198 13.75C20.4129 13.75 19.8398 14.3096 19.8398 15C19.8398 15.6904 20.4129 16.25 21.1198 16.25Z"
															fill="#FBCF44"
														></path>
														<path
															d="M13.4402 21.25C14.1471 21.25 14.7202 20.6904 14.7202 20C14.7202 19.3096 14.1471 18.75 13.4402 18.75C12.7332 18.75 12.1602 19.3096 12.1602 20C12.1602 20.6904 12.7332 21.25 13.4402 21.25Z"
															fill="#FBCF44"
														></path>
														<path
															d="M18.5593 21.25C19.2662 21.25 19.8393 20.6904 19.8393 20C19.8393 19.3096 19.2662 18.75 18.5593 18.75C17.8524 18.75 17.2793 19.3096 17.2793 20C17.2793 20.6904 17.8524 21.25 18.5593 21.25Z"
															fill="#FBCF44"
														></path>
														<path
															d="M15.9988 26.25C16.7057 26.25 17.2788 25.6904 17.2788 25C17.2788 24.3096 16.7057 23.75 15.9988 23.75C15.2918 23.75 14.7188 24.3096 14.7188 25C14.7188 25.6904 15.2918 26.25 15.9988 26.25Z"
															fill="#FBCF44"
														></path>
													</svg>
													<div class="title_11523">slot</div>
													<div class="subtitle_5e9ff">
														Multiply your earnings with the most profitable games from popular
														providers!
													</div>
													<ul class="first-column-links-list_d3603">
														<li class="first-column-link-item_aa6b6">Popular</li>
														<li class="first-column-link-item_aa6b6">favorites</li>
														<li class="first-column-link-item_aa6b6">New</li>
														<li class="first-column-link-item_aa6b6">Get Free Spins</li>
														<li class="first-column-link-item_aa6b6">Games</li>
													</ul>
													<button class="first-column-btn_d8a4c"> Play </button>
												</div>
												<div class="column_bb693">
													<div class="column-title_5f3c2">Popular Games</div>
													<div>
														<div class="game-container_6b25a">
															<div class="game-content_557e9">
																<div class="casino-game-image_0e221">
																	<img src={Sugar_Rush} alt="game" />
																</div>
																<div>
																	<div class="game-title_41a8a">Sugar Rush</div>
																	<div class="game-provider_58233">Pragmatic Play</div>
																</div>
															</div>
															<svg
																width="12"
																height="10"
																viewBox="0 0 12 10"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																class="icon_d8f4c"
															>
																<path
																	d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
														<div class="game-container_6b25a">
															<div class="game-content_557e9">
																<div class="casino-game-image_0e221">
																	<img src={Starlight_Princess} alt="game" />
																</div>
																<div>
																	<div class="game-title_41a8a">Starlight Princess</div>
																	<div class="game-provider_58233">Pragmatic Play</div>
																</div>
															</div>
															<svg
																width="12"
																height="10"
																viewBox="0 0 12 10"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																class="icon_d8f4c"
															>
																<path
																	d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
														<div class="game-container_6b25a">
															<div class="game-content_557e9">
																<div class="casino-game-image_0e221">
																	<img src={Gates_of_Olympus} alt="game" />
																</div>
																<div>
																	<div class="game-title_41a8a">Gates of Olympus</div>
																	<div class="game-provider_58233">Pragmatic Play</div>
																</div>
															</div>
															<svg
																width="12"
																height="10"
																viewBox="0 0 12 10"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																class="icon_d8f4c"
															>
																<path
																	d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
														<div class="game-container_6b25a">
															<div class="game-content_557e9">
																<div class="casino-game-image_0e221">
																	<img src={Sweet_Bonanza} alt="game" />
																</div>
																<div>
																	<div class="game-title_41a8a">Sweet Bonanza</div>
																	<div class="game-provider_58233">Pragmatic Play</div>
																</div>
															</div>
															<svg
																width="12"
																height="10"
																viewBox="0 0 12 10"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																class="icon_d8f4c"
															>
																<path
																	d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
														<div class="game-container_6b25a">
															<div class="game-content_557e9">
																<div class="casino-game-image_0e221">
																	<img src={Immortal_Ways_88_Charms} alt="game" />
																</div>
																<div>
																	<div class="game-title_41a8a">Immortal Ways 88 Charms 96</div>
																	<div class="game-provider_58233">Ruby Play</div>
																</div>
															</div>
															<svg
																width="12"
																height="10"
																viewBox="0 0 12 10"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																class="icon_d8f4c"
															>
																<path
																	d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
														<div class="game-container_6b25a">
															<div class="game-content_557e9">
																<div class="casino-game-image_0e221">
																	<img src={Twilight_Princess} alt="game" />
																</div>
																<div>
																	<div class="game-title_41a8a">Twilight Princess</div>
																	<div class="game-provider_58233">Pragmatic Play</div>
																</div>
															</div>
															<svg
																width="12"
																height="10"
																viewBox="0 0 12 10"
																fill="none"
																xmlns="http://www.w3.org/2000/svg"
																class="icon_d8f4c"
															>
																<path
																	d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</div>
												</div>
												<div class="column_bb693">
													<div class="column-title_5f3c2">Popular Providers</div>
													<div>
														<button class="provider_74d36">
															<div class="icon-wrap_2c512">
																<div class="item-icon_df852 pragmatic_play_0e8ca"></div>
															</div>
															<div class="item-right_1536e">
																<div class="item-title_70b24">Pragmatic Play</div>
																<span class="item-count_b76d4"> 408 </span>
															</div>
														</button>
													</div>
													<div>
														<button class="provider_74d36">
															<div class="icon-wrap_2c512">
																<div class="item-icon_df852 the_ear_playngo_a7d4f"></div>
															</div>
															<div class="item-right_1536e">
																<div class="item-title_70b24">PlaynGo</div>
																<span class="item-count_b76d4"> 317 </span>
															</div>
														</button>
													</div>
													<div>
														<button class="provider_74d36">
															<div class="icon-wrap_2c512">
																<div class="item-icon_df852 egt_e85d3"></div>
															</div>
															<div class="item-right_1536e">
																<div class="item-title_70b24">Amusnet (EGT)</div>
																<span class="item-count_b76d4"> 167 </span>
															</div>
														</button>
													</div>
													<div>
														<button class="provider_74d36">
															<div class="icon-wrap_2c512">
																<div class="item-icon_df852"></div>
															</div>
															<div class="item-right_1536e">
																<div class="item-title_70b24">nolimitcity</div>
																<span class="item-count_b76d4"> 85 </span>
															</div>
														</button>
													</div>
													<div>
														<button class="provider_74d36">
															<div class="icon-wrap_2c512">
																<div class="item-icon_df852 falcon_gaming_15a26"></div>
															</div>
															<div class="item-right_1536e">
																<div class="item-title_70b24">Falcon Gaming</div>
																<span class="item-count_b76d4"> one </span>
															</div>
														</button>
													</div>
													<div>
														<button class="provider_74d36">
															<div class="icon-wrap_2c512">
																<div class="item-icon_df852 wazdan_7522a"></div>
															</div>
															<div class="item-right_1536e">
																<div class="item-title_70b24">Wazdan</div>
																<span class="item-count_b76d4"> 241 </span>
															</div>
														</button>
													</div>
													<div>
														<button class="provider_74d36">
															<div class="icon-wrap_2c512">
																<div class="item-icon_df852 yolted_34b41"></div>
															</div>
															<div class="item-right_1536e">
																<div class="item-title_70b24">Yolted</div>
																<span class="item-count_b76d4"> 18 </span>
															</div>
														</button>
													</div>
													<div>
														<button class="provider_74d36">
															<div class="icon-wrap_2c512">
																<div class="item-icon_df852 playson_22780"></div>
															</div>
															<div class="item-right_1536e">
																<div class="item-title_70b24">playson</div>
																<span class="item-count_b76d4"> 83 </span>
															</div>
														</button>
													</div>
													<div>
														<button class="provider_74d36">
															<div class="icon-wrap_2c512">
																<div class="item-icon_df852 endorphina_982ea"></div>
															</div>
															<div class="item-right_1536e">
																<div class="item-title_70b24">endorphina</div>
																<span class="item-count_b76d4"> 140 </span>
															</div>
														</button>
													</div>
													<div>
														<button class="provider_74d36">
															<div class="icon-wrap_2c512">
																<div class="item-icon_df852 platipus_07157"></div>
															</div>
															<div class="item-right_1536e">
																<div class="item-title_70b24">platypus</div>
																<span class="item-count_b76d4"> 104 </span>
															</div>
														</button>
													</div>
												</div>
											</div>
										</div>
									</a>
								</li>
								<li class="nav-menu-item_cc30f">
									<a href="/poker" id="POKER" class="nav-menu-link_d5e39"
										><span class="nav-menu-link-icon_8393e"
											><svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												color_secondary="#F0B905"
											>
												<g clip-path="url(#clip0_1_5912)">
													<path
														d="M18.7111 1.35376L11.1693 0.0239542C10.3211 -0.125616 9.5122 0.44079 9.36263 1.28903L9.29126 1.69384C10.3819 1.82821 11.3034 2.61392 11.5935 3.69653L12.0544 5.41665C12.2984 5.31083 12.5751 5.27271 12.8566 5.32235C13.3909 5.41657 13.8008 5.80106 13.9534 6.28493C14.2624 5.88247 14.7791 5.66134 15.3134 5.75556C16.078 5.8904 16.5886 6.61958 16.4538 7.38423C16.1608 9.04571 14.3779 10.3811 13.5317 10.9304L14.8236 15.7516C14.8928 16.0101 14.9217 16.2698 14.9153 16.5247L16.0022 16.7163C16.8504 16.8659 17.6593 16.2995 17.8089 15.4512L19.9761 3.16056C20.1257 2.31224 19.5593 1.50333 18.7111 1.35376Z"
														fill="#F0B905"
													></path>
													<path
														d="M10.4636 3.99935C10.2769 3.30255 9.64673 2.84298 8.9581 2.84302C8.82451 2.84302 8.68865 2.86032 8.55345 2.89653L1.15634 4.87857C0.324348 5.1015 -0.169402 5.95669 0.0535277 6.78868L3.28365 18.8437C3.47036 19.5405 4.10048 20.0001 4.78912 20.0001C4.92271 20.0001 5.05857 19.9828 5.19372 19.9465L12.5908 17.9645C13.4228 17.7415 13.9166 16.8863 13.6937 16.0544L10.4636 3.99935ZM4.70744 12.2396C4.58201 12.1293 4.53517 11.9544 4.58861 11.7961L5.7197 8.447C5.81431 8.16685 6.16361 8.07325 6.38564 8.26857L9.03978 10.6035C9.16521 10.7138 9.21205 10.8887 9.15861 11.047L8.02751 14.3961C7.93291 14.6763 7.58361 14.7699 7.36158 14.5745L4.70744 12.2396Z"
														fill="currentColor"
													></path>
												</g>
											</svg></span
										><span class="nav-menu-link-title_42160">Poker</span></a
									>
								</li>
								<li
									class={currentUrl === '/other_games'
										? 'nav-menu-item_cc30f active_90a45'
										: 'nav-menu-item_cc30f'}
									on:mouseenter={() => (games_modal_show = true)}
									on:mouseleave={() => (games_modal_show = false)}
								>
									<a href="/other_games" id="OTHER_GAMES" class="nav-menu-link_d5e39">
										<span class="nav-menu-link-icon_8393e">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												color_secondary="#F0B905"
											>
												<g clip-path="url(#clip0_1_5915)">
													<path
														d="M10.1625 6.86594C10.5836 6.44284 11.1111 6.14115 11.6893 5.99265V1.67016C11.6893 1.22721 11.5133 0.802396 11.2001 0.48918C10.8869 0.175963 10.4621 0 10.0191 0L2.50342 0C2.06046 0 1.63565 0.175963 1.32243 0.48918C1.00922 0.802396 0.833252 1.22721 0.833252 1.67016V9.1859C0.833252 9.62885 1.00922 10.0537 1.32243 10.3669C1.63565 10.6801 2.06046 10.8561 2.50342 10.8561H6.17235L10.1625 6.86594ZM8.34899 2.50524C8.51415 2.50524 8.6756 2.55422 8.81293 2.64598C8.95026 2.73774 9.0573 2.86816 9.1205 3.02075C9.18371 3.17335 9.20024 3.34125 9.16802 3.50324C9.1358 3.66523 9.05627 3.81403 8.93948 3.93082C8.82269 4.04761 8.67389 4.12714 8.5119 4.15936C8.34991 4.19158 8.18201 4.17505 8.02941 4.11184C7.87682 4.04864 7.7464 3.9416 7.65464 3.80427C7.56288 3.66694 7.51391 3.50549 7.51391 3.34033C7.51391 3.11885 7.60189 2.90644 7.75849 2.74983C7.9151 2.59323 8.12751 2.50524 8.34899 2.50524ZM8.34899 5.84557C8.51415 5.84557 8.6756 5.89455 8.81293 5.98631C8.95026 6.07807 9.0573 6.20849 9.1205 6.36108C9.18371 6.51367 9.20024 6.68158 9.16802 6.84357C9.1358 7.00556 9.05627 7.15436 8.93948 7.27114C8.82269 7.38793 8.67389 7.46747 8.5119 7.49969C8.34991 7.53191 8.18201 7.51537 8.02941 7.45217C7.87682 7.38896 7.7464 7.28193 7.65464 7.1446C7.56288 7.00727 7.51391 6.84582 7.51391 6.68065C7.51391 6.45918 7.60189 6.24677 7.75849 6.09016C7.9151 5.93355 8.12751 5.84557 8.34899 5.84557ZM4.17358 2.50524C4.33874 2.50524 4.5002 2.55422 4.63752 2.64598C4.77485 2.73774 4.88189 2.86816 4.94509 3.02075C5.0083 3.17335 5.02484 3.34125 4.99261 3.50324C4.96039 3.66523 4.88086 3.81403 4.76407 3.93082C4.64728 4.04761 4.49848 4.12714 4.33649 4.15936C4.1745 4.19158 4.0066 4.17505 3.85401 4.11184C3.70142 4.04864 3.57099 3.9416 3.47923 3.80427C3.38747 3.66694 3.3385 3.50549 3.3385 3.34033C3.3385 3.11885 3.42648 2.90644 3.58309 2.74983C3.7397 2.59323 3.9521 2.50524 4.17358 2.50524ZM4.17358 8.35082C4.00841 8.35082 3.84696 8.30184 3.70963 8.21008C3.5723 8.11832 3.46527 7.9879 3.40206 7.83531C3.33886 7.68272 3.32232 7.51481 3.35454 7.35282C3.38676 7.19083 3.4663 7.04203 3.58309 6.92524C3.69988 6.80845 3.84867 6.72892 4.01066 6.6967C4.17265 6.66448 4.34056 6.68101 4.49315 6.74422C4.64574 6.80743 4.77616 6.91446 4.86792 7.05179C4.95968 7.18912 5.00866 7.35057 5.00866 7.51573C5.00866 7.73721 4.92068 7.94962 4.76407 8.10623C4.60746 8.26283 4.39506 8.35082 4.17358 8.35082Z"
														fill="#F0B905"
													></path>
													<path
														d="M18.4293 11.5899L14.1562 7.31672C14.0149 7.17496 13.8492 7.05979 13.6671 6.97673C12.6096 6.49729 11.4913 6.71796 10.753 7.45691L6.4798 11.7296C6.33804 11.8709 6.22288 12.0365 6.13982 12.2186C5.66038 13.2762 5.88105 14.3945 6.61999 15.1328L10.8931 19.406C11.0344 19.5477 11.2001 19.6629 11.3821 19.746C12.4397 20.2254 13.558 20.0047 14.2963 19.2658L18.5695 14.9927C18.7112 14.8514 18.8264 14.6857 18.9095 14.5036C19.3885 13.4465 19.1678 12.3279 18.4293 11.5899ZM12.5244 14.1964C12.3593 14.1964 12.1978 14.1475 12.0605 14.0557C11.9232 13.9639 11.8161 13.8335 11.7529 13.6809C11.6897 13.5283 11.6732 13.3604 11.7054 13.1984C11.7376 13.0364 11.8172 12.8876 11.9339 12.7709C12.0507 12.6541 12.1995 12.5745 12.3615 12.5423C12.5235 12.5101 12.6914 12.5266 12.844 12.5898C12.9966 12.653 13.127 12.7601 13.2188 12.8974C13.3105 13.0347 13.3595 13.1962 13.3595 13.3614C13.3595 13.5828 13.2715 13.7952 13.1149 13.9518C12.9583 14.1085 12.7459 14.1964 12.5244 14.1964Z"
														fill="currentColor"
													></path>
												</g>
											</svg>
										</span>
										<span class="nav-menu-link-title_42160">Games</span>
									</a>
									<div
										class="popup-by-link_f48f3"
										style={games_modal_show ? 'display: block' : 'display: none'}
									>
										<div class="popup-content_419fb">
											<!-- svelte-ignore a11y-no-static-element-interactions -->
											<!-- svelte-ignore a11y-click-events-have-key-events -->
											<div
												class="close-icon-container_7d498"
												on:click={() => (games_modal_show = false)}
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="8"
													height="8"
													viewBox="0 0 8 8"
													fill="none"
													class="close-icon_bbe65"
												>
													<g clip-path="url(#clip0_34_19925)">
														<path
															d="M5.3158 4.03742C5.29518 4.01679 5.29518 3.98321 5.3158 3.96258L7.83428 1.44287C8.04963 1.22743 8.04963 0.876877 7.83428 0.66143L7.335 0.16191C7.23065 0.0574891 7.0919 0 6.94431 0C6.79672 0 6.65796 0.0574891 6.5536 0.161894L4.03512 2.68164C4.02238 2.69438 4.00784 2.69707 3.9979 2.69707C3.98797 2.69707 3.97343 2.6944 3.96069 2.68164L1.44219 0.161894C1.33783 0.0574891 1.19908 0 1.05148 0C0.903876 0 0.765143 0.0574891 0.660785 0.161894L0.161515 0.66143C-0.0538385 0.876877 -0.0538385 1.22743 0.161515 1.44287L2.68 3.96258C2.70061 3.98321 2.70061 4.01679 2.68 4.03742L0.161515 6.55713C-0.0538229 6.77258 -0.0538229 7.12312 0.161515 7.33857L0.660785 7.83809C0.765143 7.94249 0.903892 7.99998 1.05148 7.99998C1.19907 7.99998 1.33783 7.94249 1.44219 7.83809L3.96067 5.31838C3.97341 5.30562 3.98794 5.30295 3.99789 5.30295C4.00784 5.30295 4.02235 5.30562 4.0351 5.31839L6.55358 7.83811C6.65794 7.94251 6.79669 8 6.94429 8C7.0919 8 7.23063 7.94251 7.33499 7.83811L7.83426 7.33859C8.0496 7.12315 8.0496 6.7726 7.83426 6.55715L5.3158 4.03742Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<div class="first-column_1a5b6">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="32"
													height="32"
													viewBox="0 0 32 32"
													class="icon_2481e"
												>
													<path
														d="M16.2607 10.9855C16.9346 10.3085 17.7785 9.82585 18.7037 9.58824V2.67226C18.7037 1.96353 18.4221 1.28383 17.921 0.782687C17.4198 0.281541 16.7401 0 16.0314 0L4.00625 0C3.29752 0 2.61782 0.281541 2.11667 0.782687C1.61553 1.28383 1.33398 1.96353 1.33398 2.67226V14.6974C1.33398 15.4062 1.61553 16.0859 2.11667 16.587C2.61782 17.0882 3.29752 17.3697 4.00625 17.3697H9.87654L16.2607 10.9855ZM13.3592 4.00839C13.6234 4.00839 13.8817 4.08675 14.1015 4.23357C14.3212 4.38039 14.4925 4.58906 14.5936 4.83321C14.6947 5.07735 14.7212 5.346 14.6696 5.60519C14.6181 5.86437 14.4908 6.10245 14.3039 6.28931C14.1171 6.47617 13.879 6.60343 13.6198 6.65498C13.3606 6.70653 13.092 6.68007 12.8478 6.57895C12.6037 6.47782 12.395 6.30656 12.2482 6.08684C12.1014 5.86711 12.023 5.60878 12.023 5.34452C12.023 4.99016 12.1638 4.65031 12.4144 4.39974C12.6649 4.14916 13.0048 4.00839 13.3592 4.00839ZM13.3592 9.35291C13.6234 9.35291 13.8817 9.43128 14.1015 9.57809C14.3212 9.72491 14.4925 9.93358 14.5936 10.1777C14.6947 10.4219 14.7212 10.6905 14.6696 10.9497C14.6181 11.2089 14.4908 11.447 14.3039 11.6338C14.1171 11.8207 13.879 11.9479 13.6198 11.9995C13.3606 12.0511 13.092 12.0246 12.8478 11.9235C12.6037 11.8223 12.395 11.6511 12.2482 11.4314C12.1014 11.2116 12.023 10.9533 12.023 10.689C12.023 10.3347 12.1638 9.99483 12.4144 9.74426C12.6649 9.49368 13.0048 9.35291 13.3592 9.35291ZM6.67851 4.00839C6.94277 4.00839 7.2011 4.08675 7.42082 4.23357C7.64055 4.38039 7.8118 4.58906 7.91293 4.83321C8.01406 5.07735 8.04052 5.346 7.98896 5.60519C7.93741 5.86437 7.81015 6.10245 7.62329 6.28931C7.43643 6.47617 7.19836 6.60343 6.93917 6.65498C6.67999 6.70653 6.41134 6.68007 6.16719 6.57895C5.92305 6.47782 5.71437 6.30656 5.56755 6.08684C5.42074 5.86711 5.34238 5.60878 5.34238 5.34452C5.34238 4.99016 5.48315 4.65031 5.73372 4.39974C5.98429 4.14916 6.32414 4.00839 6.67851 4.00839ZM6.67851 13.3613C6.41425 13.3613 6.15592 13.2829 5.93619 13.1361C5.71647 12.9893 5.54521 12.7806 5.44408 12.5365C5.34295 12.2923 5.31649 12.0237 5.36805 11.7645C5.4196 11.5053 5.54686 11.2673 5.73372 11.0804C5.92058 10.8935 6.15866 10.7663 6.41784 10.7147C6.67702 10.6632 6.94568 10.6896 7.18982 10.7908C7.43397 10.8919 7.64264 11.0631 7.78946 11.2829C7.93627 11.5026 8.01464 11.7609 8.01464 12.0252C8.01464 12.3795 7.87387 12.7194 7.62329 12.97C7.37272 13.2205 7.03287 13.3613 6.67851 13.3613Z"
														fill="#FBCF44"
													></path>
													<path
														d="M29.4877 18.544L22.6507 11.7068C22.4246 11.48 22.1596 11.2958 21.8682 11.1629C20.1762 10.3958 18.3869 10.7488 17.2056 11.9311L10.3685 18.7675C10.1417 18.9935 9.95739 19.2586 9.82449 19.5499C9.05739 21.242 9.41046 23.0312 10.5928 24.2125L17.4297 31.0497C17.6558 31.2765 17.9209 31.4608 18.2122 31.5936C19.9043 32.3608 21.6935 32.0077 22.8748 30.8254L29.712 23.9884C29.9388 23.7623 30.123 23.4973 30.2559 23.2059C31.0224 21.5145 30.6693 19.7248 29.4877 18.544ZM20.0399 22.7144C19.7756 22.7144 19.5173 22.636 19.2976 22.4892C19.0778 22.3424 18.9066 22.1337 18.8055 21.8896C18.7043 21.6454 18.6779 21.3768 18.7294 21.1176C18.781 20.8584 18.9082 20.6203 19.0951 20.4335C19.282 20.2466 19.52 20.1194 19.7792 20.0678C20.0384 20.0162 20.3071 20.0427 20.5512 20.1438C20.7953 20.245 21.004 20.4162 21.1508 20.6359C21.2976 20.8557 21.376 21.114 21.376 21.3783C21.376 21.7326 21.2352 22.0725 20.9847 22.323C20.7341 22.5736 20.3942 22.7144 20.0399 22.7144Z"
														fill="#AEBBC2"
													></path>
												</svg>
												<div class="title_11523">Games</div>
												<div class="subtitle_5e9ff">
													Multiply your earnings with the most profitable demonstration games from
													popular providers!
												</div>
												<ul class="first-column-links-list_d3603">
													<li class="first-column-link-item_aa6b6">favorites</li>
												</ul>
												<button class="first-column-btn_d8a4c"> Play </button>
											</div>
											<div class="column_bb693">
												<div class="column-title_5f3c2">Popular Games</div>
												<div>
													<div class="game-container_6b25a">
														<div class="game-content_557e9">
															<div class="casino-game-image_0e221">
																<img src={Big_Bass_Crash} alt="game" />
															</div>
															<div>
																<div class="game-title_41a8a">Big Bass Crash</div>
																<div class="game-provider_58233">Pragmatic Play</div>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="icon_d8f4c"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="game-container_6b25a">
														<div class="game-content_557e9">
															<div class="casino-game-image_0e221">
																<img src={Live_Spaceman} alt="game" />
															</div>
															<div>
																<div class="game-title_41a8a">Live - Spaceman</div>
																<div class="game-provider_58233">Pragmatic Play</div>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="icon_d8f4c"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="game-container_6b25a">
														<div class="game-content_557e9">
															<div class="casino-game-image_0e221">
																<img src={T_Basket} alt="game" />
															</div>
															<div>
																<div class="game-title_41a8a">T-Basket</div>
																<div class="game-provider_58233">Twain Sports</div>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="icon_d8f4c"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="game-container_6b25a">
														<div class="game-content_557e9">
															<div class="casino-game-image_0e221">
																<img src={T_Kick} alt="game" />
															</div>
															<div>
																<div class="game-title_41a8a">T-Kick</div>
																<div class="game-provider_58233">Twain Sports</div>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="icon_d8f4c"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="game-container_6b25a">
														<div class="game-content_557e9">
															<div class="casino-game-image_0e221">
																<img src={Twain_Sport} alt="game" />
															</div>
															<div>
																<div class="game-title_41a8a">Twain Sports</div>
																<div class="game-provider_58233">Twain Sports</div>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="icon_d8f4c"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
													<div class="game-container_6b25a">
														<div class="game-content_557e9">
															<div class="casino-game-image_0e221">
																<img src={Raptor} alt="game" />
															</div>
															<div>
																<div class="game-title_41a8a">raptor</div>
																<div class="game-provider_58233">Falcon Gaming</div>
															</div>
														</div>
														<svg
															width="12"
															height="10"
															viewBox="0 0 12 10"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
															class="icon_d8f4c"
														>
															<path
																d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
																fill="currentColor"
															></path>
														</svg>
													</div>
												</div>
											</div>
											<div class="column_bb693">
												<div class="column-title_5f3c2">Popular Providers</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 pragmatic_play_casino_61c8d"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Pragmatic Play</div>
															<span class="item-count_b76d4"> 2 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 twain_sport_ce8ed"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Twain Sports</div>
															<span class="item-count_b76d4"> 3 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 falcon_gaming_15a26"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Falcon Gaming</div>
															<span class="item-count_b76d4"> 9 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 sport_games_tv_200ac"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">SportGamesTV</div>
															<span class="item-count_b76d4"> 7 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 spribe_e83c1"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Spribe</div>
															<span class="item-count_b76d4"> 7 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 betsolutions_ce304"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Betsolutions</div>
															<span class="item-count_b76d4"> one </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 the_ear_three_cherry_95682"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Triple Cherry</div>
															<span class="item-count_b76d4"> one </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 betsoft_games_33322"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Betsoft</div>
															<span class="item-count_b76d4"> one </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 the_ear_gamzix_ba456"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">gamzix</div>
															<span class="item-count_b76d4"> 3 </span>
														</div>
													</button>
												</div>
												<div>
													<button class="provider_74d36">
														<div class="icon-wrap_2c512">
															<div class="item-icon_df852 lucky_streak_fugaso_3b806"></div>
														</div>
														<div class="item-right_1536e">
															<div class="item-title_70b24">Fugaso</div>
															<span class="item-count_b76d4"> one </span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
								</li>
								<li class="nav-menu-item_cc30f">
									<a href="/game/aviator/play" id="AVIATOR" class="nav-menu-link_d5e39"
										><span class="nav-menu-link-icon_8393e"
											><svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="21"
												viewBox="0 0 20 21"
												color_secondary="#F0B905"
											>
												<g clip-path="url(#clip0_1_646)">
													<path
														d="M19.414 9.41902H19.3452V7.28787C19.3452 6.96425 19.0828 6.7019 18.7592 6.7019C18.4356 6.7019 18.1733 6.96425 18.1733 7.28787V9.41902H17.3959V8.67647C17.3959 8.17329 16.9866 7.76396 16.4834 7.76396H15.9014V12.246H16.4835C16.9867 12.246 17.396 11.8367 17.396 11.3335V10.5909H18.1733V12.7221C18.1733 13.0457 18.4357 13.308 18.7593 13.308C19.0829 13.308 19.3452 13.0457 19.3452 12.7221V10.5909H19.4141C19.7377 10.5909 20 10.3286 20 10.005C20 9.68141 19.7376 9.41902 19.414 9.41902Z"
														fill="currentColor"
													></path>
													<path
														d="M13.2444 0H11.0054C10.2622 0 9.65747 0.604675 9.65747 1.34793V2.78263H14.5923V1.34793C14.5923 0.604675 13.9876 0 13.2444 0Z"
														fill="#F0B905"
													></path>
													<path
														d="M14.5922 3.95435H9.65741V16.0553H14.5922V3.95435Z"
														fill="currentColor"
													></path>
													<path
														d="M9.65753 17.2273V18.6556C9.65753 19.3988 10.2622 20.0035 11.0055 20.0035H13.2444C13.9877 20.0035 14.5924 19.3988 14.5924 18.6556V17.2273H9.65753Z"
														fill="#F0B905"
													></path>
													<path
														d="M4.49599 7.76382L3.93694 6.58033C3.81997 6.33264 3.56743 6.17261 3.29347 6.17261H0.712127C0.466967 6.17261 0.24228 6.29622 0.111007 6.50333C-0.0201878 6.71043 -0.036089 6.96642 0.0686166 7.18817L1.36892 9.94103L0.0686557 12.6939C-0.036089 12.9156 -0.0201878 13.1716 0.111046 13.3787C0.24228 13.5858 0.466967 13.7094 0.712166 13.7094H3.29355C3.56754 13.7094 3.82013 13.5494 3.93702 13.3017L4.4357 12.2459H8.4246V7.76382H4.49599Z"
														fill="currentColor"
													></path>
												</g>
												<defs>
													<clippath id="clip0_1_646">
														<rect width="20" height="20.0035" fill="white"></rect>
													</clippath>
												</defs>
											</svg></span
										><span class="nav-menu-link-title_42160">Aviator</span></a
									>
								</li>
								<li class="nav-menu-item_cc30f">
									<a href="/zeppelin" id="ZEPPELIN" class="nav-menu-link_d5e39"
										><span class="nav-menu-link-icon_8393e"
											><svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="14"
												viewBox="0 0 20 14"
												color_secondary="#F0B905"
											>
												<g clip-path="url(#clip0_1_627)">
													<path
														d="M12.9689 12.0305C11.4291 12.0305 9.28047 11.6304 7.02869 10.9465V13.0346C7.02869 13.567 7.46677 14.0001 8.00525 14.0001H14.618C15.1565 14.0001 15.5946 13.567 15.5946 13.0346V11.7306C14.7762 11.9289 13.8963 12.0305 12.9689 12.0305Z"
														fill="currentColor"
													></path>
													<path
														d="M1.0044 2.54826C1.7501 2.07782 2.71472 1.59348 3.82624 1.12949L1.62643 0.0595364C1.44483 -0.0288281 1.22991 -0.0182847 1.05815 0.0875364C0.886314 0.19328 0.78186 0.37924 0.78186 0.579334V2.68993C0.855493 2.64261 0.929673 2.59538 1.0044 2.54826Z"
														fill="currentColor"
													></path>
													<path
														d="M1.00467 8.38156C0.929868 8.33437 0.85561 8.28713 0.78186 8.23975V10.3504C0.78186 10.5505 0.886314 10.7364 1.05815 10.8422C1.1526 10.9003 1.26003 10.9297 1.36784 10.9297C1.45616 10.9297 1.54464 10.91 1.62643 10.8702L3.8264 9.80011C2.71483 9.33611 1.75026 8.85181 1.00467 8.38156Z"
														fill="currentColor"
													></path>
													<path
														d="M19.9923 5.19315C19.7006 4.34763 18.0053 3.47388 13.9455 3.47388C10.3984 3.47388 4.80431 4.71441 1.74573 5.46466C4.80435 6.2149 10.3985 7.45543 13.9455 7.45543C15.506 7.45543 17.6457 7.32011 18.9773 6.67533C19.3793 6.48065 19.8451 6.17161 19.9919 5.74303C19.9973 5.65077 20 5.55796 20 5.46466C20 5.37366 19.9974 5.28318 19.9923 5.19315Z"
														fill="#F0B905"
													></path>
													<path
														d="M13.9455 2.31535C16.3363 2.31535 18.171 2.60327 19.402 3.17099C19.0765 2.58921 18.6232 2.06181 18.0531 1.61265C16.7622 0.595499 15.0041 0.0578613 12.9689 0.0578613C11.0545 0.0578613 7.9545 0.773386 5.07115 1.88076C3.68284 2.41395 2.49456 2.98249 1.63472 3.52491C0.99316 3.92962 0.351639 4.31416 0 4.68569C2.41843 4.05548 9.57836 2.31535 13.9455 2.31535Z"
														fill="currentColor"
													></path>
													<path
														d="M13.9455 8.61424C9.5784 8.61424 2.41847 6.87411 0 6.2439C0.351639 6.61547 0.993277 6.99997 1.63492 7.40476C2.49483 7.94714 3.68323 8.51564 5.07158 9.04887C7.95505 10.1562 11.0549 10.8718 12.9688 10.8718C15.0036 10.8718 16.7616 10.3341 18.0526 9.31702C18.6227 8.86786 19.0761 8.34046 19.4018 7.75875C18.1707 8.32636 16.3361 8.61424 13.9455 8.61424Z"
														fill="currentColor"
													></path>
												</g>
												<defs>
													<clippath id="clip0_1_627">
														<rect width="20" height="14" fill="white"></rect>
													</clippath>
												</defs>
											</svg></span
										><span class="nav-menu-link-title_42160">Zeppelin</span></a
									>
								</li>
								<li class="nav-menu-item_cc30f">
									<a href="/game/live_spaceman/play" id="SPACEMAN" class="nav-menu-link_d5e39"
										><span class="nav-menu-link-icon_8393e"
											><svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="16"
												viewBox="0 0 20 16"
												color_secondary="#F0B905"
											>
												<g clip-path="url(#clip0_1_638)">
													<path
														d="M8.56338 5.69487V8.13554C8.56338 8.36605 8.38029 8.54232 8.14085 8.54232H7.01409C6.77465 8.54232 6.59155 8.36605 6.59155 8.13554V5.69487C6.59155 5.46436 6.77465 5.28809 7.01409 5.28809H8.14085C8.3662 5.28809 8.56338 5.46436 8.56338 5.69487Z"
														fill="#F0B905"
													></path>
													<path
														d="M13.3521 5.69487V8.13554C13.3521 8.36605 13.169 8.54232 12.9295 8.54232H11.8028C11.5633 8.54232 11.3802 8.36605 11.3802 8.13554V5.69487C11.3802 5.46436 11.5633 5.28809 11.8028 5.28809H12.9295C13.1549 5.28809 13.3521 5.46436 13.3521 5.69487Z"
														fill="#F0B905"
													></path>
													<path
														d="M10 0C5.71833 0 2.25354 3.21356 2.25354 7.18644C2.25354 11.1593 5.71833 14.3729 10 14.3729C14.2817 14.3729 17.7465 11.1593 17.7465 7.18644C17.7465 3.21356 14.2817 0 10 0ZM14.9155 11.1186C13.5634 11.9729 11.8592 12.4746 10 12.4746C8.14086 12.4746 6.43664 11.9729 5.08453 11.1186C4.63382 10.8339 4.36622 10.3458 4.36622 9.81695V4.82712C4.36622 4.31186 4.63382 3.81017 5.08453 3.52542C6.43664 2.67119 8.14086 2.16949 10 2.16949C11.8592 2.16949 13.5634 2.67119 14.9155 3.52542C15.3662 3.81017 15.6338 4.29831 15.6338 4.82712V9.81695C15.6338 10.3322 15.3662 10.8339 14.9155 11.1186Z"
														fill="currentColor"
													></path>
													<path
														d="M10 15.227C7.25354 15.227 4.85917 14.0474 3.66199 11.9321C4.50706 14.4406 7.02818 15.9999 10 15.9999C12.9718 15.9999 15.493 14.4406 16.338 11.9321C15.1409 14.0474 12.7465 15.227 10 15.227Z"
														fill="currentColor"
													></path>
													<path
														d="M2.15493 10.4406H1.40845C0.633803 10.4406 0 9.83041 0 9.08464V6.37278C0 5.62702 0.633803 5.01685 1.40845 5.01685H1.73239C1.52113 5.70837 1.40845 6.44057 1.40845 7.18634C1.40845 8.33888 1.67606 9.45074 2.15493 10.4406Z"
														fill="currentColor"
													></path>
													<path
														d="M20 6.37278V9.08464C20 9.83041 19.3662 10.4406 18.5916 10.4406H17.8451C18.324 9.45074 18.5916 8.33888 18.5916 7.18634C18.5916 6.44057 18.4789 5.70837 18.2676 5.01685H18.5916C19.3662 5.01685 20 5.62702 20 6.37278Z"
														fill="currentColor"
													></path>
												</g>
												<defs>
													<clippath id="clip0_1_638">
														<rect width="20" height="16" fill="white"></rect>
													</clippath>
												</defs>
											</svg></span
										><span class="nav-menu-link-title_42160">Spaceman</span></a
									>
								</li>
								<li
									class={currentUrl === '/promo'
										? 'nav-menu-item_cc30f active_90a45'
										: 'nav-menu-item_cc30f'}
								>
									<a href="/promo" id="PROMOTIONS" class="nav-menu-link_d5e39"
										><span class="nav-menu-link-icon_8393e"
											><svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												viewBox="0 0 20 20"
												fill="none"
												color_secondary="#F0B905"
											>
												<path
													d="M15.1581 1.66663H4.84175C4.62249 1.66663 4.5146 1.92496 4.67234 2.07255L9.83034 6.89791C9.92487 6.98631 10.0747 6.98631 10.1692 6.89791L15.3275 2.07251C15.4853 1.925 15.3774 1.66663 15.1581 1.66663Z"
													fill="currentColor"
												></path>
												<path
													d="M7.75597 6.92702L3.21824 2.68192C3.10742 2.57828 2.9264 2.59886 2.8434 2.72447L0.0388304 6.96954C-0.0649976 7.1267 0.0515648 7.33287 0.24426 7.33287H7.58652C7.80573 7.33291 7.91362 7.07454 7.75597 6.92702Z"
													fill="#F0B905"
												></path>
												<path
													d="M19.9613 6.96959L17.1567 2.72449C17.0737 2.59884 16.8927 2.5783 16.7819 2.6819L12.2438 6.927C12.0862 7.07452 12.194 7.33293 12.4132 7.33293H19.7558C19.9486 7.33289 20.0651 7.12675 19.9613 6.96959Z"
													fill="#F0B905"
												></path>
												<path
													d="M9.02438 8.74963H0.429629C0.217676 8.74963 0.106622 8.99345 0.249591 9.14497L8.84438 18.2556C8.9945 18.4147 9.26829 18.3118 9.26829 18.0963V8.98573C9.26821 8.85535 9.15907 8.74963 9.02438 8.74963Z"
													fill="currentColor"
												></path>
												<path
													d="M19.5704 8.74963H10.9753C10.8406 8.74963 10.7314 8.85531 10.7314 8.98573V18.0967C10.7314 18.3122 11.0052 18.4151 11.1554 18.2559L19.7505 9.14497C19.8934 8.99341 19.7824 8.74963 19.5704 8.74963Z"
													fill="currentColor"
												></path>
											</svg></span
										>
										<span class="nav-menu-link-title_42160">Promotions</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
