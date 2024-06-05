<script>
	// @ts-nocheck

	export let isDropdown = false;
	export let value = null;
	export let setValue = null;
	export let containerClassName = 'payment-account-container_07fa7';
	export let thumbClassName = 'select-container_6ea57';
	export let data = [];
	export let dropContainerClassName = '';
	export let dataField = {
		key: 'key',
		label: 'label'
	};

	const handleDropdownClick = () => {
		isDropdown = !isDropdown;
	};

	const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return;
		isDropdown = false;
	};

	const handleItemSelect = (val) => {
		if (setValue) {
			setValue(val);
		}
		isDropdown = false;
	};
</script>

<div class={containerClassName} on:focusout={handleDropdownFocusLoss}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class={thumbClassName} on:click={handleDropdownClick}>
		<slot />
	</div>
	<div class={dropContainerClassName} style={isDropdown ? null : `display: none;`}>
		<div class="container_3993f">
			<ul class="select-list_88332">
				{#each data as val, index}
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li
						class={`select-item_a049b ${value === val[dataField.key] ? ' active_d1243' : ''}`}
						on:click={() => handleItemSelect(val[dataField.key])}
					>
						<button type="button" class="select-button_059a8">{val[dataField.label]}</button>
					</li>
				{/each}
			</ul>
			<div class="scrollbar_ed51c" style="height: 98.7807px;"></div>
		</div>
	</div>
</div>
