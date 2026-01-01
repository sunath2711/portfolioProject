export default function GradientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-600/40 to-fuchsia-500/30 blur-3xl" />
      <div className="absolute top-1/3 right-[-100px] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-sky-500/30 to-cyan-400/20 blur-3xl" />
    </div>
  );
}
