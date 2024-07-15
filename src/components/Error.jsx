import styles from './Error.module.css';

const Error = ({message}) => {
  return (
    <div className={styles.error}>
      <h2>Something went wrong. Please check internet connection or your address.</h2>
      <p>{message}</p>
    </div>
  )
}

export default Error;