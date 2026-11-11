import { Suspense } from "react";
import manualData from "@/data/manual_data.json";
import BuilderManualPage from "@/components/BuilderManualPage";

// Single source of truth for the manual length.
// Keep this in sync with the totalPages value used in the home page.
const TOTAL_PAGES = 40;

type ManualPageParams = {
  params: Promise<{ pageNumber: string }>;
};

async function ManualContent({ params }: ManualPageParams) {
  const { pageNumber } = await params;
  const currentNum = parseInt(pageNumber, 10) || 1;

  const pageData = manualData.find((p: any) => p.pageNumber === currentNum);

  // Treat anything outside 1..TOTAL_PAGES (or missing from the data) as not found
  if (!pageData || currentNum < 1 || currentNum > TOTAL_PAGES) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        <p className="text-lg">Page {currentNum} not found.</p>
      </div>
    );
  }

  return <BuilderManualPage pageData={pageData} totalPages={TOTAL_PAGES} />;
}

export default function ManualPage({ params }: ManualPageParams) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-neutral-950 text-lime-400 flex items-center justify-center font-medium">
          Loading page...
        </div>
      }
    >
      <ManualContent params={params} />
    </Suspense>
  );
}
