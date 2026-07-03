
const Publications = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md w-full bg-white shadow-lg rounded-xl p-8">
        
        {/* Big Status */}
        <h1 className="text-4xl font-extrabold text-[#082A63] mb-4">
          !
        </h1>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Page In Progress
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-6">
          This page is currently under development.
        </p>

        {/* Progress Bar */}
        <div className="w-full bg -gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-[#f59e0b] transition-all duration-500"
              
          ></div>
        </div>

        {/* Status Text */}
        <p className="text-xs text-gray-400 mt-3">
          Development in progress...
        </p>
      </div>
    </div>
  )
}

export default Publications