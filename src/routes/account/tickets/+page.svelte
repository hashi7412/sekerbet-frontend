<script>
	import Tickets from '$lib/components/account/tickets.svelte';
	export const ssr = false;
	export const csr = true;
</script>

<svelte:head>
	<title>Tickets</title>
	<meta name="description" content="Tickets page" />
</svelte:head>

<Tickets />
