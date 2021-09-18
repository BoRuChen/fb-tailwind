import {Note} from "../icons";

const Establish = () => {
    return (
        <>
            <p className='text-4xl text-white'>建立</p>
            <div className='flex w-full mt-2 p-2 items-center hover:bg-fb-popover cursor-pointer'>
                <div className='bg-fb-input rounded-full w-[40px] h-[40px] flex items-center justify-center'>
                    <Note />
                </div>
                <div className='flex-1 ml-2'>
                    <p className='text-white text-xl'>貼文</p>
                    <p className='text-gray-400'>在動態消息分享貼文。</p>
                </div>
            </div>
        </>

    )
}

export default Establish;