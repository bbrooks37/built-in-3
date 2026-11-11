"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, CheckCircle2, Home } from "lucide-react";

interface ManualPageProps {
  pageData: any;
  totalPages: number;
  onBackToHome?: () => void;
}

export default function BuilderManualPage({ pageData, totalPages, onBackToHome }: ManualPageProps) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [savedStatus, setSavedStatus] = useState(false);
  const [pageInput, setPageInput] = useState<string>(String(pageData.pageNumber || 1));

  const storageKey = `built_in_3_page_${pageData.pageNumber || 1}`;

  // Load saved answers from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setAnswers(JSON.parse(saved));
      } catch (e) {
        setAnswers({});
      }
    } else {
      setAnswers({});
    }
  }, [storageKey]);

  // Keep input synced when navigating between pages
  useEffect(() => {
    setPageInput(String(pageData.pageNumber || 1));
  }, [pageData.pageNumber]);

  // Save answers to localStorage whenever the user interacts with inputs or checkboxes
  const handleInputChange = (fieldId: string, value: any) => {
    const updated = { ...answers, [fieldId]: value };
    setAnswers(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));

    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 1500);
  };

  const navigateToPage = (num: number) => {
    const clamped = Math.max(1, Math.min(totalPages, num));
    setPageInput(String(clamped));
    if (clamped !== pageData.pageNumber) {
      router.push(`/manual/${clamped}`);
    }
  };

  const handlePageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(pageInput, 10);
    if (!isNaN(parsed)) {
      navigateToPage(parsed);
    } else {
      setPageInput(String(pageData.pageNumber || 1));
    }
  };

  // Go back to the website: use the parent's callback when embedded,
  // otherwise route to the home page (e.g. on /manual/[page] routes).
  const handleBackToHome = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      router.push("/");
    }
  };

  // --- DEDICATED COVER LAYOUT FOR PAGE 1 ---
  if (pageData.pageNumber === 1) {
    return (
      <div className="min-h-screen bg-black text-neutral-100 flex flex-col justify-between selection:bg-[#a3e635] selection:text-black">
        <header className="border-b border-[#a3e635]/40 bg-black/95 backdrop-blur sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-xs font-bold tracking-widest text-[#a3e635] uppercase">
              BUILT IN 3 • THE BUILDER&apos;S MANUAL
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleBackToHome}
                className="flex items-center gap-1.5 text-xs text-[#a3e635] hover:text-[#bef264] font-semibold px-3 py-1.5 rounded-lg bg-zinc-950 border border-[#a3e635]/40 transition cursor-pointer"
              >
                <Home className="w-3.5 h-3.5" /> Home
              </button>
              <form
                onSubmit={handlePageSubmit}
                className="flex items-center gap-1 bg-zinc-950 border border-[#a3e635]/40 rounded-lg px-2 py-1 focus-within:border-[#a3e635] transition"
              >
                <button
                  type="button"
                  onClick={() => navigateToPage(pageData.pageNumber - 1)}
                  disabled={pageData.pageNumber <= 1}
                  aria-label="Previous page"
                  className="p-0.5 text-neutral-400 hover:text-[#a3e635] disabled:opacity-30 disabled:hover:text-neutral-400 transition"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <span className="text-xs text-neutral-400 pl-1">Page</span>
                <input
                  type="number"
                  min={1}
                  max={totalPages}
                  value={pageInput}
                  onChange={(e) => setPageInput(e.target.value)}
                  onBlur={() => setPageInput(String(pageData.pageNumber || 1))}
                  aria-label="Page number"
                  className="w-10 bg-transparent text-center text-xs font-bold text-[#a3e635] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="text-xs text-neutral-500 pr-1">/ {totalPages}</span>

                <button
                  type="button"
                  onClick={() => navigateToPage(pageData.pageNumber + 1)}
                  disabled={pageData.pageNumber >= totalPages}
                  aria-label="Next page"
                  className="p-0.5 text-neutral-400 hover:text-[#a3e635] disabled:opacity-30 disabled:hover:text-neutral-400 transition"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-2xl w-full mx-auto px-6 py-16 flex flex-col items-center justify-center text-center space-y-8">
          <p className="text-xs font-extrabold tracking-widest text-[#a3e635] uppercase">
            BUILT IN 3
          </p>

          <div className="w-36 h-36 bg-zinc-950 border border-[#a3e635]/40 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.05)] p-4 relative overflow-hidden">
            <Image
              src="/logos/b3.png"
              alt="Built in 3 Logo"
              fill
              sizes="144px"
              className="object-contain p-3 drop-shadow-[0_0_15px_rgba(163,230,53,0.15)]"
              priority
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
              THE BUILDER&apos;S MANUAL
            </h1>
            <p className="text-[#a3e635] font-extrabold tracking-wider text-sm uppercase">
              PART 1 | THE FOUNDATION
            </p>
            <p className="text-xs text-neutral-300 font-bold tracking-widest uppercase pt-1">
              BUILD YOUR BODY • BUILD YOUR MIND • BUILD YOUR LIFE
            </p>
          </div>

          <p
            className="text-zinc-300 text-sm max-w-md leading-relaxed font-semibold"
            style={{ fontFamily: "Verdana, sans-serif" }}
          >
            A guided field guide for honest reflection, practical action, and lasting growth.
          </p>

          <div className="pt-6 border-t border-[#a3e635]/30 w-full space-y-3">
            <p className="text-[#a3e635] text-xs font-bold tracking-widest uppercase">
              FITNESS IS THE VEHICLE. CHARACTER IS THE DESTINATION.
            </p>
            <p className="text-neutral-500 italic text-xs tracking-wider">
              BRICK BY BRICK. ■
            </p>
          </div>
        </main>

        <footer className="border-t border-[#a3e635]/40 bg-black/95 backdrop-blur sticky bottom-0 z-20 py-4 px-6 shadow-2xl">
          <div className="max-w-4xl mx-auto flex items-center justify-end">
            <button
              type="button"
              onClick={() => navigateToPage(2)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#a3e635] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#bef264] transition shadow-[0_0_20px_rgba(163,230,53,0.2)] cursor-pointer"
            >
              Start Manual <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </footer>
      </div>
    );
  }

  // --- STANDARD WORKBOOK & INTRO PAGES (Pages 2 - 40) ---
  return (
    <div className="min-h-screen bg-black text-neutral-100 flex flex-col justify-between selection:bg-[#a3e635] selection:text-black">
      <div>
        {/* Top Progress Bar & Page Jumper Header */}
        <header className="border-b border-[#a3e635]/40 bg-black/95 backdrop-blur sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest text-[#a3e635] uppercase">
                {pageData.chapterTitle || "BUILT IN 3 • THE BUILDER'S MANUAL"}
              </p>
              <p className="text-sm text-neutral-400 font-medium">
                Page {pageData.pageNumber} of {totalPages}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {savedStatus && (
                <span className="hidden sm:flex items-center gap-1.5 text-xs text-[#a3e635] font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Saved locally
                </span>
              )}
              <button
                type="button"
                onClick={handleBackToHome}
                className="flex items-center gap-1.5 text-xs text-[#a3e635] hover:text-[#bef264] font-semibold px-3 py-1.5 rounded-lg bg-zinc-950 border border-[#a3e635]/40 transition shadow-sm cursor-pointer"
              >
                <Home className="w-3.5 h-3.5" /> Home
              </button>
              <form
                onSubmit={handlePageSubmit}
                className="flex items-center gap-1 bg-zinc-950 border border-[#a3e635]/40 rounded-lg px-2 py-1 focus-within:border-[#a3e635] transition"
              >
                <button
                  type="button"
                  onClick={() => navigateToPage(pageData.pageNumber - 1)}
                  disabled={pageData.pageNumber <= 1}
                  aria-label="Previous page"
                  className="p-0.5 text-neutral-400 hover:text-[#a3e635] disabled:opacity-30 disabled:hover:text-neutral-400 transition"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <span className="text-xs text-neutral-400 pl-1">Page</span>
                <input
                  type="number"
                  min={1}
                  max={totalPages}
                  value={pageInput}
                  onChange={(e) => setPageInput(e.target.value)}
                  onBlur={() => setPageInput(String(pageData.pageNumber || 1))}
                  aria-label="Page number"
                  className="w-10 bg-transparent text-center text-xs font-bold text-[#a3e635] focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="text-xs text-neutral-500 pr-1">/ {totalPages}</span>

                <button
                  type="button"
                  onClick={() => navigateToPage(pageData.pageNumber + 1)}
                  disabled={pageData.pageNumber >= totalPages}
                  aria-label="Next page"
                  className="p-0.5 text-neutral-400 hover:text-[#a3e635] disabled:opacity-30 disabled:hover:text-neutral-400 transition"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
          <div className="w-full bg-zinc-900 h-1">
            <div
              className="bg-[#a3e635] h-1 transition-all duration-300"
              style={{ width: `${(pageData.pageNumber / totalPages) * 100}%` }}
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl w-full mx-auto px-6 py-10 space-y-8 pb-20">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">
              {pageData.title}
            </h1>
            {pageData.subtitle && (
              <p className="text-lg text-[#a3e635] font-bold mt-2">{pageData.subtitle}</p>
            )}
          </div>

          {/* Content Blocks (Paragraphs & Callouts) */}
          <div
            className="space-y-4 text-neutral-200 leading-relaxed font-semibold"
            style={{ fontFamily: "Verdana, sans-serif" }}
          >
            {pageData.contentBlocks?.map((block: any, idx: number) => {
              if (block.type === "callout") {
                return (
                  <blockquote
                    key={idx}
                    className="border-l-4 border-[#a3e635] pl-4 py-3 my-6 bg-zinc-950/80 border-t border-r border-b border-t-[#a3e635]/20 border-r-[#a3e635]/20 border-b-[#a3e635]/20 rounded-r-lg space-y-3"
                  >
                    {block.title && (
                      <span className="block text-[#a3e635] font-extrabold text-sm not-italic mb-1 uppercase">
                        {block.title}
                      </span>
                    )}
                    {block.items ? (
                      <ul className="space-y-3 text-white font-bold italic">
                        {block.items.map((item: string, i: number) => {
                          if (item.includes("________________")) {
                            const [labelPart] = item.split("________________");
                            const fieldId = `commitment_line_${i}`;
                            return (
                              <li
                                key={i}
                                className="list-none flex flex-col sm:flex-row sm:items-center gap-2 not-italic"
                              >
                                <span className="text-neutral-200 font-semibold text-sm">
                                  {labelPart}
                                </span>
                                <input
                                  type="text"
                                  value={answers[fieldId] || ""}
                                  onChange={(e) => handleInputChange(fieldId, e.target.value)}
                                  placeholder="Type here..."
                                  className="flex-1 bg-black border border-[#a3e635]/40 rounded-lg px-3 py-1.5 text-sm text-neutral-100 focus:border-[#a3e635] focus:outline-none placeholder:text-neutral-600 font-normal"
                                />
                              </li>
                            );
                          }
                          return (
                            <li key={i} className="list-disc list-inside leading-relaxed">
                              <span className="not-italic">{item}</span>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <span className="block text-white font-bold italic">{block.text}</span>
                    )}
                  </blockquote>
                );
              }
              return <p key={idx}>{block.text}</p>;
            })}
          </div>

          {/* Interactive Table */}
          {pageData.interactiveTable && (
            <div className="overflow-x-auto border border-[#a3e635]/40 rounded-xl bg-zinc-950/80 shadow-[0_0_30px_rgba(163,230,53,0.03)]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#a3e635]/40 bg-zinc-900/80 text-xs uppercase tracking-widest font-bold text-[#a3e635]">
                    {pageData.interactiveTable.columns.map((col: any) => (
                      <th key={col.key} className="p-4">
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pageData.interactiveTable.rows.map((row: any) => (
                    <tr key={row.id} className="border-b border-zinc-900 last:border-0 align-top">
                      {pageData.interactiveTable.columns.map((col: any) => {
                        const cellKey = `table_${row.id}_${col.key}`;
                        return (
                          <td key={col.key} className="p-3">
                            {col.editable ? (
                              col.type === "checkbox" ? (
                                <div className="flex items-center justify-center sm:justify-start h-full">
                                  <input
                                    type="checkbox"
                                    checked={!!answers[cellKey]}
                                    onChange={(e) => handleInputChange(cellKey, e.target.checked)}
                                    className="w-4 h-4 accent-[#a3e635] bg-black border-[#a3e635]/40 rounded cursor-pointer"
                                  />
                                </div>
                              ) : (
                                <div className="flex flex-col gap-1.5">
                                  {row[col.key] && (
                                    <span className="text-xs text-neutral-400 font-semibold">
                                      {row[col.key]}
                                    </span>
                                  )}
                                  <input
                                    type="text"
                                    value={answers[cellKey] || ""}
                                    onChange={(e) => handleInputChange(cellKey, e.target.value)}
                                    placeholder="Write here..."
                                    className="w-full bg-black border border-[#a3e635]/40 rounded-lg px-3 py-2 text-sm text-neutral-100 focus:border-[#a3e635] focus:outline-none placeholder:text-neutral-600 font-normal"
                                  />
                                </div>
                              )
                            ) : (
                              <span className="font-semibold text-neutral-200">
                                {row[col.key] || row.label}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Callout placed between table and reflection */}
          {pageData.middleCallout && (
            <blockquote className="border-l-4 border-[#a3e635] pl-4 py-2 my-6 text-white font-bold italic bg-zinc-950/80 border-t border-r border-b border-t-[#a3e635]/20 border-r-[#a3e635]/20 border-b-[#a3e635]/20 rounded-r-lg">
              {pageData.middleCallout.text}
            </blockquote>
          )}

          {/* Reflection Exercise */}
          {pageData.reflectionExercise && (
            <section className="border border-[#a3e635]/40 rounded-2xl p-6 md:p-8 bg-zinc-950/80 space-y-6 shadow-[0_0_30px_rgba(163,230,53,0.03)]">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                <span className="text-xs font-bold tracking-widest text-[#a3e635] uppercase">
                  {pageData.reflectionExercise.header}
                </span>
                <span className="text-xs font-bold tracking-wider text-neutral-400 italic uppercase">
                  A BUILDER&apos;S REFLECTION
                </span>
              </div>

              <div>
                {pageData.reflectionExercise.subHeader && (
                  <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1">
                    {pageData.reflectionExercise.subHeader}
                  </p>
                )}
                <h2 className="text-xl font-bold text-white mt-1 uppercase">
                  {pageData.reflectionExercise.question}
                </h2>
              </div>

              {pageData.reflectionExercise.steps && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {pageData.reflectionExercise.steps.map((step: string, i: number) => (
                    <div key={i} className="bg-black border border-[#a3e635]/30 p-4 rounded-xl">
                      <span className="text-[#a3e635] font-black text-sm">0{i + 1}</span>
                      <p className="text-sm text-neutral-300 mt-1 font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              )}

              {pageData.reflectionExercise.example && (
                <div className="bg-black border border-[#a3e635]/30 rounded-xl p-4 text-sm text-neutral-300">
                  <strong className="text-white font-bold block mb-1 uppercase tracking-wide text-xs">
                    {pageData.reflectionExercise.example.label}
                  </strong>
                  {pageData.reflectionExercise.example.text}
                </div>
              )}

              <div className="space-y-4 pt-2">
                {pageData.reflectionExercise.inputFields?.map((field: any) => (
                  <div key={field.id}>
                    <label className="block text-sm font-bold text-neutral-200 mb-2 uppercase tracking-wide">
                      {field.prompt}
                    </label>
                    <textarea
                      rows={3}
                      value={answers[field.id] || ""}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      placeholder="Type your reflection here..."
                      className="w-full bg-black border border-[#a3e635]/40 rounded-xl p-3 text-neutral-100 focus:border-[#a3e635] focus:outline-none resize-none placeholder:text-neutral-600 font-normal"
                    />
                  </div>
                ))}
              </div>

              {pageData.reflectionExercise.whyItMatters && (
                <div className="pt-4 border-t border-zinc-900 mt-6">
                  <span className="text-xs font-bold tracking-widest text-[#a3e635] uppercase block mb-1">
                    {pageData.reflectionExercise.whyItMatters.title}
                  </span>
                  <p className="text-sm text-neutral-400 italic">
                    {pageData.reflectionExercise.whyItMatters.text}
                  </p>
                </div>
              )}
            </section>
          )}

          {!pageData.reflectionExercise && !pageData.interactiveTable && (
            <div className="pt-16 pb-4 flex flex-col items-center justify-center opacity-40 hover:opacity-80 transition-opacity">
              <div className="w-14 h-14 relative">
                <Image
                  src="/logos/b3.png"
                  alt="B3 Watermark"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <p className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase mt-2">
                BUILT IN 3
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Sticky Bottom Navigation Footer */}
      <footer className="border-t border-[#a3e635]/40 bg-black/95 backdrop-blur sticky bottom-0 z-20 py-4 px-6 shadow-2xl">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {pageData.pageNumber > 1 ? (
            <button
              type="button"
              onClick={() => navigateToPage(pageData.pageNumber - 1)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#a3e635]/40 hover:border-[#a3e635] text-xs font-bold uppercase tracking-wider transition bg-zinc-950 text-white cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 text-[#a3e635]" /> Previous
            </button>
          ) : (
            <div />
          )}

          {pageData.pageNumber < totalPages ? (
            <button
              type="button"
              onClick={() => navigateToPage(pageData.pageNumber + 1)}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#a3e635] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#bef264] transition shadow-[0_0_20px_rgba(163,230,53,0.2)] cursor-pointer"
            >
              Next Page <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <span className="text-xs uppercase tracking-wider text-[#a3e635] font-extrabold">
              End of Part 1
            </span>
          )}
        </div>
      </footer>
    </div>
  );
}
