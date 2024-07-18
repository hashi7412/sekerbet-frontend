<script>
	import Tooltip from './Tooltip.svelte';
	import { Icon } from 'svelte-icons-pack';
	import { AiTwotoneEye } from 'svelte-icons-pack/ai';
	import { BsThreeDotsVertical } from 'svelte-icons-pack/bs';
	import FormPage from '../FormPage.svelte';
	import AffiliateDetails from './AffiliateDetails.svelte';
	import AffiliateFormDetailed from './AffiliateFormDetailed.svelte';
	import Modal from '../Modal.svelte';
	let showModal = false;
	let showAffiliate = false;
	let AffiliateDetailPowr = false;
	let affiliates = [
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		},
		{
			name: 'Onur Göksu',
			username: 'onurbey1',
			commission: '15%',
			network: 'Instagram',
			networkLink: 'instagram.com/bestsites',
			interaction: { main: '13,435', sub: '1,423' },
			financial: { main: '234,765.87₺', sub: '198,823.74₺' },
			balance: ['1,750.00₺', '8,760.00₺']
		}
		// Add more affiliates as needed
	];
</script>

<div class="dashboard">
	<Modal visible={showModal} onClose={() => (showModal = false)}>
		<FormPage />
	</Modal>
	<!-- <AffiliateDetails /> -->

	<Modal visible={showAffiliate} onClose={() => (showAffiliate = false)}>
		<AffiliateFormDetailed />
	</Modal>
	<Modal visible={AffiliateDetailPowr} onClose={() => (AffiliateDetailPowr = false)}>
		<AffiliateDetails />
	</Modal>
	<div class="overview">
		<h2>Affiliate List</h2>
		<button class="create-affiliate" on:click={() => (showModal = true)}>Create affiliate</button>
	</div>
	<div class="header">
		<div class="summary">
			<h3>Commission Types</h3>
			<div class="progress-bar">
				<div class="progress" style="width: 55%"></div>
			</div>
			<div class="summary-details">
				<span class="deposit">Deposit 19</span>
				<span class="revenue">Revenue 16</span>
			</div>
		</div>
		<div class="summary">
			<h3>Network Types</h3>
			<div class="progress-bar">
				<div class="progress website" style="width: 25%"></div>
				<div class="progress facebook" style="width: 25%"></div>
				<div class="progress twitter" style="width: 30%"></div>
				<div class="progress instagram" style="width: 20%"></div>
			</div>
			<div class="summary-details">
				<span class="website">Website 18</span>
				<span class="facebook">Facebook 19</span>
				<span class="twitter">Twitter 23</span>
				<span class="instagram">Instagram 12</span>
			</div>
		</div>
	</div>

	<input type="text" placeholder="Override filter" class="filter-input" />

	<table class="table_css">
		<thead>
			<tr>
				<th>Affiliate Details</th>
				<th>Commission Details </th>
				<th>Network Details </th>
				<th>Interaction Details </th>
				<th>Financial Details </th>
				<th>Balance Details </th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each affiliates as affiliate}
				<tr>
					<td>
						<div class="affiliate-details">
							<span>{affiliate.name}</span>
							<span class="username">{affiliate.username}</span>
						</div>
					</td>
					<td>
						<div class="commission-details">
							<span>{affiliate.commission}</span>
							<button class="revenue-button">Revenue</button>
						</div>
					</td>
					<td>
						<a href="https://{affiliate.networkLink}" target="_blank">{affiliate.network}</a>
					</td>
					<td>
						<div class="interaction-details">
							<div class="super">
								<div class="powrs"><Tooltip message="visitor count" /></div>
								{affiliate.interaction.main}
							</div>
							<div class="super">
								<div class="powrs"><Tooltip message="visitor count" /></div>
								{affiliate.interaction.sub}
							</div>
						</div>
					</td>
					<td>
						<div class="financial-details">
							<div class="super">
								<div class="powrs"><Tooltip message="visitor count" /></div>
								{affiliate.financial.main}
							</div>
							<div class="super">
								<div class="powrs"><Tooltip message="visitor count" /></div>
								{affiliate.financial.sub}
							</div>
						</div>
					</td>
					<td>
						<div class="balance-details">
							{#each affiliate.balance as bal}
								<div class="super">
									<div class="powrs"><Tooltip message="visitor count" /></div>
									{bal}
								</div>
							{/each}
						</div>
					</td>
					<td>
						<div class="actions">
							<button class="view-button" on:click={() => (AffiliateDetailPowr = true)}
								><Icon src={AiTwotoneEye} /></button
							>
							<button class="more-button" on:click={() => (showAffiliate = true)}
								><Icon src={BsThreeDotsVertical} /></button
							>
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.super {
		display: flex;
		align-items: center;
		flex-direction: row;
	}
	.powrs {
		margin-top: 3px;
	}
	.blur {
		filter: blur(5px);
		pointer-events: none;
	}
	.dashboard {
		margin-top: 70px;
		padding: 20px;
		background: #ffffff;
	}
	.overview {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}
	.overview h2 {
		margin: 0;
		font-size: 24px;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 20px;
	}
	.summary {
		flex: 1;
		margin-right: 20px;
		padding: 15px;
		background: #bdefd7;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	.summary:last-child {
		margin-right: 0;
	}
	.table_css {
		margin: auto;

		padding-left: 50px;
		padding-right: 50px;
	}
	.summary h3 {
		margin-bottom: 10px;
		font-size: 16px;
	}
	.progress-bar {
		background: #3d4b51;
		height: 10px;
		border-radius: 5px;
		overflow: hidden;
		width: 100%;
		margin-bottom: 10px;
		display: flex;
	}
	.progress {
		height: 100%;
	}
	.progress.website {
		background: #fbcf44;
	}
	.progress.facebook {
		background: #4267b2;
	}
	.progress.twitter {
		background: #1da1f2;
	}
	.progress.instagram {
		background: #e1306c;
	}
	.summary-details {
		display: flex;
		justify-content: space-between;
	}
	.summary-details span {
		display: flex;
		align-items: center;
		font-size: 14px;
	}
	.summary-details .deposit::before,
	.summary-details .revenue::before,
	.summary-details .website::before,
	.summary-details .facebook::before,
	.summary-details .twitter::before,
	.summary-details .instagram::before {
		content: '';
		display: inline-block;
		width: 10px;
		height: 10px;
		margin-right: 5px;
		border-radius: 50%;
	}
	.summary-details .deposit::before {
		background: #fbcf44;
	}
	.summary-details .revenue::before {
		background: #fbcf44;
	}
	.summary-details .website::before {
		background: #fbcf44;
	}
	.summary-details .facebook::before {
		background: #4267b2;
	}
	.summary-details .twitter::before {
		background: #1da1f2;
	}
	.summary-details .instagram::before {
		background: #e1306c;
	}
	.create-affiliate {
		padding: 10px 20px;
		background: #3d4b51;
		color: #ffffff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}
	.create-affiliate:hover {
		background: #232b2f;
	}
	.filter-input {
		margin: 20px 0;
		padding: 10px;
		width: 100%;
		border: 1px solid #e0e0e0;
		border-radius: 5px;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		background: #ffffff;
		margin-top: 20px;
	}
	th,
	td {
		padding: 15px;
		border: 1px solid #e0e0e0;
		text-align: left;
	}
	th {
		background: #f8f8f8;
		font-size: 14px;
	}
	.affiliate-details span {
		display: block;
		font-weight: bold;
	}
	.affiliate-details .username {
		color: #888;
		font-weight: normal;
	}
	.commission-details {
		display: flex;
		align-items: center;
	}
	.revenue-button {
		padding: 5px 10px;
		margin-left: 10px;
		background: #3d4b51;
		color: #ffffff;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 12px;
	}
	.revenue-button:hover {
		background: #232b2f;
	}
	.interaction-details span,
	.financial-details span,
	.balance-details span {
		display: block;
	}
	.actions {
		display: flex;
		align-items: center;
	}
	.view-button,
	.more-button {
		padding: 5px;
		margin-right: 5px;
		background: none;
		border: none;
		cursor: pointer;
	}
	.view-button svg,
	.more-button svg {
		fill: #3d4b51;
		width: 20px;
		height: 20px;
	}
	.table_css {
		margin: auto;
		width: 100%;
		border-collapse: collapse;
		background: #ffffff;
	}

	th,
	td {
		padding: 20px; /* Increased padding */
		border: 1px solid #e0e0e0;
		text-align: left;
	}

	th {
		background: #3d4b51; /* Header background color */
		color: #ffffff; /* Text color */
		font-size: 14px;
	}

	tr:nth-child(even) {
		background: #f8f8f8; /* Alternate row color */
	}

	tr:hover {
		background: #7be0af; /* Hover effect */
	}

	.affiliate-details span {
		display: block;
		font-weight: bold;
	}

	.affiliate-details .username {
		color: #888;
		font-weight: normal;
	}

	.commission-details {
		display: flex;
		align-items: center;
	}

	.revenue-button {
		padding: 5px 10px;
		margin-left: 10px;
		background: #fbcf44; /* Button color */
		color: #3d4b51;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 12px;
	}

	.revenue-button:hover {
		background: #354046; /* Button hover color */
	}

	.interaction-details span,
	.financial-details span,
	.balance-details span {
		display: block;
	}

	.actions {
		display: flex;
		align-items: center;
	}

	.view-button,
	.more-button {
		padding: 5px;
		margin-right: 5px;
		background: none;
		border: none;
		cursor: pointer;
	}

	.view-button svg,
	.more-button svg {
		fill: #3d4b51;
		width: 20px;
		height: 20px;
	}
	@media (max-width: 1200px) {
		.table_css {
			padding-left: 20px;
			padding-right: 20px;
		}
	}

	@media (max-width: 992px) {
		.table_css {
			padding-left: 10px;
			padding-right: 10px;
		}
		.overview h2 {
			font-size: 20px;
		}
		.summary h3 {
			font-size: 14px;
		}
		.summary-details span {
			font-size: 12px;
		}
		.create-affiliate {
			padding: 8px 16px;
		}
		.filter-input {
			padding: 8px;
		}
	}

	@media (max-width: 768px) {
		.header {
			flex-direction: column;
			align-items: stretch;
		}
		.summary {
			margin-bottom: 20px;
		}
		.summary:last-child {
			margin-right: 0;
		}
		.summary-details {
			flex-direction: column;
		}
		.summary-details span {
			margin-bottom: 5px;
		}
		table thead {
			display: none;
		}
		table tbody tr {
			display: block;
			margin-bottom: 20px;
		}
		table tbody td {
			display: block;
			text-align: right;
			border-bottom: 1px solid #e0e0e0;
			padding: 10px 5px;
		}
		table tbody td::before {
			content: attr(data-label);
			float: left;
			font-weight: bold;
		}
		.actions {
			text-align: center;
		}
	}

	@media (max-width: 576px) {
		.dashboard {
			padding: 10px;
		}
		.table_css {
			padding-left: 5px;
			padding-right: 5px;
		}
		.filter-input {
			margin: 10px 0;
			padding: 5px;
		}
		.create-affiliate {
			padding: 6px 12px;
			font-size: 14px;
		}
		.overview h2 {
			font-size: 18px;
		}
	}
</style>
