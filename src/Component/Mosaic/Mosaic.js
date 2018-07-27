import React, {Component} from 'react';

class Mosaic extends Component  {
    constructor (){
        super();
        this.state={
            hello:''
        }
    }

render(){
    return(
        <div>
            <section id="showcase">
                <div>
                    Mosaic
                </div>
            </section>
        </div>
    )
}
}

export default Mosaic;