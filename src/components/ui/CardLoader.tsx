export default function CardLoader() {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse">
        <div className="rounded-md bg-slate-200 h-40 w-full"></div>
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="h-8 bg-slate-200 rounded col-span-2"></div>
          <div className="h-8 bg-slate-200 rounded col-span-1"></div>
        </div>
      </div>
    </div>
  );
}
