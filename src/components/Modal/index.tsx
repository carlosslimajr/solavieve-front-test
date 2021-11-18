import React from 'react'
import { Button } from '../commonStyles'
import { ModalWrapper } from './styles'
import { ReactComponent as Phone } from '../../assets/phone.svg'


interface ModalProps {
    open?: boolean
    closeModal?: () => void
    showResults?:()=>void
}

const Modal: React.FC<ModalProps> = ({ open,closeModal,showResults }) => {
    return (
        <ModalWrapper open={open}>
            <div className="modal-content">
                <Phone />
                <p>Thank you for your message!</p>
                <p>We will be in contact soon.</p>
              
                <Button width="11rem" height="5.2rem" margin="8rem auto 0" onClick={closeModal}>Close</Button>
                <small onClick={showResults}>Click here to see the results</small>
            </div>
        </ModalWrapper>
    )
}

export default Modal
