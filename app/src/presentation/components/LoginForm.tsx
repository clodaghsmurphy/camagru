import React from "react";

function LoginForm() {
	return (
		<div className="LoginForm">
			<form>
				<h1>Hello 👋🏻</h1>
				<label>Username</label>
				<input type="text"  />
				<label>Password</label>
				<input type="password"  />
				<div className="login-options">
					<input type="checkbox" />
					<label>Remember me</label>
					<a href="#">Forgot password?</a>
				</div>
				<button type="submit">Log in</button>
			</form>
		</div>
	);
}

export default LoginForm;