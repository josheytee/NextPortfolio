import React, { Component } from "react";
import '../css/slideshow.css';

class Slideshow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideIndex: 1
        };

        this.showSlides = this.showSlides.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
    }

    componentDidMount() {
        let { slideIndex } = this.state;
        this.showSlides(slideIndex);
        // debugger;
    }
    
    
    plusSlides(n) {
        let { slideIndex } = this.state;
        this.showSlides(slideIndex += n);
        this.setState({slideIndex});
    }
    
    currentSlide(n) {
        let { slideIndex } = this.state;
        this.showSlides(slideIndex=n);
        this.setState({slideIndex});
        
    }
    
    
    showSlides(n) {
        let { slideIndex } = this.state;
        
        var i;
        var slides = document.querySelectorAll(".mySlides");
        var dots = document.querySelectorAll(".dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        this.setState({slideIndex});
        

    }

    render() {
        return (
            <section>
                {/* <!-- Slideshow container --> */}
                <div className="slideshow-container">

                    {/* <!-- Full-width slides/quotes --> */}
                    <div className="mySlides">
                        <q>I love you the more in that I believe you had liked me for my own sake and for nothing else</q>
                        <p className="author">- John Keats</p>
                    </div>

                    <div className="mySlides">
                        <q>But man is not made for defeat. A man can be destroyed but not defeated.</q>
                        <p className="author">- Ernest Hemingway</p>
                    </div>

                    <div className="mySlides">
                        <q>I have not failed. I've just found 10,000 ways that won't work.</q>
                        <p className="author">- Thomas A. Edison</p>
                    </div>

                    {/* <!-- Next/prev buttons --> */}
                    <button className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</button>
                    <button className="next" onClick={() => this.plusSlides(1)}>&#10095;</button>
                </div>

                {/* <!-- Dots/bullets/indicators --> */}
                <div className="dot-container">
                    <span className="dot" onClick={() => this.currentSlide(1)}></span>
                    <span className="dot" onClick={() => this.currentSlide(2)}></span>
                    <span className="dot" onClick={() => this.currentSlide(3)}></span>
                </div>
            </section>
        )
    }
}

export default Slideshow;