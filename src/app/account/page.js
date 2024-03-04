import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function AccountPage({ searchParams }) {
	const session = await getServerSession(authOptions);
	const desiredUsername = searchParams?.desiredUsername;

	if (!session) {
		redirect("/");
	}
	return (
		<div>
			<form>
				<h1 className="text-4xl font-bold text-center mb-2">
					Grab your username
				</h1>
				<p className="text-center mb-6 text-gray-500">
					Choose your username
				</p>
				<div className="max-w-xs mx-auto">
					<input
						className="block p-2 mx-auto border w-full mb-2 text-center"
						defaultValue={desiredUsername}
						type="text"
						placeholder="username"
					/>
					<button
						type="submit"
						className="bg-blue-500 text-white py-2 px-4 block mx-auto w-full"
					>
						Claim your username
					</button>
				</div>
			</form>
		</div>
	);
}
