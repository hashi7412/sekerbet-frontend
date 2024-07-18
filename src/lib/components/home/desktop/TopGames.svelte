<script>
	// @ts-nocheck

	import TopGameCard from './TopGameCard.svelte';
	import Butterfly_Lovers from '$lib/images/games/Butterfly_Lovers.webp';

	const games = [
		{
			tags: ['Bonus Satın Al', 'Popüler'],
			image: Butterfly_Lovers,
			src: 'https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp',
			name: 'Sugar Rush',
			provider: 'Pragmatic Play'
		},
		{
			tags: ['Bonus Satın Al', 'Popüler'],
			image: Butterfly_Lovers,
			src: 'https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp',
			name: 'Starlight Princess',
			provider: 'Pragmatic Play'
		},
		{
			tags: ['Bonus Satın Al', 'Popüler'],
			image: Butterfly_Lovers,
			src: 'https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp',
			name: 'Gates of Olympus',
			provider: 'Pragmatic Play'
		},
		{
			tags: ['Bonus Satın Al', 'Popüler'],
			image: Butterfly_Lovers,
			src: 'https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp',
			name: 'Sweet Bonanza',
			provider: 'Pragmatic Play'
		},
		{
			tags: ['Popüler'],
			image: Butterfly_Lovers,
			src: 'https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp',
			name: 'Immortal Ways 88 Charms 96',
			provider: 'Ruby Play'
		},
		{
			tags: ['Popüler'],
			image: Butterfly_Lovers,
			src: 'https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp',
			name: 'Twilight Princess',
			provider: 'Pragmatic Play'
		},
		{
			tags: ['Bonus Satın Al', 'Popüler'],
			image: Butterfly_Lovers,
			src: 'https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp',
			name: 'Sugar Rush',
			provider: 'Pragmatic Play'
		},
		{
			tags: ['Bonus Satın Al', 'Popüler'],
			image: Butterfly_Lovers,
			src: 'https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp',
			name: 'Sugar Rush',
			provider: 'Pragmatic Play'
		},
		{
			tags: ['Bonus Satın Al', 'Popüler'],
			image: Butterfly_Lovers,
			src: 'https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp',
			name: 'Sugar Rush',
			provider: 'Pragmatic Play'
		},
		{
			tags: ['Bonus Satın Al', 'Popüler'],
			image: Butterfly_Lovers,
			src: 'https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp',
			name: 'Sugar Rush',
			provider: 'Pragmatic Play'
		},
		{
			tags: ['Bonus Satın Al', 'Popüler'],
			image: Butterfly_Lovers,
			src: 'https://b3ti-cdn3-platform.cdn-in-flare.com/resources//media/games_images//pragmatic_play/Sugar_Rush_9363.webp',
			name: 'Sugar Rush',
			provider: 'Pragmatic Play'
		}
	];
</script>

<div class="ml11 mr11 section-container_f113f border_dd45d">
	<div class="slider-wrapper_9d522">
		<div class="slick-slider slick-initialized" dir="ltr">
			<div class="slick-list">
				<div class="slick-track">
					{#each games as game, index}
						<TopGameCard {...game} {index} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
