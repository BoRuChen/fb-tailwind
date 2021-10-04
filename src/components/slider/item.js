import Context from "./context";

const Item = (props) => {
    return(
        <Context.Consumer>
            {({itemRef,itemWidth}) =>{
                return(<div ref={itemRef} className={`flex-1 min-w-[100px] max-h-[200px] mr-[5px] bg-fb h-[200px]`}>
                    {props.children}
                </div>)
            }}
        </Context.Consumer>
    )
}

export default Item;