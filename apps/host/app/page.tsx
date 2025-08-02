import React from 'react'

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Host Application
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          This is the host application for our micro frontend setup.
        </p>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            TailwindCSS Integration Complete!
          </h2>
          <p className="text-gray-600">
            The host application now has TailwindCSS v4 integrated with PostCSS.
          </p>
        </div>
      </div>
    </div>
  )
}
