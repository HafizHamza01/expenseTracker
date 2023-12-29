import React from 'react'
import Transections from './Transections'
const History = (props) => {
    const transection = props.transection
    return (
        <>
            <div className='history_container'>
                <h6>History</h6>
                {transection.map((transection) => (
                    <Transections data={transection} />
                ))}
            </div>
        </>
    )
}

export default History

