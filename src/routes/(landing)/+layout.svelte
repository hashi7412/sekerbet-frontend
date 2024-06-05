<script>
	import LandingHeader from '$lib/layout/LandingHeader.svelte';
	import LandingFooter from '$lib/layout/LandingFooter.svelte';
</script>

<div>
	<LandingHeader />
	<slot />
	<LandingFooter />
</div>
