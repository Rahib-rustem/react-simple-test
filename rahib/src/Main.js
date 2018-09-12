import React, { Component } from 'react';
import {Header} from './header';
import {Footer} from './footer';
import {Content} from './content';

class Main extends Component {
 



  render(){

  

    return(
     
      <div className={'mainn'}>
            <Header/>
            <Content/>
            <Footer/>
      </div>

    )
  }




  
}

export default Main;
