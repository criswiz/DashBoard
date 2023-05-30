import Sidebar from '../components/sidebar' 

const homepage = () => {
  return (
    <div className='flex h-screen rounded-md' >
        <div className="flex-auto w-1/6 border-r-2 border-black bg-gray-200">
            <Sidebar/>
        </div>
        <div className="flex-auto w-5/6 border bg-gray-200">
        </div>
    </div>
  )
}

export default homepage