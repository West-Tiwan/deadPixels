import React from 'react'

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
            <div>Navbar</div>
            <button onClick={setblue}>Blue</button>
            <button onClick={setgreen}>Green</button>
            <button onClick={setred}>Red</button>
        </>
    )
}
export default Navbar
