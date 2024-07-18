<script>
	// @ts-nocheck

	import Banner from '$lib/components/_utils/Banner.svelte';
	import BetineAvatarDefault from '$lib/images/betine-avatar-default.png';
	import Blackjack_X_6_Azure from '$lib/images/providers/Blackjack_X_6_Azure_11823.png';
	import Blackjack_X_17_Azure from '$lib/images/mobile/live_casino/Blackjack_X_17_Azure_11741.webp';
	import Live_Mega_Wheel from '$lib/images/mobile/live_casino/Live_Mega_Wheel_9432.webp';

	let is_dropdown_providers = false;
	let is_dropdown_order = false;

	let providersDropdown;
	let mobileProvidersDropdown;
	let orderDropdown;
	let mobileOrderDropdown;

	const handleProvidersDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
		console.log(relatedTarget, currentTarget);
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return;
		is_dropdown_providers = false;
	};

	const handleOrderDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return;
		is_dropdown_order = false;
	};

	const filterProviders = () => {
		is_dropdown_providers = false;
	};

	const order = () => {
		is_dropdown_order = false;
	};

	let is_show_providers_modal = false;
	let is_show_search_modal = false;

	const toggleProvidersModal = () => {
		is_show_providers_modal = !is_show_providers_modal;
	};

	const toggleSearchModal = () => {
		is_show_search_modal = !is_show_search_modal;
	};

	let search_input_value = '';

	const onSearchInputChange = (e) => {
		search_input_value = e.target.value;
	};

	function handleOutsideClick(event) {
		const target = event.target;

		if (is_dropdown_providers && !providersDropdown.contains(target)) {
			is_dropdown_providers = false;
		} else if (is_dropdown_order && !orderDropdown.contains(target)) {
			is_dropdown_order = false;
		} else if (is_show_providers_modal && !mobileProvidersDropdown.contains(target)) {
			is_show_providers_modal = false;
		} else if (is_show_search_modal & !mobileOrderDropdown.contains(target)) {
			is_show_search_modal = false;
		}
	}
</script>


