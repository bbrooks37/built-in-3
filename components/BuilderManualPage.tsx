"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, CheckCircle2, Home } from "lucide-react";

interface ManualPageProps {
  pageData: any;
  totalPages: number;
}

export default function BuilderManualPage({ pageData, totalPages }: ManualPageProps) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [savedStatus, setSavedStatus] = useState(false);

  const storageKey = `built_in_3_page_${pageData.pageNumber}`;

  // Load saved answers from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setAnswers(JSON.parse(saved));
    } else {
      setAnswers({});
    }
  }, [storageKey]);

  // Save answers to localStorage whenever the user types
  const handleInputChange = (fieldId: string, value: string) => {
    const updated = { ...answers, [fieldId]: value };
    setAnswers(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));

    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 1500);
  };

  const handlePageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const pageNum = e.target.value;
    if (pageNum) {
      router.push(`/manual/${pageNum}`);
    }
  };

  // --- DEDICATED COVER LAYOUT FOR PAGE 1 ---
  if (pageData.pageNumber === 1) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between selection:bg-lime-400 selection:text-neutral-950">
        <header className="border-b border-neutral-900 bg-neutral-950/90 backdrop-blur sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              BUILT IN 3 • THE BUILDER&apos;S MANUAL
            </span>
            <div className="flex items-center gap-3">
              <Link
                href="/manual/1"
                className="flex items-center gap-1.5 text-xs text-lime-400 hover:text-lime-300 font-semibold px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 transition"
              >
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
              <select
                aria-label="Select page number to jump to"
                onChange={handlePageSelect}
                defaultValue=""
                className="bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 rounded-md px-2 py-1 focus:border-lime-400 focus:outline-none cursor-pointer"
              >
                <option value="" disabled>Jump to page...</option>
                {Array.from({ length: totalPages }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Page {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </header>

        <main className="flex-1 max-w-2xl w-full mx-auto px-6 py-16 flex flex-col items-center justify-center text-center space-y-8">
          <p className="text-xs font-extrabold tracking-widest text-neutral-400 uppercase">
            BUILT IN 3
          </p>

          {/* Custom PNG Logo Container with sizes prop */}
          <div className="w-36 h-36 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center shadow-2xl shadow-lime-950/20 p-4 relative overflow-hidden">
            <Image
              src="/logos/b3.png"
              alt="Built in 3 Logo"
              fill
              sizes="144px"
              className="object-contain p-3"
              priority
            />
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              THE BUILDER&apos;S MANUAL
            </h1>
            <p className="text-lime-400 font-bold tracking-wider text-sm uppercase">
              PART 1 | THE FOUNDATION
            </p>
            <p className="text-xs text-neutral-400 font-semibold tracking-widest uppercase pt-1">
              BUILD YOUR BODY • BUILD YOUR MIND • BUILD YOUR LIFE
            </p>
          </div>

          <p className="text-neutral-300 text-sm max-w-md leading-relaxed">
            A guided field guide for honest reflection, practical action, and lasting growth.
          </p>

          <div className="pt-6 border-t border-neutral-900 w-full space-y-3">
            <p className="text-lime-400 text-xs font-bold tracking-widest uppercase">
              FITNESS IS THE VEHICLE. CHARACTER IS THE DESTINATION.
            </p>
            <p className="text-neutral-500 italic text-xs tracking-wider">
              BRICK BY BRICK. ■
            </p>
          </div>
        </main>

        {/* Sticky Bottom Navigation Footer */}
        <footer className="border-t border-neutral-800 bg-neutral-950/90 backdrop-blur sticky bottom-0 z-20 py-4 px-6 shadow-2xl">
          <div className="max-w-4xl mx-auto flex items-center justify-end">
            <Link
              href="/manual/2"
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-lime-400 text-neutral-950 font-bold text-sm hover:bg-lime-300 transition shadow-lg shadow-lime-400/10"
            >
              Start Manual <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </footer>
      </div>
    );
  }

  // --- STANDARD WORKBOOK & INTRO PAGES (Pages 2 - 40) ---
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col justify-between">
      <div>
        {/* Top Progress Bar & Page Jumper Header */}
        <header className="border-b border-neutral-800 bg-neutral-950/90 backdrop-blur sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest text-lime-400 uppercase">
                {pageData.chapterTitle || "BUILT IN 3 • THE BUILDER'S MANUAL"}
              </p>
              <p className="text-sm text-neutral-400">
                Page {pageData.pageNumber} of {totalPages}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {savedStatus && (
                <span className="hidden sm:flex items-center gap-1.5 text-xs text-lime-400 font-medium">
                  <CheckCircle2 className="w-4 h-4" /> Saved locally
                </span>
              )}
              <Link
                href="/manual/1"
                className="flex items-center gap-1.5 text-xs text-lime-400 hover:text-lime-300 font-semibold px-2.5 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 transition shadow-sm"
              >
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
              <select
                aria-label="Select page number to jump to"
                value={pageData.pageNumber}
                onChange={handlePageSelect}
                className="bg-neutral-900 border border-neutral-800 text-xs text-neutral-200 font-medium rounded-lg px-2.5 py-1.5 focus:border-lime-400 focus:outline-none cursor-pointer"
              >
                {Array.from({ length: totalPages }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Page {i + 1} of {totalPages}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full bg-neutral-900 h-1">
            <div
              className="bg-lime-400 h-1 transition-all duration-300"
              style={{ width: `${(pageData.pageNumber / totalPages) * 100}%` }}
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl w-full mx-auto px-6 py-10 space-y-8 pb-20">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              {pageData.title}
            </h1>
            {pageData.subtitle && (
              <p className="text-lg text-lime-400 font-medium mt-2">{pageData.subtitle}</p>
            )}
          </div>

          {/* Content Blocks (Paragraphs & Callouts) */}
          <div className="space-y-4 text-neutral-300 leading-relaxed">
            {pageData.contentBlocks?.map((block: any, idx: number) => {
              if (block.type === "callout") {
                return (
                  <blockquote
                    key={idx}
                    className="border-l-4 border-lime-400 pl-4 py-3 my-6 bg-neutral-900/60 rounded-r-lg space-y-2"
                  >
                    {block.title && (
                      <span className="block text-lime-400 font-bold text-sm not-italic mb-1">
                        {block.title}
                      </span>
                    )}
                    {block.items ? (
                      <ul className="list-disc list-inside space-y-1.5 text-white font-semibold italic">
                        {block.items.map((item: string, i: number) => (
                          <li key={i} className="leading-relaxed">
                            <span className="not-italic">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="block text-white font-semibold italic">
                        {block.text}
                      </span>
                    )}
                  </blockquote>
                );
              }
              return <p key={idx}>{block.text}</p>;
            })}
          </div>

          {/* Interactive Table (if present on this page) */}
          {pageData.interactiveTable && (
            <div className="overflow-x-auto border border-neutral-800 rounded-xl bg-neutral-900/40">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900/80 text-xs uppercase tracking-wider text-neutral-400">
                    {pageData.interactiveTable.columns.map((col: any) => (
                      <th key={col.key} className="p-4">
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pageData.interactiveTable.rows.map((row: any) => (
                    <tr key={row.id} className="border-b border-neutral-800/60 last:border-0 align-top">
                      {pageData.interactiveTable.columns.map((col: any) => (
                        <td key={col.key} className="p-3">
                          {col.editable ? (
                            <div className="flex flex-col gap-1.5">
                              {row[col.key] && (
                                <span className="text-xs text-neutral-400 font-medium">
                                  {row[col.key]}
                                </span>
                              )}
                              <input
                                type="text"
                                value={answers[`table_${row.id}_${col.key}`] || ""}
                                onChange={(e) =>
                                  handleInputChange(`table_${row.id}_${col.key}`, e.target.value)
                                }
                                placeholder="Write here..."
                                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-neutral-100 focus:border-lime-400 focus:outline-none placeholder:text-neutral-600"
                              />
                            </div>
                          ) : (
                            <span className="font-medium text-neutral-200">
                              {row[col.key] || row.label}
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Callout placed between the table and reflection section */}
          {pageData.middleCallout && (
            <blockquote className="border-l-4 border-lime-400 pl-4 py-2 my-6 text-white font-semibold italic bg-neutral-900/60 rounded-r-lg">
              {pageData.middleCallout.text}
            </blockquote>
          )}

          {/* Reflection Exercise & User Inputs (Only renders if defined in JSON) */}
          {pageData.reflectionExercise && (
            <section className="border border-neutral-800 rounded-2xl p-6 md:p-8 bg-neutral-900/50 space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-xs font-bold tracking-widest text-lime-400 uppercase">
                  {pageData.reflectionExercise.header}
                </span>
                <span className="text-xs font-medium tracking-wider text-neutral-400 italic uppercase">
                  A BUILDER&apos;S REFLECTION
                </span>
              </div>

              <div>
                {pageData.reflectionExercise.subHeader && (
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mt-1">
                    {pageData.reflectionExercise.subHeader}
                  </p>
                )}
                <h2 className="text-xl font-bold text-white mt-1">
                  {pageData.reflectionExercise.question}
                </h2>
              </div>

              {/* Numbered Steps */}
              {pageData.reflectionExercise.steps && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {pageData.reflectionExercise.steps.map((step: string, i: number) => (
                    <div key={i} className="bg-neutral-950/80 border border-neutral-800/80 p-4 rounded-xl">
                      <span className="text-lime-400 font-bold text-sm">0{i + 1}</span>
                      <p className="text-sm text-neutral-300 mt-1">{step}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Quick Example */}
              {pageData.reflectionExercise.example && (
                <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 text-sm text-neutral-400">
                  <strong className="text-neutral-200 block mb-1">
                    {pageData.reflectionExercise.example.label}
                  </strong>
                  {pageData.reflectionExercise.example.text}
                </div>
              )}

              {/* Interactive Input Fields */}
              <div className="space-y-4 pt-2">
                {pageData.reflectionExercise.inputFields?.map((field: any) => (
                  <div key={field.id}>
                    <label className="block text-sm font-semibold text-neutral-200 mb-2">
                      {field.prompt}
                    </label>
                    <textarea
                      rows={3}
                      value={answers[field.id] || ""}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      placeholder="Type your reflection here..."
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-neutral-100 focus:border-lime-400 focus:outline-none resize-none placeholder:text-neutral-600"
                    />
                  </div>
                ))}
              </div>

              {/* Why This Matters Footer */}
              {pageData.reflectionExercise.whyItMatters && (
                <div className="pt-4 border-t border-neutral-800/80 mt-6">
                  <span className="text-xs font-bold tracking-widest text-lime-400 uppercase block mb-1">
                    {pageData.reflectionExercise.whyItMatters.title}
                  </span>
                  <p className="text-sm text-neutral-400 italic">
                    {pageData.reflectionExercise.whyItMatters.text}
                  </p>
                </div>
              )}
            </section>
          )}

          {/* Subtle Watermark Logo for short intro/text pages with sizes prop */}
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
      <footer className="border-t border-neutral-800 bg-neutral-950/95 backdrop-blur sticky bottom-0 z-20 py-4 px-6 shadow-2xl">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {pageData.pageNumber > 1 ? (
            <Link
              href={`/manual/${pageData.pageNumber - 1}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-800 hover:border-lime-400 text-sm font-medium transition bg-neutral-900/50"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </Link>
          ) : (
            <div />
          )}

          {pageData.pageNumber < totalPages ? (
            <Link
              href={`/manual/${pageData.pageNumber + 1}`}
              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-lime-400 text-neutral-950 font-bold text-sm hover:bg-lime-300 transition shadow-md"
            >
              Next Page <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <span className="text-sm text-lime-400 font-semibold">End of Part 1</span>
          )}
        </div>
      </footer>
    </div>
  );
}