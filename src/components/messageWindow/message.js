

const Message = () => {
    return (
        <>
            <p className='text-4xl text-white'>Messenger</p>
            <div className='bg-fb-input mt-2 py-2 px-3 w-full rounded-full items-center flex'>
                <img src={'https://bruce-fe-fb.web.app/image/search.svg'} alt={'search'}
                     className='h-[18px] w-[18px] mr-2'/>
                <input
                    className='bg-transparent w-full text-white rounded-full focus:outline-none'
                    placeholder={"搜尋 Messenger"}

                />
            </div>
            <div className='flex w-full mt-2 p-2 items-center hover:bg-fb-popover cursor-pointer'>
                <img src={'https://bruce-fe-fb.web.app/image/avator.png'} alt={'avator'}
                     className='h-[40px] w-[40px] rounded-full'/>
                <div className='flex-1 ml-2'>
                    <p className='text-white text-xl'>布魯斯</p>
                    <p className='text-gray-400'>Tailwind讚讚!．1分鐘前。</p>
                </div>
            </div>
        </>
    )
}

export default Message;