<script>
	export const ssr = false;
	export const csr = true;
	import Tickets from '$lib/components/account/tickets.svelte';
</script>

<svelte:head>
	<title>Tickets</title>
	<meta name="description" content="Tickets page" />
</svelte:head>

<Tickets />
