export default function ShopSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center tracking-wide">SHOP / MANUALS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-zinc-950 border border-zinc-800/80 p-8 rounded-xl">
        <div className="bg-zinc-900 h-64 rounded-lg flex items-center justify-center border border-zinc-800 text-zinc-500">
          [Product Image / Manual Cover]
        </div>
        <div className="space-y-4">
          <span className="text-xs text-[#a3e635] tracking-widest uppercase font-semibold">Flagship Release</span>
          <h3 className="text-3xl font-bold">Built in 3 Manual & Toolkit</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            The complete blueprint and physical/digital companion guide. Structured to give you a definitive edge in rapid deployment.
          </p>
          <div className="text-xl font-bold text-white">$49.00</div>
          <button className="bg-[#a3e635] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#bef264] transition-colors w-full md:w-auto">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}