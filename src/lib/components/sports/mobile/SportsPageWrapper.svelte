<script>
	let soccer_accordian_1 = true;
	let soccer_accordian_2 = true;
	let soccer_accordian_3 = true;
	let basketball_accordian_1 = false;
	let basketball_accordian_2 = false;
	let basketball_accordian_3 = false;
	let tennis_accordian_1 = false;
	let tennis_accordian_2 = false;
	let tennis_accordian_3 = false;
</script>

<div class="pt0 pb8 sport-page-wrapper_8f304" style="padding-bottom: 8px;">
	<div class="sport-page-block-header_c3367">
		<div class="event-section-title_30224">
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
		<a href="/live" class="page-link_20e03">All</a>
	</div>
	<div>
		<div>
			<div class="sport-block_34349">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class={soccer_accordian_1 ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
					on:click={() => (soccer_accordian_1 = !soccer_accordian_1)}
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
				<div style={!soccer_accordian_1 ? 'display: none;' : ''}>
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
											<span class="scope_minute_9b2f2">21'</span>
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
													<button class="outcome_06615 lock_e0b11">
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
													<button class="outcome_06615 lock_e0b11">
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
													<button class="outcome_06615 lock_e0b11">
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
											<span class="scope_minute_9b2f2">90'+18</span>
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
					class={basketball_accordian_1 ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
					on:click={() => (basketball_accordian_1 = !basketball_accordian_1)}
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
				<div style={!basketball_accordian_1 ? 'display: none;' : ''}>
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
													<button class="outcome_06615 lock_e0b11">
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
													<button class="outcome_06615 lock_e0b11">
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
												<div class="participant-score_11e98">84</div>
											</div>
										</div>
										<div class="df jcfe" style="display: flex; justify-content: flex-end;">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>9.50</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>1.04</span>
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
											<span class="scope_minute_9b2f2">&lt;7'</span>
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
					class={tennis_accordian_1 ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
					on:click={() => (tennis_accordian_1 = !tennis_accordian_1)}
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
				<div style={!tennis_accordian_1 ? 'display: none;' : ''}>
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
										<div class="df jcfe" style="display: flex; justify-content: flex-end;"></div>
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
											<div></div>
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
															<span class="outcome-title_93ed1"> 1</span><span>1.10</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>6.00</span>
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
															<span class="outcome-title_93ed1"> 1</span><span>1.03</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>9.00</span>
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
													<button class="outcome_06615 lock_e0b11">
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
													<button class="outcome_06615 lock_e0b11">
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
												>+3
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
	<button class="show-more-leagues-btn_4a669"><span class="text_8d687">Show more </span></button>
	<div class="sport-page-block-header_c3367">
		<div class="event-section-title_30224">
			<div class="event-section-title-left_48357">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="18"
					viewBox="0 0 12 12"
					fill="none"
				>
					<g clip-path="url(#clip0_301_19196)">
						<path
							d="M0.35104 9.23997H9.53895C9.62136 9.23997 9.701 9.21045 9.76417 9.15664C9.85242 9.08097 11.8655 7.30773 11.9882 3.47998H2.1206C1.99832 6.95455 0.144382 8.5877 0.125116 8.60399C0.0121656 8.70172 -0.029391 8.86134 0.0214238 9.00338C0.071887 9.14505 0.203401 9.23997 0.35104 9.23997Z"
							fill="currentColor"
						></path>
						<path
							d="M11.6484 1.3201H9.89048V0.960097C9.89048 0.758497 9.73579 0.600098 9.53891 0.600098C9.34202 0.600098 9.18733 0.758497 9.18733 0.960097V1.3201H7.406V0.960097C7.406 0.758497 7.2513 0.600098 7.05442 0.600098C6.85754 0.600098 6.70284 0.758497 6.70284 0.960097V1.3201H4.94495V0.960097C4.94495 0.758497 4.79026 0.600098 4.59337 0.600098C4.39649 0.600098 4.24179 0.758497 4.24179 0.960097V1.3201H2.4839C2.28702 1.3201 2.13232 1.4785 2.13232 1.6801V2.76009H12V1.6801C12 1.4785 11.8453 1.3201 11.6484 1.3201Z"
							fill="currentColor"
						></path>
						<path
							d="M10.2156 9.70876C10.0247 9.87153 9.78508 9.96014 9.53891 9.96014H2.13232V11.0401C2.13232 11.2391 2.28957 11.4001 2.4839 11.4001H11.6484C11.8427 11.4001 12 11.2391 12 11.0401V7.00464C11.3221 8.70746 10.3762 9.57112 10.2156 9.70876Z"
							fill="currentColor"
						></path>
					</g>
				</svg>
				<h2 class="title_7dac3">Upcoming events</h2>
			</div>
		</div>
		<a href="/prelive/last_minute" class="page-link_20e03">All</a>
	</div>
	<div>
		<div>
			<div class="sport-block_34349">
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class={soccer_accordian_2 ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
					on:click={() => (soccer_accordian_2 = !soccer_accordian_2)}
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
				<div style={!soccer_accordian_2 ? 'display: none;' : ''}>
					<div class="sport-content-container_99a78">
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Soccer</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">45960</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb">
												<span>Queensland Lions</span>
											</div>
											<div class="participant_00705"><span>Gold Coast Knights</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>2.64</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> X</span><span>3.72</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>2.20</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260508378"
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
											<a href="/prelive/260508378" class="link_0eccd">+201 <span>Market</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Soccer</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">19729</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb"><span>Hume City</span></div>
											<div class="participant_00705"><span>Dandenong Thunder</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.46</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> X</span><span>4.33</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>5.40</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260508360"
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
											<a href="/prelive/260508360" class="link_0eccd">+189 <span>Market</span></a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Soccer</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">19978</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb"><span>Hills United</span></div>
											<div class="participant_00705"><span>Blacktown City Demons</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>7.90</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> X</span><span>5.70</span>
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
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260508381"
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
											<a href="/prelive/260508381" class="link_0eccd">+188 <span>Market</span></a>
										</div>
									</div>
								</div>
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb">
												<span>St. George Saints</span>
											</div>
											<div class="participant_00705"><span>Sutherland Sharks</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>2.17</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> X</span><span>3.58</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>2.76</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260508382"
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
											<a href="/prelive/260508382" class="link_0eccd">+198 <span>Market</span></a>
										</div>
									</div>
								</div>
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb">
												<span>Western Sydney Youth</span>
											</div>
											<div class="participant_00705"><span>Marconi Stallions</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>2.11</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> X</span><span>3.90</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>2.69</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260508383"
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
											<a href="/prelive/260508383" class="link_0eccd">+199 <span>Market</span></a>
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
					class={basketball_accordian_2 ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
					on:click={() => (basketball_accordian_2 = !basketball_accordian_2)}
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
				<div style={!basketball_accordian_2 ? 'display: none;' : ''}>
					<div class="sport-content-container_99a78">
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Basketball</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">45751</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb"><span>Pelita Jaya</span></div>
											<div class="participant_00705"><span>Hangtuah</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.08</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>6.65</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260548152"
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
											<a href="/prelive/260548152" class="link_0eccd"
												>+4
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb"><span>Bali United</span></div>
											<div class="participant_00705"><span>Tangerang Hawks</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.47</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>2.52</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">14:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260548153"
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
											<a href="/prelive/260548153" class="link_0eccd"
												>+4
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb"><span>Rans PIK</span></div>
											<div class="participant_00705">
												<span>Satya Wacana Angsapura Salatiga</span>
											</div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.30</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>3.25</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">16:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260548154"
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
											<a href="/prelive/260548154" class="link_0eccd"
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
									<li class="breadcrumbs-item_b91db white_e0c7c">Basketball</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">2308575</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb">
												<span>Hsinchu Lioneers</span>
											</div>
											<div class="participant_00705"><span>Formosa Dreamers</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>2.91</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>1.36</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260506434"
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
											<a href="/prelive/260506434" class="link_0eccd"
												>+17
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
									<li class="breadcrumbs-item_b91db white_e0c7c">20382</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb"><span>Bendigo Braves</span></div>
											<div class="participant_00705"><span>Casey Cavaliers</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.41</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>2.72</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260506435"
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
											<a href="/prelive/260506435" class="link_0eccd"
												>+53
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb">
												<span>Geelong Supercats</span>
											</div>
											<div class="participant_00705"><span>Nunawading Spectres</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.98</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>1.75</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260506436"
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
											<a href="/prelive/260506436" class="link_0eccd"
												>+51
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb">
												<span>Maitland Mustangs</span>
											</div>
											<div class="participant_00705"><span>Penrith Panthers</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615 lock_e0b11">
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
													<button class="outcome_06615 lock_e0b11">
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
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260506450"
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
											<a href="/prelive/260506450" class="link_0eccd"
												>+44
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
					class={tennis_accordian_2 ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
					on:click={() => (tennis_accordian_2 = !tennis_accordian_2)}
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
				<div style={!tennis_accordian_2 ? 'display: none;' : ''}>
					<div class="sport-content-container_99a78">
						<div>
							<div class="league-header_f52bf">
								<ul class="breadcrumbs_9d2fa">
									<li class="breadcrumbs-item_b91db white_e0c7c">Tennis</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">1885352</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb">
												<span>Hamza Reguig, Samir</span>
											</div>
											<div class="participant_00705"><span>Paolini, Andrea</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.33</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>3.08</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260549995"
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
											<a href="/prelive/260549995" class="link_0eccd"
												>+1
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb"><span>Rivet, Maxence</span></div>
											<div class="participant_00705"><span>Rossi, Leonardo</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.59</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>2.23</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260551044"
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
											<a href="/prelive/260551044" class="link_0eccd"
												>+36
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
									<li class="breadcrumbs-item_b91db white_e0c7c">47723</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb">
												<span>Bhambri Y / Olivetti A</span>
											</div>
											<div class="participant_00705"><span>Arribage T / Cornea V V</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.59</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>2.23</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260550987"
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
											<a href="/prelive/260550987" class="link_0eccd"
												>+1
												<span>Market</span></a
											>
										</div>
									</div>
								</div>
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb">
												<span>Barrientos N / Cabral F</span>
											</div>
											<div class="participant_00705"><span>Halys Q / Mahut N</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.68</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>2.08</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:20 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260550988"
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
											<a href="/prelive/260550988" class="link_0eccd"
												>+1
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
									<li class="breadcrumbs-item_b91db white_e0c7c">111637</li>
									<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
								</ul>
							</div>
							<div class="sport-league-event-container_e1676">
								<div class="event-row_3b5cc">
									<div class="event-row-block_a3a29">
										<div class="participants_84dd9">
											<div class="participant_00705 home_ab9cb">
												<span>Donald M W / Kalina V</span>
											</div>
											<div class="participant_00705"><span>Campana F / de Vincentis M</span></div>
										</div>
										<div class="df">
											<div class="market_7e3b9">
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 1</span><span>1.59</span>
														</div>
													</button>
												</div>
												<div class="outcome-column_45ba9">
													<button class="outcome_06615">
														<div>
															<span class="outcome-title_93ed1"> 2</span><span>2.23</span>
														</div>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div class="event-row-block_a3a29">
										<div class="df aife jcfs">
											<span class="mr3 time_01da7">12:00 -</span><span class="time_01da7 date_a721c"
												><span>Sat</span>, 18 May</span
											>
										</div>
										<div
											class="df aife jcfe"
											style="display: flex; align-items: flex-end; justify-content: flex-end;"
										>
											<a href="/prelive/260550973"
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
											<a href="/prelive/260550973" class="link_0eccd"
												>+1
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
	<button class="show-more-leagues-btn_4a669"><span class="text_8d687">Show more</span></button>
	<div class="sport-page-block-header_c3367">
		<div class="event-section-title_30224">
			<div class="event-section-title-left_48357">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="18"
					viewBox="0 0 20 12"
					fill="none"
				>
					<g clip-path="url(#clip0_105_1391)">
						<path
							d="M1.00001 12C0.744083 12 0.488161 11.9024 0.292885 11.7071C-0.0976283 11.3166 -0.0976283 10.6834 0.292885 10.2929L6.2929 4.29288C6.48045 4.10537 6.73478 3.99999 7.00002 3.99999C7.26527 3.99999 7.5196 4.10537 7.70715 4.29288L11 7.58579L16.5858 2.00003H11C10.4477 2.00003 10 1.55232 10 1.00002C10 0.447713 10.4477 0 11 0H19C19.1395 0 19.2724 0.0285999 19.3931 0.0801936C19.3934 0.0803451 19.3937 0.0804588 19.394 0.0805725C19.3943 0.0806861 19.3947 0.0808755 19.395 0.0810271C19.5049 0.128189 19.608 0.195957 19.6985 0.284333C19.6987 0.284523 19.6988 0.284636 19.699 0.284826C19.6996 0.285356 19.7001 0.285849 19.7006 0.286379C19.7009 0.286682 19.7012 0.287023 19.7015 0.287326C19.702 0.287743 19.7023 0.288121 19.7027 0.2885C19.7032 0.288917 19.7036 0.289409 19.704 0.289826C19.7043 0.290129 19.7046 0.290356 19.7049 0.290659C19.7056 0.291379 19.7064 0.292137 19.7071 0.292856C19.7078 0.293576 19.7086 0.294334 19.7093 0.295054C19.7096 0.295395 19.7101 0.295849 19.7104 0.29619C19.7108 0.296531 19.7111 0.296872 19.7114 0.297213C19.712 0.297743 19.7125 0.298236 19.713 0.298804C19.7132 0.298955 19.7134 0.299183 19.7135 0.299372C19.7142 0.300054 19.7148 0.300698 19.7155 0.30138C19.7155 0.301418 19.7155 0.301418 19.7156 0.301456C19.8054 0.393544 19.874 0.498625 19.9213 0.610601C19.9215 0.610904 19.9216 0.611245 19.9217 0.611548C19.9219 0.611889 19.922 0.612268 19.9222 0.612608C19.9723 0.731782 20 0.862622 20 0.999978V8.99999C20 9.55229 19.5522 10 19 10C18.4477 10 18 9.55225 18 8.99999V3.41424L11.7071 9.70711C11.5196 9.89466 11.2653 10 11 10C10.7348 10 10.4804 9.89466 10.2929 9.70711L6.99999 6.41425L1.70713 11.7071C1.51189 11.9024 1.25597 12 1.00001 12Z"
							fill="currentColor"
						></path>
					</g>
				</svg>
				<h2 class="title_7dac3">Popular Bets</h2>
			</div>
		</div>
	</div>
	<div>
		<div class="sport-block_34349">
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class={soccer_accordian_3 ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
				on:click={() => (soccer_accordian_3 = !soccer_accordian_3)}
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
			<div style={!soccer_accordian_3 ? 'display: none;' : ''}>
				<div class="sport-content-container_99a78">
					<div>
						<div class="league-header_f52bf">
							<ul class="breadcrumbs_9d2fa">
								<li class="breadcrumbs-item_b91db white_e0c7c">Soccer</li>
								<li class="breadcrumbs-item_b91db white_e0c7c">15789</li>
								<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
							</ul>
						</div>
						<div class="sport-league-event-container_e1676">
							<div class="event-row_3b5cc">
								<div class="event-row-block_a3a29">
									<div class="participants_84dd9">
										<div class="participant_00705 home_ab9cb"><span>Besiktas</span></div>
										<div class="participant_00705"><span>Hatayspor</span></div>
									</div>
									<div class="df">
										<div class="market_7e3b9">
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 1</span><span>1.50</span></div>
												</button>
											</div>
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> X</span><span>4.70</span></div>
												</button>
											</div>
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 2</span><span>5.70</span></div>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div class="event-row-block_a3a29">
									<div class="df aife jcfs">
										<span class="mr3 time_01da7">19:00 -</span><span class="time_01da7 date_a721c"
											><span>Sat</span>, 18 May</span
										>
									</div>
									<div
										class="df aife jcfe"
										style="display: flex; align-items: flex-end; justify-content: flex-end;"
									>
										<a href="/prelive/260509302"
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
										<a href="/prelive/260509302" class="link_0eccd"
											>+247
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
								<li class="breadcrumbs-item_b91db white_e0c7c">15619</li>
								<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
							</ul>
						</div>
						<div class="sport-league-event-container_e1676">
							<div class="event-row_3b5cc">
								<div class="event-row-block_a3a29">
									<div class="participants_84dd9">
										<div class="participant_00705 home_ab9cb"><span>Bolton</span></div>
										<div class="participant_00705"><span>Oxford United</span></div>
									</div>
									<div class="df">
										<div class="market_7e3b9">
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 1</span><span>1.89</span></div>
												</button>
											</div>
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> X</span><span>3.68</span></div>
												</button>
											</div>
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 2</span><span>3.94</span></div>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div class="event-row-block_a3a29">
									<div class="df aife jcfs">
										<span class="mr3 time_01da7">18:15 -</span><span class="time_01da7 date_a721c"
											><span>Sat</span>, 18 May</span
										>
									</div>
									<div
										class="df aife jcfe"
										style="display: flex; align-items: flex-end; justify-content: flex-end;"
									>
										<a href="/prelive/260541163"
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
										<a href="/prelive/260541163" class="link_0eccd"
											>+221
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
								<li class="breadcrumbs-item_b91db white_e0c7c">19659</li>
								<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
							</ul>
						</div>
						<div class="sport-league-event-container_e1676">
							<div class="event-row_3b5cc">
								<div class="event-row-block_a3a29">
									<div class="participants_84dd9">
										<div class="participant_00705 home_ab9cb"><span>Bristol City (w)</span></div>
										<div class="participant_00705"><span>Everton (w)</span></div>
									</div>
									<div class="df">
										<div class="market_7e3b9">
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 1</span><span>4.60</span></div>
												</button>
											</div>
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> X</span><span>4.05</span></div>
												</button>
											</div>
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 2</span><span>1.62</span></div>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div class="event-row-block_a3a29">
									<div class="df aife jcfs">
										<span class="mr3 time_01da7">17:00 -</span><span class="time_01da7 date_a721c"
											><span>Sat</span>, 18 May</span
										>
									</div>
									<div
										class="df aife jcfe"
										style="display: flex; align-items: flex-end; justify-content: flex-end;"
									>
										<a href="/prelive/260508090"
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
										<a href="/prelive/260508090" class="link_0eccd"
											>+71
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
	<div>
		<div class="sport-block_34349">
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class={basketball_accordian_3 ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
				on:click={() => (basketball_accordian_3 = !basketball_accordian_3)}
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
			<div style={!basketball_accordian_3 ? 'display: none;' : ''}>
				<div class="sport-content-container_99a78">
					<div>
						<div class="league-header_f52bf">
							<ul class="breadcrumbs_9d2fa">
								<li class="breadcrumbs-item_b91db white_e0c7c">Basketball</li>
								<li class="breadcrumbs-item_b91db white_e0c7c">16077</li>
								<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
							</ul>
						</div>
						<div class="sport-league-event-container_e1676">
							<div class="event-row_3b5cc">
								<div class="event-row-block_a3a29">
									<div class="participants_84dd9">
										<div class="participant_00705 home_ab9cb"><span>Petkim Spor</span></div>
										<div class="participant_00705"><span>Fenerbahce</span></div>
									</div>
									<div class="df">
										<div class="market_7e3b9">
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 1</span><span>4.95</span></div>
												</button>
											</div>
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 2</span><span>1.16</span></div>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div class="event-row-block_a3a29">
									<div class="df aife jcfs">
										<span class="mr3 time_01da7">18:00 -</span><span class="time_01da7 date_a721c"
											><span>Sat</span>, 18 May</span
										>
									</div>
									<div
										class="df aife jcfe"
										style="display: flex; align-items: flex-end; justify-content: flex-end;"
									>
										<a href="/prelive/260545685"
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
										<a href="/prelive/260545685" class="link_0eccd"
											>+75
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
								<li class="breadcrumbs-item_b91db white_e0c7c">15977</li>
								<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
							</ul>
						</div>
						<div class="sport-league-event-container_e1676">
							<div class="event-row_3b5cc">
								<div class="event-row-block_a3a29">
									<div class="participants_84dd9">
										<div class="participant_00705 home_ab9cb"><span>Derthona Tortona</span></div>
										<div class="participant_00705"><span>Virtus Bologna</span></div>
									</div>
									<div class="df">
										<div class="market_7e3b9">
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 1</span><span>2.63</span></div>
												</button>
											</div>
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 2</span><span>1.49</span></div>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div class="event-row-block_a3a29">
									<div class="df aife jcfs">
										<span class="mr3 time_01da7">21:00 -</span><span class="time_01da7 date_a721c"
											><span>Sat</span>, 18 May</span
										>
									</div>
									<div
										class="df aife jcfe"
										style="display: flex; align-items: flex-end; justify-content: flex-end;"
									>
										<a href="/prelive/260550916"
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
										<a href="/prelive/260550916" class="link_0eccd"
											>+78
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
								<li class="breadcrumbs-item_b91db white_e0c7c">53458</li>
								<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
							</ul>
						</div>
						<div class="sport-league-event-container_e1676">
							<div class="event-row_3b5cc">
								<div class="event-row-block_a3a29">
									<div class="participants_84dd9">
										<div class="participant_00705 home_ab9cb">
											<span>Pallacanestro Trapani</span>
										</div>
										<div class="participant_00705"><span>Tezenis Verona</span></div>
									</div>
									<div class="df">
										<div class="market_7e3b9">
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 1</span><span>1.21</span></div>
												</button>
											</div>
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 2</span><span>4.00</span></div>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div class="event-row-block_a3a29">
									<div class="df aife jcfs">
										<span class="mr3 time_01da7">21:30 -</span><span class="time_01da7 date_a721c"
											><span>Sat</span>, 18 May</span
										>
									</div>
									<div
										class="df aife jcfe"
										style="display: flex; align-items: flex-end; justify-content: flex-end;"
									>
										<a href="/prelive/260547476"
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
										<a href="/prelive/260547476" class="link_0eccd"
											>+60
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
	<div>
		<div class="sport-block_34349">
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class={tennis_accordian_3 ? 'sport-header_388ee open_d8169' : 'sport-header_388ee'}
				on:click={() => (tennis_accordian_3 = !tennis_accordian_3)}
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
			<div style={!tennis_accordian_3 ? 'display: none;' : ''}>
				<div class="sport-content-container_99a78">
					<div>
						<div class="league-header_f52bf">
							<ul class="breadcrumbs_9d2fa">
								<li class="breadcrumbs-item_b91db white_e0c7c">Tennis</li>
								<li class="breadcrumbs-item_b91db white_e0c7c">18970</li>
								<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
							</ul>
						</div>
						<div class="sport-league-event-container_e1676">
							<div class="event-row_3b5cc">
								<div class="event-row-block_a3a29">
									<div class="participants_84dd9">
										<div class="participant_00705 home_ab9cb"><span>Shnaider, Diana</span></div>
										<div class="participant_00705"><span>Gracheva, Varvara</span></div>
									</div>
									<div class="df">
										<div class="market_7e3b9">
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 1</span><span>1.39</span></div>
												</button>
											</div>
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 2</span><span>2.84</span></div>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div class="event-row-block_a3a29">
									<div class="df aife jcfs">
										<span class="mr3 time_01da7">13:30 -</span><span class="time_01da7 date_a721c"
											><span>Sat</span>, 18 May</span
										>
									</div>
									<div
										class="df aife jcfe"
										style="display: flex; align-items: flex-end; justify-content: flex-end;"
									>
										<a href="/prelive/260550963"
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
										<a href="/prelive/260550963" class="link_0eccd"
											>+61
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
								<li class="breadcrumbs-item_b91db white_e0c7c">32179</li>
								<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
							</ul>
						</div>
						<div class="sport-league-event-container_e1676">
							<div class="event-row_3b5cc">
								<div class="event-row-block_a3a29">
									<div class="participants_84dd9">
										<div class="participant_00705 home_ab9cb"><span>Swiatek, Iga</span></div>
										<div class="participant_00705"><span>Sabalenka, Aryna</span></div>
									</div>
									<div class="df">
										<div class="market_7e3b9">
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 1</span><span>1.28</span></div>
												</button>
											</div>
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 2</span><span>3.82</span></div>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div class="event-row-block_a3a29">
									<div class="df aife jcfs">
										<span class="mr3 time_01da7">18:00 -</span><span class="time_01da7 date_a721c"
											><span>Sat</span>, 18 May</span
										>
									</div>
									<div
										class="df aife jcfe"
										style="display: flex; align-items: flex-end; justify-content: flex-end;"
									>
										<a href="/prelive/260550096"
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
										<a href="/prelive/260550096" class="link_0eccd"
											>+75
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
								<li class="breadcrumbs-item_b91db white_e0c7c">32452</li>
								<li class="breadcrumbs-item_b91db white_e0c7c">prelive</li>
							</ul>
						</div>
						<div class="sport-league-event-container_e1676">
							<div class="event-row_3b5cc">
								<div class="event-row-block_a3a29">
									<div class="participants_84dd9">
										<div class="participant_00705 home_ab9cb"><span>Royer, Valentin</span></div>
										<div class="participant_00705"><span>Roca Batalla, Oriol</span></div>
									</div>
									<div class="df">
										<div class="market_7e3b9">
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 1</span><span>1.67</span></div>
												</button>
											</div>
											<div class="outcome-column_45ba9">
												<button class="outcome_06615">
													<div><span class="outcome-title_93ed1"> 2</span><span>2.12</span></div>
												</button>
											</div>
										</div>
									</div>
								</div>
								<div class="event-row-block_a3a29">
									<div class="df aife jcfs">
										<span class="mr3 time_01da7">16:30 -</span><span class="time_01da7 date_a721c"
											><span>Sat</span>, 18 May</span
										>
									</div>
									<div
										class="df aife jcfe"
										style="display: flex; align-items: flex-end; justify-content: flex-end;"
									>
										<a href="/prelive/260551075"
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
										<a href="/prelive/260551075" class="link_0eccd"
											>+53
											<span>Market</span>
										</a>
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
