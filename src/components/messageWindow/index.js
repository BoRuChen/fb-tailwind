


const messageWindow = (props) => {
    return (
        <div className='bg-white w-[300px] min-h-[100px] fixed top-[80px] right-[10px] rounded-xl shadow-lg bg-fb-input'>
            {props.children}
        </div>
    )
}


export default messageWindow;