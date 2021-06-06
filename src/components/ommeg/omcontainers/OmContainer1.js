import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function OmContainer1() {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[]);

    return (
        <div class="om_container about_1">
            <div class="morten_img"></div>
            <div className="paragraphs" data-aos="fade-left">
                <p>Jeg er en utadvent, livlig og
         engasjert fotograf.  Jeg holder til 
        på Ganddal, i Sandnes med kone, 
         datter og sønn.</p>
                <p>Den digitale verden er mitt lerret, 
et sted hvor jeg kan jobbe kreativt 
og konstruktivt. Av utdannelse har
 jeg 4 år innen filmfaget på universitet. 
Jeg har siden arbeidet mest med 
stillbilder, for først å mestre det.</p>
                <p>Underveis har jeg tatt på meg mindre
 videojobber, mens jeg fokuserte på 
bilder. Ønsker du video, så er jeg
 nå klar for å vise hva jeg er god for!</p>
    </div>
    </div>
    )
}
