/** Shimmer placeholder shown while a lazy-loaded section's code downloads. */
export default function SectionSkeleton() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-14 md:py-24" aria-hidden="true">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="h-4 w-24 mx-auto rounded-full skeleton" />
        <div className="h-10 w-2/3 mx-auto rounded-lg skeleton" />
        <div className="h-40 w-full rounded-2xl skeleton" />
      </div>
    </div>
  );
}
