import Context from "./context";
import Food from '../../img/S__4194357.jpg';

const Item = (props) => {


    return(
        <Context.Consumer>
            {({itemRef}) =>{
                if(props.init){
                    return(<div ref={itemRef} className={`flex-1 rounded-xl min-w-[140px] max-h-[200px] ml-[5px] h-[200px] relative overflow-hidden cursor-pointer group`}>
                        <div className={`w-full h-full flex flex-col`}>
                            <div className={`h-full overflow-hidden`}>
                                <img className={`w-full h-full`} src={'https://bruce-fe-fb.web.app/image/avator.png'} alt={'img'}/>
                            </div>
                            <div className={`bg-fb-card pt-6 px-2 pb-2 w-full relative`}>
                                <button className={`absolute w-[32px] h-[32px] p-2 -top-4 ${'left-[calc(50%-16px)]'} bg-fb rounded-full ring-fb-card ring-4 flex items-center justify-center`}>
                                    <img src={'https://bruce-fe-fb.web.app/image/plus.svg'} alt={'plus'}/>
                                </button>
                                <p className={`w-full text-white text-center`}>建立限時動態</p>
                            </div>
                        </div>
                    </div>)
                }
                else if (props.guys){
                    return (<div ref={itemRef} className={`flex-1 relative mr-[5px] p-1`}>
                        <img className={`min-w-[30px] h-[30px] rounded-full`} src={'https://bruce-fe-fb.web.app/image/avator.png'} alt={''} />
                        <div className={`w-[5px] h-[5px] absolute right-[5px] bottom-[5px] rounded-full bg-green-500 ring-2 ring-fb-card`} />
                    </div>)
                }
                else {
                    return(<div ref={itemRef} className={`flex-1 rounded-xl min-w-[140px] max-h-[200px] ml-[5px] h-[200px] relative overflow-hidden cursor-pointer group`}>
                        <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-transparent`} />
                        <div className={`absolute top-[10px] left-[10px] z-10 w-[40px] h-[40px] rounded-full ring-4 ring-fb text-gray-400 bg-fb-bg font-medium flex items-center justify-center text-sm`} >Bo</div>
                        <p className={`absolute bottom-2 left-2 z-10 text-gray-400`}>Boru</p>
                        <img className={`w-full h-full duration-500 group-hover:scale-125`} src={Food} alt={'img'}  />
                    </div>)
                }
            }}
        </Context.Consumer>
    )
}

export default Item;