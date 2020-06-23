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
        if (n > slides.length) {
            this.setState({slideIndex: 1})
        }
        if (n < 1) {
            this.setState({slideIndex: slides.length})
        }
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
        this.setState({ slideIndex: n });
        this.showSlides(n);
    }

    render() {
        return (
            <>
                <div className="slideshow-container">

                    <div className="mySlides fade">
                        <h1 className="ui header">Breath First Search (BFS)</h1>
                        <img src={require("../../media/bfs.gif")} alt="bfs.gif" height="300" width="300"/>
                        <div>Breath First Search gurantees the shortest path distance</div>
                    </div>

                    <div className="mySlides fade" >
                        <h1 className="ui header">Depth First Search (DFS)</h1>
                        <img src={require("../../media/dfs.gif")} alt="bfs.gif" height="300" width="300"/>
                        <div>Depth First Search does not gurantees the shortest path distance</div>
                    </div>

                    <div className="mySlides fade">
                        <h1 className="ui header">A Star Search</h1>
                        <img src={require("../../media/astar.gif")} alt="bfs.gif" height="300" width="300"/>
                        <div>A Star Search uses the manhattan distance heuristics from each node to the goal node</div>
                    </div>

                    <div className="mySlides fade">
                        <h1 className="ui header">Greedy Best-First Search</h1>
                        <img src={require("../../media/greedy.gif")} alt="bfs.gif" height="300" width="300"/>
                        <div>Greedy Best-First Search only considers nodes closest to the goal node</div>
                    </div>

                    <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>

                </div>
                <br/>

                <div style={{textAlign: "center"}}>
                    <span className="dot" onClick={() => this.currentSlide(1)}></span> 
                    <span className="dot" onClick={() => this.currentSlide(2)}></span> 
                    <span className="dot" onClick={() => this.currentSlide(3)}></span> 
                    <span className="dot" onClick={() => this.currentSlide(4)}></span> 
                </div>
            </>
        );
    }
}

export default Carousel;