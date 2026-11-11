export default function CommunitySection() {
  return (
    <section className="py-12 text-center max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold tracking-wide">JOIN THE COMMUNITY</h2>
      <p className="text-zinc-400 text-sm">
        Connect with other builders, share configurations, and stay updated on new releases and updates.
      </p>
      <div className="flex gap-2 max-w-md mx-auto">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="bg-zinc-900 border border-zinc-800 px-4 py-3 rounded-lg text-sm text-white flex-1 focus:outline-none focus:border-[#a3e635]"
        />
        <button className="bg-[#a3e635] text-black font-semibold px-5 py-3 rounded-lg hover:bg-[#bef264] transition-colors text-sm">
          Join
        </button>
      </div>
    </section>
  );
}