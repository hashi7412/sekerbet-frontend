<script>
	// @ts-nocheck

	import PasswordInput from '$lib/components/_utils/PasswordInput.svelte';
	import { TelInput, normalizedCountries } from 'svelte-tel-input';
	import Tek_Yatrm_VPI from '$lib/images/1713441489tek-yatrm-vip.png';
	import Mobile_VIP from '$lib/images/mobile/1713442023mobil-vip.png';
	import Dropdown from '$lib/components/_utils/Dropdown.svelte';
	import LogoLight from '$lib/images/logo-light.png';
	import { convertDefaultDateFormat } from '$lib/utils/date-format';
	import { DateInput } from 'date-picker-svelte';
	import countries from '$lib/data/countries.json';

	const countries_for_select = countries.map((item, index) => ({ key: index, label: item.name }));

	let selectedCountry = 'HU';
	let value = '+36301234567';
	let valid = true;
	let detailedValue = null;

	let step = 1;
	const today = new Date();

	let user_gender = 0;

	let country_select_value = countries_for_select[0].key;
	const setCountrySelectValue = (val) => {
		country_select_value = val;
		cities_select_value = 0;
	};

	let cities_select_value = countries_for_select[0].key;
	const setCitySelectValue = (val) => {
		cities_select_value = val;
	};

	let registration_bonus_id = 1;
</script>


<div class="container_b7192" style={step === 1 ? 'display: block' : 'display: none'}>
    <div class="header_26570">
        <div class="title_dc988">Create Membership</div>
        <div class="subtitle_294f8">Membership Creation Form</div>
    </div>
    <div class="steps_a7c2e">
        <div class="left_50f3c step_a6119 active_c1d4b">
            <div class="step-number_455f8">1. Step</div>
            <div class="step-title_b94fd">Personal Information</div>
            <div class="step-progress_6169f">
                <div class="dot_55cc8">
                    <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1_7566)">
                            <path
                                d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
                                fill="#2C353A"
                            ></path>
                        </g>
                        <defs>
                            <clippath id="clip0_1_7566">
                                <rect width="12" height="10" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
        <div class="center_206b3 step_a6119">
            <div class="step-number_455f8">2. Step</div>
            <div class="step-title_b94fd">Contact Information</div>
            <div class="step-progress_6169f">
                <div class="dot_55cc8">
                    <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1_7566)">
                            <path
                                d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
                                fill="#2C353A"
                            ></path>
                        </g>
                        <defs>
                            <clippath id="clip0_1_7566">
                                <rect width="12" height="10" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
        <div class="right_b4f23 step_a6119">
            <div class="step-number_455f8">3. Step</div>
            <div class="step-title_b94fd">Account Information</div>
            <div class="step-progress_6169f">
                <div class="dot_55cc8">
                    <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1_7566)">
                            <path
                                d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
                                fill="#2C353A"
                            ></path>
                        </g>
                        <defs>
                            <clippath id="clip0_1_7566">
                                <rect width="12" height="10" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <form class="step-content_9254e" action="/" autocomplete="off">
        <div>
            <div class="input-container_0fdaa">
                <div class="control_21d74">
                    <div class="control-placeholder_597d9">First name</div>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon_038a8"
                    >
                        <path
                            d="M8.00035 0C3.58234 0 0 3.58164 0 8C0 12.4184 3.58199 16 8.00035 16C12.4191 16 16.0007 12.4184 16.0007 8C16.0007 3.58164 12.4191 0 8.00035 0ZM8.00035 2.39209C9.46224 2.39209 10.6469 3.57707 10.6469 5.03826C10.6469 6.4998 9.46224 7.68443 8.00035 7.68443C6.53916 7.68443 5.35454 6.4998 5.35454 5.03826C5.35454 3.57707 6.53916 2.39209 8.00035 2.39209ZM7.99859 13.9084C6.54057 13.9084 5.20518 13.3774 4.17518 12.4985C3.92427 12.2845 3.77949 11.9707 3.77949 11.6414C3.77949 10.1595 4.97887 8.97342 6.46115 8.97342H9.54026C11.0229 8.97342 12.2177 10.1595 12.2177 11.6414C12.2177 11.971 12.0736 12.2841 11.8224 12.4981C10.7927 13.3774 9.45697 13.9084 7.99859 13.9084Z"
                            fill="#4F6069"
                        ></path>
                    </svg><input
                        type="text"
                        name="first_name"
                        placeholder="First name"
                        class="control-input_84a73 control-input-with-Icon_56d8c"
                        value=""
                    />
                </div>
            </div>
            <div class="input-container_0fdaa">
                <div class="control_21d74">
                    <div class="control-placeholder_597d9">Surname</div>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon_038a8"
                    >
                        <path
                            d="M8.00035 0C3.58234 0 0 3.58164 0 8C0 12.4184 3.58199 16 8.00035 16C12.4191 16 16.0007 12.4184 16.0007 8C16.0007 3.58164 12.4191 0 8.00035 0ZM8.00035 2.39209C9.46224 2.39209 10.6469 3.57707 10.6469 5.03826C10.6469 6.4998 9.46224 7.68443 8.00035 7.68443C6.53916 7.68443 5.35454 6.4998 5.35454 5.03826C5.35454 3.57707 6.53916 2.39209 8.00035 2.39209ZM7.99859 13.9084C6.54057 13.9084 5.20518 13.3774 4.17518 12.4985C3.92427 12.2845 3.77949 11.9707 3.77949 11.6414C3.77949 10.1595 4.97887 8.97342 6.46115 8.97342H9.54026C11.0229 8.97342 12.2177 10.1595 12.2177 11.6414C12.2177 11.971 12.0736 12.2841 11.8224 12.4981C10.7927 13.3774 9.45697 13.9084 7.99859 13.9084Z"
                            fill="#4F6069"
                        ></path>
                    </svg><input
                        type="text"
                        name="last_name"
                        placeholder="Surname"
                        class="control-input_84a73 control-input-with-Icon_56d8c"
                        value=""
                    />
                </div>
            </div>
            <div class="input-container_0fdaa">
                <div class="control-placeholder_d2856">Birth Date</div>
                <div class="select-container_6ea57">
                    <div>
                        <button type="button" class="select_30808">
                            <DateInput format="dd/MM/yyyy" placeholder={convertDefaultDateFormat(today)} />
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
                    </div>
                </div>
            </div>
            <div>
                <div class="control-placeholder_d2856">Gender</div>
                <div class="select_b3411">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
                        on:click={() => (user_gender = 0)}
                        class={user_gender === 0 ? 'item_6e438 active_d8d02' : 'item_6e438'}
                    >
                        Mrs.
                    </div>
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
                        on:click={() => (user_gender = 1)}
                        class={user_gender === 1 ? 'item_6e438 active_d8d02' : 'item_6e438'}
                    >
                        Mr.
                    </div>
                </div>
            </div>
        </div>
        <div class="form-navigation_c1115">
            <button type="button" class="btn_91674 next_c3831" on:click={() => (step = 2)}>
                Next Step
                <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="arrow_c9c60"
                >
                    <path
                        d="M5.57012 1.18878L1.20148 5.49458C1.07677 5.61749 1.0077 5.78193 1.00658 5.95773C1.00546 6.13373 1.07252 6.29894 1.19554 6.42343L1.58724 6.8194C1.71017 6.9438 1.87498 7.01295 2.05118 7.01408C2.22728 7.0152 2.39853 6.9482 2.52304 6.82538L5.07715 4.31347L5.02583 12.3454C5.02352 12.7076 5.30568 12.9955 5.66852 12.9978L6.22584 13.0014C6.58868 13.0037 6.90312 12.7196 6.90544 12.3574L6.95694 4.2968L9.49274 6.86981C9.61586 6.99421 9.77618 7.06334 9.95237 7.06446C10.1284 7.06559 10.2919 6.99853 10.4165 6.87572L10.812 6.48478C10.9367 6.36186 11.0053 6.19752 11.0064 6.02152C11.0075 5.84572 10.9401 5.68041 10.817 5.55592L6.50386 1.19465C6.38035 1.06986 6.21485 1.00061 6.03846 0.999966C5.86148 0.998445 5.69502 1.06548 5.57012 1.18878Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </button>
        </div>
    </form>
