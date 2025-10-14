export default function Loading() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="flex flex-col items-center space-y-6 text-center">
        <div className="animate-pulse">
          <div className="h-10 w-64 bg-gray-200 rounded-md mb-4"></div>
          <div className="h-4 w-80 bg-gray-200 rounded-md mb-2"></div>
          <div className="h-4 w-72 bg-gray-200 rounded-md mb-2"></div>
        </div>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-400"></div>
        <p className="text-gray-600">Loading About page...</p>
      </div>
    </section>
  );
}
