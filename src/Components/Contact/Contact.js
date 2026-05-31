import React from 'react'
import "./Contact.css"
import mail_icon from "../../assets/mail.jpg"
import dark_arrow from '../../assets/dark_arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "bc32f2fc-855b-4819-850b-d2ac15643b58");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };  
  
    return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send me a message <img src={mail_icon} alt=''/></h3>
            <p>Feel free to reach out to me regarding anything from employment opportunities 
            to project ideas to musical collaborations! I am also always open to connecting 
            with new people passionate about the same things :&#41; </p>
            <ul>
                <li>ethan.j.harris@gmail.com</li>
                <li>+1 (682) 219-6150</li>
                <li>https://www.linkedin.com/in/ethan-harris-138382153/</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>

                <label>Email Address</label>
                <input type='text' name='email' placeholder='Enter your email address'/>

                <label>Write your message here</label>
                <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>

                <button type='submit' className='btn dark-btn'>Submit <img src={dark_arrow} alt=''/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
)
}

export default Contact