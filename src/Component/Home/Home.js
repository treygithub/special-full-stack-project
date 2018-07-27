import React from 'react'
import './Home.css'
import burger from './burger.jpg';
import {Button, Media, Row, Container, Col} from 'reactstrap';
import Mosaic from '../Mosaic/Mosaic';
import JumboTron from '../JumboTron/JumboTron';

export default function Home(props) {

    return(
        <div>

            <JumboTron />

            <Container fluid>
                <Row>
                    <Col >
                        <Media className="content" body align="middle">
                            <Media heading className="pretty">Media Heading</Media>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                          
                            <br/>
                            <Button outline color="secondary">View Menu</Button>
                        </Media>
                    </Col>
                     <Col >   
                        <Media  >
                            <img style={{ width:'100%',height:'100vh '}} src={burger} alt="Food" />
                        </Media>
                     </Col> 
                </Row>
            </Container>

            <Container fluid>
                <Row>
                        <Col  >
                            <Media >
                                <img style={{ width:'100%',height:'100vh '}} src={burger} alt="Food" />
                            </Media>
                        </Col>
                        <Col  >   
                        <Media className="content" body align="middle">
                            <Media  heading className="pretty">Media Heading</Media>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                                                      
                            <br/>
                            <Button outline color="secondary">View Menu</Button>
                        </Media>
                     </Col>   
                </Row>
            </Container>

            <Container fluid>
                <Row>
                    <Col >
                        <Media className="content" body align="middle">
                            <Media heading className="pretty">Media Heading</Media>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                          
                            <br/>
                            <Button outline color="secondary">View Menu</Button>
                        </Media>
                    </Col>
                     <Col >   
                        <Media  >
                            <img style={{ width:'100%',height:'100vh '}} src={burger} alt="Food" />
                        </Media>
                     </Col> 
                </Row>
            </Container>
            
        <Mosaic/>
            
        </div>
    )
}