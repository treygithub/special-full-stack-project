import React, {Component} from 'react';
import axios from 'axios'

class  DeleteBTN extends Component {
    constructor(props){
        super(props);
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this)
    }

handleDeleteProduct(id) {
    axios
        .delete(`/api/deleteListing/${id}`)
}
        render(){
        return(
            <div>
                <button onClick={ () =>this.handleDeleteProduct(this.props.id)}>Delete</button>
            </div>)
}
}
export default DeleteBTN;