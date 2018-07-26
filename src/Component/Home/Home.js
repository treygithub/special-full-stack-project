import React from 'react'
import './Home.css'
import burger from './burger.jpg';
import burger2 from './burger2.jpg';
import {Button, Media, Row, Container, Col} from 'reactstrap';
// import Svg from '../svg/svg'

export default function Home(props) {

    return(
        <div>
            {/* <Svg/> */}
            <Container>
                <Row>
                    <Media>
                    <Col  >
                        <Media body align="middle">
                            <Media heading className="pretty">Media Heading</Media>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            <Button outline color="secondary">View Menu</Button>
                        </Media>
                    </Col>
                     <Col >   
                        <Media >
                            <img style={{ width:'80%',height:'100vh '}} src={burger} />
                        </Media>
                     </Col>   
                    </Media>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Media>
                    <Col  >
                        {/* <Media body align="middle">
                            <Media heading className="pretty">Media Heading</Media>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            <Button outline color="secondary">View Menu</Button>
                        </Media> */}

                         <Media >
                            <img style={{ width:'80%',height:'100vh '}} src={burger} />
                        </Media>
                    </Col>
                     <Col >   
                        {/* <Media >
                            <img style={{ width:'80%',height:'100vh '}} src={burger} />
                        </Media> */}
                            <Media body align="middle">
                            <Media heading className="pretty">Media Heading</Media>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            <Button outline color="secondary">View Menu</Button>
                        </Media>
                     </Col>   
                    </Media>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Media>
                    <Col  >
                        <Media body align="middle">
                            <Media heading className="pretty">Media Heading</Media>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            <p>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                                fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            <Button outline color="secondary">View Menu</Button>
                        </Media>
                    </Col>
                     <Col >   
                        <Media >
                            <img style={{ width:'80%',height:'100vh '}} src={burger} />
                        </Media>
                     </Col>   
                    </Media>
                </Row>
            </Container>

            
        </div>
    )
}