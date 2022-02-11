import Modal from 'react-modal'
import './style.scss'
import { ReactComponent as Cancel } from '../../assets/icon/cancel.svg'
import { ReactComponent as Info } from '../../assets/icon/info.svg'
import { ReactComponent as Discord } from '../../assets/icon/discord.svg'
import Text from '../../components/text/Text'

Modal.setAppElement('#root')

const AlertModal = (props) => {

    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
                contentLabel="Example Modal"
                className="Modal"
                overlayClassName="Overlay"
            >
                <Cancel className='btn-cancel' width={17} height={15} onClick={props.closeModal} />
                <div className='modal-container'>
                    <Text size={16} weight={700} margin black>Woah! its not mint time yet!</Text>
                    <Text size={18} weight={300} margin black>Check out our Disocrd for the minting
                    release date and updates!</Text>
                </div>

                <div className='icon-group'>
                    <a href='https://discord.gg/ns6FUYNDX3' target='_blank' rel='noreferrer'><Discord width={30} height={30} /></a>
                </div>
                <Info className='icon-info' width={30} height={30} />
            </Modal>
        </div>
    )
}

export default AlertModal