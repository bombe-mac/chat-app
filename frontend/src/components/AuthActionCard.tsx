import Link from "next/link";

type ActionTone = "emerald" | "cyan" | "zinc";
type ActionVariant = "solid" | "outline";

type AuthAction = {
  label: string;
  href: string;
  tone?: ActionTone;
  variant?: ActionVariant;
};

type AuthActionCardProps = {
  title?: string;
  description?: string;
  primaryAction?: AuthAction;
  secondaryAction?: AuthAction;
};

function getActionClasses(action: AuthAction) {
  const tone = action.tone ?? "emerald";
  const variant = action.variant ?? "solid";

  if (variant === "outline") {
    return "rounded-xl border border-zinc-600 bg-zinc-900 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-zinc-400 hover:bg-zinc-800";
  }

  if (tone === "cyan") {
    return "rounded-xl bg-cyan-300 px-4 py-2 text-sm font-bold text-zinc-950 transition hover:bg-cyan-200";
  }

  if (tone === "zinc") {
    return "rounded-xl bg-zinc-200 px-4 py-2 text-sm font-bold text-zinc-950 transition hover:bg-zinc-300";
  }

  return "rounded-xl bg-emerald-400 px-4 py-2 text-sm font-bold text-zinc-950 transition hover:bg-emerald-300";
}

export default function AuthActionCard({
  title = "Jump into banterrOOm",
  description = "Create an account or sign in to manage up to 10 rooms with 100 users per room.",
  primaryAction = { label: "Sign up", href: "/signup", tone: "emerald", variant: "solid" },
  secondaryAction = { label: "Sign in", href: "/signin", tone: "zinc", variant: "outline" },
}: AuthActionCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-700/70 bg-zinc-900/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur">
      <h3 className="text-xl font-bold text-zinc-50">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{description}</p>

      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={primaryAction.href}
          className={getActionClasses(primaryAction)}
        >
          {primaryAction.label}
        </Link>
        {secondaryAction ? (
          <Link href={secondaryAction.href} className={getActionClasses(secondaryAction)}>
            {secondaryAction.label}
          </Link>
        ) : null}
      </div>
    </article>
  );
}