import React from 'react';
import CarouselCard from './CarouselCard';
import '../../css/Carousel.css';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.showSlides = this.showSlides.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
        this.state = { slideIndex: 1};
    }

    componentDidMount() {
        this.showSlides(this.state.slideIndex);
    }

    showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {this.setState({slideIndex: 1})}
        if (n < 1) {this.setState({slideIndex: slides.length})}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.state.slideIndex-1].style.display = "block";
        dots[this.state.slideIndex-1].className += " active";
    }

    // Next/previous controls
    plusSlides(n) {
        const newSlideIndex = this.state.slideIndex + n;
        this.setState({slideIndex: newSlideIndex})
        this.showSlides(newSlideIndex);
    }
  
  // Thumbnail image controls
   currentSlide(n) {
        this.setState({slideIndex: n})
        this.showSlides(n);
    }

    render() {
        return (
            
            <>
                <div className="slideshow-container">

                    <div className="mySlides fade">
                        <CarouselCard/>
                    </div>

                    <div className="mySlides fade" >
                        <div className="numbertext">2 / 3</div>
                        <img alt="pic 2" src='https://react.semantic-ui.com/images/avatar/large/rachel.png' style={{width: "100%"}}/>
                        <div className="text">Caption Two</div>
                    </div>

                    <div className="mySlides fade">
                        <div className="numbertext">3 / 3</div>
                        <img alt="pic 3" src='https://react.semantic-ui.com/images/avatar/large/rachel.png' style={{width: "100%"}}/>
                        <div className="text">Caption Three</div>
                    </div>

                    <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>

                </div>
                <br/>

                <div style={{textAlign: "center"}}>
                    <span className="dot" onClick={() => this.currentSlide(1)}></span> 
                    <span className="dot" onClick={() => this.currentSlide(2)}></span> 
                    <span class="dot" onClick={() => this.currentSlide(3)}></span> 
                </div>

            </>
                
        );
    }
}

export default Carousel;