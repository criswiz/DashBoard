
function header() {
  return (
    <div className="flex justify-between items-center p-4">
        <p className="text-xl font-sans subpixel-antialiased font-light">MyTGH</p>
        <form className="flex items-center">   
            <label className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-blue-700 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="simple-search" className="bg-gray-50 border border-blue-700 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-20 p-2.5  " placeholder="Search" required />
            </div>
        </form>
        <div className="flex justify-between items-center">
            <button className="rounded-md border border-blue-700 hover:bg-blue-500 text-sm hover:text-white px-8 py-3"> Upgrade </button>
            <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-black rounded-lg border border-blue-700 hover:bg-blue-500 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
        
    </div>
  )
}

export default header