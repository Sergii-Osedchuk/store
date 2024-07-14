import styles from './Filter.module.css';

const Filter = ({inputValue, onChangeHandler}) => {

  return (
    <div className={styles.wraper}>
      <label htmlFor="search" className={styles.label}>Find your product</label>
      <input 
        type='text' 
        id='search' 
        value = {inputValue} 
        onChange={onChangeHandler}
        className={styles.input}
      ></input>
    </div>
  )
}

export default Filter;