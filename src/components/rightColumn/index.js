import RightItems from "../rightItems";

const items = [
        {
            name : '布魯斯',
            url:'https://bruce-fe-fb.web.app/image/avator.png'
        },
        {
            name : '燃燒吧火鳥',
            url:'https://bruce-fe-fb.web.app/image/avator.png'
        },
        {
            name : '追追追',
            url:'https://bruce-fe-fb.web.app/image/avator.png'
        },
        {
            name : '布魯斯',
            url:'https://bruce-fe-fb.web.app/image/avator.png'
        },
        {
            name : '布魯斯',
            url:'https://bruce-fe-fb.web.app/image/avator.png'
        },
        {
            name : '布魯斯',
            url:'https://bruce-fe-fb.web.app/image/avator.png'
        },
        {
            name : '布魯斯',
            url:'https://bruce-fe-fb.web.app/image/avator.png'
        },
        {
            name : '布魯斯',
            url:'https://bruce-fe-fb.web.app/image/avator.png'
        },
        {
            name : '布魯斯',
            url:'https://bruce-fe-fb.web.app/image/avator.png'
        },
    ]

const RightColumn = () =>{
    return(
        <div className="hidden w-full h-full sticky top-main-span max-w-[360px] lg:block pl-1">
            <p className='w-full text-gray-400 text-xl'>聯絡人</p>
            {items.map((item,index)=>{
                return <RightItems name={item.name} url={item.url} key={index}/>
            })}
        </div>
    )
}

export default RightColumn;