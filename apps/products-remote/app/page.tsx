import React from 'react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Products Remote Application
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          This is the products remote application running on port 3001.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Product 1
            </h3>
            <p className="text-gray-600 mb-4">
              Sample product description with TailwindCSS styling.
            </p>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              View Details
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Product 2
            </h3>
            <p className="text-gray-600 mb-4">
              Another product with beautiful TailwindCSS design.
            </p>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              View Details
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Product 3
            </h3>
            <p className="text-gray-600 mb-4">
              TailwindCSS v4 integration is working perfectly!
            </p>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
