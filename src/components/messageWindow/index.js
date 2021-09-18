


const messageWindow = (props) => {
    return (
        <>
            <div className='absolute z-30 bg-fb-header w-[300px] min-h-[100px] top-[80px] right-[10px] rounded-xl shadow-lg border-fb-input p-4 lg:w-[360px] border'>
                {props.children}
            </div>
            <div className='z-10 w-screen min-h-screen h-full fixed' onClick={()=>{props.setMessageWindow(false)}} />
        </>

    )
}


export default messageWindow;