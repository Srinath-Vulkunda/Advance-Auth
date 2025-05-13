import { client, sender } from "./mailtrap.config.js";
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
	const recipient = [{ email }];

	try {
		const response = await client.send({
			from: sender,
			to: recipient,
			subject: "Verify your email",
			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
			category: "Email Verification"
		});

		console.log("Email sent successfully", response);
	} catch (error) {
		console.error(`Error sending verification`, error);

		throw new Error(`Error sending verification email: ${error}`);
	}
};

export const sendWelcomeEmail = async (email, name) => {
	const recipient = [{ email }];

	try {
		const response =await client.send({
			from: sender,
			to: recipient,
			template_uuid: "17d87636-736d-438b-b73c-7e5e210865bd",
			template_variables: {

				"name": name
		  
			}
		});

		console.log("Welcome email sent successfully", response);
	} catch (error) {
		console.error(`Error sending welcome email`, error);

		throw new Error(`Error sending welcome email: ${error}`);
	}
}

export const sendPasswordResetEmail = async (email, resetToken) =>{
	const recipient = [{email}];

	try{
		const response = await client.send({
			from: sender,
			to: recipient,
			subject: "Reset your password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetToken),
			category: "Password Reset"
		});

		console.log("Password reset email sent successfully", response);

	}catch(error){
		console.error(`Error sending password reset email`, error);

		throw new Error(`Error sending password reset email: ${error}`);
	}
}

export const sendResetSuccessEmail = async (email) => {
	const recipient = [{ email }];

	try {
		const response = await client.send({
			from: sender,
			to: recipient,
			subject: "Password reset successful",
			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
			category: "Password Reset Success"
		});

		console.log("Password reset success email sent successfully", response);
	} catch (error) {
		console.error(`Error sending password reset success email`, error);

		throw new Error(`Error sending password reset success email: ${error}`);
	}
}


export const sendForgotPasswordEmail = async (email, resetToken) => {
	const recipient = [{ email }];

	try {
		const response = await client.send({
			from: sender,
			to: recipient,
			subject: "Forgot Password",
			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetToken),
			category: "Forgot Password"
		});

		console.log("Forgot password email sent successfully", response);
	} catch (error) {
		console.error(`Error sending forgot password email`, error);

		throw new Error(`Error sending forgot password email: ${error}`);
	}
}