import star from "../../assets/icons/stars.svg";
const HowItWorks = () => {
    return ( 
        <div className="flex items-center gap-3 mb-5">
        <div><img src={star} alt="stars" /></div>
        <span className="bg-custom-blue-gradient bg-clip-text text-transparent text-base font-medium uppercase tracking-[0.25em] ">How It Works</span>
    </div>
     );
}
 
export default HowItWorks;