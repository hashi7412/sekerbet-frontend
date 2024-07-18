<script>
	export let name;
	export let icon;
	export let isActived;
	export let onClick;
</script>

<li class="item_4cddf menu-sport_c93c0">
	<button class={`btn_ff9c8${isActived ? ' btn-active_73669' : ''}`} on:click={onClick}>
		<div>
			{@html icon}
		</div>
		{name}
	</button>
</li>
