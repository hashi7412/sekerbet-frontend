<script>
	import MLMenuContainer from './desktop/main/MLMenuContainer.svelte';
	import BetineAvatarDefault from '$lib/images/betine-avatar-default.png';
	import ButterflyLovers from '$lib/images/games/Butterfly_Lovers.webp';
	import Banner from '$lib/components/_utils/Banner.svelte';
	import Coins from '$lib/images/mobile/casino/36_Coins_11971.webp';
	import MlContainer from './desktop/main/MLContainer.svelte';

	let is_show_providers_modal = false;
	let is_show_search_modal = false;

	const toggleProvidersModal = () => {
		is_show_providers_modal = !is_show_providers_modal;
		is_show_search_modal = false;
	};

	const toggleSearchModal = () => {
		is_show_search_modal = !is_show_search_modal;
		is_show_providers_modal = false;
	};
</script>

<div class="main-content-wrapper_d5326 home-desktop">
	<Banner></Banner>
	<div>
		<div class="casino-slider_e04f9 main-slider_9a25c">
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
	<MlContainer />

	<MLMenuContainer />
	
</div>

<div class="main-content-wrapper_a4af2 home-mobile">
	<div class="pb50" style="padding-bottom: 50px;">
		<div class="tabs-filter-wrapper_9f8b7">
			<div class="menu_394b8">
				<button class="tab_98f57">Popular</button><button class="tab_98f57 selected_812eb"
					>All</button
				><button class="tab_98f57">Yeni</button><button class="tab_98f57">Jackpot Oyunları</button
				><button class="tab_98f57">Bonus Satın Al</button><button class="tab_98f57">Arcade</button>
			</div>
		</div>
		<h1 class="main-title_a177a">All providers / all</h1>
		<div>
			<div class="games-container_ac53e">
				<div class="games-header_b887b">
					<div class="df aic" style="display: flex; align-items: center;">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="games-block-icon_cf9e0"
						>
							<g clip-path="url(#clip0_1_4018)">
								<path
									d="M4.16345 8.43582L2.20422 13.5535V13.5539C2.68366 15.4295 3.73746 17.0876 5.22922 18.3383L7.68742 17.4357C5.07641 15.1455 3.78768 11.777 4.16345 8.43582Z"
									fill="currentColor"
								></path>
								<path
									d="M1.54094 15.2858L0.0392115 19.207C-0.140278 19.6754 0.327591 20.1386 0.80942 19.9613L3.97761 18.7981C2.91495 17.7881 2.09062 16.5844 1.54094 15.2858Z"
									fill="currentColor"
								></path>
								<path
									d="M8.36353 7.95852L6.13028 5.77155C4.31959 9.77138 5.55747 14.3432 8.97379 16.9634L11.3574 16.0881C9.26401 13.971 8.13175 11.016 8.36353 7.95852Z"
									fill="currentColor"
								></path>
								<path
									d="M9.53186 9.1026C9.6236 11.5888 10.7293 13.9382 12.5999 15.6315H12.6003L14.3474 14.9901C14.7554 14.8401 14.8671 14.3273 14.5604 14.0269L9.53186 9.1026Z"
									fill="currentColor"
								></path>
								<path
									d="M13.9017 10.9433C14.1353 11.1721 14.5141 11.1721 14.7478 10.9433C16.9987 8.73906 19.1904 9.42054 19.2123 9.42765C19.5258 9.52995 19.8646 9.36406 19.9691 9.05709C20.0737 8.75019 19.9042 8.4183 19.5907 8.31596C19.4727 8.27749 16.6697 7.40403 13.9017 10.1147C13.668 10.3435 13.668 10.7145 13.9017 10.9433Z"
									fill="currentColor"
								></path>
								<path
									d="M10.0942 6.38597C12.8623 3.67559 11.97 0.930445 11.9309 0.814827C11.8264 0.507814 11.4874 0.342199 11.1739 0.444537C10.8608 0.546874 10.6913 0.878495 10.7958 1.18551C10.8029 1.20699 11.499 3.35334 9.24777 5.5575C9.01559 5.78487 9.01324 6.15559 9.24777 6.38597C9.48266 6.61596 9.86115 6.61416 10.0942 6.38597Z"
									fill="currentColor"
								></path>
								<path
									d="M11.3634 7.62897C11.1297 7.85778 11.1297 8.22873 11.3634 8.45755C11.5949 8.68429 11.971 8.68726 12.2059 8.46102C12.515 8.31021 13.4743 8.87588 14.0075 8.35396C14.5349 7.83743 13.9746 6.91706 14.1145 6.5945C14.4443 6.45708 15.3838 7.00611 15.9113 6.48966C16.4388 5.97313 15.8784 5.05276 16.0183 4.73016C16.3486 4.59271 17.2876 5.14181 17.815 4.62532C18.3426 4.10879 17.7822 3.18842 17.9221 2.86582C18.2505 2.72907 19.1918 3.27693 19.7189 2.76094C20.2518 2.23898 19.6753 1.29783 19.8281 0.996716C20.0583 0.767668 20.0571 0.399292 19.8246 0.171611C19.591 -0.0572035 19.2121 -0.0572035 18.9785 0.171611C18.5069 0.633418 18.5992 1.28537 18.688 1.75147C18.212 1.66449 17.5463 1.57414 17.0747 2.03591C16.6032 2.49772 16.6954 3.14967 16.7842 3.61577C16.3083 3.52883 15.6425 3.4384 15.171 3.90025C14.6994 4.36206 14.7917 5.01401 14.8805 5.48011C14.4045 5.39313 13.7388 5.30274 13.2672 5.76455C12.7956 6.22636 12.8879 6.87831 12.9767 7.34441C12.5007 7.2575 11.8349 7.16716 11.3634 7.62897Z"
									fill="currentColor"
								></path>
								<path
									d="M14.7478 2.65739C14.9815 2.42857 14.9815 2.05762 14.7478 1.82881C14.5141 1.59999 14.1353 1.59999 13.9017 1.82881C13.668 2.05762 13.668 2.42857 13.9017 2.65739C14.1353 2.8862 14.5141 2.8862 14.7478 2.65739Z"
									fill="currentColor"
								></path>
								<path
									d="M18.5553 6.97197C18.8858 6.97197 19.1536 6.70966 19.1536 6.38607C19.1536 6.06249 18.8858 5.80017 18.5553 5.80017C18.2249 5.80017 17.957 6.06249 17.957 6.38607C17.957 6.70966 18.2249 6.97197 18.5553 6.97197Z"
									fill="currentColor"
								></path>
								<path
									d="M17.2862 11.7719C17.0525 12.0007 17.0525 12.3717 17.2862 12.6005C17.5199 12.8293 17.8987 12.8293 18.1323 12.6005C18.366 12.3717 18.366 12.0007 18.1323 11.7719C17.8987 11.5431 17.5199 11.5431 17.2862 11.7719Z"
									fill="currentColor"
								></path>
								<path
									d="M8.82494 3.48597C9.0586 3.25716 9.0586 2.8862 8.82494 2.65739C8.59129 2.42858 8.21249 2.42858 7.97883 2.65739C7.74518 2.88616 7.74518 3.25716 7.97883 3.48597C8.21249 3.71479 8.59133 3.71479 8.82494 3.48597Z"
									fill="currentColor"
								></path>
							</g>
						</svg>
						<h2 class="games-title_68dbc">All providers New Games</h2>
					</div>
					<div class="games-amount_f0a29">
						<a href="/casino/tabs/yeni"
							>See All
							<span>(99)</span></a
						>
					</div>
				</div>
				<div>
					<div class="games_6f5b6 not-tournament_0d982">
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c" style="background-color: rgb(123, 224, 175);">
										Yeni
									</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">36 Coins™</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//wazdan/36_Coins_11971.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">36 Coins™</div>
								<div class="game-title-provider_860c0">Wazdan</div>
							</div>
						</div>
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c" style="background-color: rgb(123, 224, 175);">
										Yeni
									</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Stampede Gold</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//betsoft_games/Stampede_Gold_12054.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Stampede Gold</div>
								<div class="game-title-provider_860c0">Betsoft</div>
							</div>
						</div>
					</div>
					<div class="games_6f5b6 not-tournament_0d982">
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c" style="background-color: rgb(123, 224, 175);">
										Yeni
									</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">J Mania Diamonds</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//ruby_play/J_Mania_Diamonds_96_12055.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">J Mania Diamonds</div>
								<div class="game-title-provider_860c0">Ruby Play</div>
							</div>
						</div>
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c" style="background-color: rgb(123, 224, 175);">
										Yeni
									</div>
									<div class="game-tag_5781c">Bonus Satın Al</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Sizzling Bells™</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//wazdan/Sizzling_Bells_9484.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Sizzling Bells™</div>
								<div class="game-title-provider_860c0">Wazdan</div>
							</div>
						</div>
					</div>
					<div class="games_6f5b6 not-tournament_0d982">
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c" style="background-color: rgb(123, 224, 175);">
										Yeni
									</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Power Wildz Fruit Saga</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//lucky_streak_fugaso/Power_Wildz_Fruit_Saga_10254.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Power Wildz Fruit Saga</div>
								<div class="game-title-provider_860c0">Fugaso</div>
							</div>
						</div>
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c" style="background-color: rgb(123, 224, 175);">
										Yeni
									</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Astro Cash</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//betsoft_games/Astro_Cash_10956.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Astro Cash</div>
								<div class="game-title-provider_860c0">Betsoft</div>
							</div>
						</div>
					</div>
					<button type="button" class="btn_b6ffd">Show more</button>
				</div>
			</div>
			<div class="games-container_ac53e">
				<div class="games-header_b887b">
					<div class="df aic" style="display: flex; align-items: center;">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							class="games-block-icon_cf9e0"
						>
							<g clip-path="url(#clip0_301_12615)">
								<path
									d="M14.5937 3.27398C14.5151 3.03715 14.3063 2.86441 14.0555 2.82867L11.6679 2.48812L10.5998 0.364609C10.4878 0.141406 10.2561 0 10.0022 0C9.74825 0 9.51647 0.141406 9.40451 0.364609L8.33637 2.48816L5.94838 2.82871C5.6975 2.86449 5.48873 3.03719 5.4102 3.27402C5.33166 3.51086 5.39718 3.7709 5.57905 3.94469L7.30736 5.59758L6.89898 7.93133C6.85599 8.17688 6.95888 8.425 7.16419 8.57133C7.36994 8.71828 7.64207 8.73637 7.86645 8.62117L10.0023 7.51926L12.1378 8.62117C12.3673 8.73934 12.6384 8.71496 12.84 8.57133C13.0453 8.42504 13.1482 8.17691 13.1052 7.93156L12.6972 5.59758L14.4251 3.94469C14.6067 3.7709 14.6718 3.51082 14.5937 3.27398Z"
									fill="currentColor"
								></path>
								<path
									d="M12.6666 9.96814H7.3333C6.96511 9.96814 6.66663 10.2611 6.66663 10.6224V20H13.3333V10.6224C13.3333 10.2611 13.0348 9.96814 12.6666 9.96814Z"
									fill="currentColor"
								></path>
								<path
									d="M0.666673 12.5852C0.298488 12.5852 0 12.8781 0 13.2395V19.4828C0 19.7685 0.235997 20 0.527081 20H5.33335V12.5852H0.666673Z"
									fill="currentColor"
								></path>
								<path
									d="M19.3333 15.2021H14.6666V20H19.4729C19.764 20 20 19.7684 20 19.4827V15.8564C19.9999 15.4951 19.7014 15.2021 19.3333 15.2021Z"
									fill="currentColor"
								></path>
							</g>
						</svg>
						<h2 class="games-title_68dbc">All providers Popular Games</h2>
					</div>
					<div class="games-amount_f0a29">
						<a href="/casino/tabs/casino_popular"
							>See All
							<span>(153)</span></a
						>
					</div>
				</div>
				<div>
					<div class="games_6f5b6 not-tournament_0d982">
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c">Bonus Satın Al</div>
									<div class="game-tag_5781c">Popüler</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Sweet Bonanza</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sweet_Bonanza_11003.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Sweet Bonanza</div>
								<div class="game-title-provider_860c0">Pragmatic Play</div>
							</div>
						</div>
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c">Bonus Satın Al</div>
									<div class="game-tag_5781c">Popüler</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Gates of Olympus</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Gates_of_Olympus_9334.png"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Gates of Olympus</div>
								<div class="game-title-provider_860c0">Pragmatic Play</div>
							</div>
						</div>
					</div>
					<div class="games_6f5b6 not-tournament_0d982">
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c">Bonus Satın Al</div>
									<div class="game-tag_5781c">Popüler</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Starlight Princess</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Starlight_Princess_9354.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Starlight Princess</div>
								<div class="game-title-provider_860c0">Pragmatic Play</div>
							</div>
						</div>
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c">Bonus Satın Al</div>
									<div class="game-tag_5781c">Popüler</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Sugar Rush</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Sugar Rush</div>
								<div class="game-title-provider_860c0">Pragmatic Play</div>
							</div>
						</div>
					</div>
					<div class="games_6f5b6 not-tournament_0d982">
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c">Popüler</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Twilight Princess</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Twilight_Princess_10406.png"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Twilight Princess</div>
								<div class="game-title-provider_860c0">Pragmatic Play</div>
							</div>
						</div>
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c">Popüler</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Immortal Ways 88 Charms 96</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//ruby_play/Immortal_Ways_88_Charms_96_11527.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Immortal Ways 88 Charms 96</div>
								<div class="game-title-provider_860c0">Ruby Play</div>
							</div>
						</div>
					</div>
					<button type="button" class="btn_b6ffd">Show more</button>
				</div>
			</div>
			<div class="games-container_ac53e">
				<div class="games-header_b887b">
					<div class="df aic" style="display: flex; align-items: center;">
						<div class="games-icon_f6be3"></div>
						<h2 class="games-title_68dbc">All providers All Games</h2>
					</div>
					<div class="games-amount_f0a29">Total (4360)</div>
				</div>
				<div>
					<div class="games_6f5b6 not-tournament_0d982">
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c">Bonus Satın Al</div>
									<div class="game-tag_5781c">Popüler</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Sweet Bonanza</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sweet_Bonanza_11003.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Sweet Bonanza</div>
								<div class="game-title-provider_860c0">Pragmatic Play</div>
							</div>
						</div>
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c">Bonus Satın Al</div>
									<div class="game-tag_5781c">Popüler</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Gates of Olympus</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Gates_of_Olympus_9334.png"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Gates of Olympus</div>
								<div class="game-title-provider_860c0">Pragmatic Play</div>
							</div>
						</div>
					</div>
					<div class="games_6f5b6 not-tournament_0d982">
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c">Bonus Satın Al</div>
									<div class="game-tag_5781c">Popüler</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Starlight Princess</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Starlight_Princess_9354.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Starlight Princess</div>
								<div class="game-title-provider_860c0">Pragmatic Play</div>
							</div>
						</div>
						<div>
							<div class="game_7bd43">
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Viking Rising</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//egt/Viking_Rising_11632.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Viking Rising</div>
								<div class="game-title-provider_860c0">Amusnet (EGT)</div>
							</div>
						</div>
					</div>
					<div class="games_6f5b6 not-tournament_0d982">
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c">Bonus Satın Al</div>
									<div class="game-tag_5781c">Popüler</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Sugar Rush</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Sugar Rush</div>
								<div class="game-title-provider_860c0">Pragmatic Play</div>
							</div>
						</div>
						<div>
							<div class="game_7bd43">
								<div class="game-tags_ec204">
									<div class="game-tag_5781c">Bonus Satın Al</div>
								</div>
								<div class="game-info_5bae6">
									<div class="game-info-bottom_e09dc">
										<div class="game-name_8bbfc">Money Train 3</div>
										<div class="game-actions_dc32a">
											<button class="btn_207f0 play_c2472">Play</button>
										</div>
									</div>
								</div>
								<img
									src={Coins}
									alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//relax_gaming_relax/Money_Train_3_11981.webp"
									class="game-image_eca1d"
								/>
							</div>
							<div class="game-footer_49567">
								<div class="game-title_02b48">Money Train 3</div>
								<div class="game-title-provider_860c0">Relax Gaming</div>
							</div>
						</div>
					</div>
					<button type="button" class="btn_b6ffd">Show more</button>
				</div>
			</div>
		</div>
		<div class="casino-top-winners-wrapper_95ddb">
			<div class="winners-title_083ab title_f216a h3_23ac1 gray_7fd84 opened_ae973">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
				>
					<g clip-path="url(#clip0_312_13203)">
						<path
							d="M11.1948 2.39859L10.011 0H9.98692L8.80316 2.39859L6.15582 2.78327L6.14844 2.80593L8.06411 4.6732L7.61177 7.31038L7.63064 7.32409L9.999 6.07899L12.3673 7.32409L12.3862 7.31038L11.9339 4.6732L13.8495 2.80593L13.8422 2.78327L11.1948 2.39859Z"
							fill="currentColor"
						></path>
						<path d="M0 13.1372H5.88533V17.3045H0V13.1372Z" fill="currentColor"></path>
						<path d="M0 18.4761H5.88533V19.9998H0V18.4761Z" fill="currentColor"></path>
						<path d="M7.05664 9.14014H12.942V17.3045H7.05664V9.14014Z" fill="currentColor"></path>
						<path d="M7.05664 18.4761H12.942V19.9998H7.05664V18.4761Z" fill="currentColor"></path>
						<path d="M14.1152 11.2886H20.0006V17.3042H14.1152V11.2886Z" fill="currentColor"></path>
						<path d="M14.1152 18.4761H20.0006V19.9998H14.1152V18.4761Z" fill="currentColor"></path>
					</g>
				</svg>
				<h3>Today's High Winners</h3>
			</div>
			<div>
				<div class="casino-top-winners-item_47e51">
					<div class="winner-img-container_40938">
						<img src={BetineAvatarDefault} alt="" />
					</div>
					<div class="winner-info_233b1">
						<h4 class="winner-info-name_d7b95">Fat***</h4>
						<span class="winner-bet-provider_6d86d">MB1840825629</span>
					</div>
					<span class="winner-bet-amount_de0e2">1250000 TRY</span>
				</div>
				<div class="casino-top-winners-item_47e51">
					<div class="winner-img-container_40938">
						<img src={BetineAvatarDefault} alt="" />
					</div>
					<div class="winner-info_233b1">
						<h4 class="winner-info-name_d7b95">Ibr***</h4>
						<span class="winner-bet-provider_6d86d">MB1840626899</span>
					</div>
					<span class="winner-bet-amount_de0e2">218437.5 TRY</span>
				</div>
				<div class="casino-top-winners-item_47e51">
					<div class="winner-img-container_40938">
						<img src={BetineAvatarDefault} alt="" />
					</div>
					<div class="winner-info_233b1">
						<h4 class="winner-info-name_d7b95">Tur***</h4>
						<span class="winner-bet-provider_6d86d">MB1843811091</span>
					</div>
					<span class="winner-bet-amount_de0e2">171950 TRY</span>
				</div>
				<div class="casino-top-winners-item_47e51">
					<div class="winner-img-container_40938">
						<img src={BetineAvatarDefault} alt="" />
					</div>
					<div class="winner-info_233b1">
						<h4 class="winner-info-name_d7b95">Alp***</h4>
						<span class="winner-bet-provider_6d86d">MB1839153655</span>
					</div>
					<span class="winner-bet-amount_de0e2">142690 TRY</span>
				</div>
				<div class="casino-top-winners-item_47e51">
					<div class="winner-img-container_40938">
						<img src={BetineAvatarDefault} alt="" />
					</div>
					<div class="winner-info_233b1">
						<h4 class="winner-info-name_d7b95">Meh***</h4>
						<span class="winner-bet-provider_6d86d">MB1839726167</span>
					</div>
					<span class="winner-bet-amount_de0e2">128534.3984 TRY</span>
				</div>
				<div class="casino-top-winners-item_47e51">
					<div class="winner-img-container_40938">
						<img src={BetineAvatarDefault} alt="" />
					</div>
					<div class="winner-info_233b1">
						<h4 class="winner-info-name_d7b95">Doğ***</h4>
						<span class="winner-bet-provider_6d86d">MB1841532357</span>
					</div>
					<span class="winner-bet-amount_de0e2">121899.6016 TRY</span>
				</div>
				<div class="casino-top-winners-item_47e51">
					<div class="winner-img-container_40938">
						<img src={BetineAvatarDefault} alt="" />
					</div>
					<div class="winner-info_233b1">
						<h4 class="winner-info-name_d7b95">Cem***</h4>
						<span class="winner-bet-provider_6d86d">MB1843583015</span>
					</div>
					<span class="winner-bet-amount_de0e2">137087.5 TRY</span>
				</div>
				<div class="casino-top-winners-item_47e51">
					<div class="winner-img-container_40938">
						<img src={BetineAvatarDefault} alt="" />
					</div>
					<div class="winner-info_233b1">
						<h4 class="winner-info-name_d7b95">Ahm***</h4>
						<span class="winner-bet-provider_6d86d">MB1843551042</span>
					</div>
					<span class="winner-bet-amount_de0e2">90000 TRY</span>
				</div>
			</div>
		</div>
	</div>
	<div class="menu_98535">
		<button
			aria-label="provider_filter"
			class="item_7d6f0 button_0126b"
			on:click={toggleProvidersModal}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				class="icon_f3529"
			>
				<circle cx="3" cy="3" r="3" fill="#FEF5D7"></circle>
				<circle cx="3" cy="13" r="3" fill="#FEF5D7"></circle>
				<circle cx="13" cy="3" r="3" fill="#39D087"></circle>
				<circle cx="13" cy="13" r="3" fill="#FEF5D7"></circle>
			</svg>
			Provider
		</button>
		<div class="providers-filter_44200" style={is_show_providers_modal ? null : 'display: none;'}>
			<a href="/en/live_casino/" class="item_74988">
				<div class=""><div class="item-icon_e1129 provider-icon_c6f47 all_46362"></div></div>
				<div class="item-title_f8093">All</div>
				<span class="count_5355f">456</span>
			</a>
			<a href="/en/live_casino/ezugi_evolution/" class="item_74988">
				<div class="">
					<div class="item-icon_e1129 provider-icon_c6f47 ezugi_evolution_72512"></div>
				</div>
				<div class="item-title_f8093">Evolution</div>
				<span class="count_5355f">100</span>
			</a>
			<a href="/en/live_casino/pragmatic_play_casino/" class="item_74988">
				<div class="">
					<div class="item-icon_e1129 provider-icon_c6f47 pragmatic_play_casino_31da3"></div>
				</div>
				<div class="item-title_f8093">Pragmatic Play</div>
				<span class="count_5355f">111</span>
			</a>
			<a href="/en/live_casino/ezugi/" class="item_74988">
				<div class="">
					<div class="item-icon_e1129 provider-icon_c6f47 ezugi_39183"></div>
				</div>
				<div class="item-title_f8093">Ezugi</div>
				<span class="count_5355f">30</span></a
			>
			<a href="/en/live_casino/bgaming_casino/" class="item_74988">
				<div class="">
					<div class="item-icon_e1129 provider-icon_c6f47 bgaming_casino_d9483"></div>
				</div>
				<div class="item-title_f8093">Bgaming Casino</div>
				<span class="count_5355f">21</span>
			</a>
			<a href="/en/live_casino/onetouch_casino/" class="item_74988">
				<div class="">
					<div class="item-icon_e1129 provider-icon_c6f47 onetouch_casino_4fb21"></div>
				</div>
				<div class="item-title_f8093">OneTouch Casino</div>
				<span class="count_5355f">48</span>
			</a>
			<a href="/en/live_casino/evoplay_casino/" class="item_74988">
				<div class="">
					<div class="item-icon_e1129 provider-icon_c6f47 evoplay_casino_19280"></div>
				</div>
				<div class="item-title_f8093">Evoplay Casino</div>
				<span class="count_5355f">11</span>
			</a>
			<a href="/en/live_casino/playtech_casino/" class="item_74988">
				<div class="">
					<div class="item-icon_e1129 provider-icon_c6f47 playtech_casino_82a15"></div>
				</div>
				<div class="item-title_f8093">Playtech Casino</div>
				<span class="count_5355f">41</span>
			</a>
			<a href="/en/live_casino/egt_casino/" class="item_74988">
				<div class="">
					<div class="item-icon_e1129 provider-icon_c6f47 egt_casino_f8aa1"></div>
				</div>
				<div class="item-title_f8093">Amusnet (EGT)</div>
				<span class="count_5355f">7</span>
			</a>
			<a href="/en/live_casino/lucky_streak/" class="item_74988">
				<div class="">
					<div class="item-icon_e1129 provider-icon_c6f47 lucky_streak_f8acf"></div>
				</div>
				<div class="item-title_f8093">Lucky Streak</div>
				<span class="count_5355f">15</span>
			</a>
			<a href="/en/live_casino/vivo_casino/" class="item_74988">
				<div class="">
					<div class="item-icon_e1129 provider-icon_c6f47 vivo_casino_1c5cf"></div>
				</div>
				<div class="item-title_f8093">Vivo</div>
				<span class="count_5355f">21</span>
			</a>
			<a href="/en/live_casino/alg_net/" class="item_74988">
				<div class="">
					<div class="item-icon_e1129 provider-icon_c6f47 alg_net_2ae3b"></div>
				</div>
				<div class="item-title_f8093">Absolute Gaming</div>
				<span class="count_5355f">15</span>
			</a>
			<a href="/en/live_casino/the_ear_liveg24/" class="item_74988">
				<div class="">
					<div class="item-icon_e1129 provider-icon_c6f47 the_ear_liveg24_da339"></div>
				</div>
				<div class="item-title_f8093">Liveg24</div>
				<span class="count_5355f">8</span>
			</a>
			<a href="/en/live_casino/smartsoft_casino/" class="item_74988">
				<div class="">
					<div class="item-icon_e1129 provider-icon_c6f47 smartsoft_casino_a7857"></div>
				</div>
				<div class="item-title_f8093">Smartsoft Casino</div>
				<span class="count_5355f">18</span>
			</a>
			<a href="/en/live_casino/betgames/" class="item_74988">
				<div class="">
					<div class="item-icon_e1129 provider-icon_c6f47 betgames_7192b"></div>
				</div>
				<div class="item-title_f8093">Bet Games</div>
				<span class="count_5355f">10</span>
			</a>
		</div>
		<button aria-label="search_games" class="item_7d6f0 button_0126b" on:click={toggleSearchModal}>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="icon_f3529"
			>
				<g clip-path="url(#clip0_301_13052)">
					<path
						d="M15.7567 14.5735L11.8125 10.6129C12.8266 9.44901 13.3823 7.98455 13.3823 6.45999C13.3823 2.89801 10.3806 0 6.69113 0C3.0017 0 0 2.89801 0 6.45999C0 10.022 3.0017 12.92 6.69113 12.92C8.07619 12.92 9.39609 12.5167 10.5246 11.751L14.4988 15.7416C14.6649 15.9082 14.8883 16 15.1278 16C15.3544 16 15.5694 15.9166 15.7326 15.7649C16.0794 15.4428 16.0904 14.9085 15.7567 14.5735ZM6.69113 1.68522C9.4182 1.68522 11.6367 3.82713 11.6367 6.45999C11.6367 9.09286 9.4182 11.2348 6.69113 11.2348C3.96406 11.2348 1.74551 9.09286 1.74551 6.45999C1.74551 3.82713 3.96406 1.68522 6.69113 1.68522Z"
						fill="#AEBBC2"
					></path>
				</g>
				<defs>
					<clippath id="clip0_301_13052">
						<rect width="16" height="16" fill="white"></rect>
					</clippath>
				</defs>
			</svg>
			Search for game
		</button>
		<div class="game-search_1654c" style={is_show_search_modal ? null : 'display: none;'}>
			<div class="title_a7416">Game Search</div>
			<div class="description_9bdb1">Discover Great Games</div>
			<div class="games-wrapper_3b4e0">
				<div class="game_c4af6">
					<img
						class="game-image_7c3f5"
						src="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Live_Sweet_Bonanza_CandyLand_9447.webp"
						alt="Live - Sweet Bonanza CandyLand"
					/>
					<div class="text_b190a">
						<div class="name_ef0c5">Live - Sweet Bonanza CandyLand</div>
						<div class="provider_31d81">Pragmatic Play</div>
						<button aria-label="open games" class="button_030bd">Open</button>
					</div>
				</div>
				<div class="game_c4af6">
					<img
						class="game-image_7c3f5"
						src="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//Minesweeper-3831899fe568f771f2920190e4934498.jpg"
						alt="Minesweeper"
					/>
					<div class="text_b190a">
						<div class="name_ef0c5">Minesweeper</div>
						<div class="provider_31d81">Bgaming Casino</div>
						<button aria-label="open games" class="button_030bd">Open</button>
					</div>
				</div>
				<div class="game_c4af6">
					<img
						class="game-image_7c3f5"
						src="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//bgaming_casino/Minesweeper_XY_11860.webp"
						alt="Minesweeper XY"
					/>
					<div class="text_b190a">
						<div class="name_ef0c5">Minesweeper XY</div>
						<div class="provider_31d81">Bgaming Casino</div>
						<button aria-label="open games" class="button_030bd">Open</button>
					</div>
				</div>
			</div>
			<input class="input_02cdd" type="text" placeholder="Oyun Ara" />
		</div>
		<div class="center-block_5ed43">
			<!-- svelte-ignore a11y-missing-attribute -->
			<a class="center-item_6bb32 favourites_10e71">
				<span class="num_ef955 favourites_10e71">0</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="18"
					viewBox="0 0 20 18"
					fill="none"
					class="icon_f3529 favourites_10e71"
				>
					<path
						d="M6.05781 0.00126411C4.31189 -0.03509 2.61745 0.725131 1.51057 2.02201C-0.536608 4.42311 -0.659596 8.41587 2.11409 11.1298C2.1288 11.1444 2.14452 11.1583 2.1605 11.1724L9.46292 17.3058C9.77204 17.5647 10.229 17.5647 10.5379 17.3058L17.8416 11.1724C17.8575 11.1583 17.872 11.1444 17.8867 11.1298C20.6604 8.41562 20.5359 4.42311 18.4889 2.02201C17.3836 0.724884 15.6876 -0.0353373 13.9427 0.00126411C12.4953 0.0304463 11.0993 0.814903 10.0003 2.09917C8.90149 0.814903 7.50552 0.0304463 6.05781 0.00126411Z"
						fill="#39D087"
					></path>
				</svg>
				Favorites
			</a>
		</div>
		<a href="/" class="item_7d6f0">
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="icon_f3529"
			>
				<path
					d="M12.1263 1H3.8732C3.6978 1 3.61149 1.217 3.73767 1.34098L7.86407 5.39428C7.9397 5.46853 8.05954 5.46853 8.13514 5.39428L12.2618 1.34094C12.388 1.21703 12.3017 1 12.1263 1Z"
					fill="#FEF5D7"
				></path>
				<path
					d="M6.20477 5.41871L2.57459 1.85282C2.48594 1.76577 2.34112 1.78305 2.27472 1.88857L0.0310643 5.45443C-0.051998 5.58644 0.0412518 5.75963 0.195408 5.75963H6.06921C6.24459 5.75966 6.3309 5.54263 6.20477 5.41871Z"
					fill="#FEF5D7"
				></path>
				<path
					d="M15.9682 5.4546L13.7246 1.88871C13.6582 1.78316 13.5134 1.76591 13.4247 1.85293L9.79429 5.41882C9.66816 5.54273 9.75441 5.7598 9.92982 5.7598H15.8039C15.9581 5.75977 16.0513 5.58661 15.9682 5.4546Z"
					fill="#FEF5D7"
				></path>
				<path
					d="M7.2197 6.94971H0.343899C0.174337 6.94971 0.0854929 7.15451 0.199868 7.28179L7.0757 14.9347C7.1958 15.0684 7.41483 14.982 7.41483 14.8009V7.14803C7.41476 7.03851 7.32745 6.94971 7.2197 6.94971Z"
					fill="#FEF5D7"
				></path>
				<path
					d="M15.6571 6.94971H8.781C8.67328 6.94971 8.58594 7.03848 8.58594 7.14803V14.8012C8.58594 14.9823 8.80494 15.0687 8.92506 14.935L15.8011 7.28179C15.9155 7.15448 15.8267 6.94971 15.6571 6.94971Z"
					fill="#FEF5D7"
				></path>
			</svg>
			Tournaments
		</a>
		<a href="/" class="item_7d6f0">
			<svg
				width="16"
				height="15"
				viewBox="0 0 16 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="icon_f3529"
			>
				<g clip-path="url(#clip0_4_7498)">
					<path
						d="M15.7313 6.39764L8.5526 0.20392C8.2375 -0.0679831 7.76235 -0.0679535 7.44738 0.20389L0.268688 6.39767C0.0162826 6.61546 -0.0670922 6.95101 0.0562199 7.2525C0.179563 7.55399 0.479875 7.74878 0.821342 7.74878H1.9679V13.9544C1.9679 14.2005 2.17859 14.4 2.43843 14.4H6.37323C6.63307 14.4 6.84376 14.2005 6.84376 13.9544V10.1866H9.15631V13.9545C9.15631 14.2005 9.367 14.4 9.62684 14.4H13.5615C13.8213 14.4 14.032 14.2005 14.032 13.9545V7.74878H15.1788C15.5202 7.74878 15.8205 7.55396 15.9439 7.2525C16.067 6.95098 15.9837 6.61546 15.7313 6.39764Z"
						fill="#FEF5D7"
					></path>
					<path
						d="M13.9091 0.889343H10.7491L14.3796 4.01512V1.33485C14.3796 1.08881 14.169 0.889343 13.9091 0.889343Z"
						fill="#FBCF44"
					></path>
				</g>
				<defs>
					<clippath id="clip0_4_7498">
						<rect width="16" height="14.4" fill="white"></rect>
					</clippath>
				</defs>
			</svg>
			Home page
		</a>
	</div>
</div>
