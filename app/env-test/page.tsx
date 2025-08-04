export default function EnvTestPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Environment Test Page</h1>
        
        <div className="space-y-4">
          <div className="p-4 bg-blue-100 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Environment Variables</h2>
            <div className="space-y-2 text-sm">
              <div><strong>NODE_ENV:</strong> {process.env.NODE_ENV || 'Not set'}</div>
              <div><strong>NEXT_PUBLIC_VERCEL_ENV:</strong> {process.env.NEXT_PUBLIC_VERCEL_ENV || 'Not set'}</div>
              <div><strong>VERCEL_ENV:</strong> {process.env.VERCEL_ENV || 'Not set'}</div>
            </div>
          </div>

          <div className="p-4 bg-green-100 rounded-lg">
            <h2 className="text-xl font-semibold text-green-800 mb-2">CSS Test</h2>
            <div className="space-y-2">
              <div className="p-2 bg-red-500 text-white rounded">Red Background (Tailwind)</div>
              <div className="p-2 bg-primary-green text-white rounded">Primary Green (Custom)</div>
              <div className="p-2 bg-primary-dark text-white rounded">Primary Dark (Custom)</div>
            </div>
          </div>

          <div className="p-4 bg-yellow-100 rounded-lg">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">Status</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>Page is rendering</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>CSS classes are working</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span>No database dependency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 