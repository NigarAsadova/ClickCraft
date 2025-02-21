import Header from "../components/Header/Header";
import SetUp from "../components/Home/SetUp";
import TopPorts from "../components/Home/TopPorts";
import Welcome from "../components/Home/Welcome";

const Home = () => {
    return (  
        <div className="font-Roboto">
            <Welcome />
            <SetUp />
            <TopPorts />
        </div>
    );
}
 
export default Home;