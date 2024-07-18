<script>
	// @ts-nocheck

	import Dropdown from '$lib/components/_utils/Dropdown.svelte';
	import { DateInput } from 'date-picker-svelte';
	import { onMount } from 'svelte';
	import BetineDefaultMaleAvatar from '$lib/images/betine-default-male-avatar.png';
	import { convertDefaultDateFormat } from '$lib/utils/date-format';

	let deg = 0;
	onMount(() => {
		const interval = setInterval(() => {
			deg += 2;
			if (deg >= 360) deg = 0;
			document.body.style.setProperty('--deg', deg);
		}, 60);
		return () => clearInterval(interval);
	});

	const call_time_array = [
		{
			key: 1,
			label: '9.00 - 10.00'
		},
		{
			key: 2,
			label: '10.00 - 11.00'
		},
		{
			key: 3,
			label: '11.00 - 12.00'
		},
		{
			key: 4,
			label: '12.00 - 13.00'
		},
		{
			key: 5,
			label: '13.00 - 14.00'
		},
		{
			key: 6,
			label: '14.00 - 15.00'
		},
		{
			key: 7,
			label: '15.00 - 16.00'
		},
		{
			key: 8,
			label: '16.00 - 17.00'
		},
		{
			key: 9,
			label: '17.00 - 18.00'
		},
		{
			key: 10,
			label: '18.00 - 19.00'
		},
		{
			key: 11,
			label: '19.00 - 20.00'
		},
		{
			key: 12,
			label: '20.00 - 21.00'
		},
		{
			key: 13,
			label: '21.00 - 22.00'
		}
	];

	let is_calltime_dropdown = false;

	let call_time_select = call_time_array[0].key;
	const setCallTimeSelect = (val) => {
		call_time_select = val;
	};

	const today = new Date();
	const one_week_ago = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
	const two_weeks_ago = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000);
