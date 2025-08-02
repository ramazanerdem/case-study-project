import React from 'react'
import './App.css'

function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Basket Remote Application
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          This is the basket remote application running on port 3002.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Shopping Cart
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Product A</h3>
                <p className="text-gray-600">$29.99</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-colors">
                  -
                </button>
                <span className="font-medium">2</span>
                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-colors">
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900">Product B</h3>
                <p className="text-gray-600">$49.99</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-colors">
                  -
                </button>
                <span className="font-medium">1</span>
                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition-colors">
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-gray-900">
                Total: $109.97
              </span>
            </div>
            <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              Proceed to Checkout
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            TailwindCSS v4 with Vite
          </h3>
          <p className="text-gray-600">
            Successfully integrated TailwindCSS v4 with Vite plugin for optimal
            performance!
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
