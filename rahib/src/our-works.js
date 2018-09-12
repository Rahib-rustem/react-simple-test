import React from 'react';



export class Ourworks extends React.Component{

render(){
    return(
        
<section className={'section4'}>
<div className={'container'}>
    <div className={'content'}>

        <div className={'box'}>
            <div className={'title'}>
                OUR<span>WORKS</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iste adipisci accusantium quod corrupti? </p>
        </div>
       
        <div className={'items'}>
           <div className={'row'}>
            <div className={'item col-md-4'}>
                    <a href='#'>
                        <img className={'image img-fluid'} src='assets/image/imac.png'/>
                    </a>
                </div>
                <div className={'item col-md-4'}>
                        <a href='#'>
                            <img className={'image img-fluid'} src='assets/image/office.png'/>
                        </a>
                </div>
                <div className={'item col-md-4'}>
                        <a href='#'>
                            <img className={'image img-fluid'} src='assets/image/business.png'/>
                        </a>
                </div>
            </div>
            <div className={'row'}>
            <div className={'item col-md-4'}>
                    <a href='#'>
                        <img className={'image img-fluid'} src='assets/image/ipad.png'/>
                    </a>
            </div>
            <div className={'item col-md-4'}>
                    <a href='#'>
                        <img className={'image img-fluid'} src='assets/image/technology.png'/>
                    </a>
            </div>
            <div className={'item col-md-4'}>
                    <div className={'back-img'}>
                        <div className={'item-change'}>
                                <div>
                                    <h6 className={'title'}>ABAZZO WEBSITE</h6>
                                </div>
                                <div>
                                        <p>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At accusamus consequatur
                                        </p>
                                </div>
                                <div>
                                    <a className={'show-proyect-btn'}>SHOW PROJECT</a>
                                </div>
                        </div>
                            
                    </div>
            </div>
        </div>
      
    </div>
        <div className={'show-more'}>
                <a className={'show-button'} role="button">SHOW MORE</a>
        </div>
    
</div>
</div>
</section>

    )
}




}