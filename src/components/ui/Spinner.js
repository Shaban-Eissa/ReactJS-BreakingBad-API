import React from 'react'
import SpinnerIMG from '../../img/spinner.gif'
const Spinner = () => {
    return (
        <img src={SpinnerIMG} 
        style= {{width:'200px' , margin:'auto' , display:'block'}} alt='Loading ....'
        >
        </img>
    )
}

export default Spinner