</div>
<div class="container_b7192" style={step === 2 ? 'display: block' : 'display: none'}>
    <div class="header_26570">
        <div class="title_dc988">Create Membership</div>
        <div class="subtitle_294f8">Membership Creation Form</div>
    </div>
    <div class="steps_a7c2e">
        <div class="left_50f3c step_a6119 step-complete_49f4c">
            <div class="step-number_455f8">one . My name</div>
            <div class="step-title_b94fd">Personal Information</div>
            <div class="step-progress_6169f">
                <div class="dot_55cc8">
                    <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1_7566)">
                            <path
                                d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
                                fill="#2C353A"
                            ></path>
                        </g>
                        <defs>
                            <clippath id="clip0_1_7566">
                                <rect width="12" height="10" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
        <div class="center_206b3 step_a6119 active_c1d4b">
            <div class="step-number_455f8">2 . My name</div>
            <div class="step-title_b94fd">Contact information</div>
            <div class="step-progress_6169f">
                <div class="dot_55cc8">
                    <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1_7566)">
                            <path
                                d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
                                fill="#2C353A"
                            ></path>
                        </g>
                        <defs>
                            <clippath id="clip0_1_7566">
                                <rect width="12" height="10" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
        <div class="right_b4f23 step_a6119">
            <div class="step-number_455f8">3 . My name</div>
            <div class="step-title_b94fd">Account info</div>
            <div class="step-progress_6169f">
                <div class="dot_55cc8">
                    <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1_7566)">
                            <path
                                d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
                                fill="#2C353A"
                            ></path>
                        </g>
                        <defs>
                            <clippath id="clip0_1_7566">
                                <rect width="12" height="10" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <form class="step-content_9254e" action="/" autocomplete="off">
        <div>
            <div class="input-container_a7b89">
                <div class="control-placeholder_09143">Country</div>
                <Dropdown
                    containerClassName={'control_49314'}
                    data={countries_for_select}
                    isDropdown={false}
                    thumbClassName={'select_f1cb7'}
                    dropContainerClassName={'select-list-container_d1e85'}
                    value={country_select_value}
                    setValue={setCountrySelectValue}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="word-icon_30f7f"
                    >
                        <g clip-path="url(#clip0_104_11230)">
                            <path
                                d="M14.6414 3.5486L14.402 3.62449L13.1272 3.73806L12.7672 4.31305L12.5059 4.23004L11.4914 3.31534L11.3442 2.83966L11.1471 2.33241L10.5095 1.76047L9.75723 1.61328L9.73992 1.95756L10.4769 2.67669L10.8374 3.10144L10.432 3.31331L10.102 3.21603L9.6075 3.00977L9.62431 2.61099L8.97546 2.34412L8.76003 3.28173L8.1061 3.42994L8.17078 3.95298L9.02283 4.11697L9.17002 3.28122L9.87335 3.38512L10.2003 3.57661H10.7249L11.0839 4.29574L12.0358 5.26136L11.966 5.63671L11.1985 5.53892L9.87233 6.20865L8.91741 7.35405L8.79314 7.86131H8.45038L7.81173 7.56694L7.19141 7.86131L7.34572 8.51575L7.61565 8.20457L8.09031 8.1898L8.05721 8.77753L8.45038 8.89263L8.84305 9.33368L9.48425 9.15339L10.2166 9.269L11.0671 9.49767L11.4919 9.54758L12.212 10.365L13.6019 11.1824L12.703 12.8998L11.7542 13.3408L11.3941 14.3222L10.021 15.239L9.87488 15.7676C13.3849 14.9222 15.9961 11.7691 15.9961 7.99933C15.9951 6.35278 15.496 4.82031 14.6414 3.5486Z"
                                fill="#4F6069"
                            ></path>
                            <path
                                d="M8.91826 12.1807L8.33562 11.1005L8.87038 9.98618L8.33562 9.82626L7.73517 9.22326L6.40489 8.92481L5.96333 8.00095V8.54946H5.76878L4.62236 6.99509V5.71829L3.78202 4.35185L2.44767 4.58969H1.54876L1.09651 4.29328L1.67354 3.83594L1.09804 3.96886C0.40438 5.15348 0 6.52807 0 8.00044C0 12.4176 3.58085 15.9999 7.99847 15.9999C8.33868 15.9999 8.67227 15.9699 9.00229 15.9302L8.91877 14.961C8.91877 14.961 9.28597 13.5217 9.28597 13.4728C9.28546 13.4234 8.91826 12.1807 8.91826 12.1807Z"
                                fill="#4F6069"
                            ></path>
                            <path
                                d="M2.97098 2.57958L4.39191 2.38146L5.04687 2.02241L5.78382 2.23478L6.96131 2.1696L7.36467 1.53552L7.9529 1.63229L9.38147 1.49834L9.77516 1.06443L10.3303 0.693659L11.1156 0.811816L11.4018 0.768526C10.3675 0.28164 9.21646 0 7.9967 0C5.51389 0 3.29387 1.13165 1.82812 2.90858H1.8322L2.97098 2.57958ZM8.33487 0.795518L9.15178 0.345811L9.67635 0.648841L8.917 1.22689L8.19176 1.29972L7.8653 1.08785L8.33487 0.795518ZM5.91521 0.861217L6.27579 1.01146L6.74791 0.861217L7.0051 1.30685L5.91521 1.59307L5.39115 1.28648C5.39064 1.28648 5.9035 0.956455 5.91521 0.861217Z"
                                fill="#4F6069"
                            ></path>
                        </g>
                        <defs>
                            <clippath id="clip0_104_11230">
                                <rect width="15.9975" height="16" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg>
                    <div class="selected-value_f4f02">
                        {countries_for_select[country_select_value].label}
                        <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="arrow-icon_3f31b"
                        >
                            <g clip-path="url(#clip0_301_9962)">
                                <path
                                    d="M8.62633 -1.50828e-06L5 3.41372L1.37367 -2.40181e-07L2.26099e-07 1.29314L5 6L10 1.29314L8.62633 -1.50828e-06Z"
                                    fill="currentColor"
                                ></path>
                            </g>
                            <defs>
                                <clippath id="clip0_301_9962">
                                    <rect width="10" height="6" fill="currentColor"></rect>
                                </clippath>
                            </defs>
                        </svg>
                    </div>
                </Dropdown>
            </div>
            <div class="input-container_a7b89">
                <div class="control-placeholder_09143">City</div>
                <Dropdown
                    containerClassName={'select-container_51a5e'}
                    data={countries_for_select}
                    isDropdown={false}
                    thumbClassName={'select_f1cb7'}
                    dropContainerClassName={'select-list-container_d1e85'}
                    value={cities_select_value}
                    setValue={setCitySelectValue}
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon_fbc00"
                    >
                        <g clip-path="url(#clip0_104_11279)">
                            <path
                                d="M7.61719 0V4.55795H9.64155V16H15.9982V1.33333L7.61719 0ZM12.1611 12.8773H11.1601V4.5812H12.1611V12.8773ZM14.4467 14.2906H13.4457V4.5812H14.4467V14.2906Z"
                                fill="#4F6069"
                            ></path>
                            <path
                                d="M1.55222 10.3246V11.3503H2.54721V12.7178H1.55222V13.7434H2.54721V15.9999H0V8.19336H2.54721V10.3246H1.55222Z"
                                fill="#4F6069"
                            ></path>
                            <path
                                d="M3.54688 5.5835V15.9999H8.64097V5.5835H3.54688ZM6.85585 13.39H5.33199V12.3644H6.85585V13.39ZM6.85585 11.0481H5.33199V10.0225H6.85585V11.0481ZM6.85585 8.70623H5.33199V7.68059H6.85585V8.70623Z"
                                fill="#4F6069"
                            ></path>
                        </g>
                        <defs>
                            <clippath id="clip0_104_11279">
                                <rect width="16" height="16" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg>
                    <div class="selected-value_f4f02">
                        {countries_for_select[cities_select_value].label}
                        <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="arrow-icon_3f31b"
                        >
                            <g clip-path="url(#clip0_301_9962)">
                                <path
                                    d="M8.62633 -1.50828e-06L5 3.41372L1.37367 -2.40181e-07L2.26099e-07 1.29314L5 6L10 1.29314L8.62633 -1.50828e-06Z"
                                    fill="currentColor"
                                ></path>
                            </g>
                            <defs>
                                <clippath id="clip0_301_9962">
                                    <rect width="10" height="6" fill="currentColor"></rect>
                                </clippath>
                            </defs>
                        </svg>
                    </div>
                </Dropdown>
                <!-- <div class="select-container_51a5e">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon_fbc00"
                    >
                        <g clip-path="url(#clip0_104_11279)">
                            <path
                                d="M7.61719 0V4.55795H9.64155V16H15.9982V1.33333L7.61719 0ZM12.1611 12.8773H11.1601V4.5812H12.1611V12.8773ZM14.4467 14.2906H13.4457V4.5812H14.4467V14.2906Z"
                                fill="#4F6069"
                            ></path>
                            <path
                                d="M1.55222 10.3246V11.3503H2.54721V12.7178H1.55222V13.7434H2.54721V15.9999H0V8.19336H2.54721V10.3246H1.55222Z"
                                fill="#4F6069"
                            ></path>
                            <path
                                d="M3.54688 5.5835V15.9999H8.64097V5.5835H3.54688ZM6.85585 13.39H5.33199V12.3644H6.85585V13.39ZM6.85585 11.0481H5.33199V10.0225H6.85585V11.0481ZM6.85585 8.70623H5.33199V7.68059H6.85585V8.70623Z"
                                fill="#4F6069"
                            ></path>
                        </g>
                        <defs>
                            <clippath id="clip0_104_11279">
                                <rect width="16" height="16" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg>
                    <button type="button" class="select_84761 select-with-icon_0aac3">
                        <span> City </span>
                        <svg
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="arrow-icon_8043b"
                        >
                            <g clip-path="url(#clip0_301_9962)">
                                <path
                                    d="M8.62633 -1.50828e-06L5 3.41372L1.37367 -2.40181e-07L2.26099e-07 1.29314L5 6L10 1.29314L8.62633 -1.50828e-06Z"
                                    fill="currentColor"
                                ></path>
                            </g>
                            <defs>
                                <clippath id="clip0_301_9962">
                                    <rect width="10" height="6" fill="currentColor"></rect>
                                </clippath>
                            </defs>
                        </svg>
                    </button>
                </div> -->
            </div>
        </div>
        <div class="form-navigation_c1115">
            <button type="button" class="btn_91674 prev_5c078" on:click={() => (step = 1)}>
                <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="arrow_c9c60"
                >
                    <path
                        d="M5.57012 1.18878L1.20148 5.49458C1.07677 5.61749 1.0077 5.78193 1.00658 5.95773C1.00546 6.13373 1.07252 6.29894 1.19554 6.42343L1.58724 6.8194C1.71017 6.9438 1.87498 7.01295 2.05118 7.01408C2.22728 7.0152 2.39853 6.9482 2.52304 6.82538L5.07715 4.31347L5.02583 12.3454C5.02352 12.7076 5.30568 12.9955 5.66852 12.9978L6.22584 13.0014C6.58868 13.0037 6.90312 12.7196 6.90544 12.3574L6.95694 4.2968L9.49274 6.86981C9.61586 6.99421 9.77618 7.06334 9.95237 7.06446C10.1284 7.06559 10.2919 6.99853 10.4165 6.87572L10.812 6.48478C10.9367 6.36186 11.0053 6.19752 11.0064 6.02152C11.0075 5.84572 10.9401 5.68041 10.817 5.55592L6.50386 1.19465C6.38035 1.06986 6.21485 1.00061 6.03846 0.999966C5.86148 0.998445 5.69502 1.06548 5.57012 1.18878Z"
                        fill="currentColor"
                    ></path>
                </svg>
                Previous Step
            </button>
            <button type="button" class="btn_91674 next_c3831" on:click={() => (step = 3)}>
                Next step
                <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="arrow_c9c60"
                >
                    <path
                        d="M5.57012 1.18878L1.20148 5.49458C1.07677 5.61749 1.0077 5.78193 1.00658 5.95773C1.00546 6.13373 1.07252 6.29894 1.19554 6.42343L1.58724 6.8194C1.71017 6.9438 1.87498 7.01295 2.05118 7.01408C2.22728 7.0152 2.39853 6.9482 2.52304 6.82538L5.07715 4.31347L5.02583 12.3454C5.02352 12.7076 5.30568 12.9955 5.66852 12.9978L6.22584 13.0014C6.58868 13.0037 6.90312 12.7196 6.90544 12.3574L6.95694 4.2968L9.49274 6.86981C9.61586 6.99421 9.77618 7.06334 9.95237 7.06446C10.1284 7.06559 10.2919 6.99853 10.4165 6.87572L10.812 6.48478C10.9367 6.36186 11.0053 6.19752 11.0064 6.02152C11.0075 5.84572 10.9401 5.68041 10.817 5.55592L6.50386 1.19465C6.38035 1.06986 6.21485 1.00061 6.03846 0.999966C5.86148 0.998445 5.69502 1.06548 5.57012 1.18878Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </button>
        </div>
    </form>
