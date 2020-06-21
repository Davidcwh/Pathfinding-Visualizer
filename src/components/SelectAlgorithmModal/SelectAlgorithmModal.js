import React from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import Carousel from '../SelectAlgorithmModal/Carousel'

class SelectAlgorithmModal extends React.Component {
    state = { open: false }

    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
        this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }

    close = () => this.setState({ open: false })

    render() {
        return (
            <Modal 
                open={this.state.open}
                trigger={<a className="item" onClick={this.closeConfigShow(false, true)} >Show Modal </a>}
                closeOnEscape={this.state.closeOnEscape}
                closeOnDimmerClick={this.state.closeOnDimmerClick}
                onClose={this.close}
                style={{textAlign: 'center'}}
            >
                <Modal.Header >Select Algorithm</Modal.Header>
                    <Modal.Content>
                        <Carousel/>
                    </Modal.Content>
                    <Modal.Actions style={{textAlign: 'center'}}>
                        <Button
                            positive
                            onClick={this.close}
                            content='Select'
                        />
                    </Modal.Actions>
            </Modal>
            
        );
    }
}

export default SelectAlgorithmModal;