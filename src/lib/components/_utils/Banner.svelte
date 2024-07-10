

<script>
	// @ts-nocheck

	import Carousel from 'svelte-carousel';

	function handleDragStart() {
		document.querySelector('.custom-carousel .swiper-slide').classList.add('dragging');
	}

	function handleDragEnd() {
		document.querySelector('.custom-carousel .swiper-slide').classList.remove('dragging');
	}
</script>

<div class="home-slider_8c42f main-slider_9a25c">
	<div class="slick-wrapper_061f7 custom-carousel">
		<Carousel
			arrows={false}
			on:touchstart={handleDragStart}
			on:touchend={handleDragEnd}
			on:mousedown={handleDragStart}
			on:mouseup={handleDragEnd}
			autoplay
			pauseOnFocus={false}
			autoplayProgressVisible={false}
			autoplayDuration={3000}
		>
			<div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="swiper-slide slick-wrapper_061f7-item" tabindex="-1">
					<img
						style="min-width: 100%; height: auto, min-height: 100%, width: auto; cursor: pointer; "
						oncontextmenu="return false;"
						src="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
					/>
				</a>
			</div>
			<div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="swiper-slide slick-wrapper_061f7-item" tabindex="-1">
					<img
						style="min-width: 100%; height: auto, min-height: 100%, width: auto;"
						src="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
					/>
				</a>
			</div>
			<div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="swiper-slide slick-wrapper_061f7-item" tabindex="-1">
					<img
						style="min-width: 100%; height: auto, min-height: 100%, width: auto;"
						src="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
					/>
				</a>
			</div>
			<div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="swiper-slide slick-wrapper_061f7-item" tabindex="-1">
					<img
						style="min-width: 100%; height: auto, min-height: 100%, width: auto;"
						src="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
					/>
				</a>
			</div>
			<div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="swiper-slide slick-wrapper_061f7-item" tabindex="-1">
					<img
						style="min-width: 100%; height: auto, min-height: 100%, width: auto;"
						src="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
					/>
				</a>
			</div>
			<div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="swiper-slide slick-wrapper_061f7-item" tabindex="-1">
					<img
						style="min-width: 100%; height: auto, min-height: 100%, width: auto;"
						src="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
					/>
				</a>
			</div>
			<div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="swiper-slide slick-wrapper_061f7-item" tabindex="-1">
					<img
						style="min-width: 100%; height: auto, min-height: 100%, width: auto;"
						src="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
					/>
				</a>
			</div>
			<div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="swiper-slide slick-wrapper_061f7-item" tabindex="-1">
					<img
						style="min-width: 100%; height: auto, min-height: 100%, width: auto;"
						src="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
					/>
				</a>
			</div>
			<div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="swiper-slide slick-wrapper_061f7-item" tabindex="-1">
					<img
						style="min-width: 100%; height: auto, min-height: 100%, width: auto;"
						src="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
					/>
				</a>
			</div>
			<div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="swiper-slide slick-wrapper_061f7-item" tabindex="-1">
					<img
						style="min-width: 100%; height: auto, min-height: 100%, width: auto;"
						src="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
					/>
				</a>
			</div>
			<div>
				<!-- svelte-ignore a11y-missing-attribute -->
				<a class="swiper-slide slick-wrapper_061f7-item" tabindex="-1">
					<img
						style="min-width: 100%; height: auto, min-height: 100%, width: auto;"
						src="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_main/1687349054_tr_TR_AnyConv.com__1681061394_tr_TR_JetHznda-slider.webp"
					/>
				</a>
			</div>
		</Carousel>
	</div>
</div>

<style>
	.custom-carousel {
		cursor: pointer;
	}

	.custom-carousel .swiper-slide {
		cursor: pointer;
		transition: cursor 0.3s ease;
	}

	.custom-carousel .swiper-slide.dragging {
		cursor: none;
	}
</style>