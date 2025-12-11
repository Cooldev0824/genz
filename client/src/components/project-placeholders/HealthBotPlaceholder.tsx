export default function HealthBotPlaceholder() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-950 via-cyan-950 to-slate-950 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-12 right-12 w-44 h-44 rounded-[2.5rem] bg-white/5 border border-white/10 rotate-6" />
        <div className="absolute top-20 right-20 w-44 h-44 rounded-[2.5rem] bg-white/5 border border-white/10 -rotate-6" />
      </div>

      <div className="relative z-10 w-full h-full p-10 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-medium">
            Health • AI Bot
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-cyan-300/80" />
          </div>
        </div>

        <div>
          <div className="text-white text-3xl font-bold leading-tight">HealthBot</div>
          <div className="text-white/70 mt-2 text-sm">Care guidance & support</div>

          <div className="mt-8 space-y-3">
            <div className="h-12 rounded-2xl bg-white/10 border border-white/10 p-4 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-300/90" />
              <div className="h-2 w-40 rounded-full bg-white/20" />
            </div>
            <div className="h-12 rounded-2xl bg-white/10 border border-white/10 p-4 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-300/90" />
              <div className="h-2 w-28 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


