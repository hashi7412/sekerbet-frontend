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


<div class="content_639d7" style={step === 3 ? 'display: block' : 'display: none'}>
    <div class="registration-form_c265c">
        <div class="title_df507">Create Membership</div>
        <div class="subtitle_5f398">Membership Creation Form</div>
        <div class="steps_96b5c">
            <div class="left_ce4fb step_9e901 step-complete_2d64b">
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
            <div class="step_9e901 step-complete_2d64b">
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
            <div class="right_44d86 step_9e901 active_db121">
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
            <div class="step-three_01d83">
                <div class="inputs-container_33f85">
                    <div>
                        <div class="control_381fd">
                            <div class="control-placeholder_9cddc">Username</div>
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
                                name="username"
                                placeholder="Username"
                                class="control-input_75748 control-input-with-Icon_b2fb8"
                                value=""
                            />
                        </div>
                    </div>
                    <div>
                        <div class="control_381fd">
                            <div class="control-placeholder_9cddc">Email</div>
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
                                type="email"
                                name="email"
                                placeholder="Email"
                                class="control-input_75748 control-input-with-Icon_b2fb8"
                                value=""
                            />
                        </div>
                    </div>
                    <div>
                        <div class="input-control_381fd">
                            <div class="control-placeholder_9cddc">Password</div>
                            <PasswordInput
                                wrapperClassName={'password-input_15530'}
                                containerClassName={'password-input_a743c'}
                                inputClassName={'control-input_75748 control-input-with-Icon_b2fb8'}
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
                    </div>
                    <div>
                        <div class="input-control_381fd">
                            <div class="control-placeholder_9cddc">Confirm password.</div>
                            <PasswordInput
                                wrapperClassName={'password-input_15530'}
                                containerClassName={'password-input_a743c'}
                                inputClassName={'control-input_75748 control-input-with-Icon_b2fb8'}
                                placeholder="Confirm password."
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
                    <div>
                        <div class="control_381fd">
                            <div class="control-placeholder_9cddc">Promo Code</div>
                            <input
                                type="text"
                                name="promocode"
                                placeholder="Promo Code "
                                class="control-input_75748"
                                value=""
                            />
                        </div>
                    </div>
                </div>
                <div class="mobile-phone-info_8013c">Mobile Phone Info</div>
                <img src={Tek_Yatrm_VPI} alt="bonus banner" />
                <div class="inputs-container_b1b74">
                    <div class="bonuses-wrapper_bd66f">
                        <div class="bonuses_75845 with-box_8cc9d"></div>
                        <div class="bonuses_75845">
                            <div class="bonus-wrapper_1b494">
                                <div class="radio-bonus_3cdb0">
                                    <label for="registration_bonus_1" class="label_8e774"
                                        ><input
                                            id="registration_bonus_1"
                                            name="registration_bonus_id"
                                            data-bonus-type="registration_bonus_id"
                                            type="radio"
                                            value="1"
                                            on:change={() => (registration_bonus_id = 1)}
                                            checked={registration_bonus_id === 1}
                                        />
                                        <div class="fake-radio_de50f">
                                            <div class="circle_4127b">
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
                                        <div class="text_1af65">
                                            <div class="circle_4127b">300₺ Bonus</div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="bonus-wrapper_1b494">
                                <div class="radio-bonus_3cdb0">
                                    <label for="registration_bonus_2" class="label_8e774">
                                        <input
                                            id="registration_bonus_2"
                                            name="registration_bonus_id"
                                            data-bonus-type="registration_bonus_id"
                                            type="radio"
                                            on:change={() => (registration_bonus_id = 2)}
                                            checked={registration_bonus_id === 2}
                                        />
                                        <div class="fake-radio_de50f">
                                            <div class="circle_4127b">
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
                                        <div class="text_1af65">
                                            <div class="circle_4127b">40 Free spins</div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="bonus-wrapper_1b494">
                                <div class="radio-bonus_3cdb0">
                                    <label for="i_do_not_want_a_bonus" class="label_8e774">
                                        <input
                                            id="i_do_not_want_a_bonus"
                                            name="registration_bonus_id"
                                            data-bonus-type="i_do_not_want_a_bonus"
                                            type="radio"
                                            value=""
                                            on:change={() => (registration_bonus_id = 3)}
                                            checked={registration_bonus_id === 3}
                                        />
                                        <div class="fake-radio_de50f">
                                            <div class="circle_4127b">
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
                                        <div class="text_1af65">
                                            <div class="circle_4127b">I Dont Want Bonus</div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div class="bonus-error_ff747">
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
                                    When You Use This Option, You Cannot Benefit From First Deposit Bonus
                                    Opportunities
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="checkbox-remember-me_22361">
                    <label
                        ><input type="checkbox" />
                        <div class="text_98d3b">I read the rules and I accept.</div>
                        <div class="fake-checkbox_2d4bf">
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
            <div class="form-navigation_2f3ac">
                <button class="btn_a494f prev_865f5" on:click={() => (step = 2)}>
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
                <button class="btn_a494f submit_b3ef8">Create My Account!</button>
            </div>
        </form>
    </div>
</div>