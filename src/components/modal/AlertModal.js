import Modal from 'react-modal'
import { useState } from 'react'
import './style.css'
import { ReactComponent as Cancel } from '../../assets/icon/cancel.svg'
import Text from '../../components/text/Text'

Modal.setAppElement('#root')

const AlertModal = (props) => {

    return (
        <div>
        <Modal
          isOpen={props.isOpen}
          onRequestClose={props.closeModal}
          contentLabel="Example Modal"
          className= "Modal"
          overlayClassName="Overlay"
        >
          <Cancel className='btn-cancel' width={17} height={15} onClick={props.closeModal} />
          <div className='modal-container'>
              <Text size={18} weight={700} margin black>Woah! its not mint time yet!</Text>
              <Text size={24} weight={300} black>Check out our disocrd for the minting release date and updates!</Text>
          </div>
        </Modal>
      </div>
    )
}

export default AlertModal