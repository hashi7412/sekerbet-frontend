<script>
	export let time;
	export let date;
	export let participants;
	export let league;
	export let outcome1;
	export let outcomex;
	export let outcome2;
	export let prelive;
</script>

<div class="event-row_f3dbf">
	<span class="time-column_34db2 time-container_a18e8">
		<div class="event-time_eebcf">{time}</div>
		<div class="event-date_cb2c9"><span></span></div>
		<div class="event-date_cb2c9"><span>Thu</span><span>09 May</span></div>
	</span>
	<div class="participants-container_ac0b6">
		<div class="participants_04d41">
			{participants}
			<div class="league_b8f7e">{league}</div>
		</div>
	</div>
	<div class="vidgets-column_35d75">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			color="#AEBBC2"
			class="statistic-icon_eab3c"
		>
			<g clip-path="url(#clip0_31_1789)">
				<path
					d="M4 9.14282H0.571429C0.255837 9.14282 0 9.39866 0 9.71425V15.4285C0 15.7441 0.255837 16 0.571429 16H4C4.31559 16 4.57143 15.7441 4.57143 15.4285V9.71425C4.57143 9.39866 4.31559 9.14282 4 9.14282Z"
					fill="currentColor"
				></path>
				<path
					d="M15.4286 4.57153H12C11.6844 4.57153 11.4286 4.82737 11.4286 5.14296V15.4287C11.4286 15.7443 11.6844 16.0001 12 16.0001H15.4286C15.7442 16.0001 16 15.7443 16 15.4287V5.14296C16 4.82737 15.7442 4.57153 15.4286 4.57153Z"
					fill="currentColor"
				></path>
				<path
					d="M9.71423 0H6.28566C5.97007 0 5.71423 0.255837 5.71423 0.571429V15.4286C5.71423 15.7442 5.97007 16 6.28566 16H9.71423C10.0298 16 10.2857 15.7442 10.2857 15.4286V0.571429C10.2857 0.255837 10.0298 0 9.71423 0Z"
					fill="currentColor"
				></path>
			</g>
		</svg>
		<button>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="14"
				viewBox="0 0 16 14"
				fill="none"
				color="#AEBBC2"
				class="like-icon_c9b0d"
			>
				<g clip-path="url(#clip0_31_936)">
					<path
						d="M4.81785 1.2878C5.79526 1.30738 6.74731 1.74185 7.42975 2.89509C7.68333 3.32283 8.31628 3.32283 8.57087 2.89509C9.25352 1.74205 10.2056 1.30758 11.1828 1.2878C12.1602 1.26702 13.1607 1.71653 13.7778 2.43985C14.9687 3.83723 15.1208 6.27924 13.3774 7.99L8.00021 12.5084L2.62223 7.99C0.879809 6.27943 1.03094 3.83723 2.22278 2.43985C2.8399 1.71653 3.84044 1.26702 4.81785 1.2878V1.2878ZM4.84625 0.00101129C3.44952 -0.028072 2.09396 0.580105 1.20845 1.61761C-0.429287 3.53849 -0.527677 6.7327 1.69127 8.90385C1.70304 8.91552 1.71562 8.9266 1.7284 8.93788L7.57034 13.8446C7.81763 14.0518 8.1832 14.0518 8.43029 13.8446L14.2732 8.93788C14.286 8.9266 14.2976 8.91552 14.3093 8.90385C16.5283 6.7325 16.4287 3.53849 14.7912 1.61761C13.9069 0.579907 12.5501 -0.0282698 11.1542 0.00101129C9.99621 0.024357 8.87943 0.651922 8.00021 1.67933C7.12119 0.651922 6.00441 0.024357 4.84625 0.00101129V0.00101129Z"
						fill="currentColor"
					></path>
				</g>
			</svg>
		</button>
	</div>
	<div class="market_4f256">
		<div class="outcome-column_2b3bb"><button class="outcome_0a2ab">{outcome1}</button></div>
		<div class="outcome-column_2b3bb"><button class="outcome_0a2ab">{outcomex}</button></div>
		<div class="outcome-column_2b3bb"><button class="outcome_0a2ab">{outcome2}</button></div>
	</div>
	<div class="link-container_ef859">
		<a href="/prelive/260494541" class="link_35124">+ {prelive}</a>
	</div>
</div>
