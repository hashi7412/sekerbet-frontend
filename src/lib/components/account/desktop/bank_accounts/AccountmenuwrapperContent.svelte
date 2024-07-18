<script>
	// @ts-nocheck
	import Dropdown from '$lib/components/_utils/Dropdown.svelte';
	import BetineDefaultMaleAvatar from '$lib/images/betine-default-male-avatar.png';

	const back_method_array = [
		{
			key: 'HAVALE/EFT',
			label: 'HAVALE/EFT'
		},
		{
			key: 'HAVALE EFT FAST',
			label: 'HAVALE EFT FAST'
		},
		{
			key: 'KRIPTO PARA',
			label: 'KRIPTO PARA'
		},
		{
			key: 'PAYFIX',
			label: 'PAYFIX'
		},
		{
			key: 'Hızlı Popypara',
			label: 'Hızlı Popypara'
		},
		{
			key: 'Kolay Havale ( Önerilen )',
			label: 'Kolay Havale ( Önerilen )'
		}
	];

	let bank_method = back_method_array[0].key;
	const setBankMethod = (val) => {
		bank_method = val;
	};

	const bench_array = [
		{
			key: 'HAVALE/EFT',
			label: 'HAVALE/EFT'
		},
		{
			key: 'HAVALE EFT FAST',
			label: 'HAVALE EFT FAST'
		},
		{
			key: 'KRIPTO PARA',
			label: 'KRIPTO PARA'
		},
		{
			key: 'PAYFIX',
			label: 'PAYFIX'
		},
		{
			key: 'Hızlı Popypara',
			label: 'Hızlı Popypara'
		},
		{
			key: 'Kolay Havale ( Önerilen )',
			label: 'Kolay Havale ( Önerilen )'
		}
	];

	let bench_select = bench_array[0].key;
	const setBenchSelect = (val) => {
		bench_select = val;
	};
</script>






