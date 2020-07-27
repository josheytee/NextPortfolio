import React from 'react';

function Footer() {
    return (
        <footer className=" footer">
            <section className="d-flex container">
                <div className="footer-social">
                    <a href="https://facebook.com/josheytee" target="_blank" rel="noopener noreferrer"><img src="/icons/facebook.svg" alt="facebook" /></a>
                    <a href="https://www.linkedin.com/in/oluwatobiloba-joshua-agbeja-2a4250108" target="_blank" rel="noopener noreferrer"><img src="/icons/linkedin.svg" alt="linkedin" /></a>

                    <a href="https://twitter.com/josheytee" target="_blank" rel="noopener noreferrer"><img src="/icons/twitter.svg" alt="twitter"/></a>
                    <a href="https://www.github.com/josheytee" target="_blank" rel="noopener noreferrer"><img src="/icons/github.svg" alt="github" /></a>
                </div>
                <div>
                    Designed with <span role="img" aria-label="love">💖</span> by Oluwatobiloba Agbeja
                </div>
            </section>
        </footer>
    )
}

export default Footer;