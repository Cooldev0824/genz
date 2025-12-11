export default function AnatoMovePlaceholder() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-violet-950 via-slate-950 to-emerald-950 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-violet-500/18 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-500/18 blur-3xl" />

      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 right-10 w-64 h-40 rounded-[2.5rem] border border-white/15 rotate-6" />
        <div className="absolute top-20 right-20 w-64 h-40 rounded-[2.5rem] border border-white/10 -rotate-6" />
      </div>

      <div className="relative z-10 w-full h-full p-10 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-medium">
            Anatomy • Movement
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
            <div className="w-6 h-6 rounded-2xl bg-violet-300/70" />
          </div>
        </div>

        <div>
          <div className="text-white text-3xl font-bold leading-tight">AnatoMove</div>
          <div className="text-white/70 mt-2 text-sm">by Celest Pereira</div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="h-16 rounded-3xl bg-white/10 border border-white/10" />
            <div className="h-16 rounded-3xl bg-white/10 border border-white/10" />
            <div className="h-16 rounded-3xl bg-white/10 border border-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}


