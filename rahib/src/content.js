
import React from 'react';
import $ from 'jquery';
import {Design} from './design';
import {Email} from './email'
import {Ourworks} from './our-works'
import {Slider} from './slider';

export class Content extends React.Component{
   
    constructor(){
        super()

       

      
    }




render(){

  
  

    return(

        <div className={'main'}>
        <Design/>
        <Email/>
        <Ourworks/>
        <Slider/>
        </div>
       
    )
}



}
