import React from 'react';
import './Landing.scss';


const modal = (props)=>{
    return(
        <div className='opening-modal'><button className='opening-modal-button' onClick={()=>props.firstDialog('start')}>Begin</button></div>
    )
}
export default modal