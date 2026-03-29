import AuthFormCard from "@/components/AuthFormCard";

export default function SignInPage() {
	return (
		<AuthFormCard
			eyebrow="Welcome back"
			title="Sign in"
			description="Enter your account details and continue chatting on banterrOOm."
			switchPrompt="New here?"
			switchHref="/signup"
			switchLabel="Create an account"
			accent="cyan"
		>
			<form className="mt-6 space-y-4">
				<label className="block">
					<span className="mb-1 block text-sm font-medium text-zinc-200">Email</span>
					<input
						type="email"
						placeholder="you@example.com"
						className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none ring-0 placeholder:text-zinc-500 focus:border-cyan-300"
					/>
				</label>

				<label className="block">
					<span className="mb-1 block text-sm font-medium text-zinc-200">Password</span>
					<input
						type="password"
						placeholder="Enter password"
						className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none ring-0 placeholder:text-zinc-500 focus:border-cyan-300"
					/>
				</label>

				<button
					type="button"
					className="w-full rounded-xl bg-cyan-300 px-4 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-cyan-200"
				>
					Sign in to account
				</button>
			</form>
		</AuthFormCard>
	);
}
