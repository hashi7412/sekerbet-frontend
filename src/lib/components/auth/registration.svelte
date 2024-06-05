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

<div class="main-content-wrapper_d5326 home-desktop">
	<div class="registration-wrapper_2025a">
		<div class="menu_97966">
			<div class="menu-content_349a5">
				<div>
					<img src={LogoLight} alt="betine site logo" class="mb24" style="margin-bottom: 24px;" />
				</div>
				<h2 class="registration-title_75689">Account Transactions</h2>
				<p class="registration-subtitle_9616d">
					At Betine, you can perform all your account transactions in just a few minutes.
				</p>
				<div class="buttons-title_462fa">Create Account</div>
				<a href="/registration" class="button_50c08 yellow_716d9">
					<div class="icon_9170f">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_104_11053)">
								<path
									d="M19.5626 0H4.43743C3.2609 0.00113466 2.13288 0.469012 1.30095 1.30095C0.469012 2.13288 0.00113466 3.2609 0 4.43743V19.5626C0.00113466 20.7391 0.469012 21.8671 1.30095 22.6991C2.13288 23.531 3.2609 23.9989 4.43743 24H19.5626C20.7391 23.9989 21.8671 23.531 22.6991 22.6991C23.531 21.8671 23.9989 20.7391 24 19.5626V4.43743C23.9989 3.2609 23.531 2.13288 22.6991 1.30095C21.8671 0.469012 20.7391 0.00113466 19.5626 0ZM22.2857 19.5626C22.285 20.2846 21.9979 20.9768 21.4874 21.4874C20.9768 21.9979 20.2846 22.285 19.5626 22.2857H4.43743C3.71542 22.285 3.02317 21.9979 2.51263 21.4874C2.00209 20.9768 1.71497 20.2846 1.71429 19.5626V4.43743C1.71497 3.71542 2.00209 3.02317 2.51263 2.51263C3.02317 2.00209 3.71542 1.71497 4.43743 1.71429H19.5626C20.2846 1.71497 20.9768 2.00209 21.4874 2.51263C21.9979 3.02317 22.285 3.71542 22.2857 4.43743V19.5626Z"
									fill="#1B2124"
								></path>
								<path
									d="M18.0017 11.1431H12.8588V6.00021C12.8588 5.77288 12.7685 5.55486 12.6078 5.39412C12.447 5.23337 12.229 5.14307 12.0017 5.14307C11.7743 5.14307 11.5563 5.23337 11.3956 5.39412C11.2348 5.55486 11.1445 5.77288 11.1445 6.00021V11.1431H6.00167C5.77435 11.1431 5.55633 11.2334 5.39558 11.3941C5.23484 11.5549 5.14453 11.7729 5.14453 12.0002C5.14453 12.2275 5.23484 12.4456 5.39558 12.6063C5.55633 12.767 5.77435 12.8574 6.00167 12.8574H11.1445V18.0002C11.1445 18.2275 11.2348 18.4456 11.3956 18.6063C11.5563 18.767 11.7743 18.8574 12.0017 18.8574C12.229 18.8574 12.447 18.767 12.6078 18.6063C12.7685 18.4456 12.8588 18.2275 12.8588 18.0002V12.8574H18.0017C18.229 12.8574 18.447 12.767 18.6078 12.6063C18.7685 12.4456 18.8588 12.2275 18.8588 12.0002C18.8588 11.7729 18.7685 11.5549 18.6078 11.3941C18.447 11.2334 18.229 11.1431 18.0017 11.1431Z"
									fill="#1B2124"
								></path>
							</g>
							<defs>
								<clippath id="clip0_104_11053">
									<rect width="24" height="24" fill="white"></rect>
								</clippath>
							</defs>
						</svg>
					</div>
					<div class="content_e22b3">
						<div class="text_b01f0">Create Membership</div>
						<div class="arrow_c2a80">
							<svg
								width="12"
								height="10"
								viewBox="0 0 12 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</div>
				</a>
				<div class="buttons-title_462fa"></div>
				<a href="/private_registration" class="button_50c08">
					<div class="icon_9170f">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_104_10084)">
								<path
									d="M19.0781 13.0493C19.0204 13.0493 18.9629 13.0544 18.9062 13.0645L18.4736 13.1417C16.9825 13.4077 15.4573 13.5426 13.9405 13.5426H12.2343H11.8593H10.1532C8.6364 13.5426 7.11127 13.4077 5.62027 13.1417L5.18747 13.0645C5.1308 13.0544 5.07324 13.0493 5.01563 13.0493C3.85252 13.0493 2.90625 13.9546 2.90625 15.0673C2.90625 16.131 3.26897 17.3034 3.87652 18.2033C4.65877 19.3619 5.77913 20 7.03125 20C8.14758 20 9.07191 19.6173 9.7786 18.8625C10.3447 18.2579 10.6888 17.5077 10.9924 16.8457C11.4495 15.8495 11.691 15.4473 12.0548 15.3571C12.4534 15.4484 12.7054 15.859 13.1747 16.8782C13.4769 17.5346 13.8194 18.2785 14.3817 18.8764C15.0828 19.622 16.0006 20 17.1094 20C19.9265 20 21.1875 17.7703 21.1875 15.5605V15.0673C21.1875 13.9546 20.2413 13.0493 19.0781 13.0493ZM9.27549 16.1249C8.66569 17.4542 8.26083 18.2063 7.03125 18.2063C5.63724 18.2063 4.78125 16.378 4.78125 15.0673C4.78125 14.9612 4.85855 14.8722 4.96205 14.849L5.27653 14.9051C6.71827 15.1623 8.18982 15.3055 9.65771 15.3319C9.52027 15.5913 9.39694 15.8603 9.27549 16.1249ZM19.3125 15.5605C19.3125 16.1812 19.1536 18.2063 17.1094 18.2063C15.8941 18.2063 15.4937 17.4651 14.8906 16.1552C14.7639 15.88 14.6351 15.6003 14.4902 15.3308C15.9402 15.302 17.3933 15.1591 18.8175 14.905L19.1317 14.849C19.2352 14.8722 19.3125 14.9612 19.3125 15.0673V15.5605Z"
									fill="#4F6069"
								></path>
								<path
									d="M23.97 9.68623C23.8407 9.207 23.3297 8.91875 22.8283 9.04193C22.7912 9.05108 19.0367 9.95516 12.2346 9.95516C9.34122 9.95516 6.9159 9.79157 5.07849 9.60247C5.2463 8.90054 5.66476 7.26256 6.27329 5.63906C7.41109 2.60363 8.40489 1.79372 8.8127 1.79372C8.97353 1.79372 9.34684 1.85596 10.04 2.27283C11.2483 2.99942 12.8176 3.00471 14.038 2.28632C14.8514 1.80753 15.1978 1.79372 15.2346 1.79372C15.7091 1.79372 16.8448 2.80435 18.0913 6.5922C18.2467 7.06462 18.7731 7.327 19.2671 7.17834C19.7609 7.0296 20.0352 6.52601 19.8798 6.05354C19.3592 4.47188 18.8018 3.18466 18.2227 2.22776C17.3283 0.749507 16.3229 0 15.2346 0C14.6355 0 13.9226 0.248161 13.0555 0.758655C12.4383 1.12179 11.6464 1.12013 11.0379 0.754215C10.194 0.246682 9.46609 0 8.8127 0C7.83685 0 6.9257 0.602018 6.10463 1.78933C5.5539 2.5857 5.01685 3.67717 4.5084 5.03359C3.80522 6.90951 3.35251 8.75812 3.20897 9.37834C1.88907 9.19601 1.16518 9.04009 1.14797 9.03632C0.643737 8.92507 0.140534 9.22619 0.0242366 9.70866C-0.0922479 10.1913 0.222377 10.6728 0.726894 10.7842C0.905347 10.8236 5.17768 11.7489 12.2346 11.7489C19.3041 11.7489 23.1383 10.8181 23.298 10.7785C23.7988 10.6543 24.0993 10.1655 23.97 9.68623Z"
									fill="#4F6069"
								></path>
							</g>
							<defs>
								<clippath id="clip0_104_10084">
									<rect width="24" height="20" fill="white"></rect>
								</clippath>
							</defs>
						</svg>
					</div>
					<div class="content_e22b3">
						<div class="text_b01f0">Create Private Membership</div>
						<div class="arrow_c2a80">
							<svg
								width="12"
								height="10"
								viewBox="0 0 12 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</div>
				</a>
				<div class="buttons-title_462fa">Login Your Account</div>
				<a href="/login" class="button_50c08">
					<div class="icon_9170f">
						<svg
							width="24"
							height="24"
							viewBox="0 0 20 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M17.0339 12.1672C16.9495 12.0796 16.8488 12.01 16.7377 11.9624C16.6265 11.9147 16.5072 11.89 16.3865 11.8897C16.2659 11.8893 16.1464 11.9134 16.035 11.9604C15.9236 12.0074 15.8225 12.0765 15.7377 12.1636C15.6529 12.2507 15.5859 12.3541 15.5408 12.4677C15.4958 12.5813 15.4734 12.7029 15.475 12.8254C15.4767 12.9479 15.5024 13.0688 15.5505 13.1812C15.5987 13.2935 15.6684 13.3949 15.7555 13.4796C16.5268 14.2503 17.1387 15.1696 17.5553 16.1836C17.972 17.1976 18.185 18.2858 18.1818 19.3846C18.1818 20.5136 14.9946 22.1538 10 22.1538C5.00538 22.1538 1.81822 20.5127 1.81822 19.3827C1.81516 18.2915 2.02528 17.2106 2.43643 16.2025C2.84758 15.1943 3.45158 14.279 4.21348 13.5095C4.29965 13.4241 4.36829 13.3223 4.4154 13.2099C4.46251 13.0974 4.48716 12.9766 4.48792 12.8544C4.48869 12.7322 4.46554 12.611 4.41984 12.498C4.37414 12.3849 4.30678 12.2822 4.22168 12.1958C4.13657 12.1094 4.03542 12.041 3.92408 11.9946C3.81275 11.9482 3.69344 11.9247 3.57309 11.9255C3.45274 11.9262 3.33374 11.9513 3.223 11.9991C3.11225 12.0469 3.01196 12.1166 2.92794 12.2041C1.99651 13.1449 1.25813 14.264 0.755552 15.4965C0.252973 16.729 -0.00381896 18.0506 4.29195e-05 19.3846C4.29195e-05 22.3823 5.15184 23.9999 10 23.9999C14.8482 23.9999 20 22.3823 20 19.3846C20.004 18.0416 19.7437 16.7113 19.2343 15.4719C18.725 14.2325 17.9769 13.1089 17.0339 12.1672Z"
								fill="#4F6069"
							></path>
							<path
								d="M10.0003 12.9231C11.2589 12.9231 12.4893 12.5441 13.5358 11.8341C14.5822 11.1241 15.3979 10.115 15.8795 8.93426C16.3612 7.75357 16.4872 6.45437 16.2417 5.20096C15.9961 3.94754 15.39 2.79621 14.5001 1.89254C13.6101 0.988881 12.4762 0.373479 11.2418 0.12416C10.0074 -0.12516 8.72788 0.00279968 7.56508 0.491858C6.40228 0.980917 5.40842 1.80911 4.70918 2.8717C4.00994 3.9343 3.63672 5.18357 3.63672 6.46154C3.63867 8.17464 4.30974 9.81701 5.50273 11.0284C6.69571 12.2397 8.31319 12.9211 10.0003 12.9231ZM10.0003 1.84616C10.8993 1.84616 11.7781 2.11684 12.5256 2.62399C13.2731 3.13113 13.8557 3.85196 14.1998 4.69531C14.5438 5.53866 14.6338 6.46666 14.4584 7.36196C14.283 8.25725 13.8501 9.07964 13.2144 9.72511C12.5787 10.3706 11.7688 10.8102 10.8871 10.9882C10.0054 11.1663 9.09143 11.0749 8.26086 10.7256C7.4303 10.3763 6.7204 9.78471 6.22094 9.02571C5.72148 8.26671 5.45489 7.37438 5.45489 6.46154C5.45631 5.23791 5.93566 4.0648 6.78779 3.19956C7.63991 2.33432 8.79524 1.8476 10.0003 1.84616Z"
								fill="#4F6069"
							></path>
						</svg>
					</div>
					<div class="content_e22b3">
						<div class="text_b01f0">Login Your Account</div>
						<div class="arrow_c2a80">
							<svg
								width="12"
								height="10"
								viewBox="0 0 12 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</div>
				</a>
				<div class="buttons-title_462fa">Forgot My Info</div>
				<a href="/forgot_password" class="button_50c08">
					<div class="icon_9170f">
						<svg
							width="24"
							height="24"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
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
					</div>
					<div class="content_e22b3">
						<div class="text_b01f0">Forgot My Password</div>
						<div class="arrow_c2a80">
							<svg
								width="12"
								height="10"
								viewBox="0 0 12 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</div>
				</a>
			</div>
		</div>
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
	</div>
