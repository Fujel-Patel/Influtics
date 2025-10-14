export default function PagesLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white">
      {/* Hero Section Skeleton */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-pulse">
            <div className="h-10 w-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full mx-auto mb-6"></div>
            <div className="space-y-4 mb-6">
              <div className="h-12 w-96 bg-gray-200 rounded-lg mx-auto"></div>
              <div className="h-12 w-80 bg-gray-200 rounded-lg mx-auto"></div>
            </div>
            <div className="h-6 w-[500px] bg-gray-200 rounded mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Pages Grid Skeleton */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm animate-pulse">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl mb-4"></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
                <div className="space-y-2 mb-4">
                  <div className="h-4 w-full bg-gray-200 rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                </div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}