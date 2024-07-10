<script>
	import BetineAvatarDefault from '$lib/images/betine-avatar-default.png';
	import ButterflyLovers from '$lib/images/games/Butterfly_Lovers.webp';
	import Banner from '$lib/components/_utils/Banner.svelte';
	import Coins from '$lib/images/mobile/casino/36_Coins_11971.webp';

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
	<div class="container_f142b container_ac2c7 large_6e58f">
		<div class="wrapper_1131c">
			<div class="left-side_b9e07">
				<div class="tabs-container_564ea">
					<div class="providers_c7033">
						<div class="providers-left_23fbb">
							<div class="providers-icon_c9998"></div>
							<div class="providers-title_8daf7">Our Providers</div>
						</div>
						<div class="providers-amount_3148d">43</div>
					</div>
					<div class="button-wrap_15966 selected_80de6">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f all_e2ae9"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">All providers</div>
								<span class="item-count_e16fc">4387</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f pragmatic_play_ee2f8"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Pragmatic Play</div>
								<span class="item-count_e16fc">407</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_playngo_97ce8"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">PlaynGo</div>
								<span class="item-count_e16fc">317</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f egt_68fb9"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Amusnet (EGT)</div>
								<span class="item-count_e16fc">167</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f nolimitcity_d9a9e"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Nolimitcity</div>
								<span class="item-count_e16fc">85</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f falcon_gaming_3c43f"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Falcon Gaming</div>
								<span class="item-count_e16fc">1</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f wazdan_990cb"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Wazdan</div>
								<span class="item-count_e16fc">241</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f yolted_1a2ef"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Yolted</div>
								<span class="item-count_e16fc">18</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f playson_2695a"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Playson</div>
								<span class="item-count_e16fc">83</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f endorphina_4d0ce"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Endorphina</div>
								<span class="item-count_e16fc">140</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f platipus_cb3de"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Platipus</div>
								<span class="item-count_e16fc">104</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f eurasian_gaming_ff580"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Eurasian Gaming</div>
								<span class="item-count_e16fc">101</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_three_cherry_14e00"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Triple Cherry</div>
								<span class="item-count_e16fc">31</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f bgaming_e2528"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Bgaming</div>
								<span class="item-count_e16fc">118</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_belatra_2675c"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Belatra</div>
								<span class="item-count_e16fc">60</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f ruby_play_3cded"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Ruby Play</div>
								<span class="item-count_e16fc">95</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_habanero_f05e3"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Habanero</div>
								<span class="item-count_e16fc">152</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f lucky_streak_booongo_a65da"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Booongo</div>
								<span class="item-count_e16fc">46</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_ka_gaming_8c313"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Ka Gaming</div>
								<span class="item-count_e16fc">55</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_amatic_bbbb9"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Amatic</div>
								<span class="item-count_e16fc">130</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f betsoft_games_c49f8"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Betsoft</div>
								<span class="item-count_e16fc">186</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_gamzix_45efc"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Gamzix</div>
								<span class="item-count_e16fc">34</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f onetouch_6bd0d"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">One Touch</div>
								<span class="item-count_e16fc">53</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_felix_gaming_c905d"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Felix Gaming</div>
								<span class="item-count_e16fc">28</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_vibra_gaming_8eeb1"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Vibra Gaming</div>
								<span class="item-count_e16fc">30</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f leander_73db7"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Leander</div>
								<span class="item-count_e16fc">41</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f spade_gaming_56653"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Spade Gaming</div>
								<span class="item-count_e16fc">101</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f playtech_slots_b65ce"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Playtech Slots</div>
								<span class="item-count_e16fc">363</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f revolver_gaming_c08ab"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Revolver Gaming</div>
								<span class="item-count_e16fc">26</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f red_tiger_oss_f3562"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Red Tiger</div>
								<span class="item-count_e16fc">151</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f netent_oss_a5018"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Netent</div>
								<span class="item-count_e16fc">92</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f relax_gaming_03365"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Relax Gaming</div>
								<span class="item-count_e16fc">148</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f lucky_streak_fugaso_3f7a4"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Fugaso</div>
								<span class="item-count_e16fc">39</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f btg_oss_c561d"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">BTG</div>
								<span class="item-count_e16fc">33</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_macaw_8e4c2"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Macaw</div>
								<span class="item-count_e16fc">12</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_mr_slotty_150c6"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Mr Slotty</div>
								<span class="item-count_e16fc">52</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_spinthon_dfef8"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Spinthon</div>
								<span class="item-count_e16fc">40</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_nemesis_1b3be"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Nemesis</div>
								<span class="item-count_e16fc">26</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f relax_gaming_hacksaw_gaming_cdd80"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Hacksaw Gaming</div>
								<span class="item-count_e16fc">137</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f relax_gaming_pg_soft_1257d"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">PG Soft</div>
								<span class="item-count_e16fc">9</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f lucky_streak_yggdrasil_9a490"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Yggdrasil</div>
								<span class="item-count_e16fc">271</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_casino_2843f"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">The Ear Casino</div>
								<span class="item-count_e16fc">5</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f the_ear_gameart_ef459"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Gameart</div>
								<span class="item-count_e16fc">129</span>
							</div>
						</button>
					</div>
					<div class="button-wrap_15966">
						<button class="item_371f2">
							<div class="icon-wrap_11223">
								<div class="item-icon_f1f2f smartsoft_070f0"></div>
							</div>
							<div class="item-right_fddd4">
								<div class="item-title_3d690">Smartsoft</div>
								<span class="item-count_e16fc">30</span>
							</div>
						</button>
					</div>
				</div>
				<div class="casino-top-winners-wrapper_754e6">
					<div class="winners-title_13992 title_d462a green_81d4d opened_25d9f">
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
								<path d="M7.05664 9.14014H12.942V17.3045H7.05664V9.14014Z" fill="currentColor"
								></path>
								<path d="M7.05664 18.4761H12.942V19.9998H7.05664V18.4761Z" fill="currentColor"
								></path>
								<path d="M14.1152 11.2886H20.0006V17.3042H14.1152V11.2886Z" fill="currentColor"
								></path>
								<path d="M14.1152 18.4761H20.0006V19.9998H14.1152V18.4761Z" fill="currentColor"
								></path>
							</g>
						</svg>
						<h3>Today's High Winners</h3>
					</div>
					<div class="winners-content_dba54">
						<div class="casino-top-winners-item_0ee1a">
							<div class="winner-img-container_1335e">
								<img src={BetineAvatarDefault} alt="" />
							</div>
							<div class="winner-info_80490">
								<h4 class="winner-info-name_a3961">Alp***</h4>
								<span class="winner-bet-provider_04025">MB1817660995</span>
							</div>
							<span class="winner-bet-amount_7316c">329300 TRY</span>
						</div>
						<div class="casino-top-winners-item_0ee1a">
							<div class="winner-img-container_1335e">
								<img src={BetineAvatarDefault} alt="" />
							</div>
							<div class="winner-info_80490">
								<h4 class="winner-info-name_a3961">Cas***</h4>
								<span class="winner-bet-provider_04025">MB1816398781</span>
							</div>
							<span class="winner-bet-amount_7316c">328750 TRY</span>
						</div>
						<div class="casino-top-winners-item_0ee1a">
							<div class="winner-img-container_1335e">
								<img src={BetineAvatarDefault} alt="" />
							</div>
							<div class="winner-info_80490">
								<h4 class="winner-info-name_a3961">Çet***</h4>
								<span class="winner-bet-provider_04025">MB1811828038</span>
							</div>
							<span class="winner-bet-amount_7316c">181920 TRY</span>
						</div>
						<div class="casino-top-winners-item_0ee1a">
							<div class="winner-img-container_1335e">
								<img src={BetineAvatarDefault} alt="" />
							</div>
							<div class="winner-info_80490">
								<h4 class="winner-info-name_a3961">Ilk***</h4>
								<span class="winner-bet-provider_04025">MB1817575259</span>
							</div>
							<span class="winner-bet-amount_7316c">194100 TRY</span>
						</div>
						<div class="casino-top-winners-item_0ee1a">
							<div class="winner-img-container_1335e">
								<img src={BetineAvatarDefault} alt="" />
							</div>
							<div class="winner-info_80490">
								<h4 class="winner-info-name_a3961">Ahm***</h4>
								<span class="winner-bet-provider_04025">MB1816785731</span>
							</div>
							<span class="winner-bet-amount_7316c">125000 TRY</span>
						</div>
						<div class="casino-top-winners-item_0ee1a">
							<div class="winner-img-container_1335e">
								<img src={BetineAvatarDefault} alt="" />
							</div>
							<div class="winner-info_80490">
								<h4 class="winner-info-name_a3961">Seb***</h4>
								<span class="winner-bet-provider_04025">MB1817991386</span>
							</div>
							<span class="winner-bet-amount_7316c">122615 TRY</span>
						</div>
						<div class="casino-top-winners-item_0ee1a">
							<div class="winner-img-container_1335e">
								<img src={BetineAvatarDefault} alt="" />
							</div>
							<div class="winner-info_80490">
								<h4 class="winner-info-name_a3961">Fua***</h4>
								<span class="winner-bet-provider_04025">MB1815762561</span>
							</div>
							<span class="winner-bet-amount_7316c">108000 TRY</span>
						</div>
						<div class="casino-top-winners-item_0ee1a">
							<div class="winner-img-container_1335e">
								<img src={BetineAvatarDefault} alt="" />
							</div>
							<div class="winner-info_80490">
								<h4 class="winner-info-name_a3961">Mer***</h4>
								<span class="winner-bet-provider_04025">MB1818930980</span>
							</div>
							<span class="winner-bet-amount_7316c">103500 TRY</span>
						</div>
					</div>
				</div>
			</div>
			<div class="main-wrap_0ea6e">
				<div class="filters-wrapper_2db70" style="overflow: auto;">
					<div class="search_1badf">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
						>
							<path
								d="M15.7567 14.5735L11.8125 10.6129C12.8266 9.44901 13.3823 7.98455 13.3823 6.45999C13.3823 2.89801 10.3806 0 6.69113 0C3.0017 0 0 2.89801 0 6.45999C0 10.022 3.0017 12.92 6.69113 12.92C8.07619 12.92 9.39609 12.5167 10.5246 11.751L14.4988 15.7416C14.6649 15.9082 14.8883 16 15.1278 16C15.3544 16 15.5694 15.9166 15.7326 15.7649C16.0794 15.4428 16.0904 14.9085 15.7567 14.5735ZM6.69113 1.68522C9.4182 1.68522 11.6367 3.82713 11.6367 6.45999C11.6367 9.09286 9.4182 11.2348 6.69113 11.2348C3.96406 11.2348 1.74551 9.09286 1.74551 6.45999C1.74551 3.82713 3.96406 1.68522 6.69113 1.68522Z"
								fill="currentColor"
							></path>
						</svg><span>Search:</span><input
							type="text"
							placeholder="Example: Lightning Roulette"
							class="search-input_28a42"
							value=""
							style="width: 250px;"
						/>
					</div>
					<div class="menu_9e6b3">
						<div class="select_369d8">
							<div class="select-left_ffb10">
								<div class="icon-wrap_b25df">
									<div class="select-icon_b019f all_43303 provider-icon_f4df5 all_43303"></div>
								</div>
								<span>All providers</span>
							</div>
							<div class="select-right_ed23e">
								<svg
									width="10"
									height="6"
									viewBox="0 0 10 6"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="arrow-icon_1379e"
								>
									<g clip-path="url(#clip0_1_3827)">
										<path
											d="M8.62633 -1.50828e-06L5 3.41372L1.37367 -2.40181e-07L2.26099e-07 1.29314L5 6L10 1.29314L8.62633 -1.50828e-06Z"
											fill="#96A7B0"
										></path>
									</g>
									<defs>
										<clippath id="clip0_1_3827">
											<rect width="10" height="6" fill="white"></rect>
										</clippath>
									</defs>
								</svg>
							</div>
						</div>
						<div class="dropdown-menu_455a7">
							<div class="dropdown-list_25744">
								<button class="item_fe501 selected_c8828">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 all_43303"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">All</div>
									<span class="count_2232d">4387</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 pragmatic_play_0f905"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Pragmatic Play</div>
									<span class="count_2232d">407</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 the_ear_playngo_67b26"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">PlaynGo</div>
									<span class="count_2232d">317</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 egt_57620"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Amusnet (EGT)</div>
									<span class="count_2232d">167</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Nolimitcity</div>
									<span class="count_2232d">85</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 falcon_gaming_13567"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Falcon Gaming</div>
									<span class="count_2232d">1</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 wazdan_40ba4"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Wazdan</div>
									<span class="count_2232d">241</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 yolted_4bec5"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Yolted</div>
									<span class="count_2232d">18</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 playson_0b00e"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Playson</div>
									<span class="count_2232d">83</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 endorphina_0d428"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Endorphina</div>
									<span class="count_2232d">140</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 platipus_b2e67"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Platipus</div>
									<span class="count_2232d">104</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 eurasian_gaming_fd281"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Eurasian Gaming</div>
									<span class="count_2232d">101</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div
											class="item-icon_adac9 provider-icon_f4df5 the_ear_three_cherry_cbc91"
										></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Triple Cherry</div>
									<span class="count_2232d">31</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 bgaming_cca99"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Bgaming</div>
									<span class="count_2232d">118</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 the_ear_belatra_a40d0"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Belatra</div>
									<span class="count_2232d">60</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 ruby_play_79000"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Ruby Play</div>
									<span class="count_2232d">95</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 the_ear_habanero_64394"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Habanero</div>
									<span class="count_2232d">152</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div
											class="item-icon_adac9 provider-icon_f4df5 lucky_streak_booongo_5c766"
										></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Booongo</div>
									<span class="count_2232d">46</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 the_ear_ka_gaming_f7203"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Ka Gaming</div>
									<span class="count_2232d">55</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 the_ear_amatic_f2ccb"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Amatic</div>
									<span class="count_2232d">130</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 betsoft_games_5a494"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Betsoft</div>
									<span class="count_2232d">186</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 the_ear_gamzix_ebbea"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Gamzix</div>
									<span class="count_2232d">34</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 onetouch_89f4a"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">One Touch</div>
									<span class="count_2232d">53</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div
											class="item-icon_adac9 provider-icon_f4df5 the_ear_felix_gaming_67fe7"
										></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Felix Gaming</div>
									<span class="count_2232d">28</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div
											class="item-icon_adac9 provider-icon_f4df5 the_ear_vibra_gaming_76233"
										></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Vibra Gaming</div>
									<span class="count_2232d">30</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 leander_27d7a"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Leander</div>
									<span class="count_2232d">41</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 spade_gaming_7f7ac"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Spade Gaming</div>
									<span class="count_2232d">101</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 playtech_slots_03a75"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Playtech Slots</div>
									<span class="count_2232d">363</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 revolver_gaming_c74b0"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Revolver Gaming</div>
									<span class="count_2232d">26</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 red_tiger_oss_f5b91"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Red Tiger</div>
									<span class="count_2232d">151</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 netent_oss_8b9bb"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Netent</div>
									<span class="count_2232d">92</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 relax_gaming_35790"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Relax Gaming</div>
									<span class="count_2232d">148</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div
											class="item-icon_adac9 provider-icon_f4df5 lucky_streak_fugaso_c476f"
										></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Fugaso</div>
									<span class="count_2232d">39</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 btg_oss_88fad"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">BTG</div>
									<span class="count_2232d">33</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 the_ear_macaw_ca8fc"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Macaw</div>
									<span class="count_2232d">12</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 the_ear_mr_slotty_ee8bc"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Mr Slotty</div>
									<span class="count_2232d">52</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 the_ear_spinthon_6bd87"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Spinthon</div>
									<span class="count_2232d">40</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 the_ear_nemesis_82ca5"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Nemesis</div>
									<span class="count_2232d">26</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Hacksaw Gaming</div>
									<span class="count_2232d">137</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">PG Soft</div>
									<span class="count_2232d">9</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div
											class="item-icon_adac9 provider-icon_f4df5 lucky_streak_yggdrasil_e8e83"
										></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Yggdrasil</div>
									<span class="count_2232d">271</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 the_ear_casino_086cf"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">The Ear Casino</div>
									<span class="count_2232d">5</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 the_ear_gameart_4a6e6"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Gameart</div>
									<span class="count_2232d">129</span>
								</button><button class="item_fe501">
									<div class="icon-wrap_b25df">
										<div class="item-icon_adac9 provider-icon_f4df5 smartsoft_be7fb"></div>
									</div>
									<div class="separator_850c1"></div>
									<div class="item-title_0f978">Smartsoft</div>
									<span class="count_2232d">30</span>
								</button>
							</div>
						</div>
					</div>
					<div class="menu_f3ce3">
						<div class="select_b1024">
							<div class="select-left_1ab75">
								<div class="icon-wrap_d565c">
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="16" height="2" rx="1" fill="#49D491"></rect>
										<rect x="4" y="7" width="12" height="2" rx="1" fill="#49D491"></rect>
										<rect x="8" y="14" width="8" height="2" rx="1" fill="#49D491"></rect>
									</svg>
								</div>
								<span>Base Order</span>
							</div>
							<div class="select-right_fd9d9">
								<svg
									width="10"
									height="6"
									viewBox="0 0 10 6"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="arrow-icon_90c9b"
								>
									<g clip-path="url(#clip0_1_3827)">
										<path
											d="M8.62633 -1.50828e-06L5 3.41372L1.37367 -2.40181e-07L2.26099e-07 1.29314L5 6L10 1.29314L8.62633 -1.50828e-06Z"
											fill="#96A7B0"
										></path>
									</g>
									<defs>
										<clippath id="clip0_1_3827">
											<rect width="10" height="6" fill="white"></rect>
										</clippath>
									</defs>
								</svg>
							</div>
						</div>
						<div class="dropdown-menu_17a6b">
							<div class="dropdown-list_2dba3">
								<div class="game_filters_item">
									<button class="item_37f26 selected_9eeda">
										<div class="item-title_e29d2">Base Order</div>
									</button><button class="item_37f26">
										<div class="item-title_e29d2">Default</div>
									</button><button class="item_37f26">
										<div class="item-title_e29d2">Alphabetical</div>
									</button><button class="item_37f26">
										<div class="item-title_e29d2">Popularity</div>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="tabs-wrap_e1d82" style="overflow: auto;">
					<div class="menu_28e89">
						<button class="tab-favourites_786d7"
							><span class="title_ec0a5">Favorites</span>
							<div class="amount_2a767">0</div>
						</button>
						<div class="separator_9d31c"></div>
						<button class="tab_7f72e selected_3d5eb">all</button><button class="tab_7f72e"
							>popüler</button
						><button class="tab_7f72e">yeni</button><button class="tab_7f72e"
							>jackpot oyunları</button
						><button class="tab_7f72e">bonus satın al</button><button class="tab_7f72e"
							>arcade</button
						>
					</div>
				</div>
				<h1 class="main-title_a84a3">All providers / all</h1>
				<div class="games_331fb" style="overflow: auto;">
					<div class="games-header_1d28e">
						<div class="games-title_40c5f">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_1_4018)">
									<path
										d="M4.16345 8.43582L2.20422 13.5535V13.5539C2.68366 15.4295 3.73746 17.0876 5.22922 18.3383L7.68742 17.4357C5.07641 15.1455 3.78768 11.777 4.16345 8.43582Z"
										fill="#354046"
									></path>
									<path
										d="M1.54094 15.2858L0.0392115 19.207C-0.140278 19.6754 0.327591 20.1386 0.80942 19.9613L3.97761 18.7981C2.91495 17.7881 2.09062 16.5844 1.54094 15.2858Z"
										fill="#354046"
									></path>
									<path
										d="M8.36353 7.95852L6.13028 5.77155C4.31959 9.77138 5.55747 14.3432 8.97379 16.9634L11.3574 16.0881C9.26401 13.971 8.13175 11.016 8.36353 7.95852Z"
										fill="#354046"
									></path>
									<path
										d="M9.53186 9.1026C9.6236 11.5888 10.7293 13.9382 12.5999 15.6315H12.6003L14.3474 14.9901C14.7554 14.8401 14.8671 14.3273 14.5604 14.0269L9.53186 9.1026Z"
										fill="#354046"
									></path>
									<path
										d="M13.9017 10.9433C14.1353 11.1721 14.5141 11.1721 14.7478 10.9433C16.9987 8.73906 19.1904 9.42054 19.2123 9.42765C19.5258 9.52995 19.8646 9.36406 19.9691 9.05709C20.0737 8.75019 19.9042 8.4183 19.5907 8.31596C19.4727 8.27749 16.6697 7.40403 13.9017 10.1147C13.668 10.3435 13.668 10.7145 13.9017 10.9433Z"
										fill="#354046"
									></path>
									<path
										d="M10.0942 6.38597C12.8623 3.67559 11.97 0.930445 11.9309 0.814827C11.8264 0.507814 11.4874 0.342199 11.1739 0.444537C10.8608 0.546874 10.6913 0.878495 10.7958 1.18551C10.8029 1.20699 11.499 3.35334 9.24777 5.5575C9.01559 5.78487 9.01324 6.15559 9.24777 6.38597C9.48266 6.61596 9.86115 6.61416 10.0942 6.38597Z"
										fill="#354046"
									></path>
									<path
										d="M11.3634 7.62897C11.1297 7.85778 11.1297 8.22873 11.3634 8.45755C11.5949 8.68429 11.971 8.68726 12.2059 8.46102C12.515 8.31021 13.4743 8.87588 14.0075 8.35396C14.5349 7.83743 13.9746 6.91706 14.1145 6.5945C14.4443 6.45708 15.3838 7.00611 15.9113 6.48966C16.4388 5.97313 15.8784 5.05276 16.0183 4.73016C16.3486 4.59271 17.2876 5.14181 17.815 4.62532C18.3426 4.10879 17.7822 3.18842 17.9221 2.86582C18.2505 2.72907 19.1918 3.27693 19.7189 2.76094C20.2518 2.23898 19.6753 1.29783 19.8281 0.996716C20.0583 0.767668 20.0571 0.399292 19.8246 0.171611C19.591 -0.0572035 19.2121 -0.0572035 18.9785 0.171611C18.5069 0.633418 18.5992 1.28537 18.688 1.75147C18.212 1.66449 17.5463 1.57414 17.0747 2.03591C16.6032 2.49772 16.6954 3.14967 16.7842 3.61577C16.3083 3.52883 15.6425 3.4384 15.171 3.90025C14.6994 4.36206 14.7917 5.01401 14.8805 5.48011C14.4045 5.39313 13.7388 5.30274 13.2672 5.76455C12.7956 6.22636 12.8879 6.87831 12.9767 7.34441C12.5007 7.2575 11.8349 7.16716 11.3634 7.62897Z"
										fill="#354046"
									></path>
									<path
										d="M14.7478 2.65739C14.9815 2.42857 14.9815 2.05762 14.7478 1.82881C14.5141 1.59999 14.1353 1.59999 13.9017 1.82881C13.668 2.05762 13.668 2.42857 13.9017 2.65739C14.1353 2.8862 14.5141 2.8862 14.7478 2.65739Z"
										fill="#354046"
									></path>
									<path
										d="M18.5553 6.97197C18.8858 6.97197 19.1536 6.70966 19.1536 6.38607C19.1536 6.06249 18.8858 5.80017 18.5553 5.80017C18.2249 5.80017 17.957 6.06249 17.957 6.38607C17.957 6.70966 18.2249 6.97197 18.5553 6.97197Z"
										fill="#354046"
									></path>
									<path
										d="M17.2862 11.7719C17.0525 12.0007 17.0525 12.3717 17.2862 12.6005C17.5199 12.8293 17.8987 12.8293 18.1323 12.6005C18.366 12.3717 18.366 12.0007 18.1323 11.7719C17.8987 11.5431 17.5199 11.5431 17.2862 11.7719Z"
										fill="#354046"
									></path>
									<path
										d="M8.82494 3.48597C9.0586 3.25716 9.0586 2.8862 8.82494 2.65739C8.59129 2.42858 8.21249 2.42858 7.97883 2.65739C7.74518 2.88616 7.74518 3.25716 7.97883 3.48597C8.21249 3.71479 8.59133 3.71479 8.82494 3.48597Z"
										fill="#354046"
									></path>
								</g>
								<defs>
									<clippath id="clip0_1_4018">
										<rect width="20" height="20" fill="white"></rect>
									</clippath>
								</defs>
							</svg><span>New Games</span>
						</div>
						<div class="games-amount_eb233">See All (97)</div>
					</div>
					<div>
						<div class="games_2fa18">
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">36 Coins™</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//wazdan/36_Coins_11971.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">36 Coins™</div>
									<div class="provider-name_60cf0">Wazdan</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
										<div class="game-tag_4a8b3">Bonus Satın Al</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Sizzling Bells™</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//wazdan/Sizzling_Bells_9484.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Sizzling Bells™</div>
									<div class="provider-name_60cf0">Wazdan</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Power Wildz Fruit Saga</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//lucky_streak_fugaso/Power_Wildz_Fruit_Saga_10254.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Power Wildz Fruit Saga</div>
									<div class="provider-name_60cf0">Fugaso</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Astro Cash</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//betsoft_games/Astro_Cash_10956.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Astro Cash</div>
									<div class="provider-name_60cf0">Betsoft</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Sugar Rush Xmas</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_Xmas_10968.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Sugar Rush Xmas</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Tiger's Luck - Hold &amp; Win</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//betsoft_games/Tiger_039_s_Luck_Hold_amp_Win_11674.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Tiger's Luck - Hold &amp; Win</div>
									<div class="provider-name_60cf0">Betsoft</div>
								</div>
							</div>
						</div>
						<div class="games_2fa18">
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Heist: Bank Rush - Hold &amp; Win</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//betsoft_games/Heist_Bank_Rush_Hold_amp_Win_11949.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Heist: Bank Rush - Hold &amp; Win</div>
									<div class="provider-name_60cf0">Betsoft</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Go High Fruit</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//ruby_play/Go_High_Fruit_96_11947.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Go High Fruit</div>
									<div class="provider-name_60cf0">Ruby Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Big Bass Christmas Bash</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Big_Bass_Christmas_Bash_10871.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Big Bass Christmas Bash</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Cyclops Smash</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Cyclops_Smash_10112.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Cyclops Smash</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">9 Coins™ Grand Diamond Edition</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//wazdan/9_Coins_Grand_Diamond_Edition_10198.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">9 Coins™ Grand Diamond Edition</div>
									<div class="provider-name_60cf0">Wazdan</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Book of Tut Megaways</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Book_of_Tut_Megaways_10181.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Book of Tut Megaways</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
						</div>
						<div class="btn-wrapper_88caa">
							<button type="button" class="btn_976e6">Show more</button>
						</div>
					</div>
				</div>
				<div class="games_331fb" style="overflow: auto;">
					<div class="games-header_1d28e">
						<div class="games-title_40c5f">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_1_1821)">
									<path
										d="M14.5937 3.27398C14.5151 3.03715 14.3063 2.86441 14.0555 2.82867L11.6679 2.48812L10.5998 0.364609C10.4878 0.141406 10.2561 0 10.0022 0C9.74825 0 9.51647 0.141406 9.40451 0.364609L8.33637 2.48816L5.94838 2.82871C5.6975 2.86449 5.48873 3.03719 5.4102 3.27402C5.33166 3.51086 5.39718 3.7709 5.57905 3.94469L7.30736 5.59758L6.89898 7.93133C6.85599 8.17688 6.95888 8.425 7.16419 8.57133C7.36994 8.71828 7.64207 8.73637 7.86645 8.62117L10.0023 7.51926L12.1378 8.62117C12.3673 8.73934 12.6384 8.71496 12.84 8.57133C13.0453 8.42504 13.1482 8.17691 13.1052 7.93156L12.6972 5.59758L14.4251 3.94469C14.6067 3.7709 14.6718 3.51082 14.5937 3.27398Z"
										fill="#354046"
									></path>
									<path
										d="M12.6666 9.96817H7.3333C6.96511 9.96817 6.66663 10.2611 6.66663 10.6224V20H13.3333V10.6224C13.3333 10.2611 13.0348 9.96817 12.6666 9.96817Z"
										fill="#354046"
									></path>
									<path
										d="M0.666673 12.5851C0.298488 12.5851 0 12.8781 0 13.2394V19.4827C0 19.7684 0.235997 20 0.527081 20H5.33335V12.5851H0.666673Z"
										fill="#354046"
									></path>
									<path
										d="M19.3333 15.2021H14.6666V20H19.4729C19.764 20 20 19.7684 20 19.4827V15.8564C19.9999 15.4951 19.7014 15.2021 19.3333 15.2021Z"
										fill="#354046"
									></path>
								</g>
								<defs>
									<clippath id="clip0_1_1821">
										<rect width="20" height="20" fill="white"></rect>
									</clippath>
								</defs>
							</svg><span>Popular Games</span>
						</div>
						<div class="games-amount_eb233">See All (153)</div>
					</div>
					<div>
						<div class="games_2fa18">
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3">Bonus Satın Al</div>
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Sweet Bonanza</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sweet_Bonanza_11003.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Sweet Bonanza</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3">Bonus Satın Al</div>
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Gates of Olympus</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Gates_of_Olympus_9334.png"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Gates of Olympus</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3">Bonus Satın Al</div>
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Starlight Princess</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Starlight_Princess_9354.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Starlight Princess</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3">Bonus Satın Al</div>
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Sugar Rush</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Sugar Rush</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Twilight Princess</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Twilight_Princess_10406.png"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Twilight Princess</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Immortal Ways 88 Charms 96</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//ruby_play/Immortal_Ways_88_Charms_96_11527.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Immortal Ways 88 Charms 96</div>
									<div class="provider-name_60cf0">Ruby Play</div>
								</div>
							</div>
						</div>
						<div class="games_2fa18">
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Big Bass Christmas Bash</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Big_Bass_Christmas_Bash_10871.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Big Bass Christmas Bash</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Sweet Fruits</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//falcon_gaming/Sweet_Fruits_11825.jpg"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Sweet Fruits</div>
									<div class="provider-name_60cf0">Falcon Gaming</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3">Bonus Satın Al</div>
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Money Train 2</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//relax_gaming_relax/Money_Train_2_10122.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Money Train 2</div>
									<div class="provider-name_60cf0">Relax Gaming</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3" style="background-color: rgb(123, 224, 175);">
											Yeni
										</div>
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">April Fury and the Chamber of Scarabs</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//betsoft_games/April_Fury_and_the_Chamber_of_Scarabs_10087.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">April Fury and the Chamber of Scarabs</div>
									<div class="provider-name_60cf0">Betsoft</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3">Bonus Satın Al</div>
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Wild Streak</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//endorphina/Wild_Streak_10106.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Wild Streak</div>
									<div class="provider-name_60cf0">Endorphina</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">2Wild2Die</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//relax_gaming_hacksaw_gaming/2Wild2Die_11025.png"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">2Wild2Die</div>
									<div class="provider-name_60cf0">Hacksaw Gaming</div>
								</div>
							</div>
						</div>
						<div class="btn-wrapper_88caa">
							<button type="button" class="btn_976e6">Show more</button>
						</div>
					</div>
				</div>
				<div class="games_331fb" style="overflow: auto;">
					<div class="games-header_1d28e">
						<div class="games-title_40c5f">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_1_2293)">
									<path
										d="M0 20H20V9.62756H0V20ZM13.7697 11.7982H18.028V13.1221L16.8884 14.9914C16.4286 15.7457 16.1855 16.6177 16.1855 17.5132V18.0112H15.0136V17.5132C15.0136 16.3824 15.3205 15.2813 15.9012 14.3288L16.6943 13.0279H14.9416V14.2209H13.7697V11.7982ZM7.87082 11.7982H12.1292V13.1221L10.9896 14.9914C10.5297 15.7457 10.2866 16.6177 10.2866 17.5132V18.0112H9.11477V17.5132C9.11477 16.3824 9.42168 15.2813 10.0024 14.3288L10.7954 13.0279H9.04266V14.2209H7.87078V11.7982H7.87082ZM1.89379 11.7982H6.15215V13.1221L5.0125 14.9914C4.55266 15.7457 4.30961 16.6177 4.30961 17.5132V18.0112H3.13773V17.5132C3.13773 16.3824 3.44465 15.2813 4.02535 14.3288L4.81836 13.0279H3.06566V14.2209H1.89379V11.7982Z"
										fill="#354046"
									></path>
									<path
										d="M1.15637 7.8877L3.02738 7.44177L4.8984 7.8877L5.07242 5.88262L6.05473 4.15313L4.29129 3.35984L3.02738 1.84509L1.76348 3.35984L0 4.15313L0.982305 5.88262L1.15637 7.8877Z"
										fill="#354046"
									></path>
									<path
										d="M8.12896 6.0426L9.99998 5.59667L11.871 6.0426L12.0451 4.03753L13.0274 2.30811L11.2639 1.51479L9.99998 0L8.73607 1.51479L6.9726 2.30811L7.9549 4.03753L8.12896 6.0426Z"
										fill="#354046"
									></path>
									<path
										d="M15.1016 7.8877L16.9726 7.44177L18.8436 7.8877L19.0177 5.88262L20 4.15313L18.2365 3.35984L16.9726 1.84509L15.7087 3.35984L13.9453 4.15313L14.9276 5.88262L15.1016 7.8877Z"
										fill="#354046"
									></path>
								</g>
								<defs>
									<clippath id="clip0_1_2293">
										<rect width="20" height="20" fill="white"></rect>
									</clippath>
								</defs>
							</svg><span>All Games</span>
						</div>
						<div class="games-amount_eb233">See All (4387)</div>
					</div>
					<div>
						<div class="games_2fa18">
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3">Bonus Satın Al</div>
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Sweet Bonanza</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sweet_Bonanza_11003.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Sweet Bonanza</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3">Bonus Satın Al</div>
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Gates of Olympus</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Gates_of_Olympus_9334.png"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Gates of Olympus</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3">Bonus Satın Al</div>
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Starlight Princess</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Starlight_Princess_9354.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Starlight Princess</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Viking Rising</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//egt/Viking_Rising_11632.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Viking Rising</div>
									<div class="provider-name_60cf0">Amusnet (EGT)</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3">Bonus Satın Al</div>
										<div class="game-tag_4a8b3">Popüler</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Sugar Rush</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Sugar Rush</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-tags_e6d69">
										<div class="game-tag_4a8b3">Bonus Satın Al</div>
									</div>
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Money Train 3</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//relax_gaming_relax/Money_Train_3_11981.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Money Train 3</div>
									<div class="provider-name_60cf0">Relax Gaming</div>
								</div>
							</div>
						</div>
						<div class="games_2fa18">
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">20 Power Hot</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//egt/20_Power_Hot_10613.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">20 Power Hot</div>
									<div class="provider-name_60cf0">Amusnet (EGT)</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Big Bass Hold &amp; Spinner Megaways</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Big_Bass_Hold_amp_Spinner_Megaways_10110.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Big Bass Hold &amp; Spinner Megaways</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Starlight Princess 1000</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Starlight_Princess_1000_11354.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Starlight Princess 1000</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Egyptian Book</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//the_ear_casino/Egyptian_Book_11566.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Egyptian Book</div>
									<div class="provider-name_60cf0">The Ear Casino</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Blazing Wilds Megaways</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Blazing_Wilds_Megaways_11021.png"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Blazing Wilds Megaways</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
							<div class="game-wrap_00070 not-tournament-wrap_e6105">
								<div class="game_8a836 not-tournament_a3fc7">
									<div class="game-info_9cfcd">
										<div class="game-info-bottom_f5832">
											<div class="game-name_5ff2a">Saray Ruyasi</div>
											<div class="game-actions_2ab5f">
												<button class="btn_3963a play_9d43e">Play</button>
											</div>
										</div>
									</div>
									<img
										src={ButterflyLovers}
										alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Saray_Ruyasi_11353.webp"
										class="game-image_2d873"
									/>
								</div>
								<div class="item-bottom_a28c2">
									<div class="game-name_5ff2a">Saray Ruyasi</div>
									<div class="provider-name_60cf0">Pragmatic Play</div>
								</div>
							</div>
						</div>
						<div class="btn-wrapper_88caa">
							<button type="button" class="btn_976e6">Show more</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="menu-container_b5e9b">
		<div class="menu_bffb2">
			<div class="left_64b3b">
				<a href="/login" class="btn_2c6a0 btn-login_0e4aa">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
					>
						<g clip-path="url(#clip0_336_11110)">
							<path
								d="M8.00035 0C3.58234 0 0 3.58164 0 8C0 12.4184 3.58199 16 8.00035 16C12.4191 16 16.0007 12.4184 16.0007 8C16.0007 3.58164 12.4191 0 8.00035 0ZM8.00035 2.39209C9.46224 2.39209 10.6469 3.57707 10.6469 5.03826C10.6469 6.4998 9.46224 7.68443 8.00035 7.68443C6.53916 7.68443 5.35454 6.4998 5.35454 5.03826C5.35454 3.57707 6.53916 2.39209 8.00035 2.39209ZM7.99859 13.9084C6.54057 13.9084 5.20518 13.3774 4.17518 12.4985C3.92427 12.2845 3.77949 11.9707 3.77949 11.6414C3.77949 10.1595 4.97887 8.97342 6.46115 8.97342H9.54026C11.0229 8.97342 12.2177 10.1595 12.2177 11.6414C12.2177 11.971 12.0736 12.2841 11.8224 12.4981C10.7927 13.3774 9.45697 13.9084 7.99859 13.9084Z"
								fill="currentColor"
							></path>
						</g>
					</svg>
					<p>Login</p>
				</a>
				<a href="/registration" class="btn_2c6a0 btn-registration_27632"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58173 12.4183 0 8 0C3.58172 0 0 3.58173 0 8C0 12.4183 3.58172 16 8 16ZM7 7V4H9V7H12V9H9V12H7V9H4V7H7Z"
							fill="currentColor"
						></path>
					</svg>
					<p>join now</p>
				</a>
			</div>
			<div class="center_cceee">
				<div class="center-content_c5500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						class="icon_e1db5"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3 0H17C18.1 0 19 0.906801 19 2.01511V17.33C19 18.7406 17.6 19.7481 16.3 19.2443L14.7 18.6398C14.2 18.4383 13.7 18.4383 13.2 18.7406L10.8 19.8489C10.3 20.0504 9.7 20.0504 9.2 19.8489L6.8 18.7406C6.3 18.539 5.8 18.539 5.3 18.6398L3.7 19.1436C2.4 19.6474 1 18.6398 1 17.33V2.01511C1 0.906801 1.9 0 3 0ZM15 5.84383C15.4 5.84383 15.8 5.54156 15.8 5.03778C15.8 4.53401 15.4 4.23174 15 4.23174H5C4.6 4.23174 4.2 4.63476 4.2 5.03778C4.2 5.44081 4.6 5.84383 5 5.84383H15ZM15.8 9.06801C15.8 9.47103 15.5 9.87406 15 9.87406H5C4.6 9.87406 4.2 9.57179 4.2 9.06801C4.2 8.56423 4.5 8.26196 5 8.26196H15C15.4 8.26196 15.8 8.66499 15.8 9.06801ZM10 13.9043C10.4 13.9043 10.8 13.602 10.8 13.0982C10.8 12.5945 10.5 12.2922 10 12.2922H5C4.6 12.2922 4.2 12.5945 4.2 13.0982C4.2 13.602 4.5 13.9043 5 13.9043H10Z"
							fill="currentColor"
						></path>
					</svg>
					<div class="title_dfe0f">
						My Coupon
						<div class="amount_71464">( 0 )</div>
					</div>
					<div class="link_b6115"></div>
				</div>
			</div>
			<div class="right_f8e4c">
				<button class="btn_ff179"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						class="icon_8a5d7"
						color="#81E1B3"
					>
						<g>
							<path
								d="M20 13.535C20 11.0531 18.5762 8.83817 16.4438 7.76074C16.3776 12.5193 12.5195 16.3774 7.76093 16.4436C8.83835 18.576 11.0533 19.9998 13.5352 19.9998C14.6988 19.9998 15.8304 19.6899 16.8246 19.1011L19.9718 19.9716L19.1013 16.8245C19.6901 15.8302 20 14.6986 20 13.535Z"
								fill="currentColor"
							></path>
							<path
								d="M15.2734 7.63672C15.2734 3.42575 11.8477 0 7.63672 0C3.42575 0 0 3.42575 0 7.63672C0 9.0091 0.365295 10.3453 1.05896 11.5184L0.0280762 15.2452L3.75504 14.2145C4.92813 14.9081 6.26434 15.2734 7.63672 15.2734C11.8477 15.2734 15.2734 11.8477 15.2734 7.63672ZM6.46484 5.85938H5.29297C5.29297 4.56696 6.3443 3.51563 7.63672 3.51563C8.92914 3.51563 9.98047 4.56696 9.98047 5.85938C9.98047 6.51535 9.70276 7.14584 9.21829 7.58896L8.22266 8.50021V9.41406H7.05078V7.98416L8.42712 6.7244C8.6731 6.49933 8.80859 6.19217 8.80859 5.85938C8.80859 5.21317 8.28293 4.6875 7.63672 4.6875C6.99051 4.6875 6.46484 5.21317 6.46484 5.85938ZM7.05078 10.5859H8.22266V11.7578H7.05078V10.5859Z"
								fill="currentColor"
							></path>
						</g>
					</svg><span>Support</span></button
				><button class="btn_ff179 quick-actions_34d25"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						class="icon_8a5d7"
					>
						<path
							d="M0.585067 15.3998H15.8983C16.0356 15.3998 16.1683 15.3506 16.2736 15.2609C16.4207 15.1348 19.7758 12.1794 19.9804 5.7998H3.53434C3.33054 11.5908 0.240637 14.3127 0.208527 14.3398C0.020276 14.5027 -0.0489849 14.7687 0.0357064 15.0055C0.119812 15.2416 0.339001 15.3998 0.585067 15.3998Z"
							fill="currentColor"
						></path>
						<path
							d="M19.414 2.2H16.4842V1.6C16.4842 1.264 16.2264 1 15.8983 1C15.5701 1 15.3123 1.264 15.3123 1.6V2.2H12.3434V1.6C12.3434 1.264 12.0856 1 11.7574 1C11.4293 1 11.1715 1.264 11.1715 1.6V2.2H8.24167V1.6C8.24167 1.264 7.98384 1 7.6557 1C7.32756 1 7.06974 1.264 7.06974 1.6V2.2H4.13992C3.81178 2.2 3.55396 2.464 3.55396 2.8V4.59999H20V2.8C20 2.464 19.7422 2.2 19.414 2.2Z"
							fill="currentColor"
						></path>
						<path
							d="M17.0261 16.1812C16.7079 16.4525 16.3086 16.6001 15.8983 16.6001H3.55396V18.4001C3.55396 18.7318 3.81604 19.0001 4.13992 19.0001H19.414C19.7379 19.0001 20 18.7318 20 18.4001V11.6743C18.8703 14.5123 17.2938 15.9518 17.0261 16.1812Z"
							fill="currentColor"
						></path>
					</svg><span>Quick Actions</span><svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						class="arrow_3caef"
					>
						<path
							d="M8.62633 -1.50828e-06L5 3.41372L1.37367 -2.40181e-07L2.26099e-07 1.29314L5 6L10 1.29314L8.62633 -1.50828e-06Z"
							fill="currentColor"
						></path>
					</svg></button
				><button class="btn_ff179 btn-notification_b107b"
					><svg
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
					</svg></button
				>
			</div>
		</div>
	</div>
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
