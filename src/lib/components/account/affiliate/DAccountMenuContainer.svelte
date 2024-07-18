<script>
	import FixfinAtmQr from '$lib/images/account/fixfin_atm_qr_234.png';
	import FixfinKolaypayCreditCard_Logo from '$lib/images/account/fixfin_kolaypay_credit_card_209.png';
	import FixfinBankTransfer from '$lib/images/account/fixfin_bank_transfer_226.png';
	import FixfinCryptocurrency from '$lib/images/account/fixfin_cryptocurrency_195.png';
	import FixfinFinpayHavale from '$lib/images/account/fixfin_finpay_havale_231.png';
	import FixfinKolaypayHavale from '$lib/images/account/fixfin_kolaypay_havale_229.png';
	import FixfinKolaypayPapara_Logo from '$lib/images/account/fixfin_kolaypay_papara_206.png';
	import FixfinMultipayBankTransfer from '$lib/images/account/fixfin_multipay_bank_transfer_224.webp';
	import FixfinMultipayHayhay from '$lib/images/account/fixfin_multipay_hayhay_222.svg';
	import FixfinMultipayPapara from '$lib/images/account/fixfin_multipay_papara_221.svg';
	import FixfinMultipayPep from '$lib/images/account/fixfin_multipay_pep_220.png';
	import FixfinMypayz from '$lib/images/account/fixfin_mypayz_235.svg';
	import FixfinMypayz_Logo from '$lib/images/account/fixfin_mypayz_236.svg';
	import FixfinPaparasn from '$lib/images/account/fixfin_paparasn_196.png';
	import FixfinPayfix from '$lib/images/account/fixfin_payfix_194.png';
	import FixfinPopypara from '$lib/images/account/fixfin_popypara_199.png';
	import FixfinSeripay from '$lib/images/account/fixfin_seripay_238.png';
	import FixfinSistemNakitBankTransfer from '$lib/images/account/fixfin_sistem_nakit_bank_transfer_228.png';
	import FixfinSistemNakitCreditCard_Logo from '$lib/images/account/fixfin_sistem_nakit_credit_card_205.png';
	import FixfinUltrapayAutoPapara from '$lib/images/account/fixfin_ultrapay_auto_papara_217.png';
	import FixfinUltrapayBankTransfer from '$lib/images/account/fixfin_ultrapay_bank_transfer_215.png';
	import FixfinUltrapayPapara from '$lib/images/account/fixfin_ultrapay_papara_216.png';
	import FixfinVegapayHavale_Logo from '$lib/images/account/fixfin_vegapay_havale_211.png';
	import FixfinVevoHavale from '$lib/images/account/fixfin_vevo_havale_230.png';

	let crypto_accordian = false;
	let wire_accordian = false;
	let payfix_accordian = false;
	let papara_accordian = false;
	let ewallet_accordian = false;
	let qr_accordian = false;
	let credit_accordian = false;

	let crypto_mobile_accordian = false;
	let wire_mobile_accordian = false;
	let payfix_mobile_accordian = false;
	let impatient_mobile_accordian = false;
	let ewallet_mobile_accordian = false;
	let qr_mobile_accordian = false;
	let credit_mobile_accordian = false;
</script>

