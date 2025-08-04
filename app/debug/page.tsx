export default function DebugPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">CSS Debug Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tailwind Classes Test */}
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tailwind Classes Test</h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-500 text-white rounded">Blue Background</div>
              <div className="p-4 bg-green-500 text-white rounded">Green Background</div>
              <div className="p-4 bg-red-500 text-white rounded">Red Background</div>
              <div className="p-4 bg-yellow-500 text-black rounded">Yellow Background</div>
            </div>
          </div>

          {/* Custom CSS Classes Test */}
          <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Custom CSS Classes Test</h2>
            <div className="space-y-4">
              <button className="btn-primary">Primary Button</button>
              <button className="btn-secondary">Secondary Button</button>
              <div className="p-4 bg-primary-green text-white rounded">Primary Green</div>
              <div className="p-4 bg-primary-dark text-white rounded">Primary Dark</div>
            </div>
          </div>

          {/* Responsive Design Test */}
          <div className="bg-white p-6 rounded-lg shadow-lg border md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Responsive Design Test</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-purple-500 text-white rounded text-center">Col 1</div>
              <div className="p-4 bg-purple-600 text-white rounded text-center">Col 2</div>
              <div className="p-4 bg-purple-700 text-white rounded text-center">Col 3</div>
              <div className="p-4 bg-purple-800 text-white rounded text-center">Col 4</div>
            </div>
          </div>

          {/* CSS Variables Test */}
          <div className="bg-white p-6 rounded-lg shadow-lg border md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">CSS Variables Test</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-primary-green text-white rounded text-center">Primary Green</div>
              <div className="p-4 bg-primary-green-dark text-white rounded text-center">Primary Green Dark</div>
              <div className="p-4 bg-primary-black text-white rounded text-center">Primary Black</div>
              <div className="p-4 bg-primary-dark text-white rounded text-center">Primary Dark</div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-yellow-100 border border-yellow-400 rounded-lg">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Debug Information</h3>
          <p className="text-yellow-700">
            If you can see this styled page with colors and proper layout, then CSS is loading correctly.
            If you see plain text without styling, there's an issue with CSS loading.
          </p>
        </div>
      </div>
    </div>
  )
} 