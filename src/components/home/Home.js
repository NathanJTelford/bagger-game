import React, { Component } from 'react'
import Icons from '../../icons/icons'
import Swal from 'sweetalert2';

export default class Home extends Component {

state={
    managerDialog:''
}

componentDidMount(){
    setTimeout(()=>this.dialogControl('on load'), 1000)
}

dialogControl = async (val) =>{
    await this.setState({managerDialog:val})
    this.toTheMachine()
}


redirect = ()=>{
    this.props.history.push('/bagger')
}

toTheMachine = () =>{
    const str = this.state.managerDialog
    switch(str){
        case 'yes' :
        Swal.fire(`great! let's get started. just open the door over there and E5000 will let you know what to do`)
        break;
        case 'no' :
        Swal.fire(`Oh, that's too bad`)
        break;
        case 'on load' :
        Swal.fire({
            position: 'top-end',
            title: 'I have a job for you, are you interested?',
            showConfirmButton: false,
            timer: 1500
          })
        break;

        default : Swal.fire(` what happened?` )
    }
}

  render() {
      const dialog = this.toTheMachine
    return (
      <div>
          <button onClick={()=>this.dialogControl('yes')}>Sure!</button>
          <button onClick={()=>this.dialogControl('no')}>Nope.</button>
          <div className='manager-dialog'>
            {dialog}
          </div>
          <div className='manager-body'>
          <img src={Icons.manager} style={{height:'40vh'}} alt='' />

          </div>
          <div className='door' onClick={()=>this.redirect()}>
            <img src={Icons.door} alt='' style={{height:'60vh'}} className='door-image' />
          </div>
        
      </div>
    )
  }
}
