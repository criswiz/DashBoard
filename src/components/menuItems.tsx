interface MenuItemProps {
    image: string;
    description: string;
  }
  

function menuItems({image, description}: MenuItemProps) {
    return (
        <div className="flex justify-between items-center p-4 m-4 text-right hover:bg-blue-300 hover:rounded-md px-12 hover:text-white mx-auto">
            <img src={image} alt="" className="w-4 h-4 mr-2 hover:text-white"/>
            <p className="text-left">{description}</p>
        </div>
    )
}

export default menuItems