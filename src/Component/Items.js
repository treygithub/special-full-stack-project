import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios'

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      id: '',
      url:'',
      title:''
    }
   
    this.getProducts = this.getProducts.bind(this)
  }    
    //Life-cycle
    componentDidMount(){
      this.getProducts();
    }
    //Get
    getProducts(){
      axios.get('/api/fetchListings').then(payload2 => {
        this.setState({
          items: payload2.data
        });
      })
    }
    //map over state and pass props to child
    render() {
      let {items} = this.state
      let instanceLoop  = items.map((e,i) => {
        return (
          <Product 
            key={i}
            id={e.card_id}
            url={e.url}
            title={e.title}
            />  
         )})

        //Render iteam to screen + link button to form field
         return (
        <div>
            <div>
                {instanceLoop}
            </div>
        </div>)
    }
}

export default Items;