import Sidebar from '../components/sidebar' 
import Card from '../components/card'
import Header from '../components/header'

const homepage = () => {
  return (
    <div className='flex h-screen rounded-md w-full' >
        <div className="w-1/6 border-r-2 border-blue-200">
            <Sidebar/>
        </div>
        <div className="flex flex-col w-full">
          <div className='w-full border-b-2 border-blue-200'>
                <Header/>
          </div>
          <div className="flex-auto grid grid-cols-3 w-5/6 mx-auto my-12 p-12 gap-x-12">
              <Card link='https://tgholdings.app/live/procure' description='Procurement Hub'/>
              <Card link='https://tgholdings.app/live/procure' description='Procurement Hub'/>
              <Card link='https://tgholdings.app/live/procure' description='Procurement Hub'/>
              <Card link='https://tgholdings.app/live/procure' description='Procurement Hub'/>
              <Card link='https://tgholdings.app/live/procure' description='Procurement Hub'/>
              <Card link='https://tgholdings.app/live/procure' description='Procurement Hub'/>
          </div>
        </div>
        
    </div>
  )
}

export default homepage