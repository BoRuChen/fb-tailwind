import Slider from "../slider/index";
import PostWindow from "./postWindow";

const Items = [
    {
        id:1,
        name:"test1"
    },
    {
        id:2,
        name:"test2"
    },
    {
        id:3,
        name:"test3"
    },
    {
        id:4,
        name:"test4"
    },
    {
        id:5,
        name:"test5"
    },
    {
        id:6,
        name:"test6"
    },
    {
        id:7,
        name:"test7"
    },
    {
        id:8,
        name:"test8"
    },
    {
        id:9,
        name:"test8"
    },
    {
        id:10,
        name:"test8"
    },
    {
        id:11,
        name:"test8"
    },
    {
        id:12,
        name:"test8"
    },
    {
        id:13,
        name:"test8"
    },

]

const DynamicColumn = () =>{
    return(
        <div className="w-full max-w-[744px] mx-auto px-2">
            <Slider>
                <Slider.Init />
                {
                    Items.map((item)=>{
                        return <Slider.Item key={item.id}> {item.name} </Slider.Item>
                    })
                }
            </Slider>

            <div className={`mt-2 bg-fb-card w-full`}>
                <div className={`mt-1 w-full px-3 flex py-5`}>
                    <img className={`rounded-full w=[25px] h-[25px]`} src={'https://bruce-fe-fb.web.app/image/avator.png'} alt={''}/>
                    <input className={`w-full bg-fb-input rounded-full ml-3 focus:outline-none px-3`} placeholder={'布魯斯，在想什麼?'} />
                </div>
                <div className={`w-[95%] h-0.5 bg-gray-400 mx-auto`} />
                <div className={`mt-1 w-full px-3 py-1 flex`}>
                    <div className={`w-full flex items-center justify-center hover:bg-fb-popover py-2`}>
                        <img className={`w-[15px] h-[15px] mr-1`} src={'https://bruce-fe-fb.web.app/image/camera.svg'} alt={''}/>
                        <p className={`text-gray-400`}>直播視訊</p>
                    </div>
                    <div className={`w-full flex items-center justify-center hover:bg-fb-popover py-2`}>
                        <img className={`w-[15px] h-[15px] mr-1`} src={'https://bruce-fe-fb.web.app/image/photo.svg'} alt={''}/>
                        <p className={`text-gray-400`}>相片/影片</p>
                    </div>
                    <div className={`w-full flex items-center justify-center hover:bg-fb-popover py-2`}>
                        <img className={`w-[15px] h-[15px] mr-1`} src={'https://bruce-fe-fb.web.app/image/feel.svg'} alt={''}/>
                        <p className={`text-gray-400`}>感受/活動</p>
                    </div>
                </div>
            </div>

            <div className={`mt-2 bg-fb-card w-full p-3 flex items-center justify-center`}>
                <div className={`rounded-full py-1 px-3 flex items-center justify-center ring-2 ring-gray-400 w-[160px] `}>
                    <img className={`w-[30px] h-[30px]`} src={'https://bruce-fe-fb.web.app/image/video.svg'} alt={''}/>
                    <p className={`text-blue-600 text-sm ml-1`}>建立包廂</p>
                </div>
                <Slider>
                    {
                        Items.map((item)=>{
                            return <Slider.Guys key={item.id}> {item.name} </Slider.Guys>
                        })
                    }
                </Slider>
            </div>

            <PostWindow />
            <PostWindow />
            <PostWindow />

        </div>
    )
}

export default DynamicColumn;