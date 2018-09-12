
import React from 'react';
import $ from 'jquery';

 export class List extends React.Component{

constructor(){
    super();
    this.state = {filter: 'all'}
   
    this.done =   this.done.bind(this);
    this.closee =  this.closee.bind(this);
    this.listFilter =  this.listFilter.bind(this);
 
   
  
}


    done(d){
        this.props.done(d.target.parentNode.id)
        
    }



    closee(e){

        this.props.closee(e.target.parentNode.id);
    }


    componentDidMount = () =>{

        $( ".clicked" ).click(function() {
            $(this).addClass('toggled')
            $(this).siblings().removeClass('toggled')
            $(this).siblings().removeClass('all')

               
           
          });
        }


        listFilter(filter){
          
            this.setState({filter})
        }
      
       



    render(){
            let count = 0
          
            let items = this.props.elements.map((item, i) => {
                if(item.status == 'passive'){
                    count++;
                }

                if(this.state.filter == 'all'){
              
                    return(
                        <li id={i}  key={i} className={item.status}>
                          <span className={'text'}>  {1+i}   {item.name}</span>
                          <span className={'done'} onClick={this.done}></span>
                          <span onClick={this.closee} className={'closee'}>X</span>
                        </li>
                            )



                } if(this.state.filter == 'active' && item.status == 'active'){
                    return(
                        <li id={i}  key={i} className={item.status}>
                          <span className={'text'}>  {1+i}   {item.name}</span>
                          <span className={'done'} onClick={this.done}></span>
                          <span onClick={this.closee} className={'closee'}>X</span>
                        </li>
                            )
                  
                    
                } if(this.state.filter == 'passive' && item.status == 'passive'){
        
                    return(
                        <li id={i}  key={i} className={item.status}>
                          <span className={'text'}>  {1+i}   {item.name}</span>
                          <span className={'done'} onClick={this.done}></span>
                          <span onClick={this.closee} className={'closee'}>X</span>
                        </li>
                            )
                    
                }

                  
            });
           
                        return(
                            <div>
                            <ul>
                                {items}
                            </ul>
                            <div>
                            <spanv className={'counter'}>{count}</spanv>
                               <ul className={'filter-content'}>
                                    <li onClick={() => this.listFilter('all')} className={'all clicked'}>All</li> 
                                     
                                    <li onClick={() => this.listFilter('passive')} className={'clicked'}>Passive</li>

                                    <li onClick={() => this.listFilter('active')} className={'clicked'}>Active</li>
                               </ul>
                            </div>
                          
                    </div>
                    
                )
    }


 }