<div class="content_92bf7">
    <div class="wrapper_b9f41">
        <div class="title_dfc52">Bank Accounts</div>
        <div class="title_3884d">Add New Bank Account</div>
        <Dropdown
            containerClassName={'payment-account-container_07fa7'}
            data={back_method_array}
            isDropdown={false}
            thumbClassName={'select-container_6ea57'}
            dropContainerClassName={'select-list-container_d1e85'}
            value={bank_method}
            setValue={setBankMethod}
        >
            <div>
                <button type="button" class="select_30808">
                    <span>
                        {back_method_array.find((val) => val.key === bank_method)
                            ? back_method_array.find((val) => val.key === bank_method).label
                            : 'Select'}
                    </span>
                    <svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="arrow-icon_30edb"
                    >
                        <path
                            d="M9.20723 1.27563L4.99986 5.48301L0.79248 1.27563"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </button>
            </div>
        </Dropdown>
        <div>
            <div class="form_3c3a8">
                <div>
                    <div class="control-placeholder_70a23">Bench</div>
                    <Dropdown
                        containerClassName={'select-container_6ea57'}
                        data={bench_array}
                        isDropdown={false}
                        thumbClassName={'select-container_6ea57'}
                        dropContainerClassName={'select-list-container_d1e85'}
                        value={bench_select}
                        setValue={setBenchSelect}
                    >
                        <div>
                            <button type="button" class="select_30808">
                                <span>
                                    {bench_array.find((val) => val.key === bench_select)
                                        ? bench_array.find((val) => val.key === bench_select).label
                                        : 'Select'}
                                </span>
                                <svg
                                    width="10"
                                    height="7"
                                    viewBox="0 0 10 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="arrow-icon_30edb"
                                >
                                    <path
                                        d="M9.20723 1.27563L4.99986 5.48301L0.79248 1.27563"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </Dropdown>
                </div>
                <div class="input-select-wrap_b6440">
                    <div class="control_381fd">
                        <div class="control-placeholder_9cddc">IBAN</div>
                        <svg
                            width="16"
                            height="12"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon_d7fe8"
                        >
                            <g clip-path="url(#clip0_114_7232)">
                                <path
                                    d="M14.6473 3.24004e-06H1.35273C1.17498 -0.000392241 0.998904 0.0354206 0.83461 0.105386C0.670317 0.175351 0.521041 0.278091 0.395352 0.407707C0.269664 0.537323 0.170037 0.691264 0.102192 0.860692C0.0343472 1.03012 -0.000380355 1.2117 3.14186e-06 1.395V10.605C-0.000380355 10.7883 0.0343472 10.9699 0.102192 11.1393C0.170037 11.3087 0.269664 11.4627 0.395352 11.5923C0.521041 11.7219 0.670317 11.8246 0.83461 11.8946C0.998904 11.9646 1.17498 12.0004 1.35273 12H14.6473C14.825 12.0004 15.0011 11.9646 15.1654 11.8946C15.3297 11.8246 15.479 11.7219 15.6046 11.5923C15.7303 11.4627 15.83 11.3087 15.8978 11.1393C15.9657 10.9699 16.0004 10.7883 16 10.605V1.395C16.0004 1.2117 15.9657 1.03012 15.8978 0.860692C15.83 0.691264 15.7303 0.537323 15.6046 0.407707C15.479 0.278091 15.3297 0.175351 15.1654 0.105386C15.0011 0.0354206 14.825 -0.000392241 14.6473 3.24004e-06ZM13.0909 9.75H2.90909C2.71621 9.75 2.53122 9.67098 2.39483 9.53033C2.25844 9.38968 2.18182 9.19891 2.18182 9C2.18182 8.80109 2.25844 8.61032 2.39483 8.46967C2.53122 8.32902 2.71621 8.25 2.90909 8.25H13.0909C13.2838 8.25 13.4688 8.32902 13.6052 8.46967C13.7416 8.61032 13.8182 8.80109 13.8182 9C13.8182 9.19891 13.7416 9.38968 13.6052 9.53033C13.4688 9.67098 13.2838 9.75 13.0909 9.75ZM14.5455 3.9825C14.5453 4.11969 14.4923 4.2512 14.3983 4.34821C14.3042 4.44522 14.1767 4.4998 14.0436 4.5H12.1382C12.0051 4.4998 11.8776 4.44522 11.7836 4.34821C11.6895 4.2512 11.6366 4.11969 11.6364 3.9825V2.0175C11.6366 1.88031 11.6895 1.7488 11.7836 1.65179C11.8776 1.55479 12.0051 1.5002 12.1382 1.5H14.0436C14.1767 1.5002 14.3042 1.55479 14.3983 1.65179C14.4923 1.7488 14.5453 1.88031 14.5455 2.0175V3.9825Z"
                                    fill="#4F6069"
                                ></path>
                            </g>
                            <defs>
                                <clippath id="clip0_114_7232">
                                    <rect width="16" height="12" fill="white"></rect>
                                </clippath>
                            </defs>
                        </svg><input
                            type="text"
                            name="iban"
                            class="control-input_75748 control-input-with-Icon_b2fb8"
                            value=""
                        />
                    </div>
                </div>
            </div>
            <div class="submit-button-container_49641">
                <button type="button" class="submit-button_2d0e4"> Add new bank account </button>
            </div>
        </div>
        <div class="warning_f45dc">Bank Account</div>
        <div class="title_3884d">My Bank Account</div>
        <div>
            <div>
                <div class="accounts-list-row_68463 header_3febf">
                    <div class="accounts-list-col_9f863">Bench</div>
                    <div class="accounts-list-col_9f863">Account Number</div>
                    <div class="accounts-list-col_9f863">IBAN</div>
                    <div class="accounts-list-col_9f863 close_3c9b1">Options</div>
                </div>
                <div class="tbody_45c68">
                    <div class="not-found-banks_18ef6">No results found</div>
                </div>
            </div>
        </div>
    </div>
</div>