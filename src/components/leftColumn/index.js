import LeftItem from "../leftItem";


const LeftColumn = () =>{
    const items = [
        {
            name : 'Boru',
            url:'https://bruce-fe-fb.web.app/image/avator.png'
        },
        {
            name : '活動',
            url:'https://bruce-fe-fb.web.app/image/left/activity.svg'
        },
        {
            name : '天氣',
            url:'https://bruce-fe-fb.web.app/image/left/cloudy.png'
        },
        {
            name : '災害應變中心',
            url:'https://bruce-fe-fb.web.app/image/left/dynamic.svg'
        },
        {
            name : '新冠病毒資訊中心',
            url:'https://bruce-fe-fb.web.app/image/left/facemask.svg'
        },
        {
            name : '社團',
            url:'https://bruce-fe-fb.web.app/image/left/friend.svg'
        },
        {
            name : '企業管理平台',
            url:'https://bruce-fe-fb.web.app/image/left/job.png'
        },
        {
            name : 'Messenger',
            url:'https://bruce-fe-fb.web.app/image/left/messenger.svg'
        },
        {
            name : '近期廣告動態',
            url:'https://bruce-fe-fb.web.app/image/left/pay.png'
        },
        {
            name : '朋友名單',
            url:'https://bruce-fe-fb.web.app/image/left/sale.png'
        },
        {
            name : '最愛',
            url:'https://bruce-fe-fb.web.app/image/left/star.svg'
        },
        {
            name : 'Marketplace',
            url:'https://bruce-fe-fb.web.app/image/left/store.svg'
        },
        {
            name : 'Watch',
            url:'https://bruce-fe-fb.web.app/image/left/watchingTv.svg'
        },
    ]


    return(
        <div className="hidden max-w-[360px] sticky top-main-span w-full h-full lg:block">
            {
                items.map((item,index)=>{
                    return <LeftItem name={item.name} url={item.url} key={index} ture={item.name==='Boru'} />
                })
            }
        </div>
    )
}

export default LeftColumn;