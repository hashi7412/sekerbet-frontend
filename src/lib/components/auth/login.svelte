<script>
	import PasswordInput from '$lib/components/_utils/PasswordInput.svelte';
	import LogoDark from '$lib/images/logo-dark.png';
</script>

<div class="main-content-wrapper_d5326 home-desktop">
	<div class="login-bg_9c977 page-wrapper_5e55b">
		<div class="container_ac2c7 large_6e58f">
			<form autocomplete="off" class="form-container_9c7dc">
				<div class="logo_291c3">
					<img src={LogoDark} alt="betine site logo" class="mb24" style="margin-bottom: 24px;" />
				</div>
				<h2 class="login-title_02e77">Login</h2>
				<p class="login-subtitle_7c16a">Enter your information to participate in the games.</p>
				<div class="inputs-container_9059b">
					<div class="input-container_ce2f2">
						<div class="control-placeholder_0e8e3">Username</div>
						<div class="control-input input_07763 control_e792d">
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="icon_4d07b"
							>
								<g clip-path="url(#clip0_1_7559)">
									<path
										d="M8.00035 0C3.58234 0 0 3.58164 0 8C0 12.4184 3.58199 16 8.00035 16C12.4191 16 16.0007 12.4184 16.0007 8C16.0007 3.58164 12.4191 0 8.00035 0ZM8.00035 2.39209C9.46224 2.39209 10.6469 3.57707 10.6469 5.03826C10.6469 6.4998 9.46224 7.68443 8.00035 7.68443C6.53916 7.68443 5.35454 6.4998 5.35454 5.03826C5.35454 3.57707 6.53916 2.39209 8.00035 2.39209ZM7.99859 13.9084C6.54057 13.9084 5.20518 13.3774 4.17518 12.4985C3.92427 12.2845 3.77949 11.9707 3.77949 11.6414C3.77949 10.1595 4.97887 8.97342 6.46115 8.97342H9.54026C11.0229 8.97342 12.2177 10.1595 12.2177 11.6414C12.2177 11.971 12.0736 12.2841 11.8224 12.4981C10.7927 13.3774 9.45697 13.9084 7.99859 13.9084Z"
										fill="#4F6069"
									></path>
								</g>
								<defs>
									<clippath id="clip0_1_7559">
										<rect width="16.0007" height="16" fill="white"></rect>
									</clippath>
								</defs>
							</svg>
							<input
								type="text"
								class="control-input_875d5"
								name="username"
								placeholder="Username"
								value=""
							/>
						</div>
					</div>
					<div class="input-container_ce2f2">
						<div class="control-placeholder_0e8e3">Password</div>
						<PasswordInput
							wrapperClassName={'password-input_15530'}
							containerClassName={'control-input input_07763 control_e792d'}
							inputClassName={'control-input_875d5'}
						>
							<svg
								slot="prefix"
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="icon_4d07b"
							>
								<g clip-path="url(#clip0_1_7553)">
									<path
										d="M1.92224 14.8889L3.04355 16L4.16485 14.8889L3.04355 13.7778L4.16485 12.6668L5.28616 13.7778L6.40746 12.6668L5.28616 11.5557L9.85148 7.11139C11.6135 8.22247 14.0163 7.90502 15.2978 6.07968C16.1788 4.80988 16.2589 3.0639 15.3779 1.7941C13.9362 -0.348693 10.9728 -0.586781 9.21073 1.1592C7.84914 2.50836 7.68896 4.49242 8.73017 6.00031L0.24028 14.3334C-0.0800933 14.6508 -0.0800933 15.127 0.24028 15.4445C0.560653 15.7619 1.04121 15.7619 1.36159 15.4445L1.92224 14.8889ZM10.4121 2.34964C11.3732 1.47665 12.8149 1.47665 13.776 2.34964C14.7372 3.22262 14.7372 4.73051 13.776 5.6035C12.8149 6.47649 11.3732 6.47649 10.4121 5.6035C9.45101 4.73051 9.45101 3.22262 10.4121 2.34964Z"
										fill="#4F6069"
									></path>
								</g>
								<defs>
									<clippath id="clip0_1_7553">
										<rect width="16" height="16" fill="white"></rect>
									</clippath>
								</defs>
							</svg>
						</PasswordInput>
					</div>
				</div>
				<div class="checkbox-remember-me_a6fe8">
					<label>
						<input type="checkbox" /> Remember me
						<div class="fake-checkbox_ffe6d">
							<svg
								width="12"
								height="10"
								viewBox="0 0 12 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_1_7566)">
									<path
										d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
										fill="#2C353A"
									></path>
								</g>
								<defs>
									<clippath id="clip0_1_7566">
										<rect width="12" height="10" fill="white"></rect>
									</clippath>
								</defs>
							</svg>
						</div>
					</label>
				</div>
				<button type="submit" class="login-button_03b0c">Log in </button><a
					href="/registration"
					class="sign-up_b3bd7">Don't have an account? Create now!</a
				>
				<div class="error-user-no_17e34"><span>common__user_not_found</span></div>
				<div class="footer_313cb">
					<a href="/forgot_password" class="footer-btn_5c916">Forgot password?</a>
				</div>
			</form>
		</div>
	</div>
