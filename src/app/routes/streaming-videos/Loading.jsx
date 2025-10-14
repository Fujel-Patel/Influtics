export default function Loading() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="flex flex-col items-center space-y-8 text-center">
        <div className="animate-pulse w-80 h-10 bg-gray-200 rounded-md"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse flex flex-col bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="h-44 bg-gray-200"></div>
              <div className="p-4 space-y-3">
                <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-600">Loading streaming videos...</p>
      </div>
    </section>
  );
}
