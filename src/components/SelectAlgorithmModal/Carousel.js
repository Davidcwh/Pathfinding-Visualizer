import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { carouselCards, algorithmIndexMapping } from '../../constants';
import { setSelectedAlgorithm } from '../../actions';
import '../../css/Carousel.css';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.setSlide = this.setSlide.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
        this.updateDots = this.updateDots.bind(this);
        this.onSelect = this.onSelect.bind(this);

        const initialIndex = props.selectedAlgorithm === 'none' ? 0 : algorithmIndexMapping[props.selectedAlgorithm];
        this.state = { slideIndex: initialIndex, carouselCards: carouselCards};
    }

    componentDidMount() {
        this.updateDots(this.state.slideIndex);
    }

    updateDots(index) {
        var dots = document.getElementsByClassName("dot");
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[index].className += " active";
    }

    // Next/previous controls
    plusSlides(n) {
        let newSlideIndex = this.state.slideIndex + n;

        if (newSlideIndex > this.state.carouselCards.length - 1) {
            newSlideIndex = 0;
        } else if(newSlideIndex < 0) {
            newSlideIndex = this.state.carouselCards.length - 1;
        }
        
        this.updateDots(newSlideIndex);
        this.setState({slideIndex: newSlideIndex});
    }

    setSlide(index) {
        this.setState({ slideIndex: index });
        this.updateDots(index);
    }

    onSelect() {
        const { close, setSelectedAlgorithm } = this.props;
        const { slideIndex, carouselCards } = this.state;
        setSelectedAlgorithm(carouselCards[slideIndex].value);
        close();
    }

    render() {
        const { slideIndex } = this.state;
        const currentCard = carouselCards[slideIndex];
        const { header, description, src } = currentCard;

        return (
            <>
                <div className="slideshow-container">

                    <div className="mySlides fade">
                        <h1 className="ui header">{header}</h1>
                        <img src={src} alt={`${header} gif`} height="300" width="300"/>
                        <div className="description">{description}</div>
                    </div>

                    <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
                    <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>

                </div>
                <br/>

                <div style={{textAlign: "center"}}>
                    <span className="dot" onClick={() => this.setSlide(0)}></span> 
                    <span className="dot" onClick={() => this.setSlide(1)}></span> 
                    <span className="dot" onClick={() => this.setSlide(2)}></span> 
                    <span className="dot" onClick={() => this.setSlide(3)}></span> 
                </div>
                <br/>
                <Button
                    positive
                    onClick={this.onSelect}
                    content='Select'/>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedAlgorithm: state.selectedAlgorithm
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSelectedAlgorithm: (algorithm) => {dispatch(setSelectedAlgorithm(algorithm))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);