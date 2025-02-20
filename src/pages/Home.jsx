import Header from "../components/Header/Header";
import SetUp from "../components/Home/SetUp";
import Welcome from "../components/Home/Welcome";

const Home = () => {
    return (  
        <div className="font-Roboto">
            <Welcome />
            <SetUp />
        </div>
    );
}
 
export default Home;