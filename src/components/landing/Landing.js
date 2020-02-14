import React, {Component} from 'react';
import Icons from '../../icons/icons';
import { Link } from 'react-router-dom';
import '../landing/Landing.scss';
import dialog from '../../lib/dialog';

export default class Landing extends Component {
  state={
    start:'',
    answer:'',
    showModal:true
  }

componentDidMount(){
  
}



  render(){
    console.log(this.info)
  return (
    <div id='landing-main' >
    <Link to='/home'>
    <button className='enter'>Enter Factory</button>
    </Link>
      <img src={Icons.factory} alt='' style={{height:'70vh'}} className='factory-front'/>
    </div>
  )
  }
}
