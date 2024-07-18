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
	import RMenu from './desktop/registration/RMenu.svelte';
	import RContentS1 from './desktop/registration/RContentS1.svelte';
	import RContentS2 from './desktop/registration/RContentS2.svelte';
	import RContentS3 from './desktop/registration/RContentS3.svelte';
	import RContainer from './mobile/RContainer.svelte';
	import RSelect from './mobile/RSelect.svelte';
	import RAuto from './mobile/RAuto.svelte';

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
		<RMenu />
		
		<RContentS1 />
	
		<RContentS2 />
		
		<RContentS3 />
		
	</div>
</div>

<div class="main-content-wrapper_a4af2 registration_793a5 home-mobile">
	<RSelect />
	
	<RContainer />
	
	<RAuto />

</div>
