import type { ReactNode } from "react";
import Link from "next/link";

type AuthFormCardAccent = "cyan" | "emerald";

type AuthFormCardProps = {
	eyebrow: string;
	title: string;
	description: string;
	children: ReactNode;
	switchPrompt: string;
	switchHref: string;
	switchLabel: string;
	accent?: AuthFormCardAccent;
};

const accentStyles: Record<AuthFormCardAccent, { eyebrow: string; switchLink: string }> = {
	cyan: {
		eyebrow: "text-cyan-300",
		switchLink: "text-cyan-300 hover:text-cyan-200",
	},
	emerald: {
		eyebrow: "text-emerald-300",
		switchLink: "text-emerald-300 hover:text-emerald-200",
	},
};

export default function AuthFormCard({
	eyebrow,
	title,
	description,
	children,
	switchPrompt,
	switchHref,
	switchLabel,
	accent = "cyan",
}: AuthFormCardProps) {
	const styles = accentStyles[accent];

	return (
		<section className="rounded-2xl border border-zinc-700/80 bg-zinc-900/80 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur sm:p-8">
			<p className={`text-xs font-semibold uppercase tracking-[0.2em] ${styles.eyebrow}`}>
				{eyebrow}
			</p>
			<h1 className="mt-3 text-3xl font-black text-zinc-50">{title}</h1>
			<p className="mt-2 text-sm text-zinc-300">{description}</p>

			{children}

			<p className="mt-5 text-sm text-zinc-300">
				{switchPrompt}{" "}
				<Link href={switchHref} className={`font-semibold ${styles.switchLink}`}>
					{switchLabel}
				</Link>
			</p>

			<p className="mt-2 text-sm text-zinc-400">
				<Link href="/" className="hover:text-zinc-200">
					Back to home
				</Link>
			</p>
		</section>
	);
}
