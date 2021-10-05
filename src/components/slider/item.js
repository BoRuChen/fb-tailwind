import Context from "./context";

const Item = (props) => {
    return(
        <Context.Consumer>
            {({itemRef}) =>{
                return(<div ref={itemRef} className={`flex-1 rounded-xl py-2 min-w-[140px] max-h-[200px] ml-[5px] bg-fb h-[200px] ${props.init?"":"hover:shadow-2xl hover:scale-105"} `}>
                    {props.children}
                </div>)
            }}
        </Context.Consumer>
    )
}

export default Item;