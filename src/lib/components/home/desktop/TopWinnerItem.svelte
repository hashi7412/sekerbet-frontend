<script>
	export let index;
	export let name;
	export let id;
	export let amount;
	export let gameName;
</script>

<div
	data-index={index}
	class="slick-slide slick-active slick-current"
	tabindex="-1"
	aria-hidden="false"
	style="outline: none; width: 272px;"
>
	<div>
		<div class="winner_5a4ee">
			<div class="user-wrapper_407a2">
				<div>
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.0002 0C4.477 0 8.98387e-08 4.47676 8.98387e-08 10C-0.000732332 15.5225 4.477 19.9993 10.0002 20C15.5232 20 20.001 15.5232 20 9.99927C20.001 4.47598 15.5223 0 10.0002 0ZM16.7757 14.8388L15.3747 13.82L11.9732 16.2915L12.5107 17.946C11.7182 18.1965 10.875 18.3333 9.99971 18.3333C9.12471 18.3333 8.28223 18.1965 7.4897 17.9467L8.02744 16.2915L4.625 13.82L3.22451 14.838C2.26001 13.4903 1.68452 11.8473 1.67002 10.0675L3.40679 10.0665L4.70552 6.06851L3.30576 5.05127C4.31328 3.68975 5.72227 2.64653 7.36177 2.09951L7.89824 3.75H12.1015L12.6377 2.09951C14.2782 2.64727 15.6868 3.69053 16.6942 5.05127L15.2942 6.06851L16.593 10.0665H18.3307C18.3163 11.8475 17.7405 13.4905 16.7757 14.8388Z"
							fill="#AEBBC2"
						></path>
						<path
							d="M12.0884 7.12573H7.88345L6.58545 11.1237L9.98647 13.5945L13.3875 11.1237L12.0884 7.12573Z"
							fill="#F0B905"
						></path>
					</svg>
				</div>
				<div class="user_bc16c">
					<span class="user-name_a777e">{name}</span><span class="user-id_21b33">{id}</span>
				</div>
			</div>
			<div class="winning-wrapper_e52c9">
				<span class="amount_551ea">{amount} TRY</span><span class="game-name_258bc">{gameName}</span
				>
			</div>
		</div>
	</div>
</div>
