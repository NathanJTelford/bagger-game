import React from 'react';
import Icons from '../../icons/icons';
import { Link } from 'react-router-dom';
import '../landing/Landing.scss'

export default function Landing() {
  return (
    <div id='landing-main' >
    <Link to='/home'>
    <button className='enter'>Enter Factory</button>
    </Link>
      <img src={Icons.factory} alt='' style={{height:'70vh'}} className='factory-front'/>
    </div>
  )
}
