import cake from '../../img/cake.jpg'

const PostWindow = () => {


    return(<div className={`bg-fb-card mt-2 w-full rounded-md overflow-hidden mb-2`}>

        <div className={`flex flex-col bg-fb-active`}>
            <div className={`flex p-4 items-center`}>
                <img className={`w-[40px] h-[40px] rounded-full`} src={'https://bruce-fe-fb.web.app/image/avator.png'} alt={``} />
                <div className={`text-gray-400 ml-3 flex-1`}>
                    <p className={`text-white`}>布魯斯</p>
                    <p className={`flex text-xs`}>5小時。<img className={`w-4 h-4 bg-fb-active`} src={'https://bruce-fe-fb.web.app/image/earth.svg'} alt={''}/></p>
                </div>
                <img className={`w-[10px] h-[10px] rounded-full`} src={'https://bruce-fe-fb.web.app/image/more.svg'} alt={``} />
            </div>

            <img className={`w-full`} src={cake} alt={''}/>

            <div className={`w-full bg-gray-400/40 text-white`}>
                <p className={`ml-3 text-xs`}>www.brucefe.com</p>
                <p className={`ml-6`}>[布魯斯] 手工蛋糕</p>
            </div>

            <div className={`w-full text-gray-400 flex flex-col`}>
                <div className={`flex justify-between p-4`}>
                    <div className={`flex items-center`}>
                        <img className={`w-4 h-4`} src={`https://bruce-fe-fb.web.app/image/like-blue.svg`} alt={''}/>
                        <p className={`ml-3 text-xs`}>99999</p>
                    </div>
                    <p className={`text-xs`}>1次分享</p>
                </div>
                <hr className={`w-full mx-auto border-gray-400 w-11/12 pt-1 px-2 pb-2`}/>

                <div className={`flex text-gray-400`}>
                    <div className={`w-full flex items-center justify-center p-1 hover:bg-fb-popover cursor-pointer`}>
                        <img className={`w-5 h-5 mr-2`} alt={''} src={'https://bruce-fe-fb.web.app/image/like.svg'}/>
                        <p>讚</p>
                    </div>
                    <div className={`w-full flex items-center justify-center p-1 hover:bg-fb-popover cursor-pointer`}>
                        <img className={`w-5 h-5 mr-2`} alt={''} src={'https://bruce-fe-fb.web.app/image/chat.svg'}/>
                        <p>留言</p>
                    </div>
                    <div className={`w-full flex items-center justify-center p-1 hover:bg-fb-popover cursor-pointer`}>
                        <img className={`w-5 h-5 mr-2`} alt={''} src={'https://bruce-fe-fb.web.app/image/share.svg'}/>
                        <p>分享</p>
                    </div>
                </div>

            </div>

        </div>
    </div>)
}

export default PostWindow