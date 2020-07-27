import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 1
        };
        this.mobileMenu = this.mobileMenu.bind(this);
    }

    mobileMenu(e) {
        document.querySelector('.links').classList.toggle("mobile");
    }

    componentDidMount() {
        window.onClick = function (event) {
            if (!event.target.matches('.bars')) {
                let dropdowns = document.getElementsByClassName("links");
                for (let i = 0; i < dropdowns.length; i++) {
                    let openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('mobile')) {
                        openDropdown.classList.remove('mobile');
                    }
                }
            }
        };
    }

    render() {
        return (
            <header>
                <div className="container">
                    <nav className="main_nav">
                        <span className="logo">
                            <a href="/"><img src="/logo.png" alt="logo" /></a>
                        </span>
                        <section className="links-mobile">
                            <a href="/oluwatobiagbeja.pdf" className="resume" >RESUME</a>
                            <img src="/icons/bars.svg" alt="bars for mobile navigation toggle" className="bars" onClick={this.mobileMenu} />
                        </section>

                        <section className="links">
                            <a href="/">HOME</a>
                            <a href="/portfolio">PORTFOLIO</a>
                            <a href="/#contact">CONTACT</a>
                            <a href="/#about">ABOUT</a>
                            <a href="/oluwatobiagbeja.pdf" className="resume" >RESUME</a>
                            <span className="links-social">
                                <a href="https://www.facebook.com/josheytee" target="_blank" rel="noopener noreferrer"><img src="/icons/facebook.svg" alt="facebook" /></a>
                                <a href="https://www.linkedin.com/in/oluwatobiloba-joshua-agbeja-2a4250108" rel="noopener noreferrer"><img src="/icons/linkedin.svg" alt="linkedin" /></a>
                                <a href="https://www.twitter.com/josheytee" target="_blank" rel="noopener noreferrer"><img src="/icons/twitter.svg" alt="twitter" /></a>
                                <a href="https://www.github.com/josheytee" target="_blank" rel="noopener noreferrer"><img src="/icons/github.svg" alt="github logo" /></a>
                            </span>
                        </section>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;