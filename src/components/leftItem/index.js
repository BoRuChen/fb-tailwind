const LeftItem = (props) => {

    return (<div className='flex w-full mt-2 p-2 items-center hover:bg-fb-popover cursor-pointer'>
        <img src={props.url} alt={props.name}
             className={`h-[40px] w-[40px] ${props.ture && 'rounded-full'}`}/>
        <div className='flex-1 ml-2'>
            <p className='text-white text-xl'>{props.name}</p>
        </div>
    </div>)
}

export default LeftItem;