export default function HeroSection() {
  return (
    <section className="py-12 md:py-20 flex flex-col items-center text-center">
      <div className="inline-block mb-4 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-[#a3e635] tracking-widest uppercase">
        System Operational
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
        Engineered for Execution. <span className="text-[#a3e635]">Built in 3.</span>
      </h1>
      <p className="text-zinc-400 text-lg max-w-xl mb-8">
        Streamlined workflows, absolute clarity, and zero friction. Take control of your framework and execute faster.
      </p>
      <div className="flex gap-4">
        <button className="bg-[#a3e635] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#bef264] transition-colors">
          Get Started
        </button>
        <button className="border border-zinc-800 text-white px-6 py-3 rounded-lg hover:bg-zinc-900 transition-colors">
          View Documentation
        </button>
      </div>
    </section>
  );
}