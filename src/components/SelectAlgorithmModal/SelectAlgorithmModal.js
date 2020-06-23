import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import Carousel from '../SelectAlgorithmModal/Carousel';
import { carouselCards } from '../../constants';

class SelectAlgorithmModal extends React.Component {
    state = { open: false }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }

    close = () => this.setState({ open: false })

    render() {
        let buttonText = 'Select Algorithm';

        for(let i = 0; i < carouselCards.length; i++) {
            if(carouselCards[i].value === this.props.selectedAlgorithm) {
                buttonText = carouselCards[i].header;
                break;
            }
        }

        const isDisabled = this.props.algorithmStatus !== 'STOPPED';
        let triggerClass = isDisabled ? "active item" : "item";

        return (
            <Modal 
                open={this.state.open}
                trigger={<a className={triggerClass} onClick={isDisabled ? () => {} : this.closeConfigShow(false, true)}> {buttonText} </a>}
                closeOnEscape={this.state.closeOnEscape}
                closeOnDimmerClick={this.state.closeOnDimmerClick}
                onClose={this.close}
                style={{textAlign: 'center'}}
                size={"tiny"}
            >
                <Modal.Header >Select Algorithm</Modal.Header>
                    <Modal.Content>
                        <Carousel close={this.close}/>
                    </Modal.Content>
            </Modal>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedAlgorithm: state.selectedAlgorithm,
        algorithmStatus: state.algorithmStatus
    }
}

export default connect(mapStateToProps)(SelectAlgorithmModal);