import '../Styles/about.css';
function AboutPage() {
    return (
        <div style={{ textAlign: "center" }}>
            {/* Carousel Section */}
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="/Pics/about-us-information-service-sharing-join-concept.jpg"
                            className="d-block w-100"
                            alt="First slide"
                        />
                    </div>
                    <div className="carousel-item">
                        <img src="/Pics/example2.jpg" className="d-block w-100" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img src="/Pics/example3.jpg" className="d-block w-100" alt="Third slide" />
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="container my-5">
                {/* About Me Section */}
                <section id="about-me">
                    <h2>Welcome to TechTrove</h2>
                    <p>
                        Hi, I'm Dakshita, the creator of TechTrove! My passion for cutting-edge technology has driven me to curate an 
                        exclusive collection of the latest gadgets and electronics. Here at TechTrove, you'll find innovative 
                        products designed to make your life smarter, easier, and more enjoyable.
                    </p>
                </section>

                {/* My Vision Section */}
                <section id="my-vision" className="mt-5">
                    <h2>My Vision</h2>
                    <p>
                        TechTrove is more than just a store—it's a hub for technology enthusiasts. I believe in bringing people closer 
                        to groundbreaking tech innovations while ensuring affordability and quality. My vision is to create a 
                        community where technology transforms lives.
                    </p>
                    <h3>Why Choose TechTrove?</h3>
                    <ul style={{ display: "inline-block", textAlign: "left" }}>
                        <li>Handpicked gadgets with exceptional features.</li>
                        <li>Reliable and trustworthy customer service.</li>
                        <li>Exclusive discounts and offers for tech lovers.</li>
                    </ul>
                </section>

                {/* Featured Products Section */}
                <section id="featured-products" className="mt-5">
                    <h2>Explore Our Tech Wonders</h2>
                    <h3>Smart Living</h3>
                    <p>
                        Transform your home with our smart devices: AI-powered assistants, smart Phones, Telivisions , Refrigerators and much more.
                    </p>
                    <h3>Office Essentials</h3>
                    <p>
                        Stay productive with sleek monitors, Smart Systems and many more.
                    </p>
                    <h3>Entertainment Redefined</h3>
                    <p>
                        Dive into unparalleled entertainment with UHD TVs, surround sound systems, and more.
                    </p>
                </section>

                

                {/* Contact Section */}
                <section id="contact-us" className="mt-5">
                    <h2>Get in Touch</h2>
                    <p>
                        Whether you have questions or need assistance, I’m here to help! Reach out to me through:
                    </p>
                    <ul style={{ display: "inline-block", textAlign: "left" }}>
                        <li>Email: dakshitaarora04@gmail.com</li>
                        <li>Email: aroradakshita2004@gmail.com</li>
                        
                    </ul>
                </section>

                {/* Closing Section */}
                <section id="closing-note" className="mt-5">
                    <h2>Thank You for Visiting!</h2>
                    <p>
                        I’m thrilled to have you explore TechTrove. Together, let's embrace the world of technology and make life 
                        smarter!
                    </p>
                </section>
            </div>
        </div>
    );
}

export default AboutPage;
