import React from "react";
import LoginForm from "../../components/LoginForm";


function Login() {

	return (
		<div className="Login">
			<div className="login-left">
				<LoginForm />
			</div>
			<div className="login-right">
				<div className="login-right-content">
					<p className="content">Your life but in photos 📸</p>
				</div>
			</div>
		</div>
	);
}

export default Login;