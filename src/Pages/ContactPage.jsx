import '../Styles/global.css';

function ContactPage() {
    return (
        <div className="contact-page">
            {/* Title Section */}
            <h1 className="contact-title">
                Let’s Connect with <span className="highlight">TechTrove</span>
            </h1>
            <p className="contact-subtitle">
                Have questions? Looking for the latest tech gadgets? We're here to help. Reach out anytime!
            </p>

            {/* Contact Details */}
            <div className="contact-details">
                <h2>Our Contact Information</h2>
                <p>📧 Email: <a href="mailto:dakshitaarora04@gmail.com">dakshitaarora04@gmail.com</a></p>
               
            </div>


            {/* Contact Form */}
            <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactPage;
