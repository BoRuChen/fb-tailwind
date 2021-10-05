import {useRef,useEffect,useState,Children} from "react";
import Context from "./context";

const Slider = (props) => {
    const sliderRef = useRef(null);
    const itemRef = useRef(null);
    const [sliderRefWidth,setSliderRefWidth] = useState(0)
    const [itemRefWidth,setItemRefWidth] = useState(0)
    const [itemCount,setItemCount] = useState(0)
    const [itemNumber,setItemNumber] = useState(0)
    const [viewCount,setViewCount] = useState(0)

    useEffect(() => {
        setSliderRefWidth(sliderRef.current.clientWidth)
        if(itemRef!=null){
            setItemRefWidth(itemRef.current.clientWidth)
        }
        const changWidth = () => {
            setSliderRefWidth(sliderRef.current.clientWidth)
            if(itemRef!=null){
                setItemRefWidth(itemRef.current.clientWidth)
            }
        }

        window.addEventListener('resize',changWidth)

        return () => {
            window.removeEventListener('resize',changWidth)
        }
    }, []);

    const contextValue={
        sliderRef,
        itemRef,
    }

    const rightClick = () => {
        setItemNumber(itemNumber + 1)
    }

    const leftClick = () => {
        setItemNumber(itemNumber - 1)
    }

    useEffect(() => {
        setItemCount(Children.count(props.children))
    },[props.children])

    useEffect(() => {
        setViewCount(Math.floor(sliderRefWidth / itemRefWidth))
    },[sliderRefWidth,itemRefWidth])


    return(
        <Context.Provider value={contextValue}>
            <div ref={sliderRef} className={`w-full overflow-x-hidden relative `}>
                <div className={`flex duration-300 h-[250px] items-center p-2 `} style={ { transform: `translate3d(-${(itemRefWidth+5)*itemNumber}px, 0, 0)`}}>
                    {props.children}
                </div>
                {itemNumber > 0 && <button className={`absolute rounded-full w-[50px] h-[50px] bg-gray-400/70 left-0 top-[calc(50%-25px)] hover:bg-gray-400`}
                                           onClick={leftClick}>&lt;</button>}
                {((itemNumber + viewCount) < itemCount) && <button className={`absolute rounded-full w-[50px] h-[50px] bg-gray-400/70 right-0 top-[calc(50%-25px)] hover:bg-gray-400`}
                                                                   onClick={rightClick}>&gt;</button>}
            </div>
        </Context.Provider>
    )
}

export default Slider;

