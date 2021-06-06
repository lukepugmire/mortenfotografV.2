import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function OmContainer3() {

    useEffect(() => {
        Aos.init({duration: 2000})
    },[]);

    return (
        <div class="om_container about_3">
            <div className="verdier_heading">
                <h2 data-aos="fade-up">Mine verdier</h2>
            </div>
            <div className="verdier_text" data-aos="fade-up">
            <div className="verdier_box"><h3>Service</h3>
            <p>I mitt selskap skal du føle deg vel. 
Enten vi har jobbet sammen eller ei, 
så er jeg der for deg. Lurer du på noe 
eller trenger hjelp, så spør du bare.</p></div>
            <div className="verdier_box"><h3>Tillit</h3>
<p>I mitt selskap skal du føle deg vel. 
Enten vi har jobbet sammen eller ei, 
så er jeg der for deg. Lurer du på noe 
eller trenger hjelp, så spør du bare.</p></div>
            <div className="verdier_box"><h3>Kvalitet</h3>
<p>I mitt selskap skal du føle deg vel. 
Enten vi har jobbet sammen eller ei, 
så er jeg der for deg. Lurer du på noe 
eller trenger hjelp, så spør du bare.</p></div>
            


            </div>
        </div>
    )
}