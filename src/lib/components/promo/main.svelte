<script>
	// @ts-nocheck
	import background from '$lib/images/promo/1680270831_tr_TR_bonus2.png';
	import bonus from '$lib/images/promo/1715241074bonus-663c805b73015.webp';
	import Banner from '$lib/components/_utils/Banner.svelte';
	let is_show_modal = false;

	const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return;
		isDropdown = false;
	};

	const handleModalClick = (event) => {
		if (event.target.classList.contains('modal-wrapper_b2d0e')) {
			is_show_modal = false;
		}
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="modal-wrapper_b2d0e"
	style={is_show_modal ? 'display: block' : 'display: none'}
	on:click={handleModalClick}
>
	<div class="modal-container_69103 modal_3cd70">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="close_3847b"
			on:click={() => (is_show_modal = false)}
			on:focusout={handleDropdownFocusLoss}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="12"
				viewBox="0 0 8 8"
				fill="none"
				color="#8B9EA7"
				><g clip-path="url(#clip0_34_19925)"
					><path
						d="M5.3158 4.03742C5.29518 4.01679 5.29518 3.98321 5.3158 3.96258L7.83428 1.44287C8.04963 1.22743 8.04963 0.876877 7.83428 0.66143L7.335 0.16191C7.23065 0.0574891 7.0919 0 6.94431 0C6.79672 0 6.65796 0.0574891 6.5536 0.161894L4.03512 2.68164C4.02238 2.69438 4.00784 2.69707 3.9979 2.69707C3.98797 2.69707 3.97343 2.6944 3.96069 2.68164L1.44219 0.161894C1.33783 0.0574891 1.19908 0 1.05148 0C0.903876 0 0.765143 0.0574891 0.660785 0.161894L0.161515 0.66143C-0.0538385 0.876877 -0.0538385 1.22743 0.161515 1.44287L2.68 3.96258C2.70061 3.98321 2.70061 4.01679 2.68 4.03742L0.161515 6.55713C-0.0538229 6.77258 -0.0538229 7.12312 0.161515 7.33857L0.660785 7.83809C0.765143 7.94249 0.903892 7.99998 1.05148 7.99998C1.19907 7.99998 1.33783 7.94249 1.44219 7.83809L3.96067 5.31838C3.97341 5.30562 3.98794 5.30295 3.99789 5.30295C4.00784 5.30295 4.02235 5.30562 4.0351 5.31839L6.55358 7.83811C6.65794 7.94251 6.79669 8 6.94429 8C7.0919 8 7.23063 7.94251 7.33499 7.83811L7.83426 7.33859C8.0496 7.12315 8.0496 6.7726 7.83426 6.55715L5.3158 4.03742Z"
						fill="currentColor"
					></path></g
				></svg
			>
		</div>
		<div class="header_88e17">
			<div class="modal-header-left_0f48f">
				<svg
					width="20"
					height="18"
					viewBox="0 0 20 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="diamond-icon_280a0"
					><g clip-path="url(#clip0_1_1008)"
						><path
							d="M15.1583 0H4.84199C4.62274 0 4.51485 0.279003 4.67258 0.438398L9.83058 5.64979C9.92511 5.74525 10.0749 5.74525 10.1694 5.64979L15.3278 0.438357C15.4855 0.279044 15.3776 0 15.1583 0Z"
							fill="#F0B905"
						></path><path
							d="M7.75597 5.68124L3.21824 1.09652C3.10742 0.984596 2.9264 1.00682 2.8434 1.14248L0.0388304 5.72715C-0.0649976 5.89688 0.0515648 6.11956 0.24426 6.11956H7.58652C7.80573 6.1196 7.91362 5.84055 7.75597 5.68124Z"
							fill="#F0B905"
						></path><path
							d="M19.9603 5.72734L17.1557 1.14262C17.0727 1.00692 16.8917 0.984738 16.7809 1.09663L12.2429 5.68134C12.0852 5.84065 12.193 6.11974 12.4123 6.11974H19.7548C19.9476 6.1197 20.0641 5.89707 19.9603 5.72734Z"
							fill="#F0B905"
						></path><path
							d="M9.02463 7.64966H0.429873C0.217921 7.64966 0.106866 7.91298 0.249835 8.07662L8.84463 17.9161C8.99475 18.0879 9.26853 17.9768 9.26853 17.7441V7.90464C9.26846 7.76383 9.15932 7.64966 9.02463 7.64966Z"
							fill="#F0B905"
						></path><path
							d="M19.5694 7.64966H10.9743C10.8396 7.64966 10.7305 7.76379 10.7305 7.90464V17.7445C10.7305 17.9773 11.0042 18.0883 11.1544 17.9165L19.7495 8.07662C19.8924 7.91293 19.7814 7.64966 19.5694 7.64966Z"
							fill="#F0B905"
						></path></g
					><defs
						><clipPath id="clip0_1_1008"><rect width="20" height="18" fill="white"></rect></clipPath
						></defs
					></svg
				>
				<h1 class="modal-header-title_1cc09">%400 BONUS! - 1200₺ Nakit</h1>
			</div>
		</div>
		<div class="modal-main-wrapper_f4686">
			<div class="modal-image-wrap_5accf">
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<img
					src="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715240865bonus-663c7f0eea1a8.webp"
					alt="selected promo image"
					class="modal-image_2b51b"
				/>
			</div>
			<div class="content_7738f">
				<div class="content_d185a">
					<div>
						<p>
							<strong
								>Bonusu kullanan üyeler site genel şartlarımızı ve bonus şartlarını kabul etmiş
								sayılacaktır.</strong
							>
						</p>

						<ol>
							<li>Minimum maksimum <u>300</u>₺ yatırıma <u>1200</u>₺ nakit bonus!</li>
							<li>Yatırım esnasında bonus talep et butonundan talep edebilirsiniz.&nbsp;</li>
							<li>
								Promosyonun çevrim şartı bulunmamaktadır&nbsp;ve üyeler dilediği alanda
								oyunlara&nbsp;katılım sağlayabilirler.&nbsp;
							</li>
							<li>
								Bonus ile 30.000₺ bakiyeye ulaştıktan sonra 10.000₺ olarak çekim talebi
								oluşturulabilir.
							</li>
							<li>
								Bu bonustan gün içerisinde yalnızca <u><strong>1 ( bir )</strong></u> kere yararlanılabilir.
							</li>
							<li>Bonus tüm yatırım yöntemlerinde aktiftir.</li>
							<li>
								Spor alanında katılım sağlayan üyeler her karşılaşmanın minimum 1.60 orandan olduğu
								3'lü kombine bahsi yapması gerekmektedir. Kural dışı katılımlarda bakiye
								düzenlenecektir.
							</li>
							<li>Canlı Casino alanında maksimum 17&nbsp;sayıya kadar bahis alınabilir.</li>
							<li>
								İlgili promosyondan yararlanan kullanıcılar, bonusun alındığı yatırımları için
								"Kayıp Bonusu, Haftalık Kayıp&nbsp;Bonusu ve Aylık Kayıp Bonusundan"
								yararlanamayacaklardır.&nbsp;
							</li>
						</ol>

						<p style="text-align: center;">
							<strong
								>Betine.com Bu Promosyonu Geliştirme, Değiştirme veya İptal Etme&nbsp;Hakkına
								Sahiptir.</strong
							>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="buttons_c7e32">
			<button
				type="submit"
				class="modal-button_62eaa stretch_7c1bb button_d134c gray_b56a8 with-hover_2e375"
			>
				Kapat</button
			><button
				type="submit"
				class="modal-button_62eaa stretch_7c1bb button_d134c orange_1257d with-hover_2e375"
			>
				Hemen yatırım yap</button
			>
		</div>
	</div>
</div>

<div class="main-content-wrapper_d5326 home-desktop">
	<Banner></Banner>
	<div>
		<div class="main-slider_0d383">
			<div class="slick-wrapper_ba420">
				<div class="slick-slider slick-initialized">
					<div class="slick-list">
						<div
							class="slick-track"
							style="width: 1911px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition: -webkit-transform 500ms ease 0s;"
						>
							<div
								data-index="0"
								class="slick-slide slick-active slick-current"
								tabindex="-1"
								aria-hidden="false"
								style="outline: none; width: 1911px;"
							>
								<div>
									<!-- <a class="swiper-slide" href="/">
										<img
											src={background}
											alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/sliders/desk_promo/1680270831_tr_TR_bonus2.png"
										/>
									</a> -->
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="page-wrapper_5e55b">
		<div class="container_ac2c7 large_6e58f">
			<div class="page-top-wrap_9c392">
				<ul class="menu_21ac4">
					<li>
						<button data-click="false" class="button-promo_9e126 selected_c1c40"
							>Tüm Bonuslar</button
						>
					</li>
					<li>
						<button data-click="false" class="button-promo_9e126 tab_c1069"
							>İlk Yatırım Bonusları</button
						>
					</li>
					<li>
						<button data-click="false" class="button-promo_9e126 tab_c1069"
							>Yatırım Bonusları</button
						>
					</li>
					<li>
						<button data-click="false" class="button-promo_9e126 tab_c1069">Slot Bonusları</button>
					</li>
					<li>
						<button data-click="false" class="button-promo_9e126 tab_c1069">Özel Bonuslar</button>
					</li>
					<li>
						<button data-click="false" class="button-promo_9e126 tab_c1069"
							>Freespin Bonusları</button
						>
					</li>
					<li>
						<button data-click="false" class="button-promo_9e126 tab_c1069">Kayıp Bonuslar</button>
					</li>
				</ul>
				<h1 class="page-title_3a088">Tüm bonuslar</h1>
			</div>
			<ul class="list_e636c">
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715240865bonus-663c7f0eea1a8.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715241376bonus-663c8180ad7a2.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/promotions/desk_promo/1716923666bonus-66562ce4d1bf0.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715241074bonus-663c805b73015.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715751402bonus-664449ca62027.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715751515bonus-66444a4d39672.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources/promotions/desk_promo/1716893793bonus-6655b8309a2a2.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources/promotions/desk_promo/1716647402bonus-6651f5b91dbcd.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources/promotions/desk_promo/1712659348bonus.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715239466bonus-663c7a112d40f.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources/promotions/desk_promo/1713453856bonus_2.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715491957bonus-6640544d0d9af.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715751472bonus-66444a1b5046f.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715492117bonus-664054ef8c2c3.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715241223bonus-663c80dcac6a8.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715241305bonus-663c81432437e.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/promotions/desk_promo/1716242035bonus-664bc651deb1d.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715751615bonus-66444aa69489b.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources/promotions/desk_promo/1716242277bonus-664bc73b2d10b.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/promotions/desk_promo/1717006783bonus-6657713a06fe9.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources/promotions/desk_promo/1706884994dogum-gunu-65bcff6058561.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
				<li class="item_bd473">
					<button class="link_b5b49" on:click={() => (is_show_modal = true)}>
						<img
							src={bonus}
							alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715751566bonus-66444a80a43e7.webp"
							class="image_b8b8f"
						/>
						<div class="promo-func_28a6e"></div>
					</button>
				</li>
			</ul>
		</div>
	</div>
</div>

<div class="main-content-wrapper_a4af2 home-mobile">
	<div class="pt0 promo-main_c02f8" style="padding-top: 0px;">
		<ul class="menu_1f9f0">
			<li>
				<button class="button-promo_c5f52">
					<div data-click="false" class="selected_8e040">Tüm Bonuslar</div>
				</button>
			</li>
			<li>
				<button class="button-promo_c5f52">
					<div data-click="false" class="tab_0852a">İlk Yatırım Bonusları</div>
				</button>
			</li>
			<li>
				<button class="button-promo_c5f52">
					<div data-click="false" class="tab_0852a">Yatırım Bonusları</div>
				</button>
			</li>
			<li>
				<button class="button-promo_c5f52">
					<div data-click="false" class="tab_0852a">Slot Bonusları</div>
				</button>
			</li>
			<li>
				<button class="button-promo_c5f52">
					<div data-click="false" class="tab_0852a">Özel Bonuslar</div>
				</button>
			</li>
			<li>
				<button class="button-promo_c5f52">
					<div data-click="false" class="tab_0852a">Freespin Bonusları</div>
				</button>
			</li>
			<li>
				<button class="button-promo_c5f52">
					<div data-click="false" class="tab_0852a">Kayıp Bonuslar</div>
				</button>
			</li>
		</ul>
		<ul class="list_4bd5e">
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715240865bonus-663c7f0eea1a8.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715241376bonus-663c8180ad7a2.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/promotions/desk_promo/1716923666bonus-66562ce4d1bf0.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715241074bonus-663c805b73015.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715751402bonus-664449ca62027.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715751515bonus-66444a4d39672.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources/promotions/desk_promo/1716893793bonus-6655b8309a2a2.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources/promotions/desk_promo/1716647402bonus-6651f5b91dbcd.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources/promotions/desk_promo/1712659348bonus.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715239466bonus-663c7a112d40f.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources/promotions/desk_promo/1713453856bonus_2.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715491957bonus-6640544d0d9af.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715751472bonus-66444a1b5046f.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn4-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715492117bonus-664054ef8c2c3.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715241223bonus-663c80dcac6a8.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715241305bonus-663c81432437e.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/promotions/desk_promo/1716242035bonus-664bc651deb1d.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715751615bonus-66444aa69489b.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources/promotions/desk_promo/1716242277bonus-664bc73b2d10b.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn1-platform.cdn-in-flare.com/resources/promotions/desk_promo/1717006783bonus-6657713a06fe9.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn2-platform.cdn-in-flare.com/resources/promotions/desk_promo/1706884994dogum-gunu-65bcff6058561.webp"
						class="image_262e0"
					/>
				</div>
			</li>
			<li class="item_21272">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="link_75cd9" on:click={() => (is_show_modal = true)}>
					<img
						src={bonus}
						alt="https://b3ti-cdn3-platform.cdn-in-flare.com/resources/promotions/desk_promo/1715751566bonus-66444a80a43e7.webp"
						class="image_262e0"
					/>
				</div>
			</li>
		</ul>
	</div>
</div>
