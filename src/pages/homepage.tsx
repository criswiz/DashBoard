import Sidebar from '../components/sidebar' 
import Card from '../components/card'

const homepage = () => {
  return (
    <div className='flex h-screen rounded-md' >
        <div className="flex-auto w-1/6 border-r-2 border-black">
            <Sidebar/>
        </div>
        <div className="flex-auto grid grid-cols-2 w-5/6 m-12 p-12 gap-x-14 gap-y-2">
            <Card link='https://tgholdings.app/live/procure' description='Procurement Hub'/>
            <Card link='https://tgholdings.app/live/procure' description='Procurement Hub'/>
            <Card link='https://tgholdings.app/live/procure' description='Procurement Hub'/>
            <Card link='https://tgholdings.app/live/procure' description='Procurement Hub'/>
        </div>
    </div>
  )
}

export default homepage