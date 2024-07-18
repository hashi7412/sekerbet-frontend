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


<div class="content_639d7" style={step === 1 ? 'display: block' : 'display: none'}>
    <div class="registration-form_c265c">
        <div class="title_df507">Create Membership</div>
        <div class="subtitle_5f398">Membership Creation Form</div>
        <div class="steps_96b5c">
            <div class="left_ce4fb step_9e901 active_db121">
                <div class="step-number_23ac9">1. Step</div>
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
            <div class="step_9e901">
                <div class="step-number_23ac9">2. Step</div>
                <div class="step-title_c9a70">Contact Information</div>
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
                <div class="step-number_23ac9">3. Step</div>
                <div class="step-title_c9a70">Account Information</div>
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
            <div class="step-one_6ee36">
                <div>
                    <div class="control_381fd">
                        <div class="control-placeholder_9cddc">First name</div>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon_d7fe8"
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
                        </svg><input
                            type="text"
                            name="first_name"
                            placeholder="First name"
                            class="control-input_75748 control-input-with-Icon_b2fb8"
                            value=""
                        />
                    </div>
                </div>
                <div>
                    <div class="control_381fd">
                        <div class="control-placeholder_9cddc">Surname</div>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon_d7fe8"
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
                        </svg><input
                            type="text"
                            name="last_name"
                            placeholder="Surname"
                            class="control-input_75748 control-input-with-Icon_b2fb8"
                            value=""
                        />
                    </div>
                </div>
                <div>
                    <div class="control-placeholder_9f2e1">Birth Date</div>
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
                    <div class="control-placeholder_9f2e1">Gender</div>
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
            <div class="form-navigation_2f3ac">
                <div></div>
                <button type="button" class="btn_a494f next_7104a" on:click={() => (step = 2)}>
                    Next Step
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