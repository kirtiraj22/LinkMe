"use client";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";

export default function LoginWithGoogle() {
	return (
		<button
			onClick={() => signIn("google")}
			className="bg-white text-blue-500 font-semibold shadow-lg text-center w-full py-4 flex gap-3 justify-center items-center"
		>
			<FontAwesomeIcon icon={faGoogle} className="h-6" />
			<span>Sign In with Google</span>
		</button>
	);
}
