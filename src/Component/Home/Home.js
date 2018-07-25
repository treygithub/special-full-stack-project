import React from 'react'
import { Button, Media } from 'react-bootstrap';
import './Home.css'
import burger from './burger.jpg'

export default function Home(props) {

    return(
        <div>
            <Media>
                <Media.Body align="middle">
                <Media.Heading className="pretty">Media Heading</Media.Heading>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                    <Button>View Menu</Button>
                </Media.Body>
                <Media.Right>
                    <img  src={burger} alt="menu" />
                </Media.Right>
            </Media>

           <Media>
                <Media.Left>
                    <img  src={burger} alt="thumbnail" />
                </Media.Left>
                <Media.Body align="middle">
                <Media.Heading className="pretty">Media Heading</Media.Heading>
                    <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                    <Button>View Menu</Button>
                </Media.Body>
            </Media>
        </div>
    )
}