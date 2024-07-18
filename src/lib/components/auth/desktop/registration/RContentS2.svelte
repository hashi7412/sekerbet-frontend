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
<div class="content_639d7" style={step === 2 ? 'display: block' : 'display: none'}>
    <div class="registration-form_c265c">
        <div class="title_df507">Create Membership</div>
        <div class="subtitle_5f398">Membership Creation Form</div>
        <div class="steps_96b5c">
            <div class="left_ce4fb step_9e901 step-complete_2d64b">
                <div class="step-number_23ac9">one . My name</div>
                <div class="step-title_c9a70">Personal Information</div>
                <div class="step-progress_57306">
                    <div class="dot_ba3c6">
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
            <div class="step_9e901 active_db121">
                <div class="step-number_23ac9">2 . My name</div>
                <div class="step-title_c9a70">Contact information</div>
                <div class="step-progress_57306">
                    <div class="dot_ba3c6">
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
            <div class="right_44d86 step_9e901">
                <div class="step-number_23ac9">3 . My name</div>
                <div class="step-title_c9a70">Account info</div>
                <div class="step-progress_57306">
                    <div class="dot_ba3c6">
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
        <form class="step-content_4adad" autocomplete="off">
            <div class="step-two_de25e">
                <div>
                    <div class="control-placeholder_129cf">Country</div>
                    <Dropdown
                        containerClassName={'control_bb9c3'}
                        data={countries_for_select}
                        isDropdown={false}
                        thumbClassName={'select_19469'}
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
                <div>
                    <div class="control-placeholder_129cf">City</div>
                    <Dropdown
                        containerClassName={'control_bb9c3'}
                        data={countries_for_select}
                        isDropdown={false}
                        thumbClassName={'select_19469'}
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
                </div>
            </div>
            <div class="form-navigation_2f3ac">
                <button type="button" class="btn_a494f prev_865f5" on:click={() => (step = 1)}>
                    <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="arrow_26735"
                    >
                        <path
                            d="M5.57012 1.18878L1.20148 5.49458C1.07677 5.61749 1.0077 5.78193 1.00658 5.95773C1.00546 6.13373 1.07252 6.29894 1.19554 6.42343L1.58724 6.8194C1.71017 6.9438 1.87498 7.01295 2.05118 7.01408C2.22728 7.0152 2.39853 6.9482 2.52304 6.82538L5.07715 4.31347L5.02583 12.3454C5.02352 12.7076 5.30568 12.9955 5.66852 12.9978L6.22584 13.0014C6.58868 13.0037 6.90312 12.7196 6.90544 12.3574L6.95694 4.2968L9.49274 6.86981C9.61586 6.99421 9.77618 7.06334 9.95237 7.06446C10.1284 7.06559 10.2919 6.99853 10.4165 6.87572L10.812 6.48478C10.9367 6.36186 11.0053 6.19752 11.0064 6.02152C11.0075 5.84572 10.9401 5.68041 10.817 5.55592L6.50386 1.19465C6.38035 1.06986 6.21485 1.00061 6.03846 0.999966C5.86148 0.998445 5.69502 1.06548 5.57012 1.18878Z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    Previous Step
                </button>
                <button class="btn_a494f next_7104a" on:click={() => (step = 3)}>
                    Next step
                    <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="arrow_26735"
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
</div>