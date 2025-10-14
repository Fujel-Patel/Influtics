export default function AboutLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white">
      {/* Hero Section Skeleton */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content Skeleton */}
            <div className="space-y-6 animate-pulse">
              <div className="h-4 w-24 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full"></div>
              <div className="space-y-3">
                <div className="h-10 w-3/4 bg-gray-200 rounded-lg"></div>
                <div className="h-10 w-full bg-gray-200 rounded-lg"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                <div className="h-4 w-4/5 bg-gray-200 rounded"></div>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="h-12 w-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full"></div>
                <div className="h-12 w-32 bg-gray-200 rounded-full"></div>
              </div>
            </div>

            {/* Image Skeleton */}
            <div className="relative animate-pulse">
              <div className="relative aspect-[4/5] rounded-3xl bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-300/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section Skeleton */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="text-center mb-12 space-y-4">
              <div className="h-8 w-48 bg-gray-200 rounded-lg mx-auto"></div>
              <div className="h-6 w-96 bg-gray-200 rounded mx-auto"></div>
            </div>
            <div className="space-y-4">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Stats Skeleton */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center animate-pulse">
                <div className="h-12 w-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg mx-auto mb-2"></div>
                <div className="h-4 w-24 bg-gray-200 rounded mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section Skeleton */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-pulse">
            <div className="h-8 w-64 bg-gray-200 rounded-lg mx-auto mb-4"></div>
            <div className="h-4 w-96 bg-gray-200 rounded mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm animate-pulse">
                <div className="h-12 w-12 bg-gradient-to-r from-pink-200 to-purple-200 rounded-xl mb-4"></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded mb-3"></div>
                <div className="space-y-2">
                  <div className="h-3 w-full bg-gray-200 rounded"></div>
                  <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section Skeleton */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-pulse">
              <div className="h-8 w-48 bg-gray-200 rounded-lg mx-auto mb-4"></div>
              <div className="h-4 w-80 bg-gray-200 rounded mx-auto"></div>
            </div>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="flex justify-between mb-2">
                    <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    <div className="h-4 w-12 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-pink-200 to-purple-200 rounded-full" style={{width: `${60 + i * 5}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section Skeleton */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center animate-pulse">
            <div className="h-8 w-64 bg-gray-200 rounded-lg mx-auto mb-4"></div>
            <div className="h-4 w-96 bg-gray-200 rounded mx-auto mb-8"></div>
            <div className="flex gap-3 max-w-md mx-auto">
              <div className="flex-1 h-12 bg-white rounded-full"></div>
              <div className="h-12 w-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}