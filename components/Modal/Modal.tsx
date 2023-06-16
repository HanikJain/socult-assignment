import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css"

export function Backdrop(props:any) {
    return (
        <div className={classes.backdrop} >
            {props.children}
        </div>
    );
}

export function ModalOverlay(props:any) {

    return (
        <div className={classes.modal} >
            <div className={classes.content} >
                {props.children}
            </div>
        </div>
    );
}

const Modal = (props:any) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e: any) => {
        e.preventDefault();
        props.onClose();
    };

    const modalContent1 = props.show ? (
        <Backdrop>
            <ModalOverlay>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        fontSize: "25px"
                    }}>
                    <a href="#" onClick={handleCloseClick}>
                        x
                    </a>
                </div>
                {props.children}
            </ModalOverlay>
        </Backdrop>
    ) : null;



    if (isBrowser) {
        const modalRoot = document.getElementById('modal-root');
        
        if (!modalRoot) {
            return null;
          }

        return ReactDOM.createPortal(
            modalContent1,
            modalRoot
        );
    } else {
        return null;
    }
};




export default Modal;
