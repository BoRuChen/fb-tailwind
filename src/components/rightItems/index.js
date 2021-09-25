

const RightItems = (props) => {
    return(<div className='flex my-2 p-1 items-center hover:bg-fb-input cursor-pointer'>
        <div className='relative w-[30px] h-[30px]'>
            <img src={props.url} alt={props.name}
                 className={`h-[30px] w-[30px] rounded-full overflow-hidden`}/>
            <div className={`w-[8px] h-[8px] absolute bottom-0 right-0 rounded-full bg-green-500 ring-2 ring-gray-900`} />
        </div>
        <div className='flex-1 ml-2'>
            <p className='text-white text-xl'>{props.name}</p>
        </div>
    </div>)
}

export default RightItems;