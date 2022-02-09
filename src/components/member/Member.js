import Text from '../text/Text'
import './style.scss'

const Member = ( props ) => {
    return (
        <div className="member-section">
            <div className='img-container'>
                <img src={props.src} alt='' />
            </div>
            <div className="introduce">
                <Text size={20} weight={700}  margin>{props.name}</Text>
                <Text size={16} weight={300} >{props.role}</Text>
            </div>
        </div>
    )
}

export default Member