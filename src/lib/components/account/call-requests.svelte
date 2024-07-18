<script>
	// @ts-nocheck

	import Dropdown from '$lib/components/_utils/Dropdown.svelte';
	import { DateInput } from 'date-picker-svelte';
	import { onMount } from 'svelte';
	import BetineDefaultMaleAvatar from '$lib/images/betine-default-male-avatar.png';
	import { convertDefaultDateFormat } from '$lib/utils/date-format';
	import AccountMenuWrapper from './desktop/call-requests/AccountMenuWrapper.svelte';
	import AccountMenuMoblie from './mobile/call-requests/AccountMenuMoblie.svelte';
	import AccountMenuMoblieContainer from './mobile/call-requests/AccountMenuMoblieContainer.svelte';
	import AccountmenuwrapperContent from './desktop/bank_accounts/AccountmenuwrapperContent.svelte';

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

<div class="account_f3f82 home-desktop">
	<div class="account-container_bba75">
		<AccountMenuWrapper></AccountMenuWrapper>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
	<AccountmenuwrapperContent></AccountmenuwrapperContent>
    </div>
</div>

<div class="main-content-wrapper_a4af2 home-mobile">
	<div>
		
		<nav>
			<AccountMenuMoblie></AccountMenuMoblie>
			
		</nav>
		<AccountMenuMoblieContainer/>
		
	</div>
</div>
