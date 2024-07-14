import styles from './Contacts.module.css';
import CustomMap from "../components/CustomMap";
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import telegram from '../images/telegram.png';



const Contacts = () => {
  return (
    <div className={styles.wraper}>
      <CustomMap />
      <div className={styles.contactWraper}>
        <div className={styles.title}>Contact us</div>
        <ul className={styles.contacts}>
          <li className={styles.phone}><a href='tel:380988889900'>38098-888-99-00</a></li>
          <li className={styles.phone}><a href='tel:380938889900'>38093-888-99-00</a></li>
          <li className={styles.phone}><a href='tel:380928889900'>38092-888-99-00</a></li>
          <ul className={styles.logos}>
            <li className={styles.link}><a href='https://www.facebook.com/' target='_blank' rel='noreferrer' className={styles.link}><img src={facebook} alt='facebook logo' className={styles.logo}/></a></li>
            <li className={styles.link}><a href='https://www.instagram.com/' target='_blank' rel='noreferrer' className={styles.link}><img src={instagram} alt='instagram logo' className={styles.logo}/></a></li>
            <li className={styles.link}><a href='https://t.me/sergiosad' target='_blank' rel='noreferrer' className={styles.link}><img src={telegram} alt='telegram logo' className={styles.logo}/></a></li>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default Contacts;