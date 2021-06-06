import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Portraits() {

    useEffect(() => {
        Aos.init({duration: 1000})
    },[]);


    return <div className="portraits_container" data-aos="fade-up">
        <h2>Portretter / familie / søsken</h2>
        <div className="portraits_img"></div>
        <div className="portraits_boxes">
        <div className="portraits_box" data-aos="fade-up">
            <h4>FAMILIEFOTO</h4>
        <p>
            <i>
                Fotografering inkluderer 10 digitale bilder til skjerm
                Fotosession hjemme, ute eller på lokasjon (inntil 30 km)
                fra 2 500 kr
            </i>
        </p>
        </div>
        
        <div className="portraits_box" data-aos="fade-up">
            <h4>
                Digitalt bilder
            </h4>
            <p>
                1 stk - 650 kr
            </p>
            <p>
                5 stk - 2500kr
            </p>
            <p>
                10 stk - 4500kr   
            </p>
        </div>
        </div>
    </div>
}
