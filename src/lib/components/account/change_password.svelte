<script>
	import PasswordInput from '$lib/components/_utils/PasswordInput.svelte';
	import BetineDefaultMaleAvatar from '$lib/images/betine-default-male-avatar.png';
	import CpAccountMenuContent from './desktop/change_password/CpAccountMenuContent.svelte';
	import CpAccountMenuWrapper from './desktop/change_password/CpAccountMenuWrapper.svelte';
	import CpAccountMenuList from './mobile/change_password/CpAccountMenuList.svelte';
	import CpChangePassword from './mobile/change_password/CpChangePassword.svelte';
</script>

<div class="account_f3f82 home-desktop">
	<div class="account-container_bba75">
		<CpAccountMenuWrapper />
		<CpAccountMenuContent />
	</div>
</div>

<div class="main-content-wrapper_a4af2 home-mobile">
	<div>
		<nav>
			<CpAccountMenuList />
		</nav>

		<div class="container_6266f">
			<CpChangePassword />
		</div>
	</div>
</div>
