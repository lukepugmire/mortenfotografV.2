import {useEffect} from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Weddings() {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[]);


    return <div className="weddings_container" data-aos="fade-up">
    <div className="wedding_gallery wedding_gallery_1">
        <div className="wedding_card_img"></div>
        <Link to="./HenrietteOgAnders" className="gallery_title_link">Henriette &#38; Anders</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum, mauris ac aliquet dapibus, nunc neque mattis sapien, sit amet vestibulum odio tellus a augue. Fusce eget massa tempus diam ullamcorper pulvinar. Curabitur quis posuere urna. Donec vitae egestas est. Donec malesuada eu sapien eget sagittis.</p>
    <Link to="./HenrietteOgAnders" className="gallery_link">Vis galleri</Link>
    </div>
    <div className="wedding_gallery wedding_gallery_2">
    <div className="wedding_card_img"></div>
    <Link to="./HenrietteOgAnders" className="gallery_title_link">Renate &#38; Tore</Link>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum, mauris ac aliquet dapibus, nunc neque mattis sapien, sit amet vestibulum odio tellus a augue. Fusce eget massa tempus diam ullamcorper pulvinar. Curabitur quis posuere urna. Donec vitae egestas est. Donec malesuada eu sapien eget sagittis.</p>
    <Link to="./RenateOgTore" className="gallery_link">Vis galleri</Link>
    </div>
</div>
}
