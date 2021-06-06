import Heading from "../../layout/Layout";
import { Link } from "react-router-dom";
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export default function Filmcontainer() {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[]);


    return <div className="film_container" data-aos="fade-up">
        <div className="film_container_text">
            <Heading title="Filmografi"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum, mauris ac aliquet dapibus, nunc neque mattis sapien, sit amet vestibulum odio tellus a augue. Fusce eget massa tempus diam ullamcorper pulvinar. Curabitur quis posuere urna. Donec vitae egestas est. Donec malesuada eu sapien eget sagittis.</p>
            <Link to="./Filmografi" className="gallery_link">Vis Filmografi</Link>
        </div>
        <div className="example_film">
            <iframe title="vimeo-player" src="https://player.vimeo.com/video/340610444" frameBorder="0" allowFullScreen></iframe>
            </div>
    </div>
    
}
