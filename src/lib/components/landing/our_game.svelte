<script>
	import { IconMeteor, IconPokerChip, IconDice6 } from '@tabler/icons-svelte';

	import Img1 from '$lib/images/casino_images/1.png';
	import Img2 from '$lib/images/casino_images/2.png';
	import Img3 from '$lib/images/casino_images/3.png';
	import Img4 from '$lib/images/casino_images/4.png';
	import Img5 from '$lib/images/casino_images/5.png';
	import Img6 from '$lib/images/casino_images/6.png';
	import Img7 from '$lib/images/casino_images/7.png';
	import Img8 from '$lib/images/casino_images/8.png';
	import Img9 from '$lib/images/casino_images/9.png';
	import Img10 from '$lib/images/casino_images/10.png';
	import Img11 from '$lib/images/casino_images/11.png';
	import Img12 from '$lib/images/casino_images/12.png';
	import Img13 from '$lib/images/casino_images/13.png';
	import Img14 from '$lib/images/casino_images/14.png';
	import Img15 from '$lib/images/casino_images/15.png';
	import Img16 from '$lib/images/casino_images/16.png';
	import Img17 from '$lib/images/casino_images/17.png';
	import Img18 from '$lib/images/casino_images/18.png';
</script>

<section class="Home_content five">
	<div class="container" style="overflow: hidden;">
		<div class="Home_content-head">
			<h6 class="header">
				Discover Our Great <span>Games !</span>
			</h6>
			<p>
				Discover the most popular content of live casino, slots and other games from premium
				providers at Betine.com!
			</p>
		</div>

		<div class="Home_content-tab">
			<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
				<li class="nav-item" role="presentation">
					<button
						class="nav-link active"
						id="casino-tab"
						data-toggle="pill"
						data-target="#tab-casino"
						type="button"
						role="tab"
						aria-controls="pills-home"
						aria-selected="true"
						style="display: flex; align-items: center;"
					>
						<IconPokerChip style="margin-right: 8px;" size={16} color={'#607580'} /> Live Casino
					</button>
				</li>
				<li class="nav-item" role="presentation">
					<button
						class="nav-link"
						id="slot-tab"
						data-toggle="pill"
						data-target="#tab-slot"
						type="button"
						role="tab"
						aria-controls="pills-profile"
						aria-selected="false"
						style="display: flex; align-items: center;"
					>
						<IconMeteor style="margin-right: 8px;" size={16} color={'#607580'} /> Slot Games
					</button>
				</li>
				<li class="nav-item" role="presentation">
					<button
						class="nav-link"
						id="other-tab"
						data-toggle="pill"
						data-target="#tab-other"
						type="button"
						role="tab"
						aria-controls="pills-contact"
						aria-selected="false"
						style="display: flex; align-items: center;"
					>
						<IconDice6 style="margin-right: 8px;" size={16} color={'#607580'} /> Other Games
					</button>
				</li>
			</ul>
			<div class="tab-content mt-5" id="pills-tabContent">
				<div
					class="tab-pane fade show active"
					id="tab-casino"
					role="tabpanel"
					aria-labelledby="casino-tab"
				>
					<div class="Home_content-in">
						<div class="swiper-container casino-slider swiper-container-horizontal">
							<div
								class="swiper-wrapper"
								style="transition-duration: 0ms; transform: translate3d(-1680px, 0px, 0px);"
							>
								<div
									class="swiper-slide swiper-slide-duplicate"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="0"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img2} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Casino Holdem</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc1" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc1"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="1"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img2} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Casino Holdem</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc2" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc2"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="2"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img3} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>craps</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc3" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc3"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="3"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img4} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Crazy Coin Flip</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc4" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc4"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide swiper-slide-duplicate"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="4"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img5} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Dead or Alive Saloon</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc5" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc5"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide swiper-slide-duplicate"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="5"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img6} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Double Ball Roulette</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc6" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc6"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="0"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img1} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Casino Holdem</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc1" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc1"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide swiper-slide-prev"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="1"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img2} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Casino Holdem</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc2" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc2"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide swiper-slide-active"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="2"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img3} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>craps</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc3" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc3"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide swiper-slide-next"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="3"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img4} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Crazy Coin Flip</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc4" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc4"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="4"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img5} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Dead or Alive Saloon</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc5" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc5"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="5"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img6} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Double Ball Roulette</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc6" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc6"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide swiper-slide-duplicate"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="0"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img1} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Casino Holdem</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc1" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc1"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="1"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img2} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Casino Holdem</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc2" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc2"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="2"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img3} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>craps</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc3" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc3"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="3"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img4} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Crazy Coin Flip</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc4" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc4"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide swiper-slide-duplicate"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="4"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img5} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Dead or Alive Saloon</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc5" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc5"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									class="swiper-slide swiper-slide-duplicate"
									style="width: 190px; margin-right: 20px;"
									data-swiper-slide-index="5"
								>
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img6} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Double Ball Roulette</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc6" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc6"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<a href="/home" class="Home_content-more"
							><span style="vertical-align: inherit;"
								><span style="vertical-align: inherit;">All Live Casino Games</span></span
							></a
						>
					</div>
				</div>
				<div class="tab-pane fade" id="tab-slot" role="tabpanel" aria-labelledby="slot-tab">
					<div class="Home_content-in">
						<div class="swiper-container slot-slider swiper-container-horizontal">
							<div class="swiper-wrapper" style="transition-duration: 1000ms;">
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img7} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>dragon tiger</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc1" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc1"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img8} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>dream catcher</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc2" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc2"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img9} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Extra Chilli Epic Spins</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc3" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc3"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img10} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Football Studio</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc4" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc4"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img11} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Gold Bar Roulette</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc5" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc5"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img12} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Gonzo's Treasure Hunt</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc6" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc6"></label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide" data-swiper-slide-index="0">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img7} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>dragon tiger</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc1" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc1"></label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide" data-swiper-slide-index="1">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img8} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>dream catcher</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc2" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc2"></label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide" data-swiper-slide-index="2">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img9} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Extra Chilli Epic Spins</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc3" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc3"></label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide" data-swiper-slide-index="3">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img10} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Football Studio</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc4" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc4"></label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide" data-swiper-slide-index="4">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img11} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Gold Bar Roulette</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc5" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc5"></label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide" data-swiper-slide-index="5">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img12} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Gonzo's Treasure Hunt</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc6" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc6"></label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img7} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>dragon tiger</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc1" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc1"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img8} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>dream catcher</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc2" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc2"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img9} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Extra Chilli Epic Spins</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc3" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc3"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img10} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Football Studio</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc4" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc4"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img11} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Gold Bar Roulette</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc5" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc5"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img12} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Gonzo's Treasure Hunt</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc6" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc6"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<a href="/home" class="Home_content-more"
							><span style="vertical-align: inherit;"
								><span style="vertical-align: inherit;">All Slot Games</span></span
							></a
						>
					</div>
				</div>
				<div class="tab-pane fade" id="tab-other" role="tabpanel" aria-labelledby="other-tab">
					<div class="Home_content-in">
						<div class="swiper-container other-slider swiper-container-horizontal">
							<div class="swiper-wrapper" style="transition-duration: 1000ms;">
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img13} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Instant Roulette</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc1" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc1"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img14} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Lightning Baccarat</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc2" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc2"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img15} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Lightning Dice</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc3" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc3"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img16} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Lightning Roulette</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc4" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc4"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img17} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>megaball</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc5" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc5"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img18} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Monopoly Big Baller</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc6" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc6"></label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide" data-swiper-slide-index="0">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img13} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Instant Roulette</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc1" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc1"></label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide" data-swiper-slide-index="1">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img14} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Lightning Baccarat</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc2" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc2"></label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide" data-swiper-slide-index="2">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img15} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Lightning Dice</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc3" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc3"></label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide" data-swiper-slide-index="3">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img16} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Lightning Roulette</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc4" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc4"></label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide" data-swiper-slide-index="4">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img17} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>megaball</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc5" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc5"></label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide" data-swiper-slide-index="5">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img18} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Monopoly Big Baller</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc6" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc6"></label>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img13} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Instant Roulette</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc1" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc1"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img14} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Lightning Baccarat</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc2" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc2"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="2">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img15} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Lightning Dice</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc3" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc3"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img16} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Lightning Roulette</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc4" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc4"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img17} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>megaball</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc5" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc5"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="5">
									<div class="Games-item">
										<div class="Games-item-image">
											<img src={Img18} class="w-100" alt="" />
											<div class="Games-item-flu">
												<div class="Games-item-flu-in">
													<p>Monopoly Big Baller</p>
													<span>evolution</span>
													<div class="Games-item-flu-links">
														<a href="/home" class=" button button-grey button-small">demo</a>
														<a href="/home" class=" button button-yellow button-small">Play</a>
													</div>
												</div>
												<div class="Games-item-checkbox">
													<input id="cc6" type="checkbox" />
													<label class="Games-item-checkbox-label" for="cc6"></label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<a href="/home" class="Home_content-more"
								><span style="vertical-align: inherit;"
									><span style="vertical-align: inherit;">All Games</span></span
								></a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
