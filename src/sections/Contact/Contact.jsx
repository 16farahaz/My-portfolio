import styles from './ContactStyles.module.css';
import React, { useRef } from "react";
import emailjs, { init, sendForm } from "@emailjs/browser";

function Contact() {
  emailjs.init({ publicKey: "feTQMYktjGWe70BZa" });
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("servicefarah", "templatefarah", form.current, "feTQMYktjGWe70BZa").then(
      (result) => {
        alert("Message Sent Successfully");
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit} ref={form}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="text" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <button className="hover btn" type="submit" >Contact me</button>
      </form>
    </section>
  );
}

export default Contact;
