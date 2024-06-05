<script>
	import T1Img from '$lib/images/team_logos/t1.png';
	import T2Img from '$lib/images/team_logos/t2.png';
	import ArsenalImg from '$lib/images/team_logos/arsenal.png';
	import BarcelonaImg from '$lib/images/team_logos/barcelona.png';
	import BayernImg from '$lib/images/team_logos/bayern.png';
	import CityImg from '$lib/images/team_logos/city.png';
	import DortmundImg from '$lib/images/team_logos/dortmund.png';
	import GsImg from '$lib/images/team_logos/gs.png';
	import RealImg from '$lib/images/team_logos/real.png';
	import FenerImg from '$lib/images/team_logos/fener.png';
</script>

<section class="Home_content four">
	<div class="container">
		<div class="Home_content-head">
			<h6 class="header">
				Place Bets on Popular <span>Matches !</span>
			</h6>
			<p>
				You can instantly place bets on the most popular matches of recent times and start winning
				without wasting time.
			</p>
		</div>
		<div class="Home_content-in">
			<div class="swiper-container swiper-container-horizontal">
				<div
					class="swiper-wrapper"
					style="transform: translate3d(-315px, 0px, 0px); transition-duration: 0ms;"
				>
					<div class="swiper-slide swiper-slide-prev" style="width: 295px; margin-right: 20px;">
						<div class="Sport_list-item">
							<div class="Sport_list-item-info">
								<div class="Sport_list-item-flag">
									<span class="Sport_list-item-flag-item">
										<img src={T1Img} alt="" />
									</span>
									<span class="Sport_list-item-flag-item">
										<img src={T2Img} alt="" />
									</span>
								</div>
								<div class="Sport_list-item-info-in">
									<button class="favorite">
										<input id="ff1" type="checkbox" />
										<label for="ff1"><i class="Matchs-detail-teams-favorite-icon"></i></label>
									</button>
									<a href="/home" class="Sport_list-item-more">+241</a>
								</div>
							</div>
							<div class="Sport_list-item-teams">
								<p>
									<span>Leicester City</span>
									<span class="Sport_list-item-score">one</span>
								</p>
								<p>
									<span>Manchester United</span>
									<span class="Sport_list-item-score">2</span>
								</p>
							</div>
							<span class="Sport_list-item-date"
								><span style="vertical-align: inherit;"
									><span style="vertical-align: inherit;">Live · 2nd Half · 86'</span></span
								></span
							>
							<div class="Sport_list-item-rates">
								<button class="Sport_list-item-rate active">
									<span>one</span><span>1.22</span>
								</button>
								<button class="Sport_list-item-rate"><span>x</span><span>1.22</span> </button>
								<button class="Sport_list-item-rate"><span>2</span><span>1.22</span> </button>
							</div>
						</div>
					</div>
					<div class="swiper-slide swiper-slide-active" style="width: 295px; margin-right: 20px;">
						<div class="Sport_list-item">
							<div class="Sport_list-item-info">
								<div class="Sport_list-item-flag">
									<span class="Sport_list-item-flag-item">
										<img src={RealImg} alt="" />
									</span>
									<span class="Sport_list-item-flag-item">
										<img src={BarcelonaImg} alt="" />
									</span>
								</div>
								<div class="Sport_list-item-info-in">
									<button class="favorite">
										<input id="ff2" type="checkbox" />
										<label for="ff2"><i class="Matchs-detail-teams-favorite-icon"></i></label>
									</button>
									<a href="/home" class="Sport_list-item-more">+241</a>
								</div>
							</div>
							<div class="Sport_list-item-teams">
								<p>
									<span>real Madrid</span>
									<span class="Sport_list-item-score">one</span>
								</p>
								<p>
									<span>barcelona</span>
									<span class="Sport_list-item-score">2</span>
								</p>
							</div>
							<span class="Sport_list-item-date"
								><span style="vertical-align: inherit;"
									><span style="vertical-align: inherit;">Live · 2nd Half · 86'</span></span
								></span
							>
							<div class="Sport_list-item-rates">
								<button class="Sport_list-item-rate active">
									<span>one</span><span>1.22</span>
								</button>
								<button class="Sport_list-item-rate"><span>x</span><span>1.22</span> </button>
								<button class="Sport_list-item-rate"><span>2</span><span>1.22</span> </button>
							</div>
						</div>
					</div>
					<div class="swiper-slide swiper-slide-next" style="width: 295px; margin-right: 20px;">
						<div class="Sport_list-item">
							<div class="Sport_list-item-info">
								<div class="Sport_list-item-flag">
									<span class="Sport_list-item-flag-item">
										<img src={ArsenalImg} alt="" />
									</span>
									<span class="Sport_list-item-flag-item">
										<img src={CityImg} alt="" />
									</span>
								</div>
								<div class="Sport_list-item-info-in">
									<button class="favorite">
										<input id="ff3" type="checkbox" />
										<label for="ff3"><i class="Matchs-detail-teams-favorite-icon"></i></label>
									</button>
									<a href="/home" class="Sport_list-item-more">+241</a>
								</div>
							</div>
							<div class="Sport_list-item-teams">
								<p>
									<span>Arsenal</span>
									<span class="Sport_list-item-score">one</span>
								</p>
								<p>
									<span>Manchester City</span>
									<span class="Sport_list-item-score">2</span>
								</p>
							</div>
							<span class="Sport_list-item-date"
								><span style="vertical-align: inherit;"
									><span style="vertical-align: inherit;">Live · 2nd Half · 86'</span></span
								></span
							>
							<div class="Sport_list-item-rates">
								<button class="Sport_list-item-rate active">
									<span>one</span><span>1.22</span>
								</button>
								<button class="Sport_list-item-rate"><span>x</span><span>1.22</span> </button>
								<button class="Sport_list-item-rate"><span>2</span><span>1.22</span> </button>
							</div>
						</div>
					</div>
					<div class="swiper-slide" style="width: 295px; margin-right: 20px;">
						<div class="Sport_list-item">
							<div class="Sport_list-item-info">
								<div class="Sport_list-item-flag">
									<span class="Sport_list-item-flag-item">
										<img src={BayernImg} alt="" />
									</span>
									<span class="Sport_list-item-flag-item">
										<img src={DortmundImg} alt="" />
									</span>
								</div>
								<div class="Sport_list-item-info-in">
									<button class="favorite">
										<input id="ff5" type="checkbox" />
										<label for="ff5"><i class="Matchs-detail-teams-favorite-icon"></i></label>
									</button>
									<a href="/home" class="Sport_list-item-more">+241</a>
								</div>
							</div>
							<div class="Sport_list-item-teams">
								<p>
									<span>Bayern Munich</span>
									<span class="Sport_list-item-score">one</span>
								</p>
								<p>
									<span>Dortmund</span>
									<span class="Sport_list-item-score">2</span>
								</p>
							</div>
							<span class="Sport_list-item-date"
								><span style="vertical-align: inherit;"
									><span style="vertical-align: inherit;">Live · 2nd Half · 86'</span></span
								></span
							>
							<div class="Sport_list-item-rates">
								<button class="Sport_list-item-rate active">
									<span>one</span><span>1.22</span>
								</button>
								<button class="Sport_list-item-rate"><span>x</span><span>1.22</span> </button>
								<button class="Sport_list-item-rate"><span>2</span><span>1.22</span> </button>
							</div>
						</div>
					</div>
					<div class="swiper-slide" style="width: 295px; margin-right: 20px;">
						<div class="Sport_list-item">
							<div class="Sport_list-item-info">
								<div class="Sport_list-item-flag">
									<span class="Sport_list-item-flag-item">
										<img src={GsImg} alt="" />
									</span>
									<span class="Sport_list-item-flag-item">
										<img src={FenerImg} alt="" />
									</span>
								</div>
								<div class="Sport_list-item-info-in">
									<button class="favorite">
										<input id="ff4" type="checkbox" />
										<label for="ff4"><i class="Matchs-detail-teams-favorite-icon"></i></label>
									</button>
									<a href="/home" class="Sport_list-item-more">+241</a>
								</div>
							</div>
							<div class="Sport_list-item-teams">
								<p>
									<span>Galatasaray</span>
									<span class="Sport_list-item-score">one</span>
								</p>
								<p>
									<span>Fenerbahce</span>
									<span class="Sport_list-item-score">2</span>
								</p>
							</div>
							<span class="Sport_list-item-date"
								><span style="vertical-align: inherit;"
									><span style="vertical-align: inherit;">Live · 2nd Half · 86'</span></span
								></span
							>
							<div class="Sport_list-item-rates">
								<button class="Sport_list-item-rate active">
									<span>one</span><span>1.22</span>
								</button>
								<button class="Sport_list-item-rate"><span>x</span><span>1.22</span> </button>
								<button class="Sport_list-item-rate"><span>2</span><span>1.22</span> </button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
