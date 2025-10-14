export default function ContactLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-pink-50/30 to-white">
      {/* Hero Section Skeleton */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16">
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

      {/* Contact Info & Form Section Skeleton */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Contact Info Skeleton */}
            <div className="space-y-8">
              {/* Contact Cards */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm animate-pulse">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl flex-shrink-0"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-6 w-32 bg-gray-200 rounded"></div>
                      <div className="h-4 w-48 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Media Section */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 animate-pulse">
                <div className="h-6 w-64 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 w-full bg-gray-200 rounded mb-6"></div>
                <div className="flex gap-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-sm animate-pulse">
                <div className="h-6 w-40 bg-gray-200 rounded mb-6"></div>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex justify-between items-center py-2">
                      <div className="h-4 w-32 bg-gray-200 rounded"></div>
                      <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form Skeleton */}
            <div className="bg-white rounded-2xl p-8 shadow-sm animate-pulse">
              <div className="h-8 w-64 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-full bg-gray-200 rounded mb-8"></div>
              
              <div className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                    <div className="h-12 bg-gray-200 rounded-lg"></div>
                  </div>
                  <div>
                    <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                    <div className="h-12 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
                  <div className="h-12 bg-gray-200 rounded-lg"></div>
                </div>

                {/* Message */}
                <div>
                  <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
                  <div className="h-32 bg-gray-200 rounded-lg"></div>
                </div>

                {/* Submit Button */}
                <div className="h-12 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Skeleton */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="h-[400px] bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl animate-pulse"></div>
        </div>
      </section>

      {/* FAQ Section Skeleton */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-pulse">
              <div className="h-10 w-96 bg-gray-200 rounded-lg mx-auto mb-4"></div>
              <div className="h-6 w-64 bg-gray-200 rounded mx-auto"></div>
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse">
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-4"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                    <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}