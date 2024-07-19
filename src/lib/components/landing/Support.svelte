<script>
	import { IconArrowRight, IconClipboard, IconUsers } from '@tabler/icons-svelte';

	import LogoImg from '$lib/images/logo-dark.svg';
</script>

<section class="H_info">
	<div class="container">
		<div class="H_info-in">
			<div class="H_info-left">
				<img src={LogoImg} alt="" />
				<h5>
					<span>Welcome</span> to Betine.com !
				</h5>
				<p class="H_info-left-toptext">
					Welcome to betine.com, our premium betting and casino system equipped with the most
					up-to-date and modern technologies!
				</p>
				<p class="H_info-left-text">
					Betine online betting and casino site started to serve in 2022. As a licensed site, it
					continues to provide service with 24/7 live support, telegram and whatsapp units to ensure
					that all its players can receive the best service.
				</p>
				<a href="/home" class="H_info-left-more" style="display: flex; align-items: center;">
					Learn More
					<IconArrowRight style="margin-left: 8px;" size={16} />
				</a>
			</div>
			<div class="H_info-right">
				<div class="H_info-item">
					<span class="H_info-item-icon"><IconClipboard size={28} color={'#39d087'} /></span>
					<div class="H_info-item-text">
						<h3>Our Mobile Applications</h3>
						<h5>Download Now!</h5>
						<p>
							We maximize your betting experience with our advanced and easy-to-use mobile
							applications.
						</p>
						<div class="H_info-item-links">
							<a href="/home" class="button button-green_light button-big ios-button">Download for iOS</a>
							<a href="/home" class="button button-green_light button-big">Download for Android</a>
						</div>
					</div>
				</div>
				<div class="H_info-item">
					<span class="H_info-item-icon"><IconUsers size={28} color={'#fbcf44'} /></span>
					<div class="H_info-item-text">
						<h3>Invite a Friend</h3>
						<h5>Win Together!</h5>
						<p>
							It is possible to win with your friend! Invite your friend now and earn income from
							your friend's investments and earnings.
						</p>
						<div class="H_info-item-links">
							<a href="/home" class="button button-yellow button-big">Friend Invitation Form</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
