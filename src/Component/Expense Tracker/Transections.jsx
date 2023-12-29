import React from 'react'

const Transections = (props) => {
    const data = props.data;
    return (
        <div>
            <ul className='ul_container'>
                <li>{data.text} <span>{data.amount}</span></li>
            </ul>
        </div>
    )
}

export default Transections;