</div>

<div class="main-content-wrapper_a4af2 login_e5eba home-mobile">
	<div class="container_b7192">
		<div class="header_26570">
			<div class="title_dc988">Login</div>
			<div class="subtitle_294f8">Enter your information to participate in the games.</div>
		</div>
		<div class="login-form_64aef">
			<form autocomplete="off">
				<div class="input-container_0fdaa">
					<div class="control_21d74">
						<div class="control-placeholder_597d9">Username</div>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="icon_038a8"
							><path
								d="M8.00035 0C3.58234 0 0 3.58164 0 8C0 12.4184 3.58199 16 8.00035 16C12.4191 16 16.0007 12.4184 16.0007 8C16.0007 3.58164 12.4191 0 8.00035 0ZM8.00035 2.39209C9.46224 2.39209 10.6469 3.57707 10.6469 5.03826C10.6469 6.4998 9.46224 7.68443 8.00035 7.68443C6.53916 7.68443 5.35454 6.4998 5.35454 5.03826C5.35454 3.57707 6.53916 2.39209 8.00035 2.39209ZM7.99859 13.9084C6.54057 13.9084 5.20518 13.3774 4.17518 12.4985C3.92427 12.2845 3.77949 11.9707 3.77949 11.6414C3.77949 10.1595 4.97887 8.97342 6.46115 8.97342H9.54026C11.0229 8.97342 12.2177 10.1595 12.2177 11.6414C12.2177 11.971 12.0736 12.2841 11.8224 12.4981C10.7927 13.3774 9.45697 13.9084 7.99859 13.9084Z"
								fill="#4F6069"
							></path></svg
						><input
							type="text"
							name="username"
							placeholder="Username"
							class="control-input_84a73 control-input-with-Icon_56d8c"
						/>
					</div>
				</div>
				<div class="control-placeholder_0e8e3">Password</div>
				<PasswordInput
					wrapperClassName={'password-input_a743c'}
					containerClassName={'control_21d74'}
					inputClassName={'control-input_84a73 control-input-with-Icon_56d8c'}
				>
					<svg
						slot="prefix"
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="icon_4d07b"
					>
						<g clip-path="url(#clip0_301_9319)">
							<path
								d="M1.92224 14.8889L3.04355 16L4.16485 14.8889L3.04355 13.7778L4.16485 12.6668L5.28616 13.7778L6.40746 12.6668L5.28616 11.5557L9.85148 7.11139C11.6135 8.22247 14.0163 7.90502 15.2978 6.07968C16.1788 4.80988 16.2589 3.0639 15.3779 1.7941C13.9362 -0.348693 10.9728 -0.586781 9.21073 1.1592C7.84914 2.50836 7.68896 4.49242 8.73017 6.00031L0.24028 14.3334C-0.0800933 14.6508 -0.0800933 15.127 0.24028 15.4445C0.560653 15.7619 1.04121 15.7619 1.36159 15.4445L1.92224 14.8889ZM10.4121 2.34964C11.3732 1.47665 12.8149 1.47665 13.776 2.34964C14.7372 3.22262 14.7372 4.73051 13.776 5.6035C12.8149 6.47649 11.3732 6.47649 10.4121 5.6035C9.45101 4.73051 9.45101 3.22262 10.4121 2.34964Z"
								fill="#4F6069"
							></path>
						</g>
						<defs>
							<clippath id="clip0_301_9319">
								<rect width="16" height="16" fill="white"></rect>
							</clippath>
						</defs>
					</svg>
				</PasswordInput>
				<div class="checkbox-remember-me_4c674">
					<label
						><input type="checkbox" /> Remember me
						<div class="fake-checkbox_37ca2">
							<svg
								width="12"
								height="10"
								viewBox="0 0 12 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_1_7566)">
									<path
										d="M10.4104 0L4.2962 6.32097L1.71048 3.24593L0 5.03209L4.17737 10L12 1.92022L10.4104 0Z"
										fill="#2C353A"
									></path>
								</g>
								<defs>
									<clippath id="clip0_1_7566">
										<rect width="12" height="10" fill="white"></rect>
									</clippath>
								</defs>
							</svg>
						</div>
					</label>
				</div>
				<button type="submit" class="mb16 submit-button_05dd2" style="margin-bottom: 16px;">
					Log in
				</button>
				<a href="/registration" class="registration-link_3f628">Sign Up</a>
			</form>
		</div>
	</div>
	<div class="auth-links-wrapper_cd77c">
		<a href="/forgot_password" class="wrap_8498d">
			<div class="icon-wrap_43c98">
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_301_9319)">
						<path
							d="M1.92224 14.8889L3.04355 16L4.16485 14.8889L3.04355 13.7778L4.16485 12.6668L5.28616 13.7778L6.40746 12.6668L5.28616 11.5557L9.85148 7.11139C11.6135 8.22247 14.0163 7.90502 15.2978 6.07968C16.1788 4.80988 16.2589 3.0639 15.3779 1.7941C13.9362 -0.348693 10.9728 -0.586781 9.21073 1.1592C7.84914 2.50836 7.68896 4.49242 8.73017 6.00031L0.24028 14.3334C-0.0800933 14.6508 -0.0800933 15.127 0.24028 15.4445C0.560653 15.7619 1.04121 15.7619 1.36159 15.4445L1.92224 14.8889ZM10.4121 2.34964C11.3732 1.47665 12.8149 1.47665 13.776 2.34964C14.7372 3.22262 14.7372 4.73051 13.776 5.6035C12.8149 6.47649 11.3732 6.47649 10.4121 5.6035C9.45101 4.73051 9.45101 3.22262 10.4121 2.34964Z"
							fill="#4F6069"
						></path>
					</g>
					<defs>
						<clippath id="clip0_301_9319">
							<rect width="16" height="16" fill="white"></rect>
						</clippath>
					</defs>
				</svg>
			</div>
			<div class="link-right_8b6aa">
				<div class="title_bfe51">Forgot password?</div>
				<svg
					width="12"
					height="10"
					viewBox="0 0 12 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_301_10000)">
						<path
							d="M11.8082 4.53297L7.47457 0.191932C7.35087 0.0680166 7.18599 0 7.01019 0C6.83419 0 6.66941 0.0681143 6.5457 0.191932L6.15224 0.586154C6.02863 0.709874 5.96054 0.875127 5.96054 1.05133C5.96054 1.22743 6.02863 1.39825 6.15224 1.52197L8.68042 4.05998H0.648287C0.286144 4.05998 0 4.34397 0 4.70683V5.26415C0 5.627 0.286144 5.93963 0.648287 5.93963H8.7091L6.15234 8.49181C6.02873 8.61573 5.96063 8.77648 5.96063 8.95268C5.96063 9.12868 6.02873 9.29179 6.15234 9.4156L6.5458 9.80856C6.66951 9.93247 6.83429 10 7.01028 10C7.18609 10 7.35096 9.93159 7.47467 9.80768L11.8083 5.46673C11.9323 5.34243 12.0005 5.17649 12 5.0001C12.0004 4.82312 11.9323 4.65708 11.8082 4.53297Z"
							fill="#8B9EA7"
						></path>
					</g>
					<defs>
						<clippath id="clip0_301_10000">
							<rect width="12" height="10" fill="white"></rect>
						</clippath>
					</defs>
				</svg>
			</div>
		</a>
	</div>
</div>
