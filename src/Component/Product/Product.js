import React from 'react';
import DeleteBTN from './DeleteBTN';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


const Product = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.url} alt="Card image cap" />
        <CardBody>
          <CardTitle> {props.title}</CardTitle>
          <CardSubtitle> {props.id} </CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <DeleteBTN
          id={props.id}
          />
          <Button>Add to Cart</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;
// import React from 'react';
// import DeleteBTN from './DeleteBTN';
     
    // const Product = (props) =>{
          
    //     return(
    //         <div className="items"> 

                {/* <h4>Listing title: {props.title}</h4>
                <h4>Listing id: {props.id}</h4>
                <img src={props.url} alt="new product"></img>
                <DeleteBTN
                id={props.id}
                />
                <hr /> */}

            {/* </div>)
        }
export default Product; */}