export default function MonicaPlaceholder() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-fuchsia-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-24 h-24 rounded-3xl bg-white/5 border border-white/10 rotate-12" />
        <div className="absolute top-16 left-16 w-24 h-24 rounded-3xl bg-white/5 border border-white/10 -rotate-6" />
      </div>

      <div className="relative z-10 w-full h-full p-10 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-medium">
            AI • Assistant
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-fuchsia-300/90 to-indigo-300/90" />
          </div>
        </div>

        <div>
          <div className="text-white text-3xl font-bold leading-tight">Monica AI</div>
          <div className="text-white/70 mt-2 text-sm">Ultimate AI Assist</div>

          <div className="mt-8 space-y-3">
            <div className="h-12 rounded-2xl bg-white/10 border border-white/10 p-4 flex items-center justify-between">
              <div className="h-2 w-28 rounded-full bg-white/20" />
              <div className="h-2 w-16 rounded-full bg-white/15" />
            </div>
            <div className="h-12 rounded-2xl bg-white/10 border border-white/10 p-4 flex items-center justify-between">
              <div className="h-2 w-36 rounded-full bg-white/20" />
              <div className="h-2 w-20 rounded-full bg-white/15" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


