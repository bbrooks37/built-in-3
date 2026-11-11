export default function PillarsSection() {
  const pillars = [
    { num: '01', title: 'Clarity', desc: 'Strip away noise and focus strictly on core operational metrics.' },
    { num: '02', title: 'Speed', desc: 'Optimized build cycles to take ideas from concept to production immediately.' },
    { num: '03', title: 'Mastery', desc: 'Refining processes continuously through disciplined execution.' },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center tracking-wide">THE THREE PILLARS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <div key={pillar.num} className="bg-zinc-950 border border-zinc-800/80 p-6 rounded-xl relative overflow-hidden">
            <div className="text-4xl font-extrabold text-zinc-800 mb-4">{pillar.num}</div>
            <h3 className="text-lg font-semibold text-white mb-2">{pillar.title}</h3>
            <p className="text-zinc-400 text-sm">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}