<div>
    <div>
        <div class="live-casino-slider_aad2d main-slider_9a25c">
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
    <div class="container_3c446 container_ac2c7 large_6e58f">
        <div class="wrapper_6475f">
            <div class="left-side_48435">
                <div class="tabs-container_564ea">
                    <div class="providers_c7033">
                        <div class="providers-left_23fbb">
                            <div class="providers-icon_c9998"></div>
                            <div class="providers-title_8daf7">Our Providers</div>
                        </div>
                        <div class="providers-amount_3148d">13</div>
                    </div>
                    <div class="button-wrap_15966 selected_80de6">
                        <button class="item_371f2">
                            <div class="icon-wrap_11223">
                                <div class="item-icon_f1f2f all_e2ae9"></div>
                            </div>
                            <div class="item-right_fddd4">
                                <div class="item-title_3d690">All providers</div>
                                <span class="item-count_e16fc">453</span>
                            </div>
                        </button>
                    </div>
                    <div class="button-wrap_15966">
                        <button class="item_371f2">
                            <div class="icon-wrap_11223">
                                <div class="item-icon_f1f2f ezugi_evolution_881c2"></div>
                            </div>
                            <div class="item-right_fddd4">
                                <div class="item-title_3d690">Evolution</div>
                                <span class="item-count_e16fc">101</span>
                            </div>
                        </button>
                    </div>
                    <div class="button-wrap_15966">
                        <button class="item_371f2">
                            <div class="icon-wrap_11223">
                                <div class="item-icon_f1f2f pragmatic_play_casino_4c43f"></div>
                            </div>
                            <div class="item-right_fddd4">
                                <div class="item-title_3d690">Pragmatic Play</div>
                                <span class="item-count_e16fc">112</span>
                            </div>
                        </button>
                    </div>
                    <div class="button-wrap_15966">
                        <button class="item_371f2">
                            <div class="icon-wrap_11223">
                                <div class="item-icon_f1f2f ezugi_322cd"></div>
                            </div>
                            <div class="item-right_fddd4">
                                <div class="item-title_3d690">Ezugi</div>
                                <span class="item-count_e16fc">32</span>
                            </div>
                        </button>
                    </div>
                    <div class="button-wrap_15966">
                        <button class="item_371f2">
                            <div class="icon-wrap_11223">
                                <div class="item-icon_f1f2f bgaming_casino_6ce26"></div>
                            </div>
                            <div class="item-right_fddd4">
                                <div class="item-title_3d690">Bgaming Casino</div>
                                <span class="item-count_e16fc">21</span>
                            </div>
                        </button>
                    </div>
                    <div class="button-wrap_15966">
                        <button class="item_371f2">
                            <div class="icon-wrap_11223">
                                <div class="item-icon_f1f2f onetouch_casino_bdbc7"></div>
                            </div>
                            <div class="item-right_fddd4">
                                <div class="item-title_3d690">OneTouch Casino</div>
                                <span class="item-count_e16fc">48</span>
                            </div>
                        </button>
                    </div>
                    <div class="button-wrap_15966">
                        <button class="item_371f2">
                            <div class="icon-wrap_11223">
                                <div class="item-icon_f1f2f playtech_casino_c7f0c"></div>
                            </div>
                            <div class="item-right_fddd4">
                                <div class="item-title_3d690">Playtech Casino</div>
                                <span class="item-count_e16fc">41</span>
                            </div>
                        </button>
                    </div>
                    <div class="button-wrap_15966">
                        <button class="item_371f2">
                            <div class="icon-wrap_11223">
                                <div class="item-icon_f1f2f egt_casino_2d768"></div>
                            </div>
                            <div class="item-right_fddd4">
                                <div class="item-title_3d690">Amusnet (EGT)</div>
                                <span class="item-count_e16fc">7</span>
                            </div>
                        </button>
                    </div>
                    <div class="button-wrap_15966">
                        <button class="item_371f2">
                            <div class="icon-wrap_11223">
                                <div class="item-icon_f1f2f lucky_streak_d182a"></div>
                            </div>
                            <div class="item-right_fddd4">
                                <div class="item-title_3d690">Lucky Streak</div>
                                <span class="item-count_e16fc">15</span>
                            </div>
                        </button>
                    </div>
                    <div class="button-wrap_15966">
                        <button class="item_371f2">
                            <div class="icon-wrap_11223">
                                <div class="item-icon_f1f2f vivo_casino_e93ac"></div>
                            </div>
                            <div class="item-right_fddd4">
                                <div class="item-title_3d690">Vivo</div>
                                <span class="item-count_e16fc">21</span>
                            </div>
                        </button>
                    </div>
                    <div class="button-wrap_15966">
                        <button class="item_371f2">
                            <div class="icon-wrap_11223">
                                <div class="item-icon_f1f2f alg_net_4a5c9"></div>
                            </div>
                            <div class="item-right_fddd4">
                                <div class="item-title_3d690">Absolute Gaming</div>
                                <span class="item-count_e16fc">15</span>
                            </div>
                        </button>
                    </div>
                    <div class="button-wrap_15966">
                        <button class="item_371f2">
                            <div class="icon-wrap_11223">
                                <div class="item-icon_f1f2f the_ear_liveg24_589e2"></div>
                            </div>
                            <div class="item-right_fddd4">
                                <div class="item-title_3d690">Liveg24</div>
                                <span class="item-count_e16fc">8</span>
                            </div>
                        </button>
                    </div>
                    <div class="button-wrap_15966">
                        <button class="item_371f2">
                            <div class="icon-wrap_11223">
                                <div class="item-icon_f1f2f smartsoft_casino_efe1b"></div>
                            </div>
                            <div class="item-right_fddd4">
                                <div class="item-title_3d690">Smartsoft Casino</div>
                                <span class="item-count_e16fc">22</span>
                            </div>
                        </button>
                    </div>
                    <div class="button-wrap_15966">
                        <button class="item_371f2">
                            <div class="icon-wrap_11223">
                                <div class="item-icon_f1f2f betgames_a2f58"></div>
                            </div>
                            <div class="item-right_fddd4">
                                <div class="item-title_3d690">Bet Games</div>
                                <span class="item-count_e16fc">10</span>
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
                                <h4 class="winner-info-name_a3961">Osm***</h4>
                                <span class="winner-bet-provider_04025">MB1811978465</span>
                            </div>
                            <span class="winner-bet-amount_7316c">108000 TRY</span>
                        </div>
                        <div class="casino-top-winners-item_0ee1a">
                            <div class="winner-img-container_1335e">
                                <img src={BetineAvatarDefault} alt="" />
                            </div>
                            <div class="winner-info_80490">
                                <h4 class="winner-info-name_a3961">Emr***</h4>
                                <span class="winner-bet-provider_04025">MB1812626053</span>
                            </div>
                            <span class="winner-bet-amount_7316c">60000 TRY</span>
                        </div>
                        <div class="casino-top-winners-item_0ee1a">
                            <div class="winner-img-container_1335e">
                                <img src={BetineAvatarDefault} alt="" />
                            </div>
                            <div class="winner-info_80490">
                                <h4 class="winner-info-name_a3961">Fur***</h4>
                                <span class="winner-bet-provider_04025">MB1819008045</span>
                            </div>
                            <span class="winner-bet-amount_7316c">58320 TRY</span>
                        </div>
                        <div class="casino-top-winners-item_0ee1a">
                            <div class="winner-img-container_1335e">
                                <img src={BetineAvatarDefault} alt="" />
                            </div>
                            <div class="winner-info_80490">
                                <h4 class="winner-info-name_a3961">Yıl***</h4>
                                <span class="winner-bet-provider_04025">MB1820619976</span>
                            </div>
                            <span class="winner-bet-amount_7316c">32000 TRY</span>
                        </div>
                        <div class="casino-top-winners-item_0ee1a">
                            <div class="winner-img-container_1335e">
                                <img src={BetineAvatarDefault} alt="" />
                            </div>
                            <div class="winner-info_80490">
                                <h4 class="winner-info-name_a3961">Erd***</h4>
                                <span class="winner-bet-provider_04025">MB1815324180</span>
                            </div>
                            <span class="winner-bet-amount_7316c">20040 TRY</span>
                        </div>
                        <div class="casino-top-winners-item_0ee1a">
                            <div class="winner-img-container_1335e">
                                <img src={BetineAvatarDefault} alt="" />
                            </div>
                            <div class="winner-info_80490">
                                <h4 class="winner-info-name_a3961">Emi***</h4>
                                <span class="winner-bet-provider_04025">MB1812670187</span>
                            </div>
                            <span class="winner-bet-amount_7316c">18000 TRY</span>
                        </div>
                        <div class="casino-top-winners-item_0ee1a">
                            <div class="winner-img-container_1335e">
                                <img src={BetineAvatarDefault} alt="" />
                            </div>
                            <div class="winner-info_80490">
                                <h4 class="winner-info-name_a3961">Emr***</h4>
                                <span class="winner-bet-provider_04025">MB1815224465</span>
                            </div>
                            <span class="winner-bet-amount_7316c">25200 TRY</span>
                        </div>
                        <div class="casino-top-winners-item_0ee1a">
                            <div class="winner-img-container_1335e">
                                <img src={BetineAvatarDefault} alt="" />
                            </div>
                            <div class="winner-info_80490">
                                <h4 class="winner-info-name_a3961">Dan***</h4>
                                <span class="winner-bet-provider_04025">MB1820624637</span>
                            </div>
                            <span class="winner-bet-amount_7316c">18400 TRY</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-wrap_72863">
                <div class="filters-wrapper_2be75">
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
                    <div
                        class="menu_9e6b3"
                        on:focusout={handleProvidersDropdownFocusLoss}
                        bind:this={providersDropdown}
                    >
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div
                            class="select_369d8"
                            on:click={() => {
                                is_dropdown_providers = !is_dropdown_providers;
                            }}
                        >
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
                        <div
                            class="dropdown-menu_455a7"
                            style={is_dropdown_providers ? `display: block` : `display: none`}
                            on:focusout={handleProvidersDropdownFocusLoss}
                        >
                            <div class="dropdown-list_25744">
                                <button class="item_fe501 selected_c8828" on:click={filterProviders}>
                                    <div class="icon-wrap_b25df">
                                        <div class="item-icon_adac9 provider-icon_f4df5 all_43303"></div>
                                    </div>
                                    <div class="separator_850c1"></div>
                                    <div class="item-title_0f978">All</div>
                                    <span class="count_2232d">453</span>
                                </button>
                                <button class="item_fe501" on:click={filterProviders}>
                                    <div class="icon-wrap_b25df">
                                        <div class="item-icon_adac9 provider-icon_f4df5 ezugi_evolution_f24e1"></div>
                                    </div>
                                    <div class="separator_850c1"></div>
                                    <div class="item-title_0f978">Evolution</div>
                                    <span class="count_2232d">101</span>
                                </button>
                                <button class="item_fe501" on:click={filterProviders}>
                                    <div class="icon-wrap_b25df">
                                        <div
                                            class="item-icon_adac9 provider-icon_f4df5 pragmatic_play_casino_5caa8"
                                        ></div>
                                    </div>
                                    <div class="separator_850c1"></div>
                                    <div class="item-title_0f978">Pragmatic Play</div>
                                    <span class="count_2232d">112</span>
                                </button>
                                <button class="item_fe501" on:click={filterProviders}>
                                    <div class="icon-wrap_b25df">
                                        <div class="item-icon_adac9 provider-icon_f4df5 ezugi_cac46"></div>
                                    </div>
                                    <div class="separator_850c1"></div>
                                    <div class="item-title_0f978">Ezugi</div>
                                    <span class="count_2232d">32</span>
                                </button>
                                <button class="item_fe501" on:click={filterProviders}>
                                    <div class="icon-wrap_b25df">
                                        <div class="item-icon_adac9 provider-icon_f4df5 bgaming_casino_dee8f"></div>
                                    </div>
                                    <div class="separator_850c1"></div>
                                    <div class="item-title_0f978">Bgaming Casino</div>
                                    <span class="count_2232d">21</span>
                                </button>
                                <button class="item_fe501" on:click={filterProviders}>
                                    <div class="icon-wrap_b25df">
                                        <div class="item-icon_adac9 provider-icon_f4df5 onetouch_casino_c4c98"></div>
                                    </div>
                                    <div class="separator_850c1"></div>
                                    <div class="item-title_0f978">OneTouch Casino</div>
                                    <span class="count_2232d">48</span>
                                </button>
                                <button class="item_fe501" on:click={filterProviders}>
                                    <div class="icon-wrap_b25df">
                                        <div class="item-icon_adac9 provider-icon_f4df5 playtech_casino_be414"></div>
                                    </div>
                                    <div class="separator_850c1"></div>
                                    <div class="item-title_0f978">Playtech Casino</div>
                                    <span class="count_2232d">41</span>
                                </button>
                                <button class="item_fe501" on:click={filterProviders}>
                                    <div class="icon-wrap_b25df">
                                        <div class="item-icon_adac9 provider-icon_f4df5 egt_casino_cb226"></div>
                                    </div>
                                    <div class="separator_850c1"></div>
                                    <div class="item-title_0f978">Amusnet (EGT)</div>
                                    <span class="count_2232d">7</span>
                                </button>
                                <button class="item_fe501" on:click={filterProviders}>
                                    <div class="icon-wrap_b25df">
                                        <div class="item-icon_adac9 provider-icon_f4df5 lucky_streak_335a0"></div>
                                    </div>
                                    <div class="separator_850c1"></div>
                                    <div class="item-title_0f978">Lucky Streak</div>
                                    <span class="count_2232d">15</span>
                                </button>
                                <button class="item_fe501" on:click={filterProviders}>
                                    <div class="icon-wrap_b25df">
                                        <div class="item-icon_adac9 provider-icon_f4df5 vivo_casino_54977"></div>
                                    </div>
                                    <div class="separator_850c1"></div>
                                    <div class="item-title_0f978">Vivo</div>
                                    <span class="count_2232d">21</span>
                                </button>
                                <button class="item_fe501" on:click={filterProviders}>
                                    <div class="icon-wrap_b25df">
                                        <div class="item-icon_adac9 provider-icon_f4df5 alg_net_82dbf"></div>
                                    </div>
                                    <div class="separator_850c1"></div>
                                    <div class="item-title_0f978">Absolute Gaming</div>
                                    <span class="count_2232d">15</span>
                                </button>
                                <button class="item_fe501" on:click={filterProviders}>
                                    <div class="icon-wrap_b25df">
                                        <div class="item-icon_adac9 provider-icon_f4df5 the_ear_liveg24_63636"></div>
                                    </div>
                                    <div class="separator_850c1"></div>
                                    <div class="item-title_0f978">Liveg24</div>
                                    <span class="count_2232d">8</span>
                                </button>
                                <button class="item_fe501" on:click={filterProviders}>
                                    <div class="icon-wrap_b25df">
                                        <div class="item-icon_adac9 provider-icon_f4df5 smartsoft_casino_27628"></div>
                                    </div>
                                    <div class="separator_850c1"></div>
                                    <div class="item-title_0f978">Smartsoft Casino</div>
                                    <span class="count_2232d">22</span>
                                </button>
                                <button class="item_fe501" on:click={filterProviders}>
                                    <div class="icon-wrap_b25df">
                                        <div class="item-icon_adac9 provider-icon_f4df5 betgames_f1fcc"></div>
                                    </div>
                                    <div class="separator_850c1"></div>
                                    <div class="item-title_0f978">Bet Games</div>
                                    <span class="count_2232d">10</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        class="menu_f3ce3"
                        on:focusout={handleOrderDropdownFocusLoss}
                        bind:this={orderDropdown}
                    >
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div
                            class="select_b1024"
                            on:click={() => {
                                is_dropdown_order = !is_dropdown_order;
                            }}
                        >
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
                        <div
                            class="dropdown-menu_17a6b"
                            style={is_dropdown_order ? `display: block` : `display: none`}
                        >
                            <div class="dropdown-list_2dba3">
                                <div class="game_filters_item">
                                    <button class="item_37f26 selected_9eeda">
                                        <div class="item-title_e29d2">Base Order</div>
                                    </button>
                                    <button class="item_37f26">
                                        <div class="item-title_e29d2">Default</div>
                                    </button>
                                    <button class="item_37f26">
                                        <div class="item-title_e29d2">Alphabetical</div>
                                    </button>
                                    <button class="item_37f26">
                                        <div class="item-title_e29d2">Popularity</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tabs-wrap_dd4b1" style="overflow: auto;">
                    <div class="menu_28e89">
                        <button class="tab-favourites_786d7"
                            ><span class="title_ec0a5">Favorites</span>
                            <div class="amount_2a767">0</div>
                        </button>
                        <div class="separator_9d31c"></div>
                        <button class="tab_7f72e selected_3d5eb">all</button>
                        <button class="tab_7f72e">popüler</button><button class="tab_7f72e"
                            >yeni oyunlar</button
                        >
                        <button class="tab_7f72e">yarışma oyunları </button>
                        <button class="tab_7f72e">canlı oyunlar</button>
                        <button class="tab_7f72e">blackjack</button><button class="tab_7f72e">roulette</button
                        >
                    </div>
                </div>
                <h1 class="main-title_3d8d4">All providers / all</h1>
                <div class="livespins-sdk-container_7460c"></div>
                <div class="games_c82ed" style="overflow: auto;">
                    <div>
                        <div class="games_2831d">
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Lucky 6 Roulette</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Lucky_6_Roulette_11017.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 1 - Azure</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_1_Azure_11816.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 2 - Azure</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_2_Azure_11817.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 3 - Azure</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_3_Azure_11820.png"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 4 - Ruby</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_4_Ruby_11821.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 5 - Ruby</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_5_Ruby_11822.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="games_c82ed" style="overflow: auto;">
                    <div>
                        <div class="games_2831d">
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Lucky 6 Roulette</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Lucky_6_Roulette_11017.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 1 - Azure</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_1_Azure_11816.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 2 - Azure</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_2_Azure_11817.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 3 - Azure</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_3_Azure_11820.png"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 4 - Ruby</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_4_Ruby_11821.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 5 - Ruby</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_5_Ruby_11822.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                        </div>
                        <div class="games_2831d">
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 25 - Azure</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_25_Azure_11732.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 24 - Azure</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_24_Azure_11731.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 21 - Ruby</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_21_Ruby_11733.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 20 - Ruby</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_20_Ruby_11742.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 19 - Ruby</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_19_Ruby_11734.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 18 - Azure</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_18_Azure_11735.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                        </div>
                        <div class="games_2831d">
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 17 - Azure</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_17_Azure_11741.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 16 - Azure</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_16_Azure_11740.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 15 - Ruby</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_15_Ruby_11739.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 14 - Ruby</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_14_Ruby_11738.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 10 - Ruby</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_10_Ruby_11737.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 9 - Ruby</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_9_Ruby_11736.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                        </div>
                        <div class="games_2831d">
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 8 - Ruby</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_8_Ruby_11730.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 7 - Azure</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_7_Azure_11824.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Blackjack X 6 - Azure</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Blackjack_X_6_Azure_11823.png"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Stock Market</div>
                                        <div class="provider-name_4c21e">Evolution</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//ezugi_evolution/Stock_Market_11929.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Live - Mega Wheel</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Live_Mega_Wheel_9432.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Live - Roulette Auto</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Live_Roulette_Auto_9401.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                        </div>
                        <div class="games_2831d">
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Lightning Baccarat</div>
                                        <div class="provider-name_4c21e">Evolution</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//ezugi_evolution/Lightning_Baccarat_8887.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Infinite Blackjack</div>
                                        <div class="provider-name_4c21e">Evolution</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//ezugi_evolution/Infinite_Blackjack_8573.png"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Privé Lounge 1</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Priv_Lounge_1_10374.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Privé Lounge 2</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Priv_Lounge_2_10375.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Privé Lounge 3</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Priv_Lounge_3_10376.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                            <div class="game_4fadc">
                                <div class="game-info_48893">
                                    <div class="favorite-btn-wrap_83541">
                                        <svg
                                            width="16"
                                            height="14"
                                            viewBox="0 0 16 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_3592)">
                                                <path
                                                    d="M4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
                                                    fill="#FBCF44"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_3592">
                                                    <rect width="16" height="14" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div class="game-info-bottom_24b42">
                                        <div class="game-name_89915">Privé Lounge 4</div>
                                        <div class="provider-name_4c21e">Pragmatic Play</div>
                                        <div class="game-actions_22528">
                                            <button class="btn_b9523 play_06cbc">Play</button>
                                        </div>
                                    </div>
                                </div>
                                <img
                                    src={Blackjack_X_6_Azure}
                                    alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play_casino/Priv_Lounge_4_10377.webp"
                                    class="game-image_1653c"
                                />
                            </div>
                        </div>
                        <div class="btn-wrapper_c02f8">
                            <button type="button" class="btn_f9354">Show more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="menu-container_b5e9b">
        <div class="menu_bffb2">
            <div class="left_64b3b">
                <button class="btn_2c6a0 btn-login_0e4aa">
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
                </button>
                <button class="btn_2c6a0 btn-registration_27632">
                    <svg
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
                </button>
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
                <button class="btn_ff179">
                    <svg
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
                    </svg>
                    <span>Support</span>
                </button>
                <button class="btn_ff179 quick-actions_34d25">
                    <svg
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
                    </svg>
                    <span>Quick Actions</span>
                    <svg
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
                    </svg>
                </button>
                <button class="btn_ff179 btn-notification_b107b">
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
                </button>
            </div>
        </div>
    </div>
</div>