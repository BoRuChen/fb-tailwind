
const Notify = () => {
    return (
        <>
            <p className='text-4xl text-white'>通知</p>
            <div className='flex w-full mt-2 p-2 items-center hover:bg-fb-popover cursor-pointer'>
                <img src={'https://bruce-fe-fb.web.app/image/avator.png'} alt={'avator'}
                     className='h-[40px] w-[40px] rounded-full'/>
                <div className='flex-1 ml-2'>
                    <p className='text-white'>Boru發佈了一門新課程！</p>
                    <p className='text-blue-700'>1分鐘前</p>
                </div>
            </div>
        </>
    )
}

export default Notify;