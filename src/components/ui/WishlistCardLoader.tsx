
export default function WishlistCardLoader() {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-md bg-slate-200 h-40 w-32"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-5 bg-slate-200 rounded w-full"></div>
          <div className="h-8 bg-slate-200 rounded w-30 mt-5"></div>
          <div className="h-5 bg-slate-200 rounded w-8 mt-5"></div>
        </div>
      </div>
    </div>
  )
}