<div class="container_6266f">
	<div class="account-page-content_d58f8">
		<div class="title-tabs_49963">
			<span class="active_c5a53">
				<div class="account-title_1faa7 title_8161c">
					<div class="title-wrapper_77489">deposit methods</div>
				</div>
			</span><span>
				<div class="account-title_1faa7 title_8161c">
					<div class="title-wrapper_77489">my transactionsy</div>
				</div>
			</span>
		</div>
		<div>
			<div class="plugins-tabs-wrapper_89e13">
				<div class="navigation-wrapper_9700d">
					<div class="navigation-item_d0db4 active_c5a53">All</div>
					<div class="navigation-item_d0db4">Cryptocurrency</div>
					<div class="navigation-item_d0db4">Wire Transfer / EFT</div>
					<div class="navigation-item_d0db4">Payfix</div>
					<div class="navigation-item_d0db4">Impatient</div>
					<div class="navigation-item_d0db4">E-Wallet</div>
					<div class="navigation-item_d0db4">QR and Cepbank</div>
					<div class="navigation-item_d0db4">Credit card</div>
				</div>
			</div>
			<div class="block-wrapper_f4bbf">
				<div class="search-input-wrap_3a2f8">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						class="search-icon_f126b"
					>
						<path
							d="M15.7567 14.5735L11.8125 10.6129C12.8266 9.44901 13.3823 7.98455 13.3823 6.45999C13.3823 2.89801 10.3806 0 6.69113 0C3.0017 0 0 2.89801 0 6.45999C0 10.022 3.0017 12.92 6.69113 12.92C8.07619 12.92 9.39609 12.5167 10.5246 11.751L14.4988 15.7416C14.6649 15.9082 14.8883 16 15.1278 16C15.3544 16 15.5694 15.9166 15.7326 15.7649C16.0794 15.4428 16.0904 14.9085 15.7567 14.5735ZM6.69113 1.68522C9.4182 1.68522 11.6367 3.82713 11.6367 6.45999C11.6367 9.09286 9.4182 11.2348 6.69113 11.2348C3.96406 11.2348 1.74551 9.09286 1.74551 6.45999C1.74551 3.82713 3.96406 1.68522 6.69113 1.68522Z"
							fill="currentColor"
						></path>
					</svg><input
						type="text"
						class="search-input_e8c77"
						placeholder="Search among investment methods"
						value=""
					/>
				</div>
			</div>
			<div class="groups-wrapper_27dca">
				<div class="group_476a4">
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="group-header_39dcf"
						on:click={() => (crypto_mobile_accordian = !crypto_mobile_accordian)}
					>
						<div class="group-header-text-wrapper_d2e34">
							<span class="method-name_d3ccc"> Cryptocurrency </span>
							<div class="investment-method_b2011">Deposit Transactions</div>
						</div>
						<div
							class={crypto_mobile_accordian ? 'icon-wrap_0936c' : 'icon-wrap_0936c active_e4b46'}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="6"
								viewBox="0 0 10 6"
								fill="none"
							>
								<path
									d="M8.62633 -1.50828e-06L5 3.41372L1.37367 -2.40181e-07L2.26099e-07 1.29314L5 6L10 1.29314L8.62633 -1.50828e-06Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</div>
					<div class="plugins_67f5a" style={crypto_mobile_accordian ? 'display: flex' : ''}>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinCryptocurrency}
											alt="CRYPTO CURRENCY"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">cryptocurrency ​</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">Up to 25% bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">10.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">1,000,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115">Choose Method</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="group_476a4">
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="group-header_39dcf"
						on:click={() => (wire_mobile_accordian = !wire_mobile_accordian)}
					>
						<div class="group-header-text-wrapper_d2e34">
							<span class="method-name_d3ccc"> Wire Transfer / EFT </span>
							<div class="investment-method_b2011">Deposit Transactions</div>
						</div>
						<div class={wire_mobile_accordian ? 'icon-wrap_0936c' : 'icon-wrap_0936c active_e4b46'}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="6"
								viewBox="0 0 10 6"
								fill="none"
							>
								<path
									d="M8.62633 -1.50828e-06L5 3.41372L1.37367 -2.40181e-07L2.26099e-07 1.29314L5 6L10 1.29314L8.62633 -1.50828e-06Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</div>
					<div class="plugins_67f5a" style={wire_mobile_accordian ? 'display: flex' : ''}>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinKolaypayHavale}
											alt="Easy Transfer (Recommended)"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">easy transfer (recommended)</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">50.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">1,000,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinVevoHavale}
											alt="FAST TRANSFER (RECOMMENDED)"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">fast transfer (recommended)</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">50.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">250,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinBankTransfer}
											alt="TRANSFER EFT FAST"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">money transfer eft fast</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">100.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">50,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img src={FixfinSeripay} alt="Seripay Havale" class="deposit_ico_1c460" />
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">seripay havale</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">instantly</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">200.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">50,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinFinpayHavale}
											alt="Finpay Money Transfer"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">finpay money transfer</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">100.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">500,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinSistemNakitBankTransfer}
											alt="BANK TRANSFER"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">bank transfer</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">50.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">100,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinUltrapayBankTransfer}
											alt="Ultrapay Transfer"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">ultrapay money transfer</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">100.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">500,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinVegapayHavale_Logo}
											alt="Vegapay Money Transfer"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">vegapay money transfer</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">200.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">1,000,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinMultipayBankTransfer}
											alt="Multipay Money Transfer"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">multipay transfer</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">50.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">500,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="group_476a4">
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="group-header_39dcf"
						on:click={() => (payfix_mobile_accordian = !payfix_mobile_accordian)}
					>
						<div class="group-header-text-wrapper_d2e34">
							<span class="method-name_d3ccc"> Payfix </span>
							<div class="investment-method_b2011">Deposit Transactions</div>
						</div>
						<div
							class={payfix_mobile_accordian ? 'icon-wrap_0936c' : 'icon-wrap_0936c active_e4b46'}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="6"
								viewBox="0 0 10 6"
								fill="none"
							>
								<path
									d="M8.62633 -1.50828e-06L5 3.41372L1.37367 -2.40181e-07L2.26099e-07 1.29314L5 6L10 1.29314L8.62633 -1.50828e-06Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</div>
					<div class="plugins_67f5a" style={payfix_mobile_accordian ? 'display: flex' : ''}>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img src={FixfinPayfix} alt="PAYFIX" class="deposit_ico_1c460" />
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">payfix</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">25.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">1,000,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="group_476a4">
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="group-header_39dcf"
						on:click={() => (impatient_mobile_accordian = !impatient_mobile_accordian)}
					>
						<div class="group-header-text-wrapper_d2e34">
							<span class="method-name_d3ccc"> Impatient </span>
							<div class="investment-method_b2011">Deposit Transactions</div>
						</div>
						<div
							class={impatient_mobile_accordian
								? 'icon-wrap_0936c'
								: 'icon-wrap_0936c active_e4b46'}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="6"
								viewBox="0 0 10 6"
								fill="none"
							>
								<path
									d="M8.62633 -1.50828e-06L5 3.41372L1.37367 -2.40181e-07L2.26099e-07 1.29314L5 6L10 1.29314L8.62633 -1.50828e-06Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</div>
					<div class="plugins_67f5a" style={impatient_mobile_accordian ? 'display: flex' : ''}>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinKolaypayPapara_Logo}
											alt="easy PAPARA"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">easy papara</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">50.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">1,000,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img src={FixfinPaparasn} alt="FAST PAPARA" class="deposit_ico_1c460" />
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">fast papara</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">100.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">100,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinVegapayHavale_Logo}
											alt="Vegapay Papara"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">vegapay papara</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">100.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">1,000,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965"><i class="deposit_ico_1c460"></i></div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">instant papara</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">50.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">100,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinUltrapayAutoPapara}
											alt="Ultrapay Oto Papara"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">ultrapay oto papara</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">100.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">100,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinUltrapayPapara}
											alt="Ultrapay Papara"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">ultrapay papara</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">100.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">500,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinMultipayPapara}
											alt="Multipay Papara"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">multipay papara</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">50.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">100,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="group_476a4">
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="group-header_39dcf"
						on:click={() => (ewallet_mobile_accordian = !ewallet_mobile_accordian)}
					>
						<div class="group-header-text-wrapper_d2e34">
							<span class="method-name_d3ccc"> E-Wallet </span>
							<div class="investment-method_b2011">Deposit Transactions</div>
						</div>
						<div
							class={ewallet_mobile_accordian ? 'icon-wrap_0936c' : 'icon-wrap_0936c active_e4b46'}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="6"
								viewBox="0 0 10 6"
								fill="none"
							>
								<path
									d="M8.62633 -1.50828e-06L5 3.41372L1.37367 -2.40181e-07L2.26099e-07 1.29314L5 6L10 1.29314L8.62633 -1.50828e-06Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</div>
					<div class="plugins_67f5a" style={ewallet_mobile_accordian ? 'display: flex' : ''}>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img src={FixfinPopypara} alt="Fast Popypara" class="deposit_ico_1c460" />
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">fast popypara</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">50.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">250,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img src={FixfinMypayz_Logo} alt="Mypayz" class="deposit_ico_1c460" />
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">mypayz</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">instantly</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">25.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">250,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinMultipayHayhay}
											alt="Multipay Hayhay"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">multipay hayhay</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">50.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">25,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img src={FixfinMultipayPep} alt="Multipay Pep" class="deposit_ico_1c460" />
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">multipay pep</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">50.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">20,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="group_476a4">
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="group-header_39dcf"
						on:click={() => (qr_mobile_accordian = !qr_mobile_accordian)}
					>
						<div class="group-header-text-wrapper_d2e34">
							<span class="method-name_d3ccc"> QR and Cepbank </span>
							<div class="investment-method_b2011">Deposit Transactions</div>
						</div>
						<div class={qr_mobile_accordian ? 'icon-wrap_0936c' : 'icon-wrap_0936c active_e4b46'}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="6"
								viewBox="0 0 10 6"
								fill="none"
							>
								<path
									d="M8.62633 -1.50828e-06L5 3.41372L1.37367 -2.40181e-07L2.26099e-07 1.29314L5 6L10 1.29314L8.62633 -1.50828e-06Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</div>
					<div class="plugins_67f5a" style={qr_mobile_accordian ? 'display: flex' : ''}>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img src={FixfinAtmQr} alt="QR - ATM TRANSACTION" class="deposit_ico_1c460" />
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">qr - atm i̇şlemi̇</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">50.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">5,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="group_476a4">
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="group-header_39dcf"
						on:click={() => (credit_mobile_accordian = !credit_mobile_accordian)}
					>
						<div class="group-header-text-wrapper_d2e34">
							<span class="method-name_d3ccc"> Credit card </span>
							<div class="investment-method_b2011">Deposit Transactions</div>
						</div>
						<div
							class={credit_mobile_accordian ? 'icon-wrap_0936c' : 'icon-wrap_0936c active_e4b46'}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="6"
								viewBox="0 0 10 6"
								fill="none"
							>
								<path
									d="M8.62633 -1.50828e-06L5 3.41372L1.37367 -2.40181e-07L2.26099e-07 1.29314L5 6L10 1.29314L8.62633 -1.50828e-06Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
					</div>
					<div class="plugins_67f5a" style={credit_mobile_accordian ? 'display: flex' : ''}>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinSistemNakitCreditCard_Logo}
											alt="BANKA / KREDI KARTI [SN]"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">banka / kredi karti [sn]</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">100.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">20,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
						<div class="payment_plugins_item_a820e">
							<div class="payment_plugins_item_inner_9816d">
								<div class="title-wrapper_86763">
									<div class="icon-wrapper_2a965">
										<img
											src={FixfinKolaypayCreditCard_Logo}
											alt="KREDI KARTI [KOLAYPAY]"
											class="deposit_ico_1c460"
										/>
									</div>
									<div class="item-name_02959">
										<div class="ttc deposit-title_453bc">kredi karti [kolaypay]</div>
									</div>
								</div>
								<div class="info-container_f32d8">
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Processing Time</div>
										<div class="ttc min-bet-value_85768">%25 bonus</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Min. Deposit</div>
										<div class="min-bet-value_85768">50.00&nbsp;₺</div>
									</div>
									<div class="min-bet-container_b899e">
										<div class="min-bet-title_c5127">Max. Deposit</div>
										<div class="min-bet-value_85768">5,000.00&nbsp;₺</div>
									</div>
								</div>
								<div>
									<button class="item-details-button_f1115"> Choose Method </button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
