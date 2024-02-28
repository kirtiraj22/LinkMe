import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-white border-b flex justify-between p-4">
			<div className="flex gap-6">
				<Link href={"/"}>LinkMe</Link>
				<nav className="flex items-center gap-4 text-slate-500 text-sm">
					<Link href={"/about"}>About</Link>
					<Link href={"/pricing"}>Pricing</Link>
					<Link href={"/contact"}>Contact</Link>
				</nav>
			</div>

			<nav className="flex items-center gap-4 text-sm text-slate-500">
				<Link href={"/login"}>Sign In</Link>
				<Link href={"/register"}>Create Account</Link>
			</nav>
		</header>
	);
}
