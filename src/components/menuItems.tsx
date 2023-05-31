interface MenuItemProps {
    image: string;
    description: string;
  }
  

function menuItems({image, description}: MenuItemProps) {
    return (
        <div className="flex justify-between items-center p-4 m-4 text-right hover:bg-gray-400 hover:rounded-full hover: px-12">
            <img src={image} alt="" className="w-4 h-4 mr-2"/>
            <p className="text-left">{description}</p>
        </div>
    )
}

export default menuItems