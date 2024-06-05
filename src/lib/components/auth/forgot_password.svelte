<script>
	import LogoDark from '$lib/images/logo-dark.png';
</script>

<div class="main-content-wrapper_d5326 home-desktop">
	<div class="remember-me-bg_73b27">
		<form action="/" class="form-container_cad9f">
			<div>
				<img src={LogoDark} alt="betine site logo" class="mb24" style="margin-bottom: 24px;" />
			</div>
			<h2 class="remember-me-title_541e5">I forgot my password</h2>
			<p class="remember-me-subtitle_77ea4">
				Enter your registered e-mail address to reset your password.
			</p>
			<div class="input_66c15 control_e792d">
				<div class="control-placeholder_0e8e3">Email</div>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="icon_4d07b"
				>
					<path
						d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16H12V14.4H8C4.528 14.4 1.6 11.472 1.6 8C1.6 4.528 4.528 1.6 8 1.6C11.472 1.6 14.4 4.528 14.4 8V9.144C14.4 9.776 13.832 10.4 13.2 10.4C12.568 10.4 12 9.776 12 9.144V8C12 5.792 10.208 4 8 4C5.792 4 4 5.792 4 8C4 10.208 5.792 12 8 12C9.104 12 10.112 11.552 10.832 10.824C11.352 11.536 12.248 12 13.2 12C14.776 12 16 10.72 16 9.144V8C16 3.584 12.416 0 8 0ZM8 10.4C6.672 10.4 5.6 9.328 5.6 8C5.6 6.672 6.672 5.6 8 5.6C9.328 5.6 10.4 6.672 10.4 8C10.4 9.328 9.328 10.4 8 10.4Z"
						fill="#4F6069"
					></path>
				</svg>
				<input type="email" class="control-input_875d5" name="email" placeholder="Email" value="" />
			</div>
			<button type="submit" class="login-button_2149b"> Reset Password </button>
			<a href="/login" class="login-link_1b0df"> Login </a>
		</form>
	</div>
</div>

<div class="main-content-wrapper_a4af2 forgot-password_6210a home-mobile">
	<div class="enter-email-wrapper_b0a5c container_b7192">
		<div class="header_26570">
			<div class="title_dc988">Forgot password?</div>
			<div class="subtitle_294f8">Please enter your Email address to reset your password.</div>
		</div>
		<form action="/">
			<div class="control-container_92697">
				<div class="control-placeholder_597d9">Email</div>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="icon_ba616"
				>
					<g clip-path="url(#clip0_301_9313)">
						<path
							d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20H15V18H10C5.66 18 2 14.34 2 10C2 5.66 5.66 2 10 2C14.34 2 18 5.66 18 10V11.43C18 12.22 17.29 13 16.5 13C15.71 13 15 12.22 15 11.43V10C15 7.24 12.76 5 10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C11.38 15 12.64 14.44 13.54 13.53C14.19 14.42 15.31 15 16.5 15C18.47 15 20 13.4 20 11.43V10C20 4.48 15.52 0 10 0ZM10 13C8.34 13 7 11.66 7 10C7 8.34 8.34 7 10 7C11.66 7 13 8.34 13 10C13 11.66 11.66 13 10 13Z"
							fill="#4F6069"
						></path>
					</g>
					<defs>
						<clippath id="clip0_301_9313">
							<rect width="20" height="20" fill="white"></rect>
						</clippath>
					</defs>
				</svg>
				<input
					type="email"
					name="email"
					placeholder="Email"
					class="control-input_84a73 control-input-with-Icon_56d8c"
				/>
			</div>
			<button
				type="submit"
				class="mt32 mb16 submit-button_05dd2"
				style="margin-top: 32px; margin-bottom: 16px;"
			>
				Reset Password
			</button>
		</form>
		<a href="/registration" class="registration-link_3f628"> Register </a>
	</div>
</div>
