<script>
	let soccer_accordian = true;
	let basketball_accordian = true;
	let tennis_accordian = true;
	let handball_accordian = true;
	let volleyball_accordian = true;
	let ice_hokey_accordian = true;
	let baseball_accordian = true;
	let rugby_league_accordian = true;
</script>

<div class="pt0 pb8 sport-page-wrapper_8f304" style="padding-bottom: 8px;">
	<div class="mb16 event-section-title_30224">
		<div class="event-section-title-left_48357">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="18"
				viewBox="0 0 13 12"
				fill="none"
			>
				<g clip-path="url(#clip0_301_14543)">
					<path
						d="M2.22034 2.00522C2.74913 1.48685 3.46009 1.19649 4.20058 1.19649C4.94106 1.19649 5.65203 1.48685 6.18081 2.00522C6.29585 2.10778 6.44594 2.16215 6.59997 2.15706C6.75401 2.15196 6.90018 2.08779 7.00819 1.97786C7.1162 1.86792 7.17777 1.72063 7.18014 1.56653C7.1825 1.41243 7.12549 1.26333 7.02091 1.15012C6.26726 0.412847 5.25488 0 4.20058 0C3.14628 0 2.13389 0.412847 1.38025 1.15012C1.27566 1.26333 1.21865 1.41243 1.22102 1.56653C1.22339 1.72063 1.28496 1.86792 1.39297 1.97786C1.50098 2.08779 1.64715 2.15196 1.80118 2.15706C1.95522 2.16215 2.10531 2.10778 2.22034 2.00522Z"
						fill="currentColor"
					></path>
					<path
						d="M2.82037 2.57113C2.75973 2.6252 2.71069 2.69102 2.67624 2.7646C2.64179 2.83819 2.62264 2.918 2.61996 2.9992C2.61727 3.08041 2.6311 3.16131 2.66062 3.23701C2.69013 3.31271 2.73471 3.38163 2.79165 3.43958C2.84859 3.49754 2.91671 3.54333 2.99187 3.57418C3.06703 3.60503 3.14768 3.62029 3.22892 3.61904C3.31016 3.61779 3.3903 3.60006 3.46448 3.56692C3.53866 3.53377 3.60534 3.48591 3.66047 3.42623C3.80449 3.28448 3.99846 3.20503 4.20054 3.20503C4.40261 3.20503 4.59658 3.28448 4.7406 3.42623C4.79573 3.48591 4.86241 3.53377 4.93659 3.56692C5.01077 3.60006 5.09091 3.61779 5.17215 3.61904C5.25339 3.62029 5.33404 3.60503 5.4092 3.57418C5.48437 3.54333 5.55248 3.49754 5.60942 3.43958C5.66636 3.38163 5.71094 3.31271 5.74045 3.23701C5.76997 3.16131 5.7838 3.08041 5.78111 2.9992C5.77843 2.918 5.75928 2.83819 5.72483 2.7646C5.69038 2.69102 5.64134 2.6252 5.5807 2.57113C5.21182 2.21048 4.71642 2.00854 4.20054 2.00854C3.68465 2.00854 3.18925 2.21048 2.82037 2.57113Z"
						fill="currentColor"
					></path>
					<path
						d="M11.7373 4.90123C11.6558 4.84748 11.5626 4.814 11.4656 4.80356C11.3685 4.79312 11.2703 4.80603 11.1793 4.84122L8.9458 5.4953C8.98199 5.66089 9.00049 5.82986 9.00101 5.99936V10.1999C9.00049 10.3694 8.98199 10.5383 8.9458 10.7039L11.1793 11.358C11.2497 11.3869 11.3252 11.4012 11.4013 11.4C11.5208 11.3994 11.6376 11.364 11.7373 11.298C11.8188 11.2429 11.8854 11.1687 11.9315 11.0819C11.9775 10.995 12.0015 10.8982 12.0014 10.7999V5.39929C12.0015 5.30099 11.9775 5.20417 11.9315 5.11732C11.8854 5.03048 11.8188 4.95627 11.7373 4.90123Z"
						fill="currentColor"
					></path>
					<path
						d="M6.60078 4.19897H1.80021C0.805982 4.19897 0 5.00496 0 5.99919V10.1997C0 11.1939 0.805982 11.9999 1.80021 11.9999H6.60078C7.59501 11.9999 8.40099 11.1939 8.40099 10.1997V5.99919C8.40099 5.00496 7.59501 4.19897 6.60078 4.19897Z"
						fill="currentColor"
					></path>
				</g>
			</svg>
			<h2 class="title_7dac3">Live</h2>
		</div>
	</div>
	<div>
		<div>
			<div class="sport-block_34349">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class={soccer_accordian ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
					on:click={() => (soccer_accordian = !soccer_accordian)}
				>
					<div class="df aic" style="display: flex; align-items: center;">
						<div>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="sport-icon_91f85"
							>
								<path
									d="M10 0C4.48625 0 0 4.48625 0 10C0 15.5138 4.48625 20 10 20C15.5138 20 20 15.5138 20 10C20 4.48625 15.5138 0 10 0ZM10.635 3.24875L13.2062 1.86625C14.63 2.43 15.8725 3.35375 16.8175 4.52875L16.205 7.35625L14.2438 8.3175L10.635 5.68875V3.24875ZM6.815 1.85875L9.38625 3.24625V5.68875L5.78 8.3175L3.80875 7.355L3.19625 4.51C4.14375 3.3375 5.38875 2.41875 6.815 1.85875ZM2.7875 14.9425C1.97125 13.755 1.44 12.3588 1.29375 10.85L3.41 8.55125L5.34 9.495L6.79375 13.6238L5.565 15.0962L2.7875 14.9425ZM12.2288 18.4513C11.515 18.64 10.7712 18.75 10 18.75C9.0675 18.75 8.17 18.6 7.32625 18.3288L6.54 15.8813L7.79375 14.375H12.2113L13.4425 15.8325L12.2288 18.4513ZM14.4175 15.0538L13.2088 13.6225L14.6825 9.495L16.6038 8.55375L18.7075 10.8512C18.5812 12.1525 18.1625 13.3663 17.5262 14.44L14.4175 15.0538Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
						<span class="text_671ed">Soccer</span>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						class="arrow-icon_ca7fc"
					>
						<g clip-path="url(#clip0_301_20250)">
							<path
								d="M1.37367 6L5 2.58628L8.62633 6L10 4.70686L5 4.37114e-07L-1.1305e-07 4.70686L1.37367 6Z"
								fill="currentColor"
							></path>
						</g>
					</svg>
				</div>
				<div class:hidden={!soccer_accordian}>
					<div class="sport-content-container_99a78">
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Soccer</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">1689945</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">US Alessandria U19</div>
												<div class="participant-score_11e98">0</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Crotone U19</div>
												<div class="participant-score_11e98">0</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>2.50</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> X</span><span>3.15</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>2.60</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_minute_9b2f2">22'</span>
											<span class="scope_dd115">First half</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260550753"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260550753" class="link_0eccd"
												>+28
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Soccer</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">15947</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Wellington Phoenix FC</div>
												<div class="participant-score_11e98">0</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Melbourne Victory</div>
												<div class="participant-score_11e98">0</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 1</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> X</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 2</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_minute_9b2f2">90'+16</span>
											<span class="scope_dd115">Overtime</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260536947"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260536947" class="link_0eccd"
												>+9
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Soccer</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">45987</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Western Knights</div>
												<div class="participant-score_11e98">0</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Fremantle City</div>
												<div class="participant-score_11e98">3</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;"></div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_minute_9b2f2">90'</span>
											<span class="scope_dd115">Second Half</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260508358"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<div></div>
										</div>
									</div>
								</div>
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Armadale</div>
												<div class="participant-score_11e98">3</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Floreat Athena</div>
												<div class="participant-score_11e98">0</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;"></div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_minute_9b2f2">90'</span>
											<span class="scope_dd115">Second Half</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260508359"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<div></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button class="show-more-leagues-btn_1a52c"
						><span class="text_671ed">Show more <span class="ttl">Leagues</span></span></button
					>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div>
			<div class="sport-block_34349">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class={basketball_accordian ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
					on:click={() => (basketball_accordian = !basketball_accordian)}
				>
					<div class="df aic" style="display: flex; align-items: center;">
						<div>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="sport-icon_91f85"
							>
								<path
									d="M10 0C4.48599 0 0 4.48599 0 10C0 15.514 4.48599 20 10 20C15.514 20 20 15.514 20 10C20 4.48599 15.514 0 10 0ZM5.77273 17.5211C5.75111 17.5108 3.46774 16.5187 4.4468 12.9409C4.69603 12.0299 5.37939 11.1939 6.1029 10.3088C7.26323 8.88902 8.57845 7.27993 8.61205 4.833C8.613 4.76438 8.61253 4.69677 8.61071 4.63017C8.8433 4.59859 9.07892 4.57455 9.31744 4.55892V18.6079C8.0763 18.5104 6.84303 18.0288 5.77273 17.5211ZM1.51306 11.593C1.23185 8.56384 3.91805 5.85374 7.24391 4.91367C7.18162 6.8303 6.09657 8.15926 5.04586 9.44478C4.26411 10.4012 3.45569 11.3902 3.12997 12.5805C2.89744 13.4302 2.81542 14.1696 2.83165 14.809C2.18923 13.8543 1.6233 12.7802 1.51306 11.593ZM7.62411 2.35145C7.40418 2.16909 7.16438 2.03367 6.91973 1.9336C7.67421 1.64451 8.47906 1.45805 9.31737 1.39219V3.19152C8.98397 3.21091 8.65515 3.24438 8.33158 3.29125C8.16727 2.92094 7.93172 2.60646 7.62411 2.35145ZM11.6684 3.29118C11.3448 3.24431 11.016 3.21084 10.6826 3.19145V1.39212C11.5209 1.45798 12.3258 1.64444 13.0803 1.93354C12.8356 2.0336 12.5958 2.16902 12.376 2.35138C12.0683 2.60646 11.8328 2.92094 11.6684 3.29118ZM14.3168 17.47C13.1939 18.0368 12.0024 18.5042 10.6826 18.6079V4.55892C10.9211 4.57455 11.1568 4.59859 11.3894 4.63017C11.3875 4.69677 11.3871 4.76438 11.388 4.833C11.4216 7.27993 12.7368 8.88902 13.8972 10.3088C14.6207 11.1939 15.304 12.0299 15.5533 12.9409C16.5184 16.4681 14.4046 17.4257 14.3168 17.47ZM18.4869 11.5403C18.3767 12.7275 17.8108 13.8543 17.1684 14.809C17.1846 14.1696 17.1026 13.4302 16.87 12.5805C16.5443 11.3902 15.736 10.4012 14.9541 9.44478C13.9034 8.15926 12.8184 6.8303 12.7561 4.91367C16.082 5.85374 18.7681 8.51118 18.4869 11.5403ZM17.9141 6.54842C16.7131 5.17838 15.0266 4.1301 13.0712 3.5862C13.1225 3.51899 13.1799 3.45872 13.2436 3.40552C13.6999 3.02397 14.6466 3.00929 15.1195 3.05111C16.332 3.94667 17.3026 5.15165 17.9141 6.54842ZM4.88168 3.05024C5.34633 3.00963 6.29488 3.02269 6.75273 3.40236C6.81778 3.4563 6.87636 3.51778 6.92869 3.58626C4.97333 4.1301 3.2868 5.17845 2.08593 6.54842C2.69764 5.15118 3.66862 3.94599 4.88168 3.05024Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
						<span class="text_671ed">Basketball</span>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						class="arrow-icon_ca7fc"
					>
						<g clip-path="url(#clip0_301_20250)">
							<path
								d="M1.37367 6L5 2.58628L8.62633 6L10 4.70686L5 4.37114e-07L-1.1305e-07 4.70686L1.37367 6Z"
								fill="currentColor"
							></path>
						</g>
					</svg>
				</div>
				<div style={!basketball_accordian ? 'display: none;' : null}>
					<div class="sport-content-container_99a78">
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Basketball</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">20119</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Taranaki Mountainairs</div>
												<div class="participant-score_11e98">72</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Manawatu Jets</div>
												<div class="participant-score_11e98">45</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 1</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 2</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_minute_9b2f2">&lt;4'</span>
											<span class="scope_dd115">Q 3/4</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260506430"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260506430" class="link_0eccd"
												>+9
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Basketball</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">127864</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Melbourne Tigers (w)</div>
												<div class="participant-score_11e98">75</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Ballarat Rush (w)</div>
												<div class="participant-score_11e98">86</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>12.00</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>1.02</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_minute_9b2f2">&lt;6'</span>
											<span class="scope_dd115">Q 4/4</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260506462"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260506462" class="link_0eccd"
												>+8
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">South West Metro Pirates (w)</div>
												<div class="participant-score_11e98">80</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Southern Districts Spartans (w)</div>
												<div class="participant-score_11e98">90</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;"></div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_minute_9b2f2">&lt;1'</span>
											<span class="scope_dd115">Q 4/4</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260506469"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<div></div>
										</div>
									</div>
								</div>
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Canberra Nationals (w)</div>
												<div class="participant-score_11e98">66</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Albury Wodonga Bandits (w)</div>
												<div class="participant-score_11e98">114</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;"></div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_minute_9b2f2">&lt;2'</span>
											<span class="scope_dd115">Q 4/4</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260506477"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<div></div>
										</div>
									</div>
								</div>
							</div>
							<button class="show-more-events-btn_07767"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									width="6"
									height="4"
									viewBox="0 0 6 4"
									fill="none"
									class="icon_51db0"
								>
									<path
										d="M2.29289 3.29289L0.707107 1.70711C0.0771422 1.07714 0.523309 0 1.41421 0L4.58579 0C5.47669 0 5.92286 1.07714 5.29289 1.70711L3.70711 3.29289C3.31658 3.68342 2.68342 3.68342 2.29289 3.29289Z"
										fill="currentColor"
									></path>
								</svg><span class="text_671ed">Show more <span class="ttl">Events</span></span><svg
									xmlns="http://www.w3.org/2000/svg"
									width="6"
									height="4"
									viewBox="0 0 6 4"
									fill="none"
									class="icon_51db0"
								>
									<path
										d="M2.29289 3.29289L0.707107 1.70711C0.0771422 1.07714 0.523309 0 1.41421 0L4.58579 0C5.47669 0 5.92286 1.07714 5.29289 1.70711L3.70711 3.29289C3.31658 3.68342 2.68342 3.68342 2.29289 3.29289Z"
										fill="currentColor"
									></path>
								</svg></button
							>
						</div>
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Basketball</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">587857</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Warrnambool Mermaids (w)</div>
												<div class="participant-score_11e98">68</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Pakenham Warriors (w)</div>
												<div class="participant-score_11e98">71</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;"></div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_minute_9b2f2">&lt;1'</span>
											<span class="scope_dd115">Q 4/4</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260506481"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<div></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button class="show-more-leagues-btn_1a52c"
						><span class="text_671ed">Show more <span class="ttl">Leagues</span></span></button
					>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div>
			<div class="sport-block_34349">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class={tennis_accordian ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
					on:click={() => (tennis_accordian = !tennis_accordian)}
				>
					<div class="df aic" style="display: flex; align-items: center;">
						<div>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="sport-icon_91f85"
							>
								<path
									d="M18.3404 1.66026C15.842 -0.83818 11.3662 -0.480641 8.3967 2.48889C4.75878 6.1265 5.98612 11.5308 2.69647 14.8204C1.98511 15.5318 2.16026 15.356 2.13171 15.3846C2.13073 15.3865 0.515654 16.9987 0.514131 17.0002C-0.171377 17.6857 -0.171377 18.8004 0.514131 19.4859C1.19964 20.1714 2.31425 20.1714 2.99979 19.4859C5.22745 17.2582 4.41499 18.0738 4.61792 17.8708C4.61893 17.869 5.18061 17.3076 5.1821 17.3061C7.48932 14.9988 10.6055 15.0336 14.1076 13.7038C15.2261 13.279 16.2983 12.8174 17.5117 11.6039C20.4778 8.63775 20.8401 4.15994 18.3404 1.66026ZM17.5117 2.48889C17.7968 2.774 18.0305 3.0935 18.223 3.4349L16.6831 4.97486L15.0258 3.31756L16.5658 1.7776C16.9071 1.9701 17.2266 2.20377 17.5117 2.48889ZM10.054 8.28931L11.7113 6.63205L13.3685 8.28931L11.7113 9.94662L10.054 8.28931ZM10.8826 10.7753L9.34444 12.3134C8.99975 12.1195 8.67897 11.8862 8.39674 11.6039C8.11444 11.3217 7.88112 11.0008 7.68713 10.6562L9.22534 9.11799L10.8826 10.7753ZM12.5399 5.80346L14.1972 4.14615L15.8545 5.80346L14.1972 7.46072L12.5399 5.80346ZM15.3736 1.31248L14.1972 2.48885L12.9802 1.2719C13.8018 1.11342 14.6173 1.12908 15.3736 1.31248ZM11.7085 1.65752L13.3685 3.31748L11.7113 4.97478L9.65678 2.92029C10.2934 2.37166 10.9905 1.95092 11.7085 1.65752ZM8.83616 3.75701L10.8826 5.80342L9.2253 7.46068L7.56799 5.80342C7.86737 5.07018 8.29842 4.38107 8.83616 3.75701ZM7.18592 7.07853L8.3967 8.28931L7.22155 9.46447C7.04088 8.72131 7.02608 7.91099 7.18592 7.07853ZM7.78682 14.3726C7.17928 14.3286 6.65616 14.1086 6.27506 13.7275C5.89397 13.3464 5.67389 12.8233 5.62991 12.2157C5.87694 11.477 5.50667 12.7428 6.23639 10.1765C6.29491 10.3542 6.33839 10.5386 6.41264 10.7089C6.42589 10.7549 6.44647 10.7968 6.47128 10.839C6.74499 11.4262 7.10401 11.9685 7.56803 12.4326C8.03194 12.8964 8.57413 13.2553 9.16096 13.5289C9.20358 13.5539 9.24581 13.5748 9.29221 13.5882C9.46373 13.6629 9.64928 13.7069 9.82838 13.7656C7.2596 14.4959 8.52479 14.1258 7.78682 14.3726ZM10.5363 12.7789L11.7113 11.6038L12.9219 12.8145C12.0894 12.9742 11.2793 12.9594 10.5363 12.7789ZM14.1972 12.4326L12.5399 10.7753L14.1972 9.11799L16.2436 11.1644C15.6195 11.7022 14.9305 12.1332 14.1972 12.4326ZM17.0803 10.3438L15.0259 8.28931L16.6831 6.63205L18.3432 8.29209C18.0497 9.01013 17.629 9.70717 17.0803 10.3438ZM17.5117 5.80342L18.6882 4.62705C18.8715 5.3833 18.8872 6.19877 18.7287 7.02037L17.5117 5.80342Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
						<span class="text_671ed">Tennis</span>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						class="arrow-icon_ca7fc"
					>
						<g clip-path="url(#clip0_301_20250)">
							<path
								d="M1.37367 6L5 2.58628L8.62633 6L10 4.70686L5 4.37114e-07L-1.1305e-07 4.70686L1.37367 6Z"
								fill="currentColor"
							></path>
						</g>
					</svg>
				</div>
				<div style={!tennis_accordian ? 'display: none;' : null}>
					<div class="sport-content-container_99a78">
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Tennis</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">2483680</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Lock, Benjamin</div>
												<div class="participant-score_11e98">1</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Henning, Philip</div>
												<div class="participant-score_11e98">1</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.45</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>2.55</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">3.Set</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260550980"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260550980" class="link_0eccd"
												>+4
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Tennis</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">50999</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Soke, Duru</div>
												<div class="participant-score_11e98">1</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Okuwaki, Rinon</div>
												<div class="participant-score_11e98">0</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.12</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>5.10</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">2.Set</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260550827"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260550827" class="link_0eccd"
												>+8
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Urgesi, Federica</div>
												<div class="participant-score_11e98">1</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Meliss, Verena</div>
												<div class="participant-score_11e98">0</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.02</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>9.75</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">2.Set</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260550966"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260550966" class="link_0eccd"
												>+8
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Tennis</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">59079</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Budkov Kjaer, Nicolai</div>
												<div class="participant-score_11e98">1</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Agwi, Michael</div>
												<div class="participant-score_11e98">0</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;"></div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">2.Set</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260550971"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<div></div>
										</div>
									</div>
								</div>
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Milev, Yanaki</div>
												<div class="participant-score_11e98">1</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Delage, Pierre</div>
												<div class="participant-score_11e98">0</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 1</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 2</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">2.Set</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260550972"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260550972" class="link_0eccd"
												>+4
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button class="show-more-leagues-btn_1a52c"
						><span class="text_671ed">Show more <span class="ttl">Leagues</span></span></button
					>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div>
			<div class="sport-block_34349">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class={handball_accordian ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
					on:click={() => (handball_accordian = !handball_accordian)}
				>
					<div class="df aic" style="display: flex; align-items: center;">
						<div>
							<svg
								version="1.1"
								x="0px"
								y="0px"
								viewBox="0 0 20 20"
								fill="none"
								class="sport-icon_91f85"
							>
								<g>
									<path
										d="M17.2,4.7v7H16V3.5h-1.8v8.2h-1.2V2.3h-1.8v9.4H9.9V3.5H8.1v6.9L8,12.8L6.3,9.7C5.9,9.3,5.4,9,4.8,9L4.7,9 C4.1,9,3.6,9.2,3.2,9.6l0,0l4.7,7.6c1.8,2.9,5,2.7,5.1,2.7c3.6,0,6-3,6-6.2V4.7H17.2z"
										fill="currentColor"
									></path>
									<path
										d="M6.9,8.5V2.3h3V1.2h1.6C10.4,0.4,9.1,0,7.7,0C4,0,1,2.9,1,6.4c0,1.1,0.3,2.1,0.7,2.9l0.6-0.6 C3.5,7.6,5.6,7.5,6.9,8.5z"
										fill="currentColor"
									></path>
								</g>
							</svg>
						</div>
						<span class="text_671ed">Handball</span>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						class="arrow-icon_ca7fc"
					>
						<g clip-path="url(#clip0_301_20250)">
							<path
								d="M1.37367 6L5 2.58628L8.62633 6L10 4.70686L5 4.37114e-07L-1.1305e-07 4.70686L1.37367 6Z"
								fill="currentColor"
							></path>
						</g>
					</svg>
				</div>
				<div style={!handball_accordian ? 'display: none;' : null}>
					<div class="sport-content-container_99a78">
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Handball</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">43868</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Dacia Mioveni (w)</div>
												<div class="participant-score_11e98">15</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Gloria Buzau (w)</div>
												<div class="participant-score_11e98">15</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 1</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 2</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">First half</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260507208"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260507208" class="link_0eccd"
												>+9
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div>
			<div class="sport-block_34349">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class={volleyball_accordian ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
					on:click={() => (volleyball_accordian = !volleyball_accordian)}
				>
					<div class="df aic" style="display: flex; align-items: center;">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="21"
								height="20"
								viewBox="0 0 21 20"
								fill="none"
								class="sport-icon_91f85"
							>
								<g clip-path="url(#clip0_31_1159)">
									<path
										d="M3.817 2.13236C1.50805 3.94866 0.0218784 6.76121 0 9.92694C1.50801 11.2955 3.54774 11.9615 5.60908 11.701C3.69386 8.74238 3.17089 5.28157 3.817 2.13236ZM9.74293 0C8.129 0.041022 6.61119 0.462182 5.27582 1.17831C4.21839 4.49984 4.65678 8.31872 6.8413 11.4319C7.96843 11.0763 8.99594 10.438 9.82575 9.56321C7.74535 6.71812 7.71414 2.86814 9.74293 0ZM10.9099 10.1125C8.15889 13.2672 3.5259 13.8304 0.111736 11.503C0.372324 13.2388 1.0779 14.8269 2.10892 16.1486V16.149C7.31794 17.3433 12.5153 14.8201 14.9762 10.4044C13.6329 9.88854 12.2161 9.81657 10.9099 10.1125ZM16.0338 10.915C13.5712 15.3972 8.65635 18.0741 3.43999 17.5527C5.19534 19.078 7.48906 20 10.0012 20C13.9647 20 17.3824 17.7055 19.0014 14.3706C18.4473 12.9783 17.4232 11.7347 16.0338 10.915ZM19.7636 7.81138V7.81099C16.7862 5.44108 12.9678 4.71566 9.47531 5.63721C9.63197 6.82841 10.0942 7.96687 10.8181 8.93343C14.3361 8.21144 17.8469 9.87201 19.5808 12.886C19.8554 11.9722 20.0027 11.0025 20.0027 9.99844C20.0027 9.24715 19.9203 8.515 19.7636 7.81138ZM11.1916 0.0668073C10.1446 1.24824 9.48781 2.77817 9.421 4.4421C12.6367 3.66034 16.1576 4.12514 19.1522 5.95015C17.7536 2.78598 14.7636 0.488748 11.1916 0.0668073Z"
										fill="currentColor"
									></path>
								</g>
							</svg>
						</div>
						<span class="text_671ed">Volleyball</span>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						class="arrow-icon_ca7fc"
					>
						<g clip-path="url(#clip0_301_20250)">
							<path
								d="M1.37367 6L5 2.58628L8.62633 6L10 4.70686L5 4.37114e-07L-1.1305e-07 4.70686L1.37367 6Z"
								fill="currentColor"
							></path>
						</g>
					</svg>
				</div>
				<div style={!volleyball_accordian ? 'display: none;' : null}>
					<div class="sport-content-container_99a78">
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Volleyball</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">863251</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Treviso U19</div>
												<div class="participant-score_11e98">0</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Lupi Santa Croce U19</div>
												<div class="participant-score_11e98">1</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.43</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>2.65</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">2.Set</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260551607"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260551607" class="link_0eccd"
												>+9
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Vero Voley Assiplan U19</div>
												<div class="participant-score_11e98">2</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Cucine Lube Civitanova U19</div>
												<div class="participant-score_11e98">0</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 1</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 2</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">3.Set</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260551608"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260551608" class="link_0eccd"
												>+13
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Volleyball</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">2436407</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Barcelona U21</div>
												<div class="participant-score_11e98">2</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">CV Zaragoza U21</div>
												<div class="participant-score_11e98">0</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 1</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 2</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">3.Set</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260551605"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260551605" class="link_0eccd"
												>+7
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">CV San Roque U21</div>
												<div class="participant-score_11e98">0</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Tramesa Arenys U21</div>
												<div class="participant-score_11e98">1</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>3.56</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>1.25</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">2.Set</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260551606"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260551606" class="link_0eccd"
												>+13
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Volleyball</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">2525006</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Beijing U19</div>
												<div class="participant-score_11e98">2</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Zhejiang U19</div>
												<div class="participant-score_11e98">2</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>3.26</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>1.30</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">5.Set</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260551585"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260551585" class="link_0eccd"
												>+6
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Shandong U19</div>
												<div class="participant-score_11e98">2</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Shanghai U19</div>
												<div class="participant-score_11e98">1</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 1</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 2</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">4.Set</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260551595"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260551595" class="link_0eccd"
												>+6
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button class="show-more-leagues-btn_1a52c"
						><span class="text_671ed">Show more <span class="ttl">Leagues</span></span></button
					>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div>
			<div class="sport-block_34349">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class={ice_hokey_accordian ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
					on:click={() => (ice_hokey_accordian = !ice_hokey_accordian)}
				>
					<div class="df aic" style="display: flex; align-items: center;">
						<div>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="sport-icon_91f85"
							>
								<path
									d="M9.30249 16.5118V17.442C9.30249 18.1201 9.57226 18.7713 10.0513 19.2513C10.5313 19.7304 11.1825 20.0001 11.8606 20.0001H17.442C18.1202 20.0001 18.7713 19.7304 19.2513 19.2513C19.7304 18.7713 20.0002 18.1201 20.0002 17.442C20.0002 17.1359 20.0002 16.8178 20.0002 16.5118C20.0002 15.8336 19.7304 15.1825 19.2513 14.7025C18.7713 14.2234 18.1202 13.9536 17.442 13.9536C15.8206 13.9536 13.482 13.9536 11.8606 13.9536C11.1825 13.9536 10.5313 14.2234 10.0513 14.7025C9.57226 15.1825 9.30249 15.8336 9.30249 16.5118Z"
									fill="currentColor"
								></path>
								<path
									d="M6.59825 5.11628H1.14615L3.29313 13.2288C3.90615 15.546 5.98336 17.1684 8.3722 17.2084V16.5116C8.3722 15.586 8.73964 14.6995 9.3936 14.0447C10.0485 13.3907 10.935 13.0233 11.8606 13.0233H17.442C17.6782 13.0233 17.9117 13.0474 18.1396 13.094V10.9302C18.1396 10.0047 17.7722 9.11814 17.1182 8.46326C16.4634 7.8093 15.5769 7.44186 14.6513 7.44186H8.19732C7.66336 7.44186 7.19825 7.07907 7.06894 6.56093C7.06522 6.54512 7.06057 6.5293 7.05499 6.51349L6.59825 5.11628ZM0.775921 3.72093H6.1415L5.08197 0.48093C4.98801 0.194419 4.72011 0 4.41871 0H0.697781C0.481037 0 0.277316 0.100465 0.145223 0.272558C0.01313 0.443721 -0.0324514 0.666977 0.0233626 0.876279L0.775921 3.72093Z"
									fill="currentColor"
								></path>
							</svg>
						</div>
						<span class="text_671ed">Ice Hockey</span>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						class="arrow-icon_ca7fc"
					>
						<g clip-path="url(#clip0_301_20250)">
							<path
								d="M1.37367 6L5 2.58628L8.62633 6L10 4.70686L5 4.37114e-07L-1.1305e-07 4.70686L1.37367 6Z"
								fill="currentColor"
							></path>
						</g>
					</svg>
				</div>
				<div style={!ice_hokey_accordian ? 'display: none;' : null}>
					<div class="sport-content-container_99a78">
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Ice Hockey</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">128608</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Newcastle</div>
												<div class="participant-score_11e98">9</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Brisbane Lightning</div>
												<div class="participant-score_11e98">0</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 1</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> X</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button disabled class="outcome_06615 lock_e0b11">
														<div>
															<span class="outcome-title_93ed1"> 2</span><svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="16"
																viewBox="0 0 14 16"
																fill="none"
															>
																<path
																	fill-rule="evenodd"
																	clip-rule="evenodd"
																	d="M7 0C4.70457 0 2.84375 1.81474 2.84375 4.05333V4.11324C1.22443 4.4128 0 5.80029 0 7.46667V12.5867C0 14.4718 1.567 16 3.5 16H10.5C12.433 16 14 14.4718 14 12.5867V7.46667C14 5.80029 12.7755 4.4128 11.1562 4.11324V4.05333C11.1562 1.81474 9.29548 0 7 0ZM9.84375 4.05333C9.84375 2.52166 8.57054 1.28 7 1.28C5.42946 1.28 4.15625 2.52166 4.15625 4.05333H9.84375ZM8.75 10.0267C8.75 10.9693 7.96653 11.7333 7 11.7333C6.03347 11.7333 5.25 10.9693 5.25 10.0267C5.25 9.08407 6.03347 8.32 7 8.32C7.96653 8.32 8.75 9.08407 8.75 10.0267Z"
																	fill="currentColor"
																></path>
															</svg>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">3/3</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260507298"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260507298" class="link_0eccd"
												>+6
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Melbourne Mustangs</div>
												<div class="participant-score_11e98">2</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Central Coast Rhinos</div>
												<div class="participant-score_11e98">1</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.12</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> X</span><span>5.30</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>29.00</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">3/3</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260507299"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260507299" class="link_0eccd"
												>+11
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Sydney Ice Dogs</div>
												<div class="participant-score_11e98">3</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Sydney Bears</div>
												<div class="participant-score_11e98">3</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>4.15</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> X</span><span>2.30</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>2.30</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">3/3</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260507300"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260507300" class="link_0eccd"
												>+10
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
							</div>
							<button class="show-more-events-btn_07767"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									width="6"
									height="4"
									viewBox="0 0 6 4"
									fill="none"
									class="icon_51db0"
								>
									<path
										d="M2.29289 3.29289L0.707107 1.70711C0.0771422 1.07714 0.523309 0 1.41421 0L4.58579 0C5.47669 0 5.92286 1.07714 5.29289 1.70711L3.70711 3.29289C3.31658 3.68342 2.68342 3.68342 2.29289 3.29289Z"
										fill="currentColor"
									></path>
								</svg><span class="text_671ed">Show more <span class="ttl">Events</span></span><svg
									xmlns="http://www.w3.org/2000/svg"
									width="6"
									height="4"
									viewBox="0 0 6 4"
									fill="none"
									class="icon_51db0"
								>
									<path
										d="M2.29289 3.29289L0.707107 1.70711C0.0771422 1.07714 0.523309 0 1.41421 0L4.58579 0C5.47669 0 5.92286 1.07714 5.29289 1.70711L3.70711 3.29289C3.31658 3.68342 2.68342 3.68342 2.29289 3.29289Z"
										fill="currentColor"
									></path>
								</svg></button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div>
			<div class="sport-block_34349">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class={baseball_accordian ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
					on:click={() => (baseball_accordian = !baseball_accordian)}
				>
					<div class="df aic" style="display: flex; align-items: center;">
						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								class="sport-icon_91f85"
							>
								<g clip-path="url(#clip0_31_1141)">
									<path
										d="M17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C4.8043 18.9464 7.34784 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893ZM1.03744 10.5898C3.53903 10.493 5.91085 9.45126 7.67462 7.67462C9.45126 5.91085 10.493 3.53903 10.5898 1.03744C12.5903 1.16459 14.4899 1.96095 15.983 3.29842L13.4677 5.81363L12.9627 5.30855C12.8669 5.21415 12.7378 5.16124 12.6033 5.16124C12.4689 5.16124 12.3398 5.21415 12.244 5.30855C12.1965 5.35553 12.1587 5.41148 12.1329 5.47316C12.1072 5.53484 12.0939 5.60102 12.0939 5.66787C12.0939 5.73471 12.1072 5.8009 12.1329 5.86258C12.1587 5.92426 12.1965 5.98021 12.244 6.02719L12.7491 6.53226L12.0712 7.21022L11.5661 6.70514C11.4703 6.61074 11.3412 6.55782 11.2068 6.55782C11.0723 6.55782 10.9432 6.61074 10.8474 6.70514C10.7999 6.75212 10.7621 6.80807 10.7364 6.86975C10.7106 6.93143 10.6973 6.99761 10.6973 7.06446C10.6973 7.1313 10.7106 7.19748 10.7364 7.25916C10.7621 7.32084 10.7999 7.37679 10.8474 7.42377L11.3559 7.91868L10.678 8.59663L10.1729 8.09156C10.1257 8.04415 10.0696 8.0065 10.0079 7.98076C9.94616 7.95501 9.87996 7.94168 9.81307 7.94153C9.74618 7.94137 9.67991 7.95439 9.61806 7.97984C9.5562 8.00529 9.49996 8.04268 9.45255 8.08986C9.40514 8.13705 9.36749 8.19311 9.34175 8.25485C9.31601 8.31658 9.30268 8.38279 9.30252 8.44968C9.30236 8.51656 9.31538 8.58283 9.34083 8.64469C9.36628 8.70654 9.40367 8.76278 9.45086 8.81019L9.97288 9.32205L9.29493 10L8.78985 9.49492C8.69411 9.39963 8.56442 9.34627 8.42934 9.34659C8.29425 9.3469 8.16482 9.40087 8.06952 9.49662C7.97423 9.59237 7.92087 9.72204 7.92119 9.85713C7.9215 9.99222 7.97547 10.1216 8.07122 10.2169L8.57629 10.722L7.89834 11.4L7.39326 10.8949C7.34629 10.8473 7.29033 10.8096 7.22866 10.7838C7.16698 10.758 7.10079 10.7448 7.03395 10.7448C6.9671 10.7448 6.90092 10.758 6.83924 10.7838C6.77756 10.8096 6.72161 10.8473 6.67463 10.8949C6.58023 10.9907 6.52731 11.1197 6.52731 11.2542C6.52731 11.3887 6.58023 11.5178 6.67463 11.6135L7.17971 12.1186L6.50175 12.7966L5.99668 12.2915C5.9497 12.2439 5.89375 12.2062 5.83207 12.1804C5.77039 12.1546 5.70421 12.1414 5.63736 12.1414C5.57051 12.1414 5.50433 12.1546 5.44265 12.1804C5.38097 12.2062 5.32502 12.2439 5.27805 12.2915C5.18365 12.3873 5.13073 12.5163 5.13073 12.6508C5.13073 12.7853 5.18365 12.9143 5.27805 13.0101L5.78312 13.5152L3.26791 16.0304C1.93031 14.5215 1.14399 12.6035 1.03744 10.5898ZM4.01705 16.6914L6.53226 14.1762L7.03734 14.6813C7.13322 14.7757 7.26207 14.8292 7.39665 14.8304C7.49715 14.8303 7.59537 14.8005 7.67891 14.7446C7.76244 14.6887 7.82755 14.6093 7.86599 14.5165C7.90444 14.4236 7.91451 14.3215 7.89493 14.2229C7.87534 14.1243 7.82699 14.0338 7.75597 13.9626L7.25089 13.4576L7.92885 12.7796L8.43392 13.2847C8.52981 13.3791 8.65865 13.4326 8.79324 13.4338C8.89374 13.4338 8.99196 13.4039 9.07549 13.348C9.15903 13.2921 9.22413 13.2128 9.26258 13.1199C9.30103 13.027 9.3111 12.9249 9.29151 12.8263C9.27193 12.7277 9.22358 12.6372 9.15256 12.5661L8.64409 12.0813L9.32205 11.4034L9.82712 11.9084C9.92304 12.0039 10.0528 12.0574 10.1881 12.0574C10.3234 12.0574 10.4532 12.0039 10.5491 11.9084C10.6435 11.8127 10.6965 11.6836 10.6965 11.5491C10.6965 11.4147 10.6435 11.2856 10.5491 11.1898L10.0441 10.6847L10.722 10.0068L11.2271 10.5119C11.3125 10.6077 11.4314 10.6671 11.5593 10.678C11.6598 10.6779 11.758 10.648 11.8415 10.5921C11.9251 10.5362 11.9902 10.4569 12.0286 10.364C12.0671 10.2712 12.0772 10.169 12.0576 10.0704C12.038 9.97184 11.9896 9.88128 11.9186 9.81017L11.4135 9.32205L12.0915 8.64409L12.5966 9.14917C12.6432 9.19717 12.6991 9.23516 12.7608 9.26081C12.8226 9.28645 12.889 9.29922 12.9559 9.29832C13.0227 9.29882 13.089 9.28588 13.1507 9.26026C13.2124 9.23463 13.2684 9.19685 13.3152 9.14917C13.4096 9.0534 13.4625 8.92432 13.4625 8.78985C13.4625 8.65538 13.4096 8.52631 13.3152 8.43054L12.8101 7.92546L13.4881 7.2475L13.9932 7.75258C14.0397 7.80058 14.0956 7.83857 14.1574 7.86422C14.2192 7.88986 14.2856 7.90263 14.3525 7.90173C14.4193 7.90224 14.4856 7.88929 14.5473 7.86367C14.609 7.83805 14.665 7.80027 14.7118 7.75258C14.8062 7.65681 14.8591 7.52774 14.8591 7.39326C14.8591 7.25879 14.8062 7.12972 14.7118 7.03395L14.2067 6.52887L16.7219 4.01366C18.0594 5.50674 18.8558 7.40631 18.9829 9.40679C16.4792 9.50753 14.1049 10.5461 12.3316 12.3164C10.5582 14.0866 9.51536 16.459 9.41018 18.9626C7.40969 18.8354 5.51013 18.0391 4.01705 16.7016V16.6914Z"
										fill="currentColor"
									></path>
								</g>
							</svg>
						</div>
						<span class="text_671ed">Baseball</span>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						class="arrow-icon_ca7fc"
					>
						<g clip-path="url(#clip0_301_20250)">
							<path
								d="M1.37367 6L5 2.58628L8.62633 6L10 4.70686L5 4.37114e-07L-1.1305e-07 4.70686L1.37367 6Z"
								fill="currentColor"
							></path>
						</g>
					</svg>
				</div>
				<div style={!baseball_accordian ? 'display: none;' : null}>
					<div class="sport-content-container_99a78">
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Baseball</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">20391</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Doosan Bears</div>
												<div class="participant-score_11e98">4</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Lotte Giants</div>
												<div class="participant-score_11e98">0</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.07</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>6.50</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">2/9</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260507143"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260507143" class="link_0eccd"
												>+6
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Samsung Lions</div>
												<div class="participant-score_11e98">4</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Hanwha Eagles</div>
												<div class="participant-score_11e98">1</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.14</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>4.85</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">3/9</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260507144"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260507144" class="link_0eccd"
												>+6
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">NC Dinos</div>
												<div class="participant-score_11e98">2</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Kia Tigers</div>
												<div class="participant-score_11e98">2</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.60</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>2.15</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">3/9</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260507145"
												><svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg></a
											>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<a href="/live/260507145" class="link_0eccd"
												>+6
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
							</div>
							<button class="show-more-events-btn_07767"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									width="6"
									height="4"
									viewBox="0 0 6 4"
									fill="none"
									class="icon_51db0"
								>
									<path
										d="M2.29289 3.29289L0.707107 1.70711C0.0771422 1.07714 0.523309 0 1.41421 0L4.58579 0C5.47669 0 5.92286 1.07714 5.29289 1.70711L3.70711 3.29289C3.31658 3.68342 2.68342 3.68342 2.29289 3.29289Z"
										fill="currentColor"
									></path>
								</svg><span class="text_671ed">Show more <span class="ttl">Events</span></span><svg
									xmlns="http://www.w3.org/2000/svg"
									width="6"
									height="4"
									viewBox="0 0 6 4"
									fill="none"
									class="icon_51db0"
								>
									<path
										d="M2.29289 3.29289L0.707107 1.70711C0.0771422 1.07714 0.523309 0 1.41421 0L4.58579 0C5.47669 0 5.92286 1.07714 5.29289 1.70711L3.70711 3.29289C3.31658 3.68342 2.68342 3.68342 2.29289 3.29289Z"
										fill="currentColor"
									></path>
								</svg></button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<div>
			<div class="sport-block_34349">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class={rugby_league_accordian ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
					on:click={() => (rugby_league_accordian = !rugby_league_accordian)}
				>
					<div class="df aic" style="display: flex; align-items: center;">
						<div>
							<svg
								version="1.1"
								x="0px"
								y="0px"
								viewBox="0 0 20 20"
								fill="none"
								class="sport-icon_91f85"
							>
								<path
									d="M19.9,5.5c0,0-0.1-1.1-0.8-1.7c-0.2-0.2-0.6-0.4-0.8-0.5c-1.4-0.7-6-2.7-11.5,0.1c0,0-5,2.5-6.5,8.9 c0,0-0.6,2.5-0.1,3.1c0,0,3.2,4.2,11.6,1.7c0.2-0.1,2.1-0.7,3.7-2C16.9,14.2,20.6,9.8,19.9,5.5z M18.5,5.2c-1.1,4.5-5,7.4-5,7.4 c-3.5,3-9.3,2.7-10.9,2.6c-0.3,0-0.4-0.3-0.3-0.5c1.1-3.3,2.8-5.2,3.5-5.9c0.2-0.2,0.5-0.2,0.7,0c0.1,0.2,0.2,0.5,0.3,0.8 c0.1,0.3,0.3,0.3,0.4,0.1l0.5-0.6C8,8.9,8,8.6,7.9,8.3C7.8,8.2,7.8,8.1,7.7,7.9C7.6,7.7,7.6,7.4,7.8,7.3C7.9,7.2,8,7.1,8.1,7.1 c0.2-0.1,0.6-0.1,0.7,0.1c0,0.1,0.1,0.1,0.1,0.2c0.1,0.2,0.4,0.3,0.6,0.1l0.2-0.2C10,7.1,10,6.8,9.9,6.6c0,0,0,0,0,0 C9.7,6.4,9.7,6.1,10,6c0.1,0,0.2-0.1,0.3-0.1C10.5,5.8,10.9,5.8,11,6c0.1,0.2,0.4,0.3,0.6,0.2c0.2-0.1,0.3-0.3,0.1-0.5 c-0.1-0.2,0-0.4,0.2-0.5c0,0,0.1,0,0.1,0c0.2-0.1,0.6-0.1,0.7,0.1c0.1,0.2,0.4,0.2,0.6,0.1c0.2-0.1,0.3-0.2,0.2-0.3 c-0.1-0.1,0-0.2,0.3-0.3c0.2,0,0.5,0,0.5,0.1c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.2-0.1,0.1-0.2c-0.1-0.1,0.1-0.2,0.3-0.2 c0.1,0,0.2,0,0.4-0.1c0.3,0,0.3-0.1,0-0.1c-0.2,0-0.4,0-0.6,0c-0.3,0-0.5-0.1-0.6-0.1c-0.1-0.1-0.2-0.1-0.3-0.1 C14,4.3,14,4.3,14,4.4c0,0.1-0.1,0.1-0.4,0.1c-0.1,0-0.1,0-0.2,0c-0.3,0-0.5-0.1-0.6-0.2c-0.1-0.1-0.4-0.1-0.6-0.1l0,0 c-0.3,0-0.3,0.1-0.2,0.2c0.1,0.1,0,0.2-0.2,0.2c-0.1,0-0.2,0-0.3,0.1c-0.3,0-0.6,0-0.8-0.1c-0.2-0.1-0.5-0.1-0.7,0 C9.6,4.8,9.6,4.9,9.8,5C10,5,9.9,5.2,9.7,5.3L9.1,5.5c-0.2,0.1-0.6,0.1-0.8,0C8,5.4,7.7,5.5,7.4,5.6L7.1,5.7C6.9,5.8,6.9,6,7.2,6.1 c0.2,0.1,0.2,0.3,0,0.5L7,6.7C6.7,6.8,6.4,6.8,6.2,6.7c-0.2-0.1-0.6,0-0.8,0.1L4.8,7.3C4.6,7.4,4.6,7.5,4.9,7.6 c0.2,0.1,0.3,0.3,0,0.5c-1.1,0.9-2.5,2.6-3.1,3.3c-0.2,0.2-0.2,0.2-0.1-0.1C3.8,5.4,8.2,4,8.2,4c5.3-2.1,8.9-0.3,10.1,0.4 C18.5,4.6,18.6,5,18.5,5.2z"
									fill="currentColor"
								></path>
							</svg>
						</div>
						<span class="text_671ed">Rugby League</span>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="10"
						height="6"
						viewBox="0 0 10 6"
						fill="none"
						class="arrow-icon_ca7fc"
					>
						<g clip-path="url(#clip0_301_20250)">
							<path
								d="M1.37367 6L5 2.58628L8.62633 6L10 4.70686L5 4.37114e-07L-1.1305e-07 4.70686L1.37367 6Z"
								fill="currentColor"
							></path>
						</g>
					</svg>
				</div>
				<div style={!rugby_league_accordian ? 'display: none;' : null}>
					<div class="sport-content-container_99a78">
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Rugby League</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">15879</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">live</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="mra event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_3497d">
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Cronulla Sharks</div>
												<div class="participant-score_11e98">26</div>
											</div>
											<div class="participant-row_699dd">
												<div class="participant-name_cb1ff">Sydney Roosters</div>
												<div class="participant-score_11e98">24</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;"></div>
									</div>
									<div class="event-row-block_a3a29">
										<div
											class="df aife jcfs time_01da7"
											style="display: flex; align-items: flex-end; justify-content: flex-start;"
										>
											<span class="scope_dd115">Half time</span>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/live/260507135">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18842)">
														<path
															d="M4 9.14288H0.571429C0.255837 9.14288 0 9.39872 0 9.71431V15.4286C0 15.7442 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7442 4.57143 15.4286V9.71431C4.57143 9.39872 4.31559 9.14288 4 9.14288Z"
															fill="currentColor"
														></path>
														<path
															d="M15.4287 4.57141H12.0001C11.6845 4.57141 11.4287 4.82725 11.4287 5.14284V15.4286C11.4287 15.7441 11.6845 16 12.0001 16H15.4287C15.7443 16 16.0001 15.7441 16.0001 15.4286V5.14284C16.0001 4.82725 15.7443 4.57141 15.4287 4.57141Z"
															fill="currentColor"
														></path>
														<path
															d="M9.71436 0H6.28578C5.97019 0 5.71436 0.255837 5.71436 0.571429V15.4286C5.71436 15.7442 5.97019 16 6.28578 16H9.71436C10.0299 16 10.2858 15.7442 10.2858 15.4286V0.571429C10.2858 0.255837 10.0299 0 9.71436 0Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</a>
											<div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="14"
													viewBox="0 0 16 14"
													fill="none"
													color="#AEBBC2"
													class="event-row-icon_0550b"
												>
													<g clip-path="url(#clip0_301_18745)">
														<path
															d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3094 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129Z"
															fill="currentColor"
														></path>
													</g>
												</svg>
											</div>
											<div></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
