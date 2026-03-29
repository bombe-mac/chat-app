import AuthFormCard from "@/components/AuthFormCard";

export default function SignUpPage() {
	return (
		<AuthFormCard
			eyebrow="Start now"
			title="Sign up"
			description="Create your account and start building chat communities."
			switchPrompt="Already have an account?"
			switchHref="/signin"
			switchLabel="Sign in"
			accent="emerald"
		>
			<form className="mt-6 space-y-4">
				<label className="block">
					<span className="mb-1 block text-sm font-medium text-zinc-200">Username</span>
					<input
						type="text"
						placeholder="Choose a username"
						className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none ring-0 placeholder:text-zinc-500 focus:border-emerald-300"
					/>
				</label>

				<label className="block">
					<span className="mb-1 block text-sm font-medium text-zinc-200">Email</span>
					<input
						type="email"
						placeholder="you@example.com"
						className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none ring-0 placeholder:text-zinc-500 focus:border-emerald-300"
					/>
				</label>

				<label className="block">
					<span className="mb-1 block text-sm font-medium text-zinc-200">Password</span>
					<input
						type="password"
						placeholder="Create password"
						className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 text-zinc-100 outline-none ring-0 placeholder:text-zinc-500 focus:border-emerald-300"
					/>
				</label>

				<button
					type="button"
					className="w-full rounded-xl bg-emerald-400 px-4 py-2.5 text-sm font-bold text-zinc-950 transition hover:bg-emerald-300"
				>
					Create account
				</button>
			</form>
		</AuthFormCard>
	);
}
