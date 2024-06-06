import React from 'react'
import styles from './Checker.module.scss'

const Checker = (props) => {
    return (
        <div className={styles.checker} style={{backgroundColor:props.color}}></div>
    )
}
export default Checker
