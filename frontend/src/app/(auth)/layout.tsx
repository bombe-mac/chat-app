import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05070b] px-4 py-12 text-zinc-100 sm:px-6">
			<div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_10%_20%,rgba(34,197,94,0.25),transparent_35%),radial-gradient(circle_at_90%_0%,rgba(14,165,233,0.2),transparent_30%)]" />
			<div className="relative z-10 w-full max-w-md">{children}</div>
		</main>
	);
}
