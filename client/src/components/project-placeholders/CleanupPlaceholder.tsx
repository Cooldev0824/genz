export default function CleanupPlaceholder() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-sky-950 via-slate-950 to-emerald-950 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-56 h-56 border border-white/20 rounded-3xl rotate-6" />
        <div className="absolute top-24 left-24 w-56 h-56 border border-white/15 rounded-3xl -rotate-6" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between p-10">
        <div className="flex items-center justify-between">
          <div className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-medium">
            Storage • Cleaner
          </div>
          <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-emerald-300/80" />
          </div>
        </div>

        <div>
          <div className="text-white text-3xl font-bold leading-tight">Cleanup</div>
          <div className="text-white/70 mt-2 text-sm">Phone Storage Cleaner</div>

          <div className="mt-8 space-y-3">
            <div className="h-3 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-sky-400/70 to-emerald-400/70 rounded-full" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-10 rounded-2xl bg-white/10 border border-white/10" />
              <div className="h-10 rounded-2xl bg-white/10 border border-white/10" />
              <div className="h-10 rounded-2xl bg-white/10 border border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


