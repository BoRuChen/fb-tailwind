import {Logout} from "../icons";

const Setting = () => {
    return (
        <>
            <div className='flex w-full mt-2 p-2 items-center hover:bg-fb-popover cursor-pointer'>
                <img src={'https://bruce-fe-fb.web.app/image/avator.png'} alt={'avator'}
                     className='h-[40px] w-[40px] rounded-full'/>
                <div className='flex-1 ml-2'>
                    <p className='text-white'>布魯斯</p>
                    <p className='text-gray-600'>查看你的個人檔案</p>
                </div>
            </div>
            <div className='flex w-full mt-2 p-2 items-center hover:bg-fb-popover cursor-pointer'>
                <div className='p-2 rounded-full bg-fb-input flex items-center justify-center'>
                    <Logout />
                </div>
                <div className='flex-1 ml-2'>
                    <p className='text-white'>登出</p>
                </div>
            </div>
        </>
    )
}

export default Setting;