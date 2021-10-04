import Slider from "../slider/index";

const Items = [
    {
        id:1,
        name:"test1"
    },
    {
        id:2,
        name:"test2"
    },
    {
        id:3,
        name:"test3"
    },
    {
        id:4,
        name:"test4"
    },
    {
        id:5,
        name:"test5"
    },

]

const DynamicColumn = () =>{
    return(
        <div className="w-full max-w-[744px] mx-auto h-[300vh]">
            <Slider>
                {
                    Items.map((item)=>{
                        return <Slider.Item key={item.id}> {item.name} </Slider.Item>
                    })
                }
            </Slider>
        </div>
    )
}

export default DynamicColumn;