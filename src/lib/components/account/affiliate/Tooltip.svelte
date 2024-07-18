<script>
	export let message = '';
	import { Icon } from 'svelte-icons-pack';
	import { AiOutlineQuestionCircle } from 'svelte-icons-pack/ai';
</script>

<div class="tooltip-container">
	<span class="tooltip-icon"><Icon src={AiOutlineQuestionCircle} /></span>
	<div class="tooltip-content">{message}</div>
</div>

<style>
	.tooltip-container {
		position: relative;
		display: inline-block;
	}
	.tooltip-icon {
		cursor: pointer;
		margin-top: 24px;
	}
	.tooltip-content {
		display: none;
		position: absolute;
		background: #000;
		color: #fff;
		padding: 5px;
		border-radius: 5px;
		white-space: nowrap;
		bottom: 125%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
	}
	.tooltip-container:hover .tooltip-content {
		display: block;
	}
</style>
