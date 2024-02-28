"use client";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
	return (
		<button
			onClick={() => signOut()}
			className="bg-red-500 text-white flex gap-2 items-center border p-2 px-3 shadow-sm hover:bg-red-600"
		>
			<span>Logout</span>

			<FontAwesomeIcon icon={faRightFromBracket} />
		</button>
	);
}
