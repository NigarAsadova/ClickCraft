import Header from "../components/Header/Header";
import Contact from "../components/Home/Contact";
import RecentUsers from "../components/Home/RecentUsers";
import SetUp from "../components/Home/SetUp";
import TopPorts from "../components/Home/TopPorts";
import Welcome from "../components/Home/Welcome";

const Home = () => {
    return (  
        <div className="font-Roboto">
            <Welcome />
            <SetUp />
            <TopPorts />
            <RecentUsers />
            <Contact />
        </div>
    );
}
 
export default Home;