import React, {Component} from 'react';
import Icons from '../../icons/icons';
import { Link } from 'react-router-dom';
import '../landing/Landing.scss';
import dialog from '../../lib/dialog';
import Modal from './Modal'

export default class Landing extends Component {
  state={
    start:'',
    answer:'',
    showModal:true
  }

componentDidMount(){
  
}
hideModal=()=>(this.setState({showModal:false}))

firstDialog = async ()=>{
  await dialog('start');
  this.hideModal()
}





  render(){
    console.log(this.info)
  return (
    <div id='landing-main' >
      {
        this.state.showModal ?
        <Modal firstDialog={this.firstDialog}  hideModal={this.hideModal}/>
        :null
      }
    <Link to='/home'>
    <button className='enter'>Enter Factory</button>
    </Link>
      <img src={Icons.factory} alt='' style={{height:'70vh'}} className='factory-front'/>
    </div>
  )
  }
}
