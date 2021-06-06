import { useState } from 'react';
import { send } from 'emailjs-com';


export default function KontaktForm() {

  const messageSent = document.querySelector(".message_sent");

    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        message: '',
      });

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(e);
    send(
      'service_gjtlbsa',
      'template_h8o40hs',
      toSend,
      'user_Dux5lpF2CHYHZGnXAOOeM'
    )
      .then((response) => {
        console.log(response);
        messageSent.style.display = "block";     
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    }
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return (
        <div className="contact_container">
            <div className="contact_img"></div>
            <div className="kontakt_heading">
            <h1 >Kontakt fotografen i dag&#33;</h1>
            <p>
                Send uforpliktende forespørsel under // Drop me a message, and I'll get back to you shortly.
            </p>
            </div>
            <div className="contact_info">
            <form className="contact_form" name="contactForm" onSubmit={onSubmit}>
                <div>
                  <label for="name">Name</label>
                    <input className="form_element" id="name" name="name" value={toSend.from_name} onChange={handleChange}/>
                </div>
                <div>
                  <label for="email">Email</label>
                    <input className="form_element" id="email" name="email" value={toSend.from_name} onChange={handleChange}/>
                </div>
                <div>
                  <label for="message">Message</label>
                    <input type="textarea" className="form_element" id="message" name="message" value={toSend.from_name} onChange={handleChange}/>
                </div>
                <div className="message_sent">Message Sent&#33;</div>
                <div className="message_failed"></div>

            <button type="submit" className="form_element">Send</button>

        </form>
            </div>
        </div>
    )
}


