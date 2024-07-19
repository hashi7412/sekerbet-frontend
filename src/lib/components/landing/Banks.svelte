<script>
	import { IconChevronRight, IconChevronLeft } from '@tabler/icons-svelte';
</script>

<section class="Banks">
	<div class="container">
		<div class="Banks-in">
			<div class="swiper-button-prev"><IconChevronLeft size={16} color={'#ffffff'} /></div>
			<div class="swiper-container swiper-container-horizontal">
				<div
					class="swiper-wrapper"
					style="transition-duration: 0ms; transform: translate3d(-99px, 0px, 0px);"
				>
					<div class="swiper-slide swiper-slide-active" style="margin-right: 20px;">
						<div class="Banks-item">
							<span>Bank Transfer</span>
						</div>
					</div>

					<div class="swiper-slide swiper-slide-next" style="margin-right: 20px;">
						<div class="Banks-item">
							<span>Money Transfer / EFT</span>
						</div>
					</div>

					<div class="swiper-slide" style="margin-right: 20px;">
						<div class="Banks-item">
							<span>Mobile Bank</span>
						</div>
					</div>

					<div class="swiper-slide" style="margin-right: 20px;">
						<div class="Banks-item">
							<span>Qr Code</span>
						</div>
					</div>

					<div class="swiper-slide" style="margin-right: 20px;">
						<div class="Banks-item">
							<span>ecopayz</span>
						</div>
					</div>

					<div class="swiper-slide" style="margin-right: 20px;">
						<div class="Banks-item">
							<span>Token</span>
						</div>
					</div>

					<div class="swiper-slide" style="margin-right: 20px;">
						<div class="Banks-item">
							<span>Astropay</span>
						</div>
					</div>

					<div class="swiper-slide" style="margin-right: 20px;">
						<div class="Banks-item">
							<span>Paykasa</span>
						</div>
					</div>

					<div class="swiper-slide" style="margin-right: 20px;">
						<div class="Banks-item">
							<span>Credit card</span>
						</div>
					</div>

					<div class="swiper-slide" style="margin-right: 20px;">
						<div class="Banks-item">
							<span>Bitcoin</span>
						</div>
					</div>

					<div class="swiper-slide" style="margin-right: 20px;">
						<div class="Banks-item">
							<span>Super Fast Transfer</span>
						</div>
					</div>
				</div>
			</div>
			<div class="swiper-button-next swiper-button-disabled">
				<IconChevronRight size={16} color={'#ffffff'} />
			</div>
		</div>
	</div>
</section>
