import {FbLogo} from "../icons";
import MessageWindow from "../messageWindow";

const Header = () => {
    return (
        <>
            <header
                className="w-full h-[56px] fixed top-0 left-0 right-0 bg-fb-header flex justify-between items-center px-4 relative">
                <div className='flex items-center justify-left'>
                    <FbLogo className='text-fb fill-current'/>
                    <button className='lg:hidden popover-btn'>
                        <img src={'https://bruce-fe-fb.web.app/image/search.svg'}/>
                    </button>
                    <div className='bg-fb-input ml-2 py-2 px-3 w-[240px] rounded-full items-center hidden lg:flex'>
                        <img src={'https://bruce-fe-fb.web.app/image/search.svg'} className='h-[18px] w-[18px] mr-2'/>
                        <input
                            className='bg-transparent w-full text-white rounded-full focus:outline-none'
                            placeholder={"搜尋 Facebook"}

                        />
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <button className='popover-btn'>
                        <img src={'https://bruce-fe-fb.web.app/image/plus.svg'}/>
                    </button>
                    <button className='popover-btn'>
                        <img src={'https://bruce-fe-fb.web.app/image/messenger.svg'}/>
                    </button>
                    <button className='popover-btn'>
                        <img src={'https://bruce-fe-fb.web.app/image/bell.svg'}/>
                    </button>
                    <button className='popover-btn'>
                        <img src={'https://bruce-fe-fb.web.app/image/down.svg'}/>
                    </button>
                </div>
            </header>
            <MessageWindow>
                <FbLogo />
            </MessageWindow>
        </>
    )
}

export default Header;