</script>
<div class="container_6266f">
    <div>
        <div class="title_8161c">
            <div class="title-wrapper_77489">call requests</div>
        </div>
        <div class="playerInfoContent_c5c50">
            <div>
                <form id="formCreate">
                    <div class="form-group_262fa">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="default_box_title_61202">Call Date</label>
                        <div>
                            <div class="filter_999fd">
                                <div class="item_24885">
                                    <div>
                                        <div class="calendar-wrapper_dfe1c">
                                            <button type="button" class="calendar-input_3b62d"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <g clip-path="url(#clip0_120_1429)">
                                                        <path
                                                            d="M13.6 2.4H12.8V0.8C12.8 0.587827 12.7157 0.384344 12.5657 0.234315C12.4157 0.0842854 12.2122 0 12 0C11.7878 0 11.5843 0.0842854 11.4343 0.234315C11.2843 0.384344 11.2 0.587827 11.2 0.8V2.4H4.8V0.8C4.8 0.587827 4.71571 0.384344 4.56569 0.234315C4.41566 0.0842854 4.21217 0 4 0C3.78783 0 3.58434 0.0842854 3.43431 0.234315C3.28429 0.384344 3.2 0.587827 3.2 0.8V2.4H2.4C1.76348 2.4 1.15303 2.65286 0.702944 3.10294C0.252856 3.55303 0 4.16348 0 4.8V5.6H16V4.8C16 4.16348 15.7471 3.55303 15.2971 3.10294C14.847 2.65286 14.2365 2.4 13.6 2.4Z"
                                                            fill="currentColor"
                                                        >
                                                        </path>
                                                        <path
                                                            d="M0 13.6C0 14.2365 0.252856 14.847 0.702944 15.2971C1.15303 15.7472 1.76348 16 2.4 16H13.6C14.2365 16 14.847 15.7472 15.2971 15.2971C15.7471 14.847 16 14.2365 16 13.6V7.20001H0V13.6Z"
                                                            fill="currentColor"
                                                        >
                                                        </path>
                                                    </g>
                                                    <defs>
                                                        <clippath id="clip0_120_1429">
                                                            <rect width="16" height="16" fill="white"> </rect>
                                                        </clippath>
                                                    </defs>
                                                </svg>
                                                <DateInput
                                                    format="dd/MM/yyyy"
                                                    placeholder={convertDefaultDateFormat(two_weeks_ago)}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group_262fa">
                        <div>
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <!-- svelte-ignore a11y-label-has-associated-control -->
                            <label class="default_box_title_16385">Call Time</label>
                            <Dropdown
                                containerClassName={'clock-select_48b34 select-container_6ea57'}
                                data={call_time_array}
                                isDropdown={false}
                                thumbClassName={''}
                                dropContainerClassName={'select-list-container_d1e85'}
                                value={call_time_select}
                                setValue={setCallTimeSelect}
                            >
                                <button
                                    type="button"
                                    class="select_30808"
                                    on:click={() => (is_calltime_dropdown = !is_calltime_dropdown)}
                                >
                                    <span class="placeholder_ea14e">Call Time</span>
                                    <svg
                                        width="10"
                                        height="7"
                                        viewBox="0 0 10 7"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="arrow-icon_30edb"
                                    >
                                        <path
                                            d="M9.20723 1.27563L4.99986 5.48301L0.79248 1.27563"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </button>
                            </Dropdown>
                        </div>
                    </div>
                    <div class="form-group_262fa">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="default_box_title_16385">Username</label>
                        <div class="default_group_880ec">
                            <div class="default_input_aebbc">
                                <div class="icon_0b038">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="user-icon_744a2"
                                    >
                                        <path
                                            d="M8.00035 0C3.58234 0 0 3.58164 0 8C0 12.4184 3.58199 16 8.00035 16C12.4191 16 16.0007 12.4184 16.0007 8C16.0007 3.58164 12.4191 0 8.00035 0ZM8.00035 2.39209C9.46224 2.39209 10.6469 3.57707 10.6469 5.03826C10.6469 6.4998 9.46224 7.68443 8.00035 7.68443C6.53916 7.68443 5.35454 6.4998 5.35454 5.03826C5.35454 3.57707 6.53916 2.39209 8.00035 2.39209ZM7.99859 13.9084C6.54057 13.9084 5.20518 13.3774 4.17518 12.4985C3.92427 12.2845 3.77949 11.9707 3.77949 11.6414C3.77949 10.1595 4.97887 8.97342 6.46115 8.97342H9.54026C11.0229 8.97342 12.2177 10.1595 12.2177 11.6414C12.2177 11.971 12.0736 12.2841 11.8224 12.4981C10.7927 13.3774 9.45697 13.9084 7.99859 13.9084Z"
                                            fill="#4F6069"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="username"
                                    autocomplete="off"
                                    id="username"
                                    placeholder="Username"
                                    value="egghead"
                                    style="padding-left: 56px;"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-group_262fa">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="default_box_title_16385">Phone Number</label>
                        <div class="default_group_880ec">
                            <div class="default_input_aebbc">
                                <div class="icon_0b038">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mobile-phone-icon_6ef8b"
                                    >
                                        <path
                                            d="M11.7149 0H4.28507C3.574 0 3 0.522411 3 1.16551V14.8357C3 15.4782 3.574 16 4.28507 16H11.7149C12.4247 16 13 15.4782 13 14.8357V1.16551C13 0.522411 12.4247 0 11.7149 0ZM6.16667 0.70782H9.83462C9.92729 0.70782 10.0026 0.833175 10.0026 0.988266C10.0026 1.14336 9.92729 1.2693 9.83462 1.2693H6.16667C6.07336 1.2693 5.99936 1.14336 5.99936 0.988266C5.99936 0.833175 6.07336 0.70782 6.16667 0.70782ZM8.00064 14.8496C7.54826 14.8496 7.18018 14.5161 7.18018 14.1057C7.18018 13.6952 7.54826 13.3629 8.00064 13.3629C8.45174 13.3629 8.81982 13.6952 8.81982 14.1057C8.81982 14.5161 8.45174 14.8496 8.00064 14.8496ZM12.0373 12.3023H3.96332V1.96662H12.0373V12.3023Z"
                                            fill="#4F6069"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    name="mobile_phone"
                                    autocomplete="off"
                                    id="mobile_phone"
                                    placeholder="Phone Number"
                                    value="+905*****9455"
                                    style="padding-left: 56px;"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form-group_262fa">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class="default_box_title_16385">Message</label>
                        <div class="account-form__group">
                            <div class=" ">
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Please write the details about why you are requesting to be call."
                                    class="undefined textarea-theme_3ca70"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn_account btn-account_cf67e">Create Request</button>
                </form>
                <div></div>
            </div>
            <div class="tickets-table-wrapper_aac15">
                <div class="call-request-title_24571 title_d6ffc">My Past Call Requests</div>
                <div>
                    <div class="filter_c742b">
                        <div>
                            <div>
                                <div
                                    class="pr df aic calendar-wrapper_8d79c"
                                    style="display: flex; align-items: center;"
                                >
                                    <button class="calendar-input_1cea3"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                        >
                                            <g clip-path="url(#clip0_120_1429)">
                                                <path
                                                    d="M13.6 2.4H12.8V0.8C12.8 0.587827 12.7157 0.384344 12.5657 0.234315C12.4157 0.0842854 12.2122 0 12 0C11.7878 0 11.5843 0.0842854 11.4343 0.234315C11.2843 0.384344 11.2 0.587827 11.2 0.8V2.4H4.8V0.8C4.8 0.587827 4.71571 0.384344 4.56569 0.234315C4.41566 0.0842854 4.21217 0 4 0C3.78783 0 3.58434 0.0842854 3.43431 0.234315C3.28429 0.384344 3.2 0.587827 3.2 0.8V2.4H2.4C1.76348 2.4 1.15303 2.65286 0.702944 3.10294C0.252856 3.55303 0 4.16348 0 4.8V5.6H16V4.8C16 4.16348 15.7471 3.55303 15.2971 3.10294C14.847 2.65286 14.2365 2.4 13.6 2.4Z"
                                                    fill="currentColor"
                                                ></path>
                                                <path
                                                    d="M0 13.6C0 14.2365 0.252856 14.847 0.702944 15.2971C1.15303 15.7472 1.76348 16 2.4 16H13.6C14.2365 16 14.847 15.7472 15.2971 15.2971C15.7471 14.847 16 14.2365 16 13.6V7.20001H0V13.6Z"
                                                    fill="currentColor"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_120_1429">
                                                    <rect width="16" height="16" fill="white"> </rect>
                                                </clippath>
                                            </defs>
                                        </svg><span>07 May, Tuesday, 2024</span></button
                                    >
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div class="pr df aic calendar-wrapper_8d79c">
                                    <button class="calendar-input_1cea3"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                        >
                                            <g clip-path="url(#clip0_120_1429)">
                                                <path
                                                    d="M13.6 2.4H12.8V0.8C12.8 0.587827 12.7157 0.384344 12.5657 0.234315C12.4157 0.0842854 12.2122 0 12 0C11.7878 0 11.5843 0.0842854 11.4343 0.234315C11.2843 0.384344 11.2 0.587827 11.2 0.8V2.4H4.8V0.8C4.8 0.587827 4.71571 0.384344 4.56569 0.234315C4.41566 0.0842854 4.21217 0 4 0C3.78783 0 3.58434 0.0842854 3.43431 0.234315C3.28429 0.384344 3.2 0.587827 3.2 0.8V2.4H2.4C1.76348 2.4 1.15303 2.65286 0.702944 3.10294C0.252856 3.55303 0 4.16348 0 4.8V5.6H16V4.8C16 4.16348 15.7471 3.55303 15.2971 3.10294C14.847 2.65286 14.2365 2.4 13.6 2.4Z"
                                                    fill="currentColor"
                                                ></path>
                                                <path
                                                    d="M0 13.6C0 14.2365 0.252856 14.847 0.702944 15.2971C1.15303 15.7472 1.76348 16 2.4 16H13.6C14.2365 16 14.847 15.7472 15.2971 15.2971C15.7471 14.847 16 14.2365 16 13.6V7.20001H0V13.6Z"
                                                    fill="currentColor"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_120_1429">
                                                    <rect width="16" height="16" fill="white"> </rect>
                                                </clippath>
                                            </defs>
                                        </svg><span> 21 May, Tuesday, 2024 </span></button
                                    >
                                    <div class="mt10 pa filter-options_ad691" style="display: none;">
                                        <div class="c-calendar_63960">
                                            <div class=" show">
                                                <div class="nav-wrapper_faf0a">
                                                    <div class="nav-container_41562">
                                                        <div class="navigation_31ae5 prev_2359a"></div>
                                                        <div class="current-date_61b64">
                                                            <div class="current-month_7a34d">May</div>
                                                        </div>
                                                        <div class="navigation_31ae5 next_a5ecb"></div>
                                                    </div>
                                                    <div class="nav-container_41562">
                                                        <div class="navigation_31ae5 prev_2359a"></div>
                                                        <div class="current-date_61b64">
                                                            <div>2024</div>
                                                        </div>
                                                        <div class="navigation_31ae5 next_a5ecb"></div>
                                                    </div>
                                                </div>
                                                <div class="day-names-container_e179f">
                                                    <div class="day-names_23415">
                                                        <div class="day-name_e924d">Mo</div>
                                                        <div class="day-name_e924d">That</div>
                                                        <div class="day-name_e924d">We</div>
                                                        <div class="day-name_e924d">Th</div>
                                                        <div class="day-name_e924d">Fr</div>
                                                        <div class="day-name_e924d">on</div>
                                                        <div class="day-name_e924d">They are</div>
                                                    </div>
                                                </div>
                                                <div class="month-container_0a2bd">
                                                    <div class="month_5de39">
                                                        <div class="week_6443c">
                                                            <div class="day_2d24f outside-month_ee57b">
                                                                <span> 29 </span>
                                                            </div>
                                                            <div class="day_2d24f outside-month_ee57b">
                                                                <span> 30 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 1 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 2 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 3 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 4 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 5 </span>
                                                            </div>
                                                        </div>
                                                        <div class="week_6443c">
                                                            <div class="day_2d24f">
                                                                <span> 6 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 7 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 8 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 9 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 10 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 11 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 12 </span>
                                                            </div>
                                                        </div>
                                                        <div class="week_6443c">
                                                            <div class="day_2d24f">
                                                                <span> 13 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 14 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 15 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 16 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 17 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 18 </span>
                                                            </div>
                                                            <div class="day_2d24f">
                                                                <span> 19 </span>
                                                            </div>
                                                        </div>
                                                        <div class="week_6443c">
                                                            <div class="day_2d24f">
                                                                <span> 20 </span>
                                                            </div>
                                                            <div class="day_2d24f selected_efba3 today_9dfef">
                                                                <span> 21 </span>
                                                            </div>
                                                            <div class="day_2d24f disabled_8dbc7">
                                                                <span> 22 </span>
                                                            </div>
                                                            <div class="day_2d24f disabled_8dbc7">
                                                                <span> 23 </span>
                                                            </div>
                                                            <div class="day_2d24f disabled_8dbc7">
                                                                <span> 24 </span>
                                                            </div>
                                                            <div class="day_2d24f disabled_8dbc7">
                                                                <span> 25 </span>
                                                            </div>
                                                            <div class="day_2d24f disabled_8dbc7">
                                                                <span> 26 </span>
                                                            </div>
                                                        </div>
                                                        <div class="week_6443c">
                                                            <div class="day_2d24f disabled_8dbc7">
                                                                <span> 27 </span>
                                                            </div>
                                                            <div class="day_2d24f disabled_8dbc7">
                                                                <span> 28 </span>
                                                            </div>
                                                            <div class="day_2d24f disabled_8dbc7">
                                                                <span> 29 </span>
                                                            </div>
                                                            <div class="day_2d24f disabled_8dbc7">
                                                                <span> 30 </span>
                                                            </div>
                                                            <div class="day_2d24f disabled_8dbc7">
                                                                <span> 31 </span>
                                                            </div>
                                                            <div class="day_2d24f outside-month_ee57b disabled_8dbc7">
                                                                <span> 1 </span>
                                                            </div>
                                                            <div class="day_2d24f outside-month_ee57b disabled_8dbc7">
                                                                <span> 2 </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item-button_73c6d">
                            <button type="submit" id="filterTickets" class="btn_vinous_e46cb"> Show </button>
                        </div>
                    </div>
                </div>
                <div class="mt20">
                    <div class="no-content_50cc0">No Content</div>
                </div>
            </div>
        </div>
    </div>
</div>



