import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Konfirmant() {

    useEffect(() => {
        Aos.init({duration: 1000})
    },[]);

    return <div className="konfirmant_container" data-aos="fade-up">
        <h2>Konfirmant</h2>
        <p><i>Fotografering inkluderer 5 digitale bilder til skjerm hvis ikke annet er avtalt.</i></p>
        <div className="konfirmant_bilder"></div>
        <div className="konfirmant_content_box">
            <div className="konfirmant_content" data-aos="fade-up">
                <h4>
                Fotografering 1t i eller utenfor kirke / lokalet
                </h4>
                <p>
                fra 1 500 kr 
                </p>
            </div>
            <div className="konfirmant_content" data-aos="fade-up">
                <h4>
                Fotografering 1t med bakgrunn og lys på lokasjon
                </h4>
                <p>
                fra 2 500 kr
                </p>
            </div>
            <div className="konfirmant_content" data-aos="fade-up">
                <h4>
                Takkekort, tosidig
                </h4>
                <p>
                25 kr per stykk
                </p>
            </div>
            <div className="konfirmant_content" data-aos="fade-up">
                <h4>
                Laminert bilde
                </h4>
                <p>
                350 kr
                </p>
            </div>
            <div className="konfirmant_content" data-aos="fade-up">
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
        <p data-aos="fade-up"><i>En rekke andre produkter (forstørrelser, kopper, med mer) er også tilgjengelig i webshoppen etter fotografering.</i></p>
        </div>
}