</div>

<div class="main-content-wrapper_a4af2 registration_793a5 home-mobile">
	<div class="select_b5b99">
		<a href="/registration">
			<div class="item_1054b active_2a15a">
				<div class="icon-container_b410f">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_104_11053)">
							<path
								d="M19.5626 0H4.43743C3.2609 0.00113466 2.13288 0.469012 1.30095 1.30095C0.469012 2.13288 0.00113466 3.2609 0 4.43743V19.5626C0.00113466 20.7391 0.469012 21.8671 1.30095 22.6991C2.13288 23.531 3.2609 23.9989 4.43743 24H19.5626C20.7391 23.9989 21.8671 23.531 22.6991 22.6991C23.531 21.8671 23.9989 20.7391 24 19.5626V4.43743C23.9989 3.2609 23.531 2.13288 22.6991 1.30095C21.8671 0.469012 20.7391 0.00113466 19.5626 0ZM22.2857 19.5626C22.285 20.2846 21.9979 20.9768 21.4874 21.4874C20.9768 21.9979 20.2846 22.285 19.5626 22.2857H4.43743C3.71542 22.285 3.02317 21.9979 2.51263 21.4874C2.00209 20.9768 1.71497 20.2846 1.71429 19.5626V4.43743C1.71497 3.71542 2.00209 3.02317 2.51263 2.51263C3.02317 2.00209 3.71542 1.71497 4.43743 1.71429H19.5626C20.2846 1.71497 20.9768 2.00209 21.4874 2.51263C21.9979 3.02317 22.285 3.71542 22.2857 4.43743V19.5626Z"
								fill="#1B2124"
							></path>
							<path
								d="M18.0017 11.1431H12.8588V6.00021C12.8588 5.77288 12.7685 5.55486 12.6078 5.39412C12.447 5.23337 12.229 5.14307 12.0017 5.14307C11.7743 5.14307 11.5563 5.23337 11.3956 5.39412C11.2348 5.55486 11.1445 5.77288 11.1445 6.00021V11.1431H6.00167C5.77435 11.1431 5.55633 11.2334 5.39558 11.3941C5.23484 11.5549 5.14453 11.7729 5.14453 12.0002C5.14453 12.2275 5.23484 12.4456 5.39558 12.6063C5.55633 12.767 5.77435 12.8574 6.00167 12.8574H11.1445V18.0002C11.1445 18.2275 11.2348 18.4456 11.3956 18.6063C11.5563 18.767 11.7743 18.8574 12.0017 18.8574C12.229 18.8574 12.447 18.767 12.6078 18.6063C12.7685 18.4456 12.8588 18.2275 12.8588 18.0002V12.8574H18.0017C18.229 12.8574 18.447 12.767 18.6078 12.6063C18.7685 12.4456 18.8588 12.2275 18.8588 12.0002C18.8588 11.7729 18.7685 11.5549 18.6078 11.3941C18.447 11.2334 18.229 11.1431 18.0017 11.1431Z"
								fill="#1B2124"
							></path>
						</g>
						<defs>
							<clippath id="clip0_104_11053">
								<rect width="24" height="24" fill="white"></rect>
							</clippath>
						</defs>
					</svg>
				</div>
				düzenli
			</div>
		</a>
		<a href="/private_registration">
			<div class="item_1054b">
				<div class="icon-container_b410f">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_104_10084)">
							<path
								d="M19.0781 13.0493C19.0204 13.0493 18.9629 13.0544 18.9062 13.0645L18.4736 13.1417C16.9825 13.4077 15.4573 13.5426 13.9405 13.5426H12.2343H11.8593H10.1532C8.6364 13.5426 7.11127 13.4077 5.62027 13.1417L5.18747 13.0645C5.1308 13.0544 5.07324 13.0493 5.01563 13.0493C3.85252 13.0493 2.90625 13.9546 2.90625 15.0673C2.90625 16.131 3.26897 17.3034 3.87652 18.2033C4.65877 19.3619 5.77913 20 7.03125 20C8.14758 20 9.07191 19.6173 9.7786 18.8625C10.3447 18.2579 10.6888 17.5077 10.9924 16.8457C11.4495 15.8495 11.691 15.4473 12.0548 15.3571C12.4534 15.4484 12.7054 15.859 13.1747 16.8782C13.4769 17.5346 13.8194 18.2785 14.3817 18.8764C15.0828 19.622 16.0006 20 17.1094 20C19.9265 20 21.1875 17.7703 21.1875 15.5605V15.0673C21.1875 13.9546 20.2413 13.0493 19.0781 13.0493ZM9.27549 16.1249C8.66569 17.4542 8.26083 18.2063 7.03125 18.2063C5.63724 18.2063 4.78125 16.378 4.78125 15.0673C4.78125 14.9612 4.85855 14.8722 4.96205 14.849L5.27653 14.9051C6.71827 15.1623 8.18982 15.3055 9.65771 15.3319C9.52027 15.5913 9.39694 15.8603 9.27549 16.1249ZM19.3125 15.5605C19.3125 16.1812 19.1536 18.2063 17.1094 18.2063C15.8941 18.2063 15.4937 17.4651 14.8906 16.1552C14.7639 15.88 14.6351 15.6003 14.4902 15.3308C15.9402 15.302 17.3933 15.1591 18.8175 14.905L19.1317 14.849C19.2352 14.8722 19.3125 14.9612 19.3125 15.0673V15.5605Z"
								fill="#4F6069"
							></path>
							<path
								d="M23.97 9.68623C23.8407 9.207 23.3297 8.91875 22.8283 9.04193C22.7912 9.05108 19.0367 9.95516 12.2346 9.95516C9.34122 9.95516 6.9159 9.79157 5.07849 9.60247C5.2463 8.90054 5.66476 7.26256 6.27329 5.63906C7.41109 2.60363 8.40489 1.79372 8.8127 1.79372C8.97353 1.79372 9.34684 1.85596 10.04 2.27283C11.2483 2.99942 12.8176 3.00471 14.038 2.28632C14.8514 1.80753 15.1978 1.79372 15.2346 1.79372C15.7091 1.79372 16.8448 2.80435 18.0913 6.5922C18.2467 7.06462 18.7731 7.327 19.2671 7.17834C19.7609 7.0296 20.0352 6.52601 19.8798 6.05354C19.3592 4.47188 18.8018 3.18466 18.2227 2.22776C17.3283 0.749507 16.3229 0 15.2346 0C14.6355 0 13.9226 0.248161 13.0555 0.758655C12.4383 1.12179 11.6464 1.12013 11.0379 0.754215C10.194 0.246682 9.46609 0 8.8127 0C7.83685 0 6.9257 0.602018 6.10463 1.78933C5.5539 2.5857 5.01685 3.67717 4.5084 5.03359C3.80522 6.90951 3.35251 8.75812 3.20897 9.37834C1.88907 9.19601 1.16518 9.04009 1.14797 9.03632C0.643737 8.92507 0.140534 9.22619 0.0242366 9.70866C-0.0922479 10.1913 0.222377 10.6728 0.726894 10.7842C0.905347 10.8236 5.17768 11.7489 12.2346 11.7489C19.3041 11.7489 23.1383 10.8181 23.298 10.7785C23.7988 10.6543 24.0993 10.1655 23.97 9.68623Z"
								fill="#4F6069"
							></path>
						</g>
						<defs>
							<clippath id="clip0_104_10084">
								<rect width="24" height="20" fill="white"></rect>
							</clippath>
						</defs>
					</svg>
				</div>
				özel
			</div>
		</a>
	</div>
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
	<div class="auth-links-wrapper_6fe1d">
		<a href="/login" class="wrap_8498d">
			<div class="icon-wrap_43c98">
				<svg
					width="16"
					height="20"
					viewBox="0 0 16 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_301_9730)">
						<path
							d="M13.6271 10.1394C13.5596 10.0664 13.4791 10.0084 13.3901 9.96867C13.3012 9.92896 13.2057 9.90836 13.1092 9.90808C13.0127 9.90781 12.9171 9.92785 12.828 9.96705C12.7389 10.0062 12.658 10.0638 12.5902 10.1364C12.5223 10.209 12.4688 10.2951 12.4327 10.3898C12.3966 10.4845 12.3787 10.5858 12.38 10.6879C12.3814 10.79 12.4019 10.8907 12.4404 10.9843C12.4789 11.0779 12.5347 11.1625 12.6044 11.2331C13.2214 11.8753 13.711 12.6413 14.0443 13.4863C14.3776 14.3313 14.548 15.2382 14.5454 16.1538C14.5454 17.0947 11.9957 18.4615 8 18.4615C4.00431 18.4615 1.45457 17.094 1.45457 16.1523C1.45212 15.243 1.62023 14.3422 1.94914 13.5021C2.27806 12.662 2.76127 11.8992 3.37078 11.2579C3.43972 11.1868 3.49463 11.102 3.53232 11.0083C3.57001 10.9145 3.58973 10.8138 3.59034 10.712C3.59095 10.6102 3.57244 10.5092 3.53587 10.415C3.49931 10.3208 3.44542 10.2352 3.37734 10.1632C3.30926 10.0912 3.22834 10.0342 3.13927 9.99554C3.0502 9.95686 2.95476 9.93728 2.85848 9.93793C2.7622 9.93857 2.667 9.95943 2.5784 9.99929C2.4898 10.0392 2.40956 10.0972 2.34235 10.1701C1.59721 10.9541 1.0065 11.8867 0.604441 12.9138C0.202379 13.9409 -0.00305516 15.0422 3.43356e-05 16.1538C3.43356e-05 18.652 4.12147 20 8 20C11.8785 20 16 18.652 16 16.1538C16.0032 15.0347 15.795 13.9261 15.3875 12.8933C14.98 11.8605 14.3815 10.9241 13.6271 10.1394Z"
							fill="#4F6069"
						></path>
						<path
							d="M7.99994 10.7692C9.00683 10.7692 9.9911 10.4534 10.8283 9.86176C11.6655 9.27009 12.318 8.42913 12.7033 7.44522C13.0886 6.46131 13.1894 5.37864 12.993 4.33413C12.7966 3.28962 12.3117 2.33017 11.5997 1.57712C10.8878 0.824068 9.98066 0.311233 8.99313 0.103466C8.00559 -0.1043 6.98198 0.00233306 6.05175 0.409882C5.12151 0.81743 4.32642 1.50759 3.76703 2.39309C3.20763 3.27858 2.90906 4.31964 2.90906 5.38462C2.91062 6.8122 3.44748 8.18084 4.40187 9.19029C5.35625 10.1997 6.65024 10.7676 7.99994 10.7692ZM7.99994 1.53846C8.71915 1.53846 9.4222 1.76404 10.0202 2.18666C10.6182 2.60928 11.0843 3.20997 11.3595 3.91276C11.6347 4.61555 11.7067 5.38888 11.5664 6.13496C11.4261 6.88104 11.0798 7.56636 10.5712 8.10426C10.0627 8.64215 9.41474 9.00846 8.70936 9.15687C8.00398 9.30527 7.27283 9.22911 6.60837 8.938C5.94392 8.64689 5.376 8.15392 4.97643 7.52143C4.57686 6.88893 4.3636 6.14531 4.3636 5.38462C4.36473 4.36492 4.74821 3.38734 5.42991 2.6663C6.11161 1.94527 7.03587 1.53966 7.99994 1.53846Z"
							fill="#4F6069"
						></path>
					</g>
					<defs>
						<clippath id="clip0_301_9730">
							<rect width="16" height="20" fill="white"></rect>
						</clippath>
					</defs>
				</svg>
			</div>
			<div class="link-right_8b6aa">
				<div class="title_bfe51">Log in</div>
				<svg
					width="12"
					height="10"
					viewBox="0 0 12 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_301_10000)">
						<path
							d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
							fill="#8B9EA7"
						></path>
					</g>
					<defs>
						<clippath id="clip0_301_10000">
							<rect width="12" height="10" fill="white"></rect>
						</clippath>
					</defs>
				</svg>
			</div>
		</a>
		<a href="/forgot_password" class="wrap_8498d">
			<div class="icon-wrap_43c98">
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_301_9319)">
						<path
							d="M1.92224 14.8889L3.04355 16L4.16485 14.8889L3.04355 13.7778L4.16485 12.6668L5.28616 13.7778L6.40746 12.6668L5.28616 11.5557L9.85148 7.11139C11.6135 8.22247 14.0163 7.90502 15.2978 6.07968C16.1788 4.80988 16.2589 3.0639 15.3779 1.7941C13.9362 -0.348693 10.9728 -0.586781 9.21073 1.1592C7.84914 2.50836 7.68896 4.49242 8.73017 6.00031L0.24028 14.3334C-0.0800933 14.6508 -0.0800933 15.127 0.24028 15.4445C0.560653 15.7619 1.04121 15.7619 1.36159 15.4445L1.92224 14.8889ZM10.4121 2.34964C11.3732 1.47665 12.8149 1.47665 13.776 2.34964C14.7372 3.22262 14.7372 4.73051 13.776 5.6035C12.8149 6.47649 11.3732 6.47649 10.4121 5.6035C9.45101 4.73051 9.45101 3.22262 10.4121 2.34964Z"
							fill="#4F6069"
						></path>
					</g>
					<defs>
						<clippath id="clip0_301_9319">
							<rect width="16" height="16" fill="white"></rect>
						</clippath>
					</defs>
				</svg>
			</div>
			<div class="link-right_8b6aa">
				<div class="title_bfe51">Forgot password?</div>
				<svg
					width="12"
					height="10"
					viewBox="0 0 12 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_301_10000)">
						<path
							d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
							fill="#8B9EA7"
						></path>
					</g>
					<defs>
						<clippath id="clip0_301_10000">
							<rect width="12" height="10" fill="white"></rect>
						</clippath>
					</defs>
				</svg>
			</div>
		</a>
	</div>
</div>
