import React, { useState } from "react";
import Card from "../Components/Card"; // Assuming Card is in a separate file



function HomePage() {
     const [cart, setCart] = useState([]); // State to store cart items
    const [isChatVisible, setIsChatVisible] = useState(false);
    const [isCartVisible, setIsCartVisible] = useState(false);
   

    // Sample data for the cards
    const cardsData = [
        { title: "EchoElite", text: "Enjoy the best in connectivity and innovation with EchoElite – a phone crafted for premium performance and exceptional style.", imgSrc: "/Pics/pexels-imjimmyqian-1710481.jpg" },
        { title: "SmartEdge", text: "Experience the power and convenience of SmartEdge – a sleek, high-performance mobile phone designed for seamless multitasking, stunning visuals, and staying connected on the go.", imgSrc: "/Pics/pexels-fotios-photos-1290515.jpg" },
        { title: "Refrigirator", text: "Keep your food fresh and your energy bills low with our modern refrigerators – combining efficiency, style, and advanced cooling technology", imgSrc: "/Pics/pexels-cottonbro-4068317.jpg" },
        // Add more cards as needed
        { title: "TechPro 3000", text: "Unleash peak performance with TechPro 3000 – fast, efficient, and perfect for work and play.", imgSrc: "/Pics/pexels-cottonbro-5082568.jpg" },
        { title: "MiniEcho", text: "MiniEcho delivers powerful sound in a compact design, perfect for any space.", imgSrc: "/Pics/pexels-anete-lusina-4790274.jpg" },
        { title: "SoundWave", text: "Enjoy crystal-clear audio and deep bass with SoundWave – the ultimate sound experience.", imgSrc: "/Pics/pexels-fabian-hurnaus-354720-977296.jpg" },
        { title: "UltraView", text: "Transform your viewing experience with UltraView – featuring vibrant colors, crystal-clear resolution, and immersive sound for endless entertainment.", imgSrc: "/Pics/pexels-heyho-6186813.jpg" },
        { title: "ThunderBass", text: "Feel the power of sound with ThunderBass – a big speaker designed for deep, booming bass and room-filling audio to elevate any event.", imgSrc: "/Pics/pexels-marinko-krsmanovic-700471-2651794.jpg" },
        { title: "NeoPhone", text: "Experience the future of mobile technology with NeoPhone – built for speed, style, and seamless connectivity.", imgSrc: "/Pics/pexels-pok-rie-33563-4334163.jpg" },
    ];

    // Function to add an item to the cart
    const handleAddToCart = (card) => {
        setCart((prevCart) => [...prevCart, card]); // Add the selected card to the cart
        alert(`${card.title} added to cart!`);
    };

    return (

        <div>
            {/* Carousel (can be included if needed) */}
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/Pics/pexels-alex-qian-1180283-2343467.jpg" className="d-block w-100" alt="First Slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Your Electronics Haven</h5>
                            <p>Explore a wide range of gadgets, accessories, and appliances at unbeatable prices.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/Pics/pexels-lastly-1275929.jpg" className="d-block w-100" alt="Second Slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Upgrade Your World</h5>
                            <p>Shop the best in electronics to enhance your lifestyle and stay ahead in tech.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="/Pics/pexels-vidalbalielojrfotografia-1682519.jpg" className="d-block w-100" alt="Third Slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>The Future is Here</h5>
                            <p>Get access to premium electronics and gadgets, delivered right to your door.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
             {/* Cart Icon */}
             <div style={{ position: "fixed", bottom: 520, right: 20, cursor: "pointer",zIndex:1000 }}>
                <img
                    src="/Pics/Screenshot (147).png" // Replace with your cart logo path
                    alt="Cart"
                    style={{ width: 100, height: 100, borderRadius: "50%" }}
                    onClick={() => setIsCartVisible(!isCartVisible)}
                />
            </div>
           
            {/* Chatbot Icon */}
            <div style={{ position: 'fixed', bottom: 20, right: 20, cursor: 'pointer',zIndex:1000 }}>
                <img
                    src="/Pics/DALL·E 2024-12-12 12.26.04 - A simple and minimalist logo for a chatbot named 'Zuba'. The design features a clean robot head icon with rounded edges and a friendly appearance, inc.webp" // Replace with your chatbot logo path
                    alt="Chatbot"
                    style={{ width: 100, height: 100, borderRadius: '50%' }}
                    onClick={() => setIsChatVisible(!isChatVisible)}
                />
            </div>

            {/* Chatbot Iframe */}
            {isChatVisible && (
                <div style={{ position: 'fixed', bottom: 80, right: 20, width: 350, height: 430,zIndex:1000 }}>
                    <iframe
                        width="100%"
                        height="100%"
                        allow="microphone;"
                        src="https://console.dialogflow.com/api-client/demo/embedded/56021e05-0164-44ee-98fb-fe4e9764d5c2"
                        style={{ border: 'none', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                    />
                </div>
            )}
             {/* Cart Modal */}
             {isCartVisible && (
                <div
                    style={{
                        position: "fixed",
                        bottom: 140,
                        right: 20,
                        width: 300,
                        height: 300,
                        backgroundColor: "white",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        zIndex: 1000,
                        padding: "10px",
                        overflowY: "auto",
                    }}
                >
                    <h4>Cart</h4>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index}>{item.title}</li>
                            ))}
                        </ul>
                        
                    )}
                </div>
            )}
             {/* Display Cards */}
             <div className="d-flex justify-content-center flex-wrap mt-4">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        text={card.text}
                        imgSrc={card.imgSrc}
                        onAddToCart={() => handleAddToCart(card)}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomePage;
