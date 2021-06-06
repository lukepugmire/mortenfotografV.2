import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function OmContainer5() {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[]);


    return (
        <div class="om_container about_5">
            <div className="paragraphs" data-aos="fade-left">
                <p>Naturlig og avslappet forholder jeg meg til mine talenter, 
mens det inni meg foregår en rekke avveiinger for hvordan
 jeg kan gjøre akkurat dette bildet bedre.</p>
                <p>Med mine bilder forsøker jeg alltid å vekke engasjement 
og følelser. Gjerne lette litt på noen smilebånd også. 
Jeg liker å utforske ulike sjangre, mendet er noe med den 
menneskelige kontakten, som for meg overgår alt det andre 
vakre i vår verden.</p>
                <p>M A G I S K E øyeblikk - de digger jeg!
Få det fotografert, eller &ldquo;fanget på film&rdquo; 
som de sier... Book meg i dag!</p>
    </div>
    <div class="heart_img"></div>
        </div>
    )
}