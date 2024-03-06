import React, { useRef } from "react";
import PageHeaderContent from "../../Components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./style.scss";
import emailjs from '@emailjs/browser'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kdhvr09', 'template_54dpe5c', form.current, {
        publicKey: 'eF4dvo3nRZsJ9smXd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form ref={form} onSubmit={sendEmail}>
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="from_name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="from_email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="message"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </div>
          </form>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;