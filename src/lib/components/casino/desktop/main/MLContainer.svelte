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