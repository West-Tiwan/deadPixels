import React from 'react'
import styles from './Navbar.module.scss'

const Navbar = (props) => {
    const setblue = () => {
        props.setting("rgb(0,0,255)")
    }
    const setgreen = () => {
        props.setting("rgb(0,255,0)")
    }
    const setred = () => {
        props.setting("rgb(255,0,0)")
    }
    return (
        <>
            <div className={styles.navi1}>
                <button onClick={setblue}>Blue</button>
                <button onClick={setgreen}>Green</button>
                <button onClick={setred}>Red</button>
            </div>
        </>
    )
}
export default Navbar
