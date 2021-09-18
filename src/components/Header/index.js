import {FbLogo} from "../icons";
import MessageWindow from "../messageWindow";
import {useState} from "react";
import Establish from "../messageWindow/establish";
import Message from "../messageWindow/message";
import Setting from "../messageWindow/setting";
import Notify from "../messageWindow/notify";

const Header = () => {
    const [messageWindow,setMessageWindow] = useState(true);
    const [messageSwitch,setMessageSwitch] = useState(0);

    const switchMessage = () => {
        switch (messageSwitch) {
            case 0:
                return <Establish />
            case 1:
                return <Message />
            case 2:
                return <Notify />
            case 3:
                return <Setting />
            default:
                return ''
        }
    }
    const btnClick = (index) => {
        if (messageWindow === false){
            setMessageWindow(true)
            setMessageSwitch(index)
        }
        else {
            if (index === messageSwitch){
                setMessageWindow(false)
            }
            else {
                setMessageSwitch(index)
            }
        }
    }

    const showMessageWindow = () => {
        if (messageWindow){
            return (
                <MessageWindow setMessageWindow={setMessageWindow}>
                    {switchMessage()}
                </MessageWindow>
            )
        }
    }

    return (
        <>
            <header
                className="w-full h-[56px] fixed top-0 left-0 right-0 bg-fb-header flex justify-between items-center px-4 z-20">
                <div className='flex items-center justify-left'>
                    <FbLogo className='text-fb fill-current'/>
                    <button className='lg:hidden popover-btn'>
                        <img src={'https://bruce-fe-fb.web.app/image/search.svg'} alt={'search'}/>
                    </button>
                    <div className='bg-fb-input ml-2 py-2 px-3 w-[240px] rounded-full items-center hidden lg:flex'>
                        <img src={'https://bruce-fe-fb.web.app/image/search.svg'} alt={'search'} className='h-[18px] w-[18px] mr-2'/>
                        <input
                            className='bg-transparent w-full text-white rounded-full focus:outline-none'
                            placeholder={"搜尋 Facebook"}

                        />
                    </div>
                </div>
                <div className='flex items-center justify-end'>
                    <button className='popover-btn'  onClick={()=>{btnClick(0)}}>
                        <img src={'https://bruce-fe-fb.web.app/image/plus.svg'} alt={'plus'}/>
                    </button>
                    <button className='popover-btn'  onClick={()=>{btnClick(1)}}>
                        <img src={'https://bruce-fe-fb.web.app/image/messenger.svg'} alt={'messenger'}/>
                    </button>
                    <button className='popover-btn'  onClick={()=>{btnClick(2)}}>
                        <img src={'https://bruce-fe-fb.web.app/image/bell.svg'} alt={'bell'}/>
                    </button>
                    <button className='popover-btn'  onClick={()=>{btnClick(3)}}>
                        <img src={'https://bruce-fe-fb.web.app/image/down.svg'} alt={'down'}/>
                    </button>
                </div>
            </header>
            {showMessageWindow()}
        </>
    )
}

export default Header;