import styles from './ContactStyles.module.css';
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Loading from '../Loader/Loading';
import { Toaster, toast } from 'react-hot-toast';

// Init emailJS once, outside the component
emailjs.init({ publicKey: "feTQMYktjGWe70BZa" });

function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [hide , setHide]=useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

     emailjs.sendForm("servicefarah", "templatefarah", form.current, "feTQMYktjGWe70BZa").then(
      (result) => {
        console.log(result.text);
        toast.success("Your message has been sent successfully! Thank you 😊");
        setHide(true);
        form.current.reset(); // Clear the form
        setIsLoading(false);
      },
      (error) => {
        console.log(error.text);
        toast.error("Something went wrong. Please try again.");
        setIsLoading(false);
      }
    );
  };

  return (
  <>
    <section id="contact" className={styles.container} style={{ display: hide ? 'none' : 'block' }}>
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="sectionTitle">Contact</h1>

      <form onSubmit={handleSubmit} ref={form}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="email" name="email" id="email" placeholder="Email" required />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>

        <button className="hover btn" type="submit" disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Contact me'}
        </button>

        {isLoading && <Loading />}
      </form>
    </section>
<section
  style={{
    display: hide ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '30px'
  }}
  className={styles.successMessage}
>
      <div className='message'>
        <h1>Thank you for your message !</h1>
      <p>I will get back to you as soon as possible.</p>
      </div>
     <div className="btnback">
       <button  type="submit" onClick={() => setHide(false)}>Back to Contact</button>
     </div>
    </section>
  </>
    
  );
}

export default Contact;
