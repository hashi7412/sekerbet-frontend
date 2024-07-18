<script>
	let player = {
		name: 'Onur Göksu',
		username: 'onurbey1',
		balance: {
			amount1: '2.000₺',
			amount2: '-35.942,50₺'
		},
		financial: {
			green: '234.765,87₺',
			red: '198.823,74₺'
		},
		affiliate: '8.760,00₺'
	};
</script>

<div class="affiliated-players">
	<div class="header">Affiliated players</div>
	<div class="details player-details">
		<div>{player.name}</div>
		<div>{player.username}</div>
	</div>
	<div class="details balance-details">
		<span>{player.balance.amount1}</span>
		<span class="negative">{player.balance.amount2}</span>
	</div>
	<div class="details financial-details">
		<span>{player.financial.green}</span>
		<span class="negative">{player.financial.red}</span>
	</div>
	<div class="details affiliate-details">
		<span>{player.affiliate}</span>
	</div>
</div>

<style>
	.affiliated-players {
		z-index: 1000;
		background-color: #ffffff;
		color: #232b2f;
		padding: 1rem;
		border-radius: 8px;
		width: 100%;
		max-width: 800px;
		margin: 1rem auto;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	.header {
		font-weight: bold;
		margin-bottom: 1rem;
		font-size: 1.2rem;
		color: #3d4b51;
	}
	.details {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 0;
		border-bottom: 1px solid #e0e0e0;
	}
	.details:last-child {
		border-bottom: none;
	}
	.details span {
		display: inline-block;
		padding: 0.5rem;
		border-radius: 4px;
		min-width: 100px;
		text-align: center;
	}
	.balance-details span:nth-child(1),
	.affiliate-details span {
		background-color: #3d4b51;
		color: #ffffff;
	}
	.balance-details span:nth-child(2) {
		background-color: #3d4b51;
		color: #fbcf44;
	}
	.financial-details span:nth-child(1) {
		background-color: #bdefd7;
		color: #232b2f;
	}
	.financial-details span:nth-child(2) {
		background-color: #fbcf44;
		color: #232b2f;
	}
	.negative {
		color: red;
	}
	.player-details {
		font-weight: bold;
		font-size: 1rem;
	}
</style>
