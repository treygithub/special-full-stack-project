import React, {Component} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

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
                <Button onClick={ () =>this.handleDeleteProduct(this.props.id)}>Delete</Button>
            </div>)
}
}
export default DeleteBTN;