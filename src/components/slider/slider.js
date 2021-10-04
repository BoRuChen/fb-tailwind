import {useRef,useEffect,useState} from "react";
import Context from "./context";

const Slider = (props) => {
    const sliderRef = useRef(null);
    const itemRef = useRef(null);
    const [itemWidth,setItemWidth] = useState(0)
    const [itemNumber,setItemNumber] = useState(0)

    useEffect(() => {
        setItemWidth(itemRef.current.clientWidth);
        const changWidth = () => {
            setItemWidth(itemRef.current.clientWidth)
        }

        window.addEventListener('resize',changWidth)

        return () => {
            window.removeEventListener('resize',changWidth)
        }
    }, []);

    const contextValue={
        sliderRef,
        itemRef,
        itemWidth
    }

    const rightClick = () => {
        setItemNumber(itemNumber + 1)
        console.log(itemNumber)
    }

    const leftClick = () => {
        setItemNumber(itemNumber - 1)
        console.log(itemNumber)
    }

    return(
        <Context.Provider value={contextValue}>
            <div ref={sliderRef} className={`w-full overflow-x-hidden relative`}>
                <div className={`flex`} style={ { transform: `translate3d(-${(itemWidth+5)*itemNumber}px, 0, 0)`}}>
                    {props.children}
                </div>
                {itemNumber > 0 && <button className={`absolute w-[50px] h-[50px] bg-pink-300 left-0 top-[calc(50%-25px)]`}
                         onClick={leftClick}/>}
                <button className={`absolute w-[50px] h-[50px] bg-pink-300 right-0 top-[calc(50%-25px)]`} onClick={rightClick} />
            </div>
        </Context.Provider>
    )
}

export default Slider;

