export default function MusicAppPlaceholder() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Vinyl Record */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-8 border-white/20 animate-spin" style={{ animationDuration: '3s' }} />
          {/* Middle ring */}
          <div className="absolute inset-4 rounded-full border-4 border-white/30 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
          {/* Center */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Label removed (keep artwork generic) */}
        
        {/* Music waves */}
        <div className="flex items-end gap-1 mt-6 h-12">
          {[0.3, 0.6, 0.9, 0.7, 0.5, 0.8, 0.4].map((height, i) => (
            <div
              key={i}
              className="w-2 bg-white/60 rounded-t animate-pulse"
              style={{
                height: `${height * 100}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.8s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

