import React, {Component} from 'react';

class JumboTron extends Component  {
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
                    JumboTron
                </div>
            </section>
        </div>
    )
}
}

export default JumboTron;
