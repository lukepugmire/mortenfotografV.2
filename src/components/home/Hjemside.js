import HomeCarousel from "./homecarousel/HomeCarousel";
import HomeNavigation from "./homenav/HomeNavigation";


export default function Hjemside() {
    return <div className="home_container">
    <div className="home_slider">
        <HomeCarousel />
    </div>
    <HomeNavigation />
    </div>;
}







