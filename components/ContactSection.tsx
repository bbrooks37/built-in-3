export default function ContactSection() {
  return (
    <section className="py-12 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center tracking-wide">GET IN TOUCH</h2>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4 bg-zinc-950 border border-zinc-800/80 p-8 rounded-xl">
        <div>
          <label className="block text-xs text-zinc-400 mb-1 uppercase tracking-wider">Name</label>
          <input 
            type="text" 
            className="w-full bg-zinc-900 border border-zinc-800 px-4 py-2.5 rounded-lg text-sm text-white focus:outline-none focus:border-[#a3e635]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs text-zinc-400 mb-1 uppercase tracking-wider">Email</label>
          <input 
            type="email" 
            className="w-full bg-zinc-900 border border-zinc-800 px-4 py-2.5 rounded-lg text-sm text-white focus:outline-none focus:border-[#a3e635]"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-xs text-zinc-400 mb-1 uppercase tracking-wider">Message</label>
          <textarea 
            rows={4}
            className="w-full bg-zinc-900 border border-zinc-800 px-4 py-2.5 rounded-lg text-sm text-white focus:outline-none focus:border-[#a3e635]"
            placeholder="How can we help?"
          />
        </div>
        <button className="w-full bg-[#a3e635] text-black font-semibold py-3 rounded-lg hover:bg-[#bef264] transition-colors text-sm">
          Send Message
        </button>
      </form>
    </section>
  );
}