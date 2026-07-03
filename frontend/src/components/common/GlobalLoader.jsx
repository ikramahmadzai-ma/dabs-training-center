function GlobalLoader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">

      <div className="relative flex items-center justify-center">

        <div className="w-20 h-20 rounded-full border-[5px] border-gray-200"></div>

        <div className="absolute w-20 h-20 rounded-full border-[5px] border-transparent border-t-[#082A63] border-r-[#F59E0B] animate-spin"></div>

        <div className="absolute w-8 h-8 rounded-full bg-[#082A63] animate-ping opacity-20"></div>

        <div className="absolute w-3 h-3 rounded-full bg-[#F59E0B]"></div>

      </div>

    </div>
  );
}

export default GlobalLoader;