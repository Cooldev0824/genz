export default function MindfitMamaPlaceholder() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-rose-950 via-amber-950 to-slate-950 relative overflow-hidden">
      <div className="absolute -top-28 -right-28 w-80 h-80 rounded-full bg-rose-500/20 blur-3xl" />
      <div className="absolute -bottom-28 -left-28 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl" />

      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-12 left-12 w-72 h-48 rounded-[2.5rem] border border-white/15" />
        <div className="absolute top-20 left-20 w-72 h-48 rounded-[2.5rem] border border-white/10" />
      </div>

      <div className="relative z-10 w-full h-full p-10 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-medium">
            Wellness • Movement
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
            <div className="w-7 h-7 rounded-2xl bg-rose-300/80" />
          </div>
        </div>

        <div>
          <div className="text-white text-3xl font-bold leading-tight">Mindfit Mama</div>
          <div className="text-white/70 mt-2 text-sm">Mindfulness & mama support</div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="h-20 rounded-3xl bg-white/10 border border-white/10 p-4">
              <div className="h-2 w-20 rounded-full bg-white/20" />
              <div className="h-2 w-28 rounded-full bg-white/15 mt-3" />
            </div>
            <div className="h-20 rounded-3xl bg-white/10 border border-white/10 p-4">
              <div className="h-2 w-16 rounded-full bg-white/20" />
              <div className="h-2 w-24 rounded-full bg-white/15 mt-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


