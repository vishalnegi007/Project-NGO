import React from 'react'

const ContactUs = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact Us</h2>
            <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    )
}

export default ContactUs