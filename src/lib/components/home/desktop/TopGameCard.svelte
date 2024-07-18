<script>
	// @ts-nocheck

	export let tags = [];
	export let image;
	export let src;
	export let name;
	export let provider;
	export let index;
</script>

<div
	data-index={index}
	class="slick-slide"
	tabindex="-1"
	aria-hidden="true"
	style="outline: none; width: 238px;"
>
	<div>
		<div>
			<div class="popular-game-img_31ea4">
				<div class="game-tags_a75a9">
					{#each tags as tag, index}
						<div class="game-tag_de65e">{tag}</div>
					{/each}
				</div>
				<img src={image} alt={src} class="image_e2e50" />
				<div class="game-overlap_384ef">
					<div class="game-favourite_647eb">
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 14"
							xmlns="http://www.w3.org/2000/svg"
							fill="#FBCF44"
						>
							<path
								fill="currentColor"
								d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
							>
							</path>
						</svg>
					</div>
					<div class="game-overlap__info_b7142">
						<div class="game-overlap__name_29bb2">{name}</div>
						<div class="game-overlap__buttons_70bab">
							<button class="game-btn_87ae5 play_bfd6b">Play</button>
						</div>
					</div>
				</div>
			</div>
			<div class="popular-game__info_8ee87">
				<div class="game__name_20809">{name}</div>
				<div class="game__provider_c4d4f">{provider}</div>
			</div>
		</div>
	</div>
</div>
