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


<div class="content_92bf7">
    <div class="container_1e125">
        <div class="wrapper_b9f41">
            <div class="title_dfc52">Call Requests</div>
            <div>
                <div class="tickets_wrap">
                    <div class="create-tickets-container_98cdb">
                        <form id="formCreate">
                            <div class="input-container_21e35">
                                <div class="form-group_e43d9">
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
                                                                placeholder={convertDefaultDateFormat(today)}
                                                            />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group_e43d9">
                                    <!-- svelte-ignore a11y-label-has-associated-control -->
                                    <label class="default_box_title_61202">Call Time</label>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon_c3888"
                                    >
                                        <path
                                            d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.0034663 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9975 5.87904 15.1538 3.84566 13.6541 2.34591C12.1543 0.84616 10.121 0.00250216 8 0ZM10.696 10.696C10.5596 10.8323 10.3747 10.9089 10.1818 10.9089C9.98897 10.9089 9.80402 10.8323 9.66764 10.696L7.48582 8.51418C7.34942 8.37782 7.27277 8.19287 7.27273 8V3.63636C7.27273 3.44348 7.34935 3.25849 7.48574 3.1221C7.62213 2.98571 7.80712 2.90909 8 2.90909C8.19289 2.90909 8.37787 2.98571 8.51426 3.1221C8.65065 3.25849 8.72727 3.44348 8.72727 3.63636V7.69891L10.696 9.66763C10.8323 9.80402 10.9089 9.98897 10.9089 10.1818C10.9089 10.3747 10.8323 10.5596 10.696 10.696Z"
                                            fill="#4F6069"
                                        ></path>
                                    </svg>
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
                                <div class="form-group_e43d9">
                                    <!-- svelte-ignore a11y-label-has-associated-control -->
                                    <label class="default_box_title_61202">Username</label><svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="first-name-icon_a6b7b"
                                    >
                                        <g clip-path="url(#clip0_1_7559)">
                                            <path
                                                d="M8.00035 0C3.58234 0 0 3.58164 0 8C0 12.4184 3.58199 16 8.00035 16C12.4191 16 16.0007 12.4184 16.0007 8C16.0007 3.58164 12.4191 0 8.00035 0ZM8.00035 2.39209C9.46224 2.39209 10.6469 3.57707 10.6469 5.03826C10.6469 6.4998 9.46224 7.68443 8.00035 7.68443C6.53916 7.68443 5.35454 6.4998 5.35454 5.03826C5.35454 3.57707 6.53916 2.39209 8.00035 2.39209ZM7.99859 13.9084C6.54057 13.9084 5.20518 13.3774 4.17518 12.4985C3.92427 12.2845 3.77949 11.9707 3.77949 11.6414C3.77949 10.1595 4.97887 8.97342 6.46115 8.97342H9.54026C11.0229 8.97342 12.2177 10.1595 12.2177 11.6414C12.2177 11.971 12.0736 12.2841 11.8224 12.4981C10.7927 13.3774 9.45697 13.9084 7.99859 13.9084Z"
                                                fill="#4F6069"
                                            ></path>
                                        </g>
                                        <defs>
                                            <clippath id="clip0_1_7559">
                                                <rect width="16.0007" height="16" fill="white"></rect>
                                            </clippath>
                                        </defs>
                                    </svg>
                                    <div class="account-input-wrapper">
                                        <div class="default_input">
                                            <input
                                                type="text"
                                                name="username"
                                                autocomplete="off"
                                                id="username"
                                                class="input-theme_0403c input-first-name_35cd9"
                                                value="egghead"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group_e43d9">
                                    <!-- svelte-ignore a11y-label-has-associated-control -->
                                    <label class="default_box_title_61202">Phone Number</label><svg
                                        width="10"
                                        height="16"
                                        viewBox="0 0 10 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="mobile-phone-icon_3f02c"
                                    >
                                        <path
                                            d="M8.71493 0H1.28507C0.574002 0 0 0.522411 0 1.16551V14.8357C0 15.4782 0.574002 16 1.28507 16H8.71493C9.42471 16 10 15.4782 10 14.8357V1.16551C10 0.522411 9.42471 0 8.71493 0ZM3.16667 0.70782H6.83462C6.92729 0.70782 7.00257 0.833175 7.00257 0.988266C7.00257 1.14336 6.92729 1.2693 6.83462 1.2693H3.16667C3.07336 1.2693 2.99936 1.14336 2.99936 0.988266C2.99936 0.833175 3.07336 0.70782 3.16667 0.70782ZM5.00064 14.8496C4.54826 14.8496 4.18018 14.5161 4.18018 14.1057C4.18018 13.6952 4.54826 13.3629 5.00064 13.3629C5.45174 13.3629 5.81982 13.6952 5.81982 14.1057C5.81982 14.5161 5.45174 14.8496 5.00064 14.8496ZM9.03732 12.3023H0.96332V1.96662H9.03732V12.3023Z"
                                            fill="#4F6069"
                                        ></path>
                                    </svg>
                                    <div class="account-input-wrapper">
                                        <div class="default_input">
                                            <input
                                                type="text"
                                                name="mobile_phone"
                                                autocomplete="off"
                                                id="mobile_phone"
                                                class="input-theme_0403c input-mobile-phone_dc32f"
                                                value="+905*****9455"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-area-group_82b6a">
                                <!-- svelte-ignore a11y-label-has-associated-control -->
                                <label class="default_box_title_61202">Message</label>
                                <div>
                                    <div class="default_textarea">
                                        <textarea
                                            placeholder="Please write the details about why you are requesting to be call."
                                            name="message"
                                            id="message"
                                            class="textarea-theme_b6006"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="button-container_7b209">
                                <button type="submit" class="btn_account btn-account_a439f"
                                    >Create Request</button
                                >
                            </div>
                        </form>
                        <div></div>
                    </div>
                    <div class="tickets-table-wrapper_6c1a4">
                        <div class="title_3884d">My Past Call Requests</div>
                        <div class="tickets_filter_box_3169c">
                            <div class="filter_b7619">
                                <div class="item_d7c41">
                                    <div>
                                        <div class="calendar-wrapper_e399a">
                                            <button class="calendar-input_d9464"
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
                                                            <rect width="16" height="16" fill="white"></rect>
                                                        </clippath>
                                                    </defs>
                                                </svg>07 May, Tuesday, 2024</button
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="item_d7c41">
                                    <div>
                                        <div class="calendar-wrapper_e399a">
                                            <button class="calendar-input_d9464"
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
                                                            <rect width="16" height="16" fill="white"></rect>
                                                        </clippath>
                                                    </defs>
                                                </svg>
                                                21 May, Tuesday, 2024
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-button_7c041">
                                    <button type="submit" id="filterTickets" class="btn_vinous_7b01b">Show</button
                                    >
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="no-content_c5b4a">No Content</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>