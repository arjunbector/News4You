import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import styles from './CustomButton.module.css';
const CustomButton = (props) => {
  return (
    <button className={styles.btn}>
        {props.content} <BsFillArrowRightCircleFill className={styles.righ_arrow}/>
    </button>
  )
}

export default CustomButton
