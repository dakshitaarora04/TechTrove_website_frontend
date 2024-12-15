const Footer=()=>{
    return (
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} TechTrove. All Rights Reserved.</p>
            <div className="footer-links">
              <a href="/about" className="footer-link">About Us <br></br></a>
              <a href="/contact" className="footer-link">Contact Us <br></br></a>
             
            </div>
          </div>
        </footer>
      );
    }
    
    export default Footer;
