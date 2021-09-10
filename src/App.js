import Header from "./components/Header";
import RightColumn from "./components/rightColumn";
import LeftColumn from "./components/leftColumn";
import DynamicColumn from "./components/dynamicCoiumn";

const App = () => {
  return (
    <>
        <Header />
        <div className='flex pt-main-span min-h-[100vh]'>
            <LeftColumn />
            <DynamicColumn />
            <RightColumn />
        </div>
    </>
  );
}

export default App;
