import MenuItem from './menuItems'

const sidebar = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center mt-8 '>
        <div className='flex flex-col items-center justify-center text-center p-4'>
          <img src="/src/assets/tgh.png" alt="Logo" className='w-32 h-32 mb-16 mx-auto'/>
          
          <div className="flex flex-col mb-6">
            <img src="/src/assets/tgh.png" alt="" className='w-24 h-24 rounded-full mb-3 mx-auto ' />
            <p className='text-lg mb-3'>Sarah Carter</p>
            <button className="rounded-full border px-4 border-black hover:bg-gray-400">Edit</button>
          </div>
          
          <div className="flex flex-col mb-2 ">
            <MenuItem image="/src/assets/home.svg" description="Dashboard"/> 
            <MenuItem image="/src/assets/activities.svg" description="Activities"/> 
            <MenuItem image="/src/assets/schedule.svg" description="Schedule"/> 
            <MenuItem image="/src/assets/settings.svg" description="Settings"/> 
          </div>

        </div>
    </div>
  )
}

export default sidebar