</div>
<div class="container_b7192" style={step === 3 ? 'display: block' : 'display: none'}>
    <div class="header_26570">
        <div class="title_dc988">Create Membership</div>
        <div class="subtitle_294f8">Membership Creation Form</div>
    </div>
    <div class="steps_a7c2e">
        <div class="left_50f3c step_a6119 step-complete_49f4c">
            <div class="step-number_455f8">1. Step</div>
            <div class="step-title_b94fd">Personal Information</div>
            <div class="step-progress_6169f">
                <div class="dot_55cc8">
                    <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1_7566)">
                            <path
                                d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
                                fill="#2C353A"
                            ></path>
                        </g>
                        <defs>
                            <clippath id="clip0_1_7566">
                                <rect width="12" height="10" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
        <div class="center_206b3 step_a6119 step-complete_49f4c">
            <div class="step-number_455f8">2. Step</div>
            <div class="step-title_b94fd">Contact Information</div>
            <div class="step-progress_6169f">
                <div class="dot_55cc8">
                    <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1_7566)">
                            <path
                                d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
                                fill="#2C353A"
                            ></path>
                        </g>
                        <defs>
                            <clippath id="clip0_1_7566">
                                <rect width="12" height="10" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
        <div class="right_b4f23 step_a6119 active_c1d4b">
            <div class="step-number_455f8">3. Step</div>
            <div class="step-title_b94fd">Account Information</div>
            <div class="step-progress_6169f">
                <div class="dot_55cc8">
                    <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_1_7566)">
                            <path
                                d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
                                fill="#2C353A"
                            ></path>
                        </g>
                        <defs>
                            <clippath id="clip0_1_7566">
                                <rect width="12" height="10" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <form class="step-content_9254e" action="/" autocomplete="off">
        <div>
            <div>
                <div class="input-container_3b465">
                    <div class="control_21d74">
                        <div class="control-placeholder_597d9">Username</div>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon_038a8"
                        >
                            <path
                                d="M8.00035 0C3.58234 0 0 3.58164 0 8C0 12.4184 3.58199 16 8.00035 16C12.4191 16 16.0007 12.4184 16.0007 8C16.0007 3.58164 12.4191 0 8.00035 0ZM8.00035 2.39209C9.46224 2.39209 10.6469 3.57707 10.6469 5.03826C10.6469 6.4998 9.46224 7.68443 8.00035 7.68443C6.53916 7.68443 5.35454 6.4998 5.35454 5.03826C5.35454 3.57707 6.53916 2.39209 8.00035 2.39209ZM7.99859 13.9084C6.54057 13.9084 5.20518 13.3774 4.17518 12.4985C3.92427 12.2845 3.77949 11.9707 3.77949 11.6414C3.77949 10.1595 4.97887 8.97342 6.46115 8.97342H9.54026C11.0229 8.97342 12.2177 10.1595 12.2177 11.6414C12.2177 11.971 12.0736 12.2841 11.8224 12.4981C10.7927 13.3774 9.45697 13.9084 7.99859 13.9084Z"
                                fill="#4F6069"
                            ></path>
                        </svg><input
                            type="text"
                            name="username"
                            placeholder="Username"
                            class="control-input_84a73 control-input-with-Icon_56d8c"
                            value=""
                        />
                    </div>
                </div>
                <div class="input-container_3b465">
                    <div class="control_21d74">
                        <div class="control-placeholder_597d9">Email</div>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon_038a8"
                        >
                            <g clip-path="url(#clip0_301_9313)">
                                <path
                                    d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20H15V18H10C5.66 18 2 14.34 2 10C2 5.66 5.66 2 10 2C14.34 2 18 5.66 18 10V11.43C18 12.22 17.29 13 16.5 13C15.71 13 15 12.22 15 11.43V10C15 7.24 12.76 5 10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C11.38 15 12.64 14.44 13.54 13.53C14.19 14.42 15.31 15 16.5 15C18.47 15 20 13.4 20 11.43V10C20 4.48 15.52 0 10 0ZM10 13C8.34 13 7 11.66 7 10C7 8.34 8.34 7 10 7C11.66 7 13 8.34 13 10C13 11.66 11.66 13 10 13Z"
                                    fill="#4F6069"
                                ></path>
                            </g>
                            <defs>
                                <clippath id="clip0_301_9313">
                                    <rect width="20" height="20" fill="white"></rect>
                                </clippath>
                            </defs>
                        </svg><input
                            type="email"
                            name="email"
                            placeholder="Email"
                            class="control-input_84a73 control-input-with-Icon_56d8c"
                            value=""
                        />
                    </div>
                </div>
                <div class="input-container_3b465">
                    <div class="control-placeholder_597d9">Password</div>
                    <PasswordInput
                        wrapperClassName={'password-input_15530'}
                        containerClassName={'password-input_a743c'}
                        inputClassName={'control-input_84a73 control-input-with-Icon_56d8c'}
                    >
                        <svg
                            slot="prefix"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon_4d07b"
                        >
                            <g clip-path="url(#clip0_1_7553)">
                                <path
                                    d="M1.92224 14.8889L3.04355 16L4.16485 14.8889L3.04355 13.7778L4.16485 12.6668L5.28616 13.7778L6.40746 12.6668L5.28616 11.5557L9.85148 7.11139C11.6135 8.22247 14.0163 7.90502 15.2978 6.07968C16.1788 4.80988 16.2589 3.0639 15.3779 1.7941C13.9362 -0.348693 10.9728 -0.586781 9.21073 1.1592C7.84914 2.50836 7.68896 4.49242 8.73017 6.00031L0.24028 14.3334C-0.0800933 14.6508 -0.0800933 15.127 0.24028 15.4445C0.560653 15.7619 1.04121 15.7619 1.36159 15.4445L1.92224 14.8889ZM10.4121 2.34964C11.3732 1.47665 12.8149 1.47665 13.776 2.34964C14.7372 3.22262 14.7372 4.73051 13.776 5.6035C12.8149 6.47649 11.3732 6.47649 10.4121 5.6035C9.45101 4.73051 9.45101 3.22262 10.4121 2.34964Z"
                                    fill="#4F6069"
                                ></path>
                            </g>
                            <defs>
                                <clippath id="clip0_1_7553">
                                    <rect width="16" height="16" fill="white"></rect>
                                </clippath>
                            </defs>
                        </svg>
                    </PasswordInput>
                </div>
                <div class="input-container_3b465">
                    <div class="control-placeholder_597d9">Confirm password.</div>
                    <PasswordInput
                        wrapperClassName={'password-input_15530'}
                        containerClassName={'password-input_a743c'}
                        inputClassName={'control-input_84a73 control-input-with-Icon_56d8c'}
                        placeholder="Confirm password"
                    >
                        <svg
                            slot="prefix"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon_4d07b"
                        >
                            <g clip-path="url(#clip0_1_7553)">
                                <path
                                    d="M1.92224 14.8889L3.04355 16L4.16485 14.8889L3.04355 13.7778L4.16485 12.6668L5.28616 13.7778L6.40746 12.6668L5.28616 11.5557L9.85148 7.11139C11.6135 8.22247 14.0163 7.90502 15.2978 6.07968C16.1788 4.80988 16.2589 3.0639 15.3779 1.7941C13.9362 -0.348693 10.9728 -0.586781 9.21073 1.1592C7.84914 2.50836 7.68896 4.49242 8.73017 6.00031L0.24028 14.3334C-0.0800933 14.6508 -0.0800933 15.127 0.24028 15.4445C0.560653 15.7619 1.04121 15.7619 1.36159 15.4445L1.92224 14.8889ZM10.4121 2.34964C11.3732 1.47665 12.8149 1.47665 13.776 2.34964C14.7372 3.22262 14.7372 4.73051 13.776 5.6035C12.8149 6.47649 11.3732 6.47649 10.4121 5.6035C9.45101 4.73051 9.45101 3.22262 10.4121 2.34964Z"
                                    fill="#4F6069"
                                ></path>
                            </g>
                            <defs>
                                <clippath id="clip0_1_7553">
                                    <rect width="16" height="16" fill="white"></rect>
                                </clippath>
                            </defs>
                        </svg>
                    </PasswordInput>
                </div>
                <div class="input-container_3b465">
                    <div class="control_24852">
                        <div class="select-country_598d8">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="flag_17e5b"
                                style="margin-right: 3px; min-width: 16px;"
                            >
                                <path
                                    d="M11.7149 0H4.28507C3.574 0 3 0.522411 3 1.16551V14.8357C3 15.4782 3.574 16 4.28507 16H11.7149C12.4247 16 13 15.4782 13 14.8357V1.16551C13 0.522411 12.4247 0 11.7149 0ZM6.16667 0.70782H9.83462C9.92729 0.70782 10.0026 0.833175 10.0026 0.988266C10.0026 1.14336 9.92729 1.2693 9.83462 1.2693H6.16667C6.07336 1.2693 5.99936 1.14336 5.99936 0.988266C5.99936 0.833175 6.07336 0.70782 6.16667 0.70782ZM8.00064 14.8496C7.54826 14.8496 7.18018 14.5161 7.18018 14.1057C7.18018 13.6952 7.54826 13.3629 8.00064 13.3629C8.45174 13.3629 8.81982 13.6952 8.81982 14.1057C8.81982 14.5161 8.45174 14.8496 8.00064 14.8496ZM12.0373 12.3023H3.96332V1.96662H12.0373V12.3023Z"
                                    fill="#4F6069"
                                ></path>
                            </svg>
                            <select
                                class="country-select selected-value_ceb7e {!valid ? 'invalid' : ''}"
                                aria-label="Default select example"
                                name="Country"
                                bind:value={selectedCountry}
                            >
                                <option value={null} hidden={selectedCountry !== null}>Please select</option>
                                {#each normalizedCountries as currentCountry (currentCountry.id)}
                                    <option
                                        value={currentCountry.iso2}
                                        selected={currentCountry.iso2 === selectedCountry}
                                        aria-selected={currentCountry.iso2 === selectedCountry}
                                    >
                                        {currentCountry.iso2} (+{currentCountry.dialCode})
                                    </option>
                                {/each}
                            </select>
                        </div>
                        <div class="input_d1632 control_21d74">
                            <div class="input_d1632 control-placeholder_597d9">Mobile phone</div>
                            <TelInput
                                bind:country={selectedCountry}
                                bind:value
                                bind:valid
                                bind:detailedValue
                                class="basic-tel-input control-input_84a73 {!valid ? 'invalid' : ''}"
                            />
                        </div>
                    </div>
                </div>
                <div class="input-container_3b465">
                    <div class="control_21d74">
                        <div class="control-placeholder_597d9">Promo Code</div>
                        <input
                            type="text"
                            name="promocode"
                            placeholder="Promo Code "
                            class="control-input_84a73"
                            value=""
                        />
                    </div>
                </div>
            </div>
            <div class="mobile-phone-info_0962c">Mobile Phone Info</div>
            <img src={Mobile_VIP} alt="bonus banner" />
            <div class="inputs-container_418cf">
                <div class="bonuses-wrapper_553b6">
                    <div class="bonus-wrapper_d667d">
                        <div class="radio-bonus_10c4e">
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                            <label
                                for="registration_bonus_1"
                                class="label_a6937"
                                on:change={() => (registration_bonus_id = 1)}
                            >
                                <input
                                    id="registration_bonus_1"
                                    name="registration_bonus_id"
                                    data-bonus-type="registration_bonus_id"
                                    type="radio"
                                    value="1"
                                    on:change={() => (registration_bonus_id = 1)}
                                    checked={registration_bonus_id === 1}
                                />
                                <div class="fake-radio_b5a12">
                                    <div class="circle_28dc5">
                                        <svg
                                            width="12"
                                            height="10"
                                            viewBox="0 0 12 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_7566)">
                                                <path
                                                    d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
                                                    fill="#2C353A"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_7566">
                                                    <rect width="12" height="10" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div class="text_88780">
                                    <div class="circle_28dc5">300₺ Bonus</div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="bonus-wrapper_d667d">
                        <div class="radio-bonus_10c4e">
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                            <label
                                for="registration_bonus_2"
                                class="label_a6937"
                                on:change={() => (registration_bonus_id = 2)}
                            >
                                <input
                                    id="registration_bonus_2"
                                    name="registration_bonus_id"
                                    data-bonus-type="registration_bonus_id"
                                    type="radio"
                                    value="2"
                                    on:change={() => (registration_bonus_id = 2)}
                                    checked={registration_bonus_id === 2}
                                />
                                <div class="fake-radio_b5a12">
                                    <div class="circle_28dc5">
                                        <svg
                                            width="12"
                                            height="10"
                                            viewBox="0 0 12 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_7566)">
                                                <path
                                                    d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
                                                    fill="#2C353A"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_7566">
                                                    <rect width="12" height="10" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div class="text_88780">
                                    <div class="circle_28dc5">40 Free spins</div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="bonus-wrapper_d667d">
                        <div class="radio-bonus_10c4e">
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                            <label
                                for="i_do_not_want_a_bonus"
                                class="label_a6937"
                                on:click={() => (registration_bonus_id = 3)}
                            >
                                <input
                                    id="i_do_not_want_a_bonus"
                                    name="registration_bonus_id"
                                    data-bonus-type="i_do_not_want_a_bonus"
                                    type="radio"
                                    value=""
                                    on:change={() => (registration_bonus_id = 3)}
                                    checked={registration_bonus_id === 3}
                                />
                                <div class="fake-radio_b5a12">
                                    <div class="circle_28dc5">
                                        <svg
                                            width="12"
                                            height="10"
                                            viewBox="0 0 12 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clip-path="url(#clip0_1_7566)">
                                                <path
                                                    d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
                                                    fill="#2C353A"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clippath id="clip0_1_7566">
                                                    <rect width="12" height="10" fill="white"></rect>
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div class="text_88780">
                                    <div class="circle_28dc5">I Dont Want Bonus</div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="bonus-error_d7484">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <g clip-path="url(#clip0_309_4069)">
                                <path
                                    d="M20.498 23.9953H3.50189C0.902012 23.9953 -0.788956 21.2593 0.373731 18.9339L8.87175 1.93771C10.1606 -0.640043 13.8392 -0.640043 15.1281 1.93771L23.6261 18.9338C24.7889 21.2593 23.0979 23.9953 20.498 23.9953Z"
                                    fill="url(#paint0_linear_309_4069)"
                                ></path>
                                <path
                                    d="M20.498 23.9953H3.50189C0.902012 23.9953 -0.788956 21.2593 0.373731 18.9339L8.87175 1.93771C10.1606 -0.640043 13.8392 -0.640043 15.1281 1.93771L23.6261 18.9338C24.7889 21.2593 23.0979 23.9953 20.498 23.9953Z"
                                    fill="url(#paint1_linear_309_4069)"
                                ></path>
                                <path
                                    d="M22.7843 19.355L14.2863 2.35885C13.8439 1.47404 12.9892 0.945801 12 0.945801C11.0108 0.945801 10.156 1.47404 9.71363 2.35885L1.21556 19.355C0.81647 20.1532 0.858282 21.0829 1.32745 21.842C1.79663 22.6012 2.60953 23.0544 3.50189 23.0544H20.498C21.3904 23.0544 22.2033 22.6012 22.6725 21.842C23.1416 21.0829 23.1834 20.1532 22.7843 19.355ZM21.8719 21.3472C21.5754 21.8268 21.0619 22.1132 20.4981 22.1132H3.50189C2.93808 22.1132 2.42447 21.8268 2.12808 21.3472C1.83164 20.8676 1.8052 20.2802 2.05739 19.7759L10.5554 2.77979C10.8391 2.21241 11.3655 1.887 11.9999 1.887C12.6343 1.887 13.1608 2.21241 13.4444 2.77979L21.9424 19.7759C22.1947 20.2802 22.1683 20.8676 21.8719 21.3472Z"
                                    fill="url(#paint2_linear_309_4069)"
                                ></path>
                                <path
                                    d="M20.4976 23.9951H19.1592L11.4233 16.2591C11.1946 16.1471 11.0797 15.9537 11.0797 15.6775C11.0797 14.6337 11.0369 13.8892 10.9512 11.5269C10.8656 9.16499 10.8228 8.67984 10.8228 7.63607C10.8228 7.30288 10.9361 7.04596 11.163 6.86479C11.3893 6.68315 11.683 6.59277 12.0434 6.59277C12.4039 6.59277 12.6688 6.6869 12.8373 6.87562C12.8698 6.91138 19.922 13.9612 22.3563 16.3946L23.626 18.9339C24.7888 21.2591 23.0976 23.9951 20.4976 23.9951Z"
                                    fill="url(#paint3_linear_309_4069)"
                                ></path>
                                <path
                                    d="M18.6077 23.9951H15.1075L11.0948 19.9824C10.828 19.7471 10.6943 19.4728 10.6943 19.1589C10.6943 18.8318 10.828 18.5537 11.0948 18.325C11.3616 18.0963 11.6858 17.9819 12.067 17.9819C12.4026 17.9819 12.6929 18.0963 12.9376 18.325L18.6077 23.9951Z"
                                    fill="url(#paint4_linear_309_4069)"
                                ></path>
                                <path
                                    d="M10.6948 19.1587C10.6948 18.8317 10.8282 18.5539 11.095 18.3253C11.3618 18.0965 11.6861 17.9819 12.0672 17.9819C12.4029 17.9819 12.6931 18.0965 12.9377 18.3253C13.1825 18.5539 13.3052 18.8317 13.3052 19.1587C13.3052 19.4726 13.1826 19.7472 12.9377 19.9825C12.6931 20.2179 12.4029 20.3355 12.0672 20.3355C11.686 20.3355 11.3618 20.2178 11.095 19.9825C10.8282 19.7472 10.6948 19.4727 10.6948 19.1587ZM10.8232 7.63621C10.8232 7.30316 10.9365 7.04591 11.1632 6.8647C11.3899 6.68348 11.6834 6.59277 12.0438 6.59277C12.4043 6.59277 12.6691 6.68713 12.8379 6.87566C13.0067 7.0642 13.0913 7.31765 13.0913 7.63621C13.0913 8.68007 13.0732 9.16495 13.0378 11.5272C13.0021 13.8896 12.9844 14.6339 12.9844 15.6774C12.9844 15.8951 12.8824 16.0656 12.6788 16.1886C12.4749 16.3116 12.2632 16.3732 12.0439 16.3732C11.4014 16.3732 11.08 16.1414 11.08 15.6774C11.08 14.6339 11.0372 13.8896 10.9517 11.5272C10.866 9.1649 10.8232 8.68002 10.8232 7.63621Z"
                                    fill="white"
                                ></path>
                            </g>
                            <defs>
                                <lineargradient
                                    id="paint0_linear_309_4069"
                                    x1="6.01925"
                                    y1="10.2654"
                                    x2="33.3966"
                                    y2="37.6427"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#FFB92D"></stop>
                                    <stop offset="1" stop-color="#F59500"></stop>
                                </lineargradient>
                                <lineargradient
                                    id="paint1_linear_309_4069"
                                    x1="9.65358"
                                    y1="13.8996"
                                    x2="17.9061"
                                    y2="22.1516"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#FFB92D"></stop>
                                    <stop offset="1" stop-color="#F59500"></stop>
                                </lineargradient>
                                <lineargradient
                                    id="paint2_linear_309_4069"
                                    x1="0.943343"
                                    y1="12.0003"
                                    x2="23.0561"
                                    y2="12.0003"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#FFF465"></stop>
                                    <stop offset="1" stop-color="#FFE600"></stop>
                                </lineargradient>
                                <lineargradient
                                    id="paint3_linear_309_4069"
                                    x1="19.8355"
                                    y1="19.2983"
                                    x2="6.46684"
                                    y2="5.92961"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#BE3F45" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="#BE3F45"></stop>
                                </lineargradient>
                                <lineargradient
                                    id="paint4_linear_309_4069"
                                    x1="15.5067"
                                    y1="22.6468"
                                    x2="11.1459"
                                    y2="18.2855"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#BE3F45" stop-opacity="0"></stop>
                                    <stop offset="1" stop-color="#BE3F45"></stop>
                                </lineargradient>
                                <clippath id="clip0_309_4069">
                                    <rect width="24" height="24" fill="white"></rect>
                                </clippath>
                            </defs>
                        </svg>
                        <p>
                            When You Use This Option, You Cannot Benefit From First Deposit Bonus Opportunities
                        </p>
                    </div>
                </div>
            </div>
            <div class="checkbox-remember-me_3bc01">
                <label
                    ><input type="checkbox" />
                    <div class="text_cc85c">I read the rules and I accept.</div>
                    <div class="fake-checkbox_0b5c1">
                        <div>
                            <svg
                                width="12"
                                height="10"
                                viewBox="0 0 12 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_1_7566)">
                                    <path
                                        d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
                                        fill="#2C353A"
                                    ></path>
                                </g>
                                <defs>
                                    <clippath id="clip0_1_7566">
                                        <rect width="12" height="10" fill="white"></rect>
                                    </clippath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </label>
            </div>
        </div>
        <div class="form-navigation_c1115">
            <button type="button" class="btn_91674 prev_5c078" on:click={() => (step = 2)}>
                <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="arrow_c9c60"
                >
                    <path
                        d="M5.57012 1.18878L1.20148 5.49458C1.07677 5.61749 1.0077 5.78193 1.00658 5.95773C1.00546 6.13373 1.07252 6.29894 1.19554 6.42343L1.58724 6.8194C1.71017 6.9438 1.87498 7.01295 2.05118 7.01408C2.22728 7.0152 2.39853 6.9482 2.52304 6.82538L5.07715 4.31347L5.02583 12.3454C5.02352 12.7076 5.30568 12.9955 5.66852 12.9978L6.22584 13.0014C6.58868 13.0037 6.90312 12.7196 6.90544 12.3574L6.95694 4.2968L9.49274 6.86981C9.61586 6.99421 9.77618 7.06334 9.95237 7.06446C10.1284 7.06559 10.2919 6.99853 10.4165 6.87572L10.812 6.48478C10.9367 6.36186 11.0053 6.19752 11.0064 6.02152C11.0075 5.84572 10.9401 5.68041 10.817 5.55592L6.50386 1.19465C6.38035 1.06986 6.21485 1.00061 6.03846 0.999966C5.86148 0.998445 5.69502 1.06548 5.57012 1.18878Z"
                        fill="currentColor"
                    ></path>
                </svg>Previous Step
            </button>
            <button class="btn_91674 submit_d88bc" type="submit">Create My Account!</button>
        </div>
    </form>
</div>