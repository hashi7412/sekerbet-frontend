<script>
	import TopWinnerItem from './TopWinnerItem.svelte';

	const topWinners = [
		{
			name: 'Bar***',
			id: 'MB1723328739',
			amount: '298655',
			gameName: 'Sports betting'
		},
		{
			name: 'Yun***',
			id: 'MB1658681843',
			amount: '276696',
			gameName: 'Sports betting'
		},
		{
			name: 'Mus***',
			id: 'MB1665884376',
			amount: '230575',
			gameName: 'Sports betting'
		},
		{
			name: 'Mur***',
			id: 'MB1671624110',
			amount: '97850',
			gameName: 'Sports betting'
		},
		{
			name: 'Hüs***',
			id: 'MB1765413601',
			amount: '95903.5',
			gameName: 'Sports betting'
		},
		{
			name: 'Tol***',
			id: 'MB1650746579',
			amount: '90879.4',
			gameName: 'Sports betting'
		},
		{
			name: 'Emr***',
			id: 'MB1686385352',
			amount: '79343.2',
			gameName: 'Sports betting'
		},
		{
			name: 'Ser***',
			id: 'MB1634363637',
			amount: '60193.4',
			gameName: 'Sports betting'
		},
		{
			name: 'Gök***',
			id: 'MB1756759232',
			amount: '59422',
			gameName: 'Sports betting'
		},
		{
			name: 'Hüs***',
			id: 'MB1742415449',
			amount: '58080',
			gameName: 'Sports betting'
		},
		{
			name: 'Seb***',
			id: 'MB1734479100',
			amount: '55600',
			gameName: 'Sports betting'
		},
		{
			name: 'Mer***',
			id: 'MB1737808565',
			amount: '54000',
			gameName: 'Sports betting'
		},
		{
			name: 'Öme***',
			id: 'MB1697367526',
			amount: '52725',
			gameName: 'Sports betting'
		},
		{
			name: 'Ali***',
			id: 'MB1753075989',
			amount: '97850',
			gameName: 'Sports betting'
		},
		{
			name: 'Ser***',
			id: 'MB1647256552',
			amount: '97850',
			gameName: 'Sports betting'
		},
		{
			name: 'Onu***',
			id: 'MB1709738622',
			amount: '43500',
			gameName: 'Sports betting'
		},
		{
			name: 'Ari***',
			id: 'MB1679655730',
			amount: '41621.1',
			gameName: 'Sports betting'
		},
		{
			name: 'Mur***',
			id: 'MB1774515527',
			amount: '39212.6',
			gameName: 'Sports betting'
		}
	];
</script>

<div class="top-winners_653ab">
	<div class="slider-wrapper_9d522">
		<div class="slick-slider slick-initialized" dir="ltr">
			<div class="slick-list">
				<div class="slick-track">
					{#each topWinners as winner, index}
						<TopWinnerItem {...winner} {index} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
