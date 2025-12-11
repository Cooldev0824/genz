export default function CalmGutPlaceholder() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-teal-950 via-slate-950 to-indigo-950 relative overflow-hidden">
      <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full bg-teal-500/18 blur-3xl" />
      <div className="absolute -bottom-28 -right-28 w-80 h-80 rounded-full bg-indigo-500/18 blur-3xl" />

      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-white/15" />
        <div className="absolute top-16 left-16 w-64 h-64 rounded-full border border-white/10" />
      </div>

      <div className="relative z-10 w-full h-full p-10 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-medium">
            Hypnotherapy • Calm
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
            <div className="w-7 h-7 rounded-full bg-teal-300/70" />
          </div>
        </div>

        <div>
          <div className="text-white text-3xl font-bold leading-tight">The Calm Gut</div>
          <div className="text-white/70 mt-2 text-sm">IBS Hypnotherapy</div>

          <div className="mt-8">
            <div className="h-24 rounded-[2rem] bg-white/10 border border-white/10 p-6">
              <div className="h-2 w-40 rounded-full bg-white/20" />
              <div className="h-2 w-56 rounded-full bg-white/15 mt-4" />
              <div className="h-2 w-32 rounded-full bg-white/10 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


