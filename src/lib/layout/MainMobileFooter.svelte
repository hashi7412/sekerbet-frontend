<script>
	import { IconChevronRight, IconChevronLeft } from '@tabler/icons-svelte';

	import Logo_Dark_Mobi from '$lib/images/mobile/logo-dark-mobi.png';
	import Warning18 from '$lib/images/mobile/warning18.png';

	let accordian_1 = false;
	let accordian_2 = false;
	let accordian_3 = false;
</script>

<div class="footer_849fb with-bottom-default-menu_f7fa1">
	<div class="Banks">
		<div class="container">
			<div class="Banks-in">
				<div class="swiper-button-prev"><IconChevronLeft size={16} color={'#ffffff'} /></div>
				<div class="swiper-container swiper-container-horizontal">
					<div
						class="swiper-wrapper"
						style="transition-duration: 0ms; transform: translate3d(-99px, 0px, 0px);"
					>
						<div
							class="plugin-wrapper_e9019 swiper-slide swiper-slide-active"
							style="margin-right: 20px;"
						>
							<svg
								width="20"
								height="16"
								viewBox="0 0 20 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M8.82812 6.80962C9.15173 6.80962 9.41406 6.54312 9.41406 6.21438C9.41406 5.88564 9.15173 5.61914 8.82812 5.61914C8.50452 5.61914 8.24219 5.88564 8.24219 6.21438C8.24219 6.54312 8.50452 6.80962 8.82812 6.80962Z"
									fill="#F0B905"
								></path>
								<path
									d="M9.11879 10.3025C9.13824 10.2915 11.0563 9.19051 12.9297 9.19051C14.7945 9.19051 16.7607 10.2915 16.7802 10.3031L17.6562 10.8094V2.29761L17.361 2.12615C17.2717 2.0744 15.1109 0.857178 12.9297 0.857178C10.7484 0.857178 8.62672 2.0744 8.53746 2.12615C8.51801 2.13718 6.59996 3.23813 4.72656 3.23813C2.86176 3.23813 0.895508 2.13718 0.876055 2.12555L0 1.61924V10.131L0.295273 10.3025C0.384531 10.3542 2.54531 11.5715 4.72656 11.5715C6.90781 11.5715 9.02953 10.3542 9.11879 10.3025ZM14.8346 4.69599L14.5405 5.84809C13.756 5.64174 13.0625 5.57896 12.4004 5.64638L12.2871 4.4617C13.0865 4.38269 13.9179 4.4542 14.8346 4.69599ZM8.82812 4.42861C9.79742 4.42861 10.5859 5.22964 10.5859 6.21432C10.5859 7.199 9.79742 8.00004 8.82812 8.00004C7.85883 8.00004 7.07031 7.199 7.07031 6.21432C7.07031 5.22964 7.85883 4.42861 8.82812 4.42861ZM3.11582 6.58055C3.89973 6.78635 4.59152 6.84738 5.25586 6.78226L5.36914 7.96694C5.15629 7.98781 4.94113 8.00004 4.72656 8.00004C4.13492 8.00004 3.49402 7.90992 2.82168 7.73265L3.11582 6.58055Z"
									fill="#F0B905"
								></path>
								<path
									d="M18.8281 5.26392V12.8561L16.2005 11.3378C15.7348 11.0721 14.204 10.381 12.9297 10.381C11.3927 10.381 9.70988 11.3308 9.69328 11.3401C9.44781 11.4825 7.16988 12.7619 4.72656 12.7619C3.9 12.7619 3.09965 12.6106 2.38281 12.4111V13.7024L2.67809 13.8739C2.76734 13.9257 4.88906 15.1429 7.07031 15.1429C9.25156 15.1429 11.3733 13.9257 11.4625 13.8739C11.482 13.8629 13.4 12.7619 15.2734 12.7619C17.1382 12.7619 19.1045 13.8629 19.1239 13.8745L20 14.3808V5.86903C19.7255 5.71098 19.4606 5.54213 18.8281 5.26392Z"
									fill="#7BE0AF"
								></path>
							</svg><span class="plugin-name_8421b">Havale / Eft</span>
						</div>
						<div
							class="plugin-wrapper_e9019 swiper-slide swiper-slide-next"
							style="margin-right: 20px;"
						>
							<svg
								width="20"
								height="16"
								viewBox="0 0 20 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M18.8 0.857178H1.2C0.538398 0.857178 0 1.42272 0 2.11768V4.21852H20V2.11768C20 1.42272 19.4616 0.857178 18.8 0.857178Z"
									fill="#FF9432"
								></path>
								<path
									d="M0 13.8824C0 14.5773 0.538398 15.1429 1.2 15.1429H18.8C19.4616 15.1429 20 14.5773 20 13.8824V6.7395H0V13.8824ZM3.6 9.26051H10.8C11.0208 9.26051 11.2 9.44877 11.2 9.68068C11.2 9.91259 11.0208 10.1008 10.8 10.1008H3.6C3.37922 10.1008 3.2 9.91259 3.2 9.68068C3.2 9.44872 3.37922 9.26051 3.6 9.26051ZM3.6 10.9412H7.6C7.82078 10.9412 8 11.1294 8 11.3614C8 11.5933 7.82078 11.7815 7.6 11.7815H3.6C3.37922 11.7815 3.2 11.5933 3.2 11.3614C3.2 11.1294 3.37922 10.9412 3.6 10.9412Z"
									fill="#FF9432"
								></path>
							</svg><span class="plugin-name_8421b">Credit Card</span>
						</div>
						<div class="plugin-wrapper_e9019 swiper-slide" style="margin-right: 20px;">
							<svg
								width="15"
								height="20"
								viewBox="0 0 15 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M4.25845 18.1467C4.25845 18.61 4.10155 19.0734 3.70931 19.4595C3.39552 19.8456 2.92484 20 2.37571 20H0.571411V6.56371C0.571411 4.01544 1.27744 2.3166 2.76794 1.38996C4.18 0.46332 5.90585 0 7.55324 0C8.49462 0 9.43599 0.15444 10.2989 0.540541C11.1618 0.849421 11.8679 1.31274 12.4954 2.00772C13.5937 3.39768 14.1428 5.25097 14.1428 7.41313C14.1428 9.65251 13.5937 11.5058 12.4954 12.8958C11.3972 14.2857 10.0636 14.9807 8.33772 14.9807C7.55324 14.9807 6.69032 14.8263 5.98429 14.5174C5.27827 14.1313 4.65068 13.5907 4.25845 12.8185V18.1467ZM10.3774 7.56757C10.3774 6.17761 10.142 5.09653 9.59288 4.32432C9.04375 3.55212 8.25927 3.16602 7.23945 3.16602C6.29808 3.16602 5.51361 3.55212 4.96447 4.32432C4.49379 5.0193 4.18 6.10039 4.18 7.56757C4.18 8.95753 4.41534 9.96139 4.96447 10.6564C5.51361 11.4286 6.29808 11.8147 7.3179 11.8147C8.18083 11.8147 9.04375 11.4286 9.51443 10.6564C10.142 9.88417 10.3774 8.88031 10.3774 7.56757Z"
									fill="url(#paint0_linear_1_627)"
								></path>
								<defs>
									<lineargradient
										id="paint0_linear_1_627"
										x1="15.8957"
										y1="32.6795"
										x2="54.3561"
										y2="-13.8845"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#E14A55"></stop>
										<stop offset="1" stop-color="#8E278F"></stop>
									</lineargradient>
								</defs>
							</svg><span class="plugin-name_8421b">Papara</span>
						</div>
						<div class="plugin-wrapper_e9019 swiper-slide" style="margin-right: 20px;">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7.86005 10.648C7.88967 10.1592 7.86375 9.67419 7.87116 9.18545C8.9857 9.18545 10.1002 9.18545 11.2148 9.18545C11.2444 9.23359 11.2703 9.28913 11.3036 9.33356C12.0109 10.2851 12.9514 10.7405 14.1437 10.6591C14.2214 10.6924 14.2918 10.6517 14.3659 10.6406C15.8359 10.4221 17.0282 9.1114 17.0208 7.54892C17.0504 7.32677 17.0059 7.10832 16.9652 6.89357C16.7023 5.56435 15.5878 4.57206 14.1696 4.40915C12.907 4.26475 11.5851 5.02007 11.0481 6.19749C10.0003 6.19749 8.95607 6.19749 7.90818 6.19749C8.04148 5.66802 8.22662 5.16077 8.47471 4.67203C8.94496 3.79082 9.59295 3.06882 10.415 2.50233C10.9334 2.14318 11.4999 1.88771 12.096 1.68407C12.3219 1.63223 12.5478 1.5841 12.7737 1.52856C12.9699 1.48042 13.1736 1.49523 13.3661 1.42859H14.414C14.7213 1.50634 15.0398 1.52856 15.3471 1.60261C17.7354 2.1691 19.6201 4.24254 19.9423 6.66031C20.3681 9.85562 18.4019 12.7436 15.2804 13.4841C13.8512 13.8248 12.4737 13.6507 11.1518 13.0028C11.0852 12.9695 11.0185 12.9324 10.9482 12.8991C10.9445 12.8991 10.9371 12.8991 10.9074 12.8991C10.9074 13.1102 10.9074 13.3212 10.9074 13.5323C10.9074 14.1913 10.9074 14.8467 10.9148 15.5057C10.9148 15.5835 10.9074 15.6464 10.8445 15.7094C9.88547 16.6498 8.92645 17.5977 7.97113 18.5418C7.96002 18.5529 7.94521 18.5603 7.9304 18.5714C7.88597 18.5233 7.90818 18.4715 7.90818 18.4233C7.90078 16.9127 7.89707 15.3984 7.88967 13.8877C7.88967 13.7951 7.90448 13.7026 7.86745 13.6137C7.90818 13.5619 7.88967 13.5026 7.88967 13.4471C7.88226 12.5141 7.87115 11.5847 7.86375 10.6517L7.86005 10.648Z"
									fill="#B9C5CA"
								></path>
								<path
									d="M17.018 7.54898C17.0254 9.10776 15.8368 10.4222 14.3631 10.6406C14.2891 10.6517 14.2187 10.6925 14.141 10.6591C14.2039 10.6443 14.2632 10.6295 14.3261 10.611C14.7112 10.5073 14.9 10.2 14.8593 9.81124C14.826 9.46691 14.5186 9.18181 14.1632 9.18181C13.1782 9.17811 12.197 9.18181 11.2121 9.18181C10.0975 9.18181 8.98297 9.18181 7.86843 9.18181C6.61689 9.18181 5.36534 9.17811 4.1138 9.17811C3.50654 9.17811 2.90299 9.14849 2.33646 8.90041C1.01456 8.31911 0.244384 7.31572 0.0333251 5.89023C0.0296223 5.85691 0.0333251 5.81988 0 5.79397C0 5.57551 0 5.35336 0 5.13121C0.0222167 4.99421 0.0444335 4.85722 0.070353 4.72022C0.38509 3.00223 1.91064 1.71374 3.65466 1.70634C5.80968 1.69893 7.9647 1.69893 10.116 1.69893C10.7751 1.69893 11.4305 1.69153 12.0896 1.69153C11.4972 1.89517 10.9269 2.15065 10.4085 2.50979C9.58653 3.07629 8.93854 3.79829 8.46828 4.6795C6.89089 4.6795 5.31351 4.67209 3.73612 4.67209C3.38805 4.67209 3.11405 4.87573 3.01037 5.19415C2.84745 5.70881 3.21773 6.20865 3.76204 6.20865C5.14318 6.20865 6.52062 6.20495 7.90176 6.20125C8.94965 6.20125 9.99383 6.20125 11.0417 6.20125C12.1081 6.20495 13.1745 6.20125 14.2409 6.21976C15.0259 6.23087 15.7295 6.49745 16.37 6.95657C16.6144 7.13059 16.807 7.34904 17.018 7.55268V7.54898Z"
									fill="#3DABEB"
								></path>
								<path
									d="M7.85433 10.648C7.86544 11.581 7.87285 12.5104 7.88025 13.4434C7.88025 13.499 7.89877 13.5582 7.85804 13.61C6.86939 13.61 5.87704 13.61 4.8884 13.6137C3.53318 13.6137 2.17425 13.6211 0.819029 13.6248C0.63389 13.6248 0.44875 13.6248 0.26361 13.6248C0.245096 13.573 0.293233 13.5545 0.31545 13.5286C1.21523 12.6029 2.11871 11.6773 3.01849 10.7517C3.07033 10.6998 3.11476 10.6443 3.20733 10.6443C4.7551 10.6443 6.30657 10.6443 7.85433 10.6443V10.648Z"
									fill="#3DABEB"
								></path>
							</svg><span class="plugin-name_8421b">Sanalpays</span>
						</div>
						<div class="plugin-wrapper_e9019 swiper-slide" style="margin-right: 20px;">
							<svg
								width="16"
								height="20"
								viewBox="0 0 16 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3.81062 7.58228C3.80441 6.39994 4.19149 5.08813 4.95943 4.16784C5.69006 3.29278 6.82021 2.77492 7.95813 2.76712C9.09605 2.75932 10.2231 3.2569 11.005 4.08673C11.7652 4.89315 12.1942 6.0053 12.1756 7.11589C12.1554 8.22649 11.6875 9.32148 10.8993 10.1029C10.0583 10.9343 8.89085 11.3149 7.73583 11.421C7.14511 11.4771 4.50706 11.3539 3.81995 11.3508C3.81995 10.0936 3.81529 8.83793 3.81062 7.58228ZM6.42069 0.162221C4.91745 0.502262 3.52614 1.33832 2.53124 2.52379C1.67158 3.54703 1.11972 4.82296 0.936285 6.14881C0.844567 6.80081 0.855449 7.47777 0.860113 8.13134C0.866331 8.94868 0.86944 9.76603 0.870994 10.5834C0.874103 12.7905 0.866331 15.7978 0.867885 18.005C0.867885 18.6695 0.866331 19.334 0.866331 20C3.79819 19.7036 3.80751 17.9176 3.80751 17.9145C3.81218 16.9116 3.81684 15.1053 3.8184 14.0992C3.92877 14.1117 9.84378 14.7403 12.4041 12.6096C13.2218 11.9295 13.8996 11.2089 14.383 10.2465C14.8556 9.30744 15.123 8.26236 15.1416 7.21104C15.1743 5.47028 14.5323 3.72485 13.3804 2.42396C12.0295 0.898456 9.94172 0 7.89128 0C7.39539 0 6.90104 0.0530338 6.42069 0.162221Z"
									fill="url(#paint0_linear_1_641)"
								></path>
								<defs>
									<lineargradient
										id="paint0_linear_1_641"
										x1="16.9879"
										y1="32.6795"
										x2="55.0296"
										y2="-15.8015"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#4AC6E1"></stop>
										<stop offset="1" stop-color="#4865FF"></stop>
									</lineargradient>
								</defs>
							</svg><span class="plugin-name_8421b">Paytopay</span>
						</div>
						<div class="plugin-wrapper_e9019 swiper-slide" style="margin-right: 20px;">
							<svg
								width="20"
								height="14"
								viewBox="0 0 20 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 8.05964V5.51647H3.07692L0.699301 0.571411H3.77622L6.57343 6.92934L9.23077 0.571411H12.5874L6.57343 13.4286L4.1958 8.05964H0Z"
									fill="#55E099"
								></path>
								<path
									d="M12.028 4.95132L10.4895 8.05964L13.1469 13.4286L16.0839 8.05964H20V5.51647H17.0629L19.1608 0.571411H16.0839L13.1469 6.92934L12.028 4.95132Z"
									fill="#55E099"
								></path>
							</svg><span class="plugin-name_8421b">Vegapay</span>
						</div>
						<div class="plugin-wrapper_e9019 swiper-slide" style="margin-right: 20px;">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M3.95349 2.14282L0 17.8571H16.7442L20 2.14282H3.95349Z" fill="#DD4A5B"
								></path>
								<path
									d="M8.56426 11.3708L7.16182 12.5L6.55381 15H3.57141L6.00792 5H8.99032L7.97843 9.15833L13.1133 5H16.4286L10.9963 9.42917L14.2184 15H10.7167L8.55538 11.3708H8.56426Z"
									fill="white"
								></path>
							</svg><span class="plugin-name_8421b">Kolaypay</span>
						</div>
						<div class="plugin-wrapper_e9019 swiper-slide" style="margin-right: 20px;">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.8724 0.662967L10.9544 0L9.60452 0.414093L7.85936 0.927794L9.60452 1.98853L10.6255 2.61817L10.7075 1.97187C14.7744 2.3363 17.9686 5.78307 17.9686 9.95857C17.9686 12.4274 16.8164 14.7809 14.8736 16.2882C14.7416 16.3711 14.4451 16.5701 14.083 16.7855V18.3262C14.4947 18.1274 15.2849 17.6304 15.2849 17.6304L15.4989 17.4816C17.8698 15.7247 19.2857 12.9081 19.2857 9.95857C19.2857 5.12008 15.5813 1.11037 10.8724 0.662967ZM11.3504 17.8789H11.3172L10.099 17.3323V17.9953H9.98375C7.234 17.9953 4.79747 16.5868 3.3648 14.449C3.21735 14.2375 3.08526 14.0159 2.96951 13.786C2.72303 13.339 2.52541 12.8414 2.36059 12.3444C2.14654 11.599 2.0149 10.8037 2.0149 9.97523C2.0149 9.1468 2.14654 8.35121 2.37698 7.58896C2.52541 7.0919 2.73944 6.61101 2.9863 6.14753C3.1019 5.91567 3.24958 5.69998 3.38159 5.48454C4.23537 4.20682 5.44135 3.2002 6.8555 2.58483V1.19297C4.13894 2.18704 1.98172 4.4078 1.12591 7.20783C0.852006 8.10513 0.713287 9.03773 0.714238 9.97523C0.714564 10.9181 0.853257 11.8559 1.12591 12.7588C2.31135 16.5534 5.83413 19.3208 9.98375 19.3208H10.099V20L11.3337 19.4529L13.0624 18.6907L11.3504 17.8789Z"
									fill="#22B0D8"
								></path>
								<path
									d="M13.8248 12.4937C13.8251 12.4528 13.8173 12.4121 13.8017 12.3739C13.7861 12.3359 13.7632 12.3013 13.7341 12.2719C13.705 12.2427 13.6705 12.2195 13.6324 12.2035C13.5942 12.1876 13.5533 12.1793 13.512 12.179H10.038C10.038 12.179 13.1995 7.47312 13.4299 7.05891C13.578 6.79371 13.6604 6.66111 13.6604 6.46258V5.70008C13.6607 5.65891 13.6528 5.61822 13.6372 5.58023C13.6216 5.54199 13.5986 5.50743 13.5695 5.47802C13.5404 5.44886 13.5058 5.42557 13.4677 5.40964C13.4295 5.39371 13.3885 5.38538 13.3472 5.38538H6.92658C6.88525 5.38562 6.84439 5.39395 6.8063 5.40989C6.76825 5.42582 6.73369 5.4491 6.70469 5.47851C6.67567 5.50768 6.65272 5.54224 6.63718 5.58023C6.62165 5.61822 6.61379 5.65915 6.61409 5.70008V7.2741C6.61409 7.4567 6.76214 7.58906 6.92658 7.58906H10.0552C10.0552 7.58906 6.58091 12.7261 6.5149 12.842C6.38327 13.0074 6.31726 13.2065 6.31726 13.3886V14.0516C6.31726 14.2339 6.46569 14.3665 6.6305 14.3665H13.4959C13.5373 14.3663 13.5783 14.3579 13.6164 14.342C13.6546 14.3261 13.6892 14.3028 13.7183 14.2736C13.7474 14.2442 13.7704 14.2096 13.786 14.1717C13.8016 14.1334 13.8095 14.0927 13.8092 14.0516V12.4937H13.8252H13.8248Z"
									fill="#22B0D8"
								></path>
							</svg><span class="plugin-name_8421b">Zpay</span>
						</div>
						<div class="plugin-wrapper_e9019 swiper-slide" style="margin-right: 20px;">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M18.7016 0H1.29839C0.581307 0 0 0.581322 0 1.29842V1.30027C0 2.01737 0.581307 2.59869 1.29839 2.59869H18.7016C19.4187 2.59869 20 2.01737 20 1.30027V1.29842C20 0.581322 19.4187 0 18.7016 0Z"
									fill="#F9C283"
								></path>
								<path
									d="M18.7016 8.79822H1.29839C0.581307 8.79822 0 9.37954 0 10.0966V10.0985C0 10.8156 0.581307 11.3969 1.29839 11.3969H18.7016C19.4187 11.3969 20 10.8156 20 10.0985V10.0966C20 9.37954 19.4187 8.79822 18.7016 8.79822Z"
									fill="#EBACCD"
								></path>
								<path
									d="M18.7016 17.4014H1.29839C0.581307 17.4014 0 17.9827 0 18.6998V18.7016C0 19.4187 0.581307 20.0001 1.29839 20.0001H18.7016C19.4187 20.0001 20 19.4187 20 18.7016V18.6998C20 17.9827 19.4187 17.4014 18.7016 17.4014Z"
									fill="#B3BBE0"
								></path>
							</svg><span class="plugin-name_8421b">Mefete</span>
						</div>
						<div class="plugin-wrapper_e9019 swiper-slide" style="margin-right: 20px;">
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 5.82769L9.01271 2.14282V11.0279L5.58337 12.8021V17.6729L0 14.9763V5.82769Z"
									fill="#8773C0"
								></path>
								<path
									d="M20 14.1722L10.9873 17.8571V8.97202L14.4166 7.19783V2.32703L20 5.02361V14.1722Z"
									fill="#594A86"
								></path>
							</svg><span class="plugin-name_8421b">PeP</span>
						</div>
					</div>
				</div>
				<div class="swiper-button-next swiper-button-disabled">
					<IconChevronRight size={16} color={'#ffffff'} />
				</div>
			</div>
		</div>
	</div>
	<div class="main-footer-content_34f39">
		<div class="copyright-block_6a0fd">
			<div class="copyright-block-header_0fe55">
				<a href="/" aria-label="Main page" class="logo-link_953d2"
					><img src={Logo_Dark_Mobi} alt="betine site logo" /></a
				>
				<div class="switcher-container_a6be7">
					<div class="switcher_aab27">
						<div class="switcher-wrapper_1f4c5">
							<a
								href="/?__cf_chl_rt_tk=3GNMGRDuH.koG70jplVx52fZs_On5ErNLclufFvSTzg-1715955621-0.0.1.1-1471"
								rel="alternate"
								hreflang="en"
								class="selected-lang-link_ab81e"
								><span class="selected-lang-text_1c55f">EN</span><svg
									xmlns="http://www.w3.org/2000/svg"
									width="6"
									height="4"
									viewBox="0 0 6 4"
									fill="none"
									class="switcher-arrow_06097"
								>
									<path
										d="M2.29289 3.29289L0.707107 1.70711C0.0771422 1.07714 0.523309 0 1.41421 0H4.58579C5.47669 0 5.92286 1.07714 5.29289 1.70711L3.70711 3.29289C3.31658 3.68342 2.68342 3.68342 2.29289 3.29289Z"
										fill="currentColor"
									></path>
								</svg></a
							>
						</div>
					</div>
				</div>
			</div>
			<div class="copyright-domain_f9ba6">© Betine, 2023</div>
			<div class="copyright-text_145ad">
				Betine website is operated by Feel So Good B.V. under license number GLH-OCCHKTW0708012022
				issued to it and regulated by Gaming Services Provider N.V., authorized by the Government of
				Curaçao under license number 365JAZ.
			</div>
		</div>
		<!-- <div class="licence_de665">
			<iframe src="./betine.com_files/saved_resource.html" style="border: none;"></iframe>
		</div> -->
		<ul class="accordion_999b4">
			<li class="accordion-item_6de9a">
				<button
					class={!accordian_1
						? 'accordion-item-button_358bd'
						: 'accordion-item-button_358bd active_03bdb'}
					on:click={() => (accordian_1 = !accordian_1)}
				>
					<span class="button-text_a9fe7">Corporate</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						class="button-icon_5433b"
					>
						<g clip-path="url(#clip0_301_20250)">
							<path
								d="M1.37367 6L5 2.58628L8.62633 6L10 4.70686L5 4.37114e-07L-1.1305e-07 4.70686L1.37367 6Z"
								fill="currentColor"
							></path>
						</g>
					</svg>
				</button>
				<ul class="accordion-links-list_eb1b5" style={accordian_1 ? 'display: block;' : ''}>
					<li class="accordion-link_b7a1b">
						<a href="/info/help/vipclub">Vip Club</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/info/help/about_us">About Us</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/info/help/privacy_policy">Privacy Policy</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/info/help/responsiblebetting">Responsible Betting</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/info/help/terms_and_conditions">Terms And Conditions</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/info/help/cancellation_and_refund_conditions"
							>Cancellation And Refund Conditions</a
						>
					</li>
				</ul>
			</li>
			<li class="accordion-item_6de9a">
				<button
					class={!accordian_2
						? 'accordion-item-button_358bd'
						: 'accordion-item-button_358bd active_03bdb'}
					on:click={() => (accordian_2 = !accordian_2)}
				>
					<span class="button-text_a9fe7">Games</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						class="button-icon_5433b"
					>
						<g clip-path="url(#clip0_301_20250)">
							<path
								d="M1.37367 6L5 2.58628L8.62633 6L10 4.70686L5 4.37114e-07L-1.1305e-07 4.70686L1.37367 6Z"
								fill="currentColor"
							></path>
						</g>
					</svg>
				</button>
				<ul class="accordion-links-list_eb1b5" style={accordian_2 ? 'display: block;' : ''}>
					<li class="accordion-link_b7a1b">
						<a href="/live">In-Play</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/live_casino">Live Casino</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/poker">Poker</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/casino">3D Slots</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/zeppelin">Zeppelin</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/betgames_tv">Live Games</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/spribe">Spribe</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/tombala">Tombala</a>
					</li>
				</ul>
			</li>
			<li class="accordion-item_6de9a">
				<button
					class={!accordian_3
						? 'accordion-item-button_358bd'
						: 'accordion-item-button_358bd active_03bdb'}
					on:click={() => (accordian_3 = !accordian_3)}
				>
					<span class="button-text_a9fe7">Partnership</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						class="button-icon_5433b"
					>
						<g clip-path="url(#clip0_301_20250)">
							<path
								d="M1.37367 6L5 2.58628L8.62633 6L10 4.70686L5 4.37114e-07L-1.1305e-07 4.70686L1.37367 6Z"
								fill="currentColor"
							></path>
						</g>
					</svg>
				</button>
				<ul class="accordion-links-list_eb1b5" style={accordian_3 ? 'display: block;' : ''}>
					<li class="accordion-link_b7a1b">
						<a href="/info/help/contact">Contact</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/info/help/frequently">Frequently</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/promo">Promotions</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/info/help/deposit">How To Deposit</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/affiliates">Affiliate And Ads</a>
					</li>
					<li class="accordion-link_b7a1b">
						<a href="/info/help/withdraw">How to Withdraw</a>
					</li>
				</ul>
			</li>
		</ul>
		<div class="live-chat-block_706a4">
			<button class="live-chat-button_dfa96"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					class="live-chat-icon_9fb08"
				>
					<g clip-path="url(#clip0_357_62041)">
						<path
							d="M20.0008 13.5352C20.0008 11.0534 18.577 8.83841 16.4446 7.76099C16.3784 12.5196 12.5203 16.3776 7.76172 16.4438C8.83914 18.5763 11.0541 20.0001 13.5359 20.0001C14.6996 20.0001 15.8312 19.6902 16.8254 19.1013L19.9726 19.9718L19.1021 16.8247C19.6909 15.8304 20.0008 14.6989 20.0008 13.5352Z"
							fill="currentColor"
						></path>
						<path
							d="M15.2734 7.63672C15.2734 3.42575 11.8477 0 7.63672 0C3.42575 0 0 3.42575 0 7.63672C0 9.0091 0.365295 10.3453 1.05896 11.5184L0.0280762 15.2452L3.75504 14.2145C4.92813 14.9081 6.26434 15.2734 7.63672 15.2734C11.8477 15.2734 15.2734 11.8477 15.2734 7.63672ZM6.46484 5.85938H5.29297C5.29297 4.56696 6.3443 3.51563 7.63672 3.51563C8.92914 3.51563 9.98047 4.56696 9.98047 5.85938C9.98047 6.51535 9.70276 7.14584 9.21829 7.58896L8.22266 8.50021V9.41406H7.05078V7.98416L8.42712 6.7244C8.6731 6.49933 8.80859 6.19217 8.80859 5.85938C8.80859 5.21317 8.28293 4.6875 7.63672 4.6875C6.99051 4.6875 6.46484 5.21317 6.46484 5.85938ZM7.05078 10.5859H8.22266V11.7578H7.05078V10.5859Z"
							fill="currentColor"
						></path>
					</g>
				</svg><span class="live-chat-text_a4162">7/24 Live chat</span></button
			><img src={Warning18} alt="18+ icon" class="age18-image_4a642" />
		</div>
	</div>
</div>
