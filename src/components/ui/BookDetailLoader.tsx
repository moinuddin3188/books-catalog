export default function BookDetailLoader() {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse grid grid-cols-3">
        <div className="rounded-md bg-slate-200 col-span-1 h-40 w-30"></div>
        <div className="col-span-2 py-1 ml-4">
          <div className="h-5 bg-slate-200 rounded w-full"></div>
          <div className="h-8 bg-slate-200 rounded w-30 mt-5"></div>
          <div className="h-5 bg-slate-200 rounded w-8 mt-5"></div>
        </div>
      </div>
    </div>
  );
}
