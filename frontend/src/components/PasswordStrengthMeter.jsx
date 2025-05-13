import { Check, X } from "lucide-react";
import React from "react";

const PasswordCriteria = ({ password }) => {
	const criteria = [
		{ label: "At least 6 characters", met: password.length >= 6 },
		{ label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
		{ label: "Contains lowercase letter", met: /[a-z]/.test(password) },
		{ label: "Contains a number", met: /\d/.test(password) },
		{ label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
	];

	return (
		<ul className="mt-2 space-y-1">
			{criteria.map(({ label, met }) => (
				<li key={label} className="flex items-center text-xs">
					{met ? (
						<Check className="size-4 text-green-500 mr-2" />
					) : (
						<X className="size-4 text-gray-500 mr-2" />
					)}
					<span className={met ? "text-green-500" : "text-gray-400"}>
						{label}
					</span>
				</li>
			))}
		</ul>
	);
};

const PasswordStrengthMeter = ({ password }) => {
	const calculateStrength = (pwd) => {

        if (!pwd) return 0;
		let score = 0;
		if (pwd.length >= 6) score++;
		if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) score++;
		if (/\d/.test(pwd)) score++;
		if (/[^a-zA-Z\d]/.test(pwd)) score++;
		return score;
	};

	const strength = calculateStrength(password);

	const strengthColor = ["bg-red-500", "bg-red-400", "bg-yellow-500", "bg-yellow-400", "bg-green-500"];
	const strengthText = ["Very Weak", "Weak", "Fair", "Good", "Strong"];

	return (
		<div className="mt-2">
			<div className="flex justify-between items-center mb-1">
				<span className="text-xs text-gray-400">Password strength</span>
				<span className="text-xs text-gray-400">{strengthText[strength]}</span>
			</div>

			<div className="flex space-x-1">
				{Array.from({ length: 4 }).map((_, idx) => (
					<div
						key={idx}
						className={`h-1 w-1/4 rounded-full transition-colors duration-300 ${
							idx < strength ? strengthColor[strength] : "bg-gray-600"
						}`}
					/>
				))}
			</div>

			<PasswordCriteria password={password} />
		</div>
	);
};

export default PasswordStrengthMeter;
