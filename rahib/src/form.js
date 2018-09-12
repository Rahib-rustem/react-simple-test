import React from 'react';
import $ from 'jquery';
;

export class Form extends React.Component{

constructor(){
    super()

     this.addToList = this.addToList.bind(this);
    
}

     addToList(){

            let input = $('.input');
            let inputVal = $('.input').val()
           this.props.addToList(inputVal)
            
     }




    	render(){

            return(

                <div>
               
                        <input className={'input'}/>

                        <button onClick={this.addToList} className={'input-button'}>Add element</button>
                      
                </div>
               
            )
        }



}