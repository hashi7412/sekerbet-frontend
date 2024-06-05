<script>
	// @ts-nocheck

	export let showModal; // boolean
	export let handleClose;
	export let handleOK;
	export let okText = 'OK';
	export let cancelText = 'Cancel';

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();

	function handleCloseModal() {
		dialog.close();
		handleClose();
	}
	function handleOKModal() {
		handleOK();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => handleCloseModal()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="header" />
		<hr />
		<slot />
		<hr />
		<div class="modal-footer-btn-group">
			<!-- svelte-ignore a11y-autofocus -->
			<button class="modal-footer-cancel-button" autofocus on:click={() => handleCloseModal()}
				>{cancelText}</button
			>
			<button class="modal-footer-ok-button" on:click={() => handleOKModal()}>{okText}</button>
		</div>
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		min-width: 360px;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.modal-footer-btn-group {
		display: flex;
		justify-content: end;
		gap: 15px;
	}
	.modal-footer-btn-group button {
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
		border-radius: 8px;
		padding: 15px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-weight: 500;
		font-size: 14px;
		line-height: 20px;
		cursor: pointer;
		color: #1b2124;
	}
	.modal-footer-ok-button {
		background: #fbcf44;
	}
	.modal-footer-cancel-button {
		background: #7be0af;
	}
</style>
