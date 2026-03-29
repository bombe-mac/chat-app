import AuthActionCard from "@/components/AuthActionCard";

export default function Home() {
  return (
    <main className="relative isolate flex-1 overflow-hidden bg-[#05070b] text-zinc-100">
      <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.25),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.2),transparent_30%),radial-gradient(circle_at_50%_110%,rgba(14,116,144,0.35),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(circle_at_center,black_45%,transparent_100%)]" />

      <section className="relative mx-auto flex w-full max-w-6xl flex-col px-6 pb-20 pt-16 sm:px-10 sm:pt-20">
        <p className="w-fit rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
          dark mode social chat
        </p>

        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-tight tracking-tight text-zinc-50 sm:text-6xl lg:text-7xl">
          banterrOOm lets your crew spin up chat spaces in seconds.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          Drop into focused rooms, host live hangouts, and keep every conversation
          organized without the clutter. Build your own network of fast, private,
          always-online spaces.
        </p>

        <div className="mt-8 max-w-xl">
          <AuthActionCard />
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <article className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-5 backdrop-blur">
            <p className="text-sm text-zinc-400">Room capacity</p>
            <p className="mt-2 text-3xl font-extrabold text-cyan-300">100 users</p>
            <p className="mt-2 text-sm text-zinc-300">Every room supports up to 100 people chatting together.</p>
          </article>
          <article className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-5 backdrop-blur">
            <p className="text-sm text-zinc-400">Rooms per user</p>
            <p className="mt-2 text-3xl font-extrabold text-emerald-300">10 rooms</p>
            <p className="mt-2 text-sm text-zinc-300">Each user can create up to 10 rooms in their account.</p>
          </article>
          <article className="rounded-2xl border border-zinc-700/70 bg-zinc-900/70 p-5 backdrop-blur">
            <p className="text-sm text-zinc-400">Uptime ready</p>
            <p className="mt-2 text-3xl font-extrabold text-sky-300">24/7</p>
            <p className="mt-2 text-sm text-zinc-300">Keep communities active with stable, always-on rooms.</p>
          </article>
        </div>

        <div className="mt-12 rounded-3xl border border-zinc-700 bg-zinc-900/70 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
            Built for game nights, study circles, and creator communities.
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Whether you run one tight group or multiple communities, banterrOOm
            gives you the control to launch room-based conversations quickly,
            manage participants, and stay connected in one clean interface.
          </p>
        </div>
      </section>
    </main>
  );
}
