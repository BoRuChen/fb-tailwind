import Context from "./context";

const Item = (props) => {
    return(
        <Context.Consumer>
            {({itemRef}) =>{
                return(<div ref={itemRef} className={`flex-1 rounded-xl p-2 min-w-[100px] max-h-[200px] mr-[5px] bg-fb h-[200px]`}>
                    {props.children}
                </div>)
            }}
        </Context.Consumer>
    )
}

export default Item;