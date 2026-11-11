import { Suspense } from "react";
import manualData from "@/data/manual_data.json";
import BuilderManualPage from "@/components/BuilderManualPage";

async function ManualContent({
  params,
}: {
  params: Promise<{ pageNumber: string }>;
}) {
  const { pageNumber } = await params;
  const currentNum = parseInt(pageNumber, 10) || 1;
  const pageData = manualData.find((p: any) => p.pageNumber === currentNum);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center">
        <p className="text-lg">Page {currentNum} not found.</p>
      </div>
    );
  }

  return <BuilderManualPage pageData={pageData} totalPages={manualData.length} />;
}

export default function ManualPage({
  params,
}: {
  params: Promise<{ pageNumber: string }>;
}) {
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