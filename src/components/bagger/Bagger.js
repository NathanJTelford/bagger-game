import React, { Component } from 'react';
import Icons from '../../icons/icons';
import dialog from '../../lib/dialog';
import '../bagger/Bagger.scss';

export default class Bagger extends Component {
  render() {
    return (
      <div className='stockroom' >
         <div className='robot' >
            <img src={Icons.robot} style={{height:'40vh'}} alt='' />
         </div>
         <div className='machine' >
         <img src={Icons.machine} style={{height:'50vh'}} alt='' />
         </div>
         <div className='overflow-div'>

         <div className='truck' >
         <img src={Icons.truck} style={{height:'77vh'}} alt='' />
         </div>
         </div>
        
      </div>
    )
  }
}
