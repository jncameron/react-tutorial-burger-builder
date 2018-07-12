import React, {Component} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import ReactAux from '../../../hoc/ReactAux/ReactAux'
import classes from './Modal.css';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }

    render () {
        return (

            <ReactAux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    {this.props.children}
                </div>
            </ReactAux>
        )
    }

}

export default Modal;