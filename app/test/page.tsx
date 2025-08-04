export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Test Page</h1>
        <p className="text-gray-600">If you can see this styled page, the CSS is working correctly!</p>
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
          ✅ Browser error should be fixed
        </div>
      </div>
    </div>
  )
} 