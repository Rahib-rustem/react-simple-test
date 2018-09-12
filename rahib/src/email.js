import React from 'react';




export class Email extends React.Component{

    render(){
        return(

            <section className={'section3'}>
            <div className={'background-style'}>
               <div className={'container'}>
                   <div className={'content'}>
                       <form action="#">
                           <input  type='text' placeholder='Enter your email adres'/>
                           <button class='submit' type='submit'>SUBSCRIBE</button>
                       </form>
                   </div>
                
               </div>
              
               </div>
             
           </section>


        )
    }
}