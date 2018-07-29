import React, {Component} from 'react';

class Admin extends Component  {
    constructor (){
        super();
        this.state={
            h1:'',
            button:'',
            pTag:'',
            image:'',
            AdminUserName:' J Double D'
        }
    }
    

render(){
    const admin = this.state.AdminUserName
    return(
        <div>
            <h3>Welcome {admin} to the admin control panel</h3>
            <br />
            <h4>You may customize your Events section Located on Home page below</h4>
            <br />
            <form method="post">
                <div>
                <p>You may change one element, multiple , all or none</p>
                    <h5>Change Media Heading</h5>
                    <input name="h1-homepage" type="text" placeholder="Enter new Title"></input>
                    <h5>Change paragraph text</h5>
                    <input name="pTag-homepage" type="text" placeholder="Enter new paragraph text"></input>
                    <h5>Change Button text</h5>
                    <input name="Button-homepage" type="text" placeholder="Enter new Button text"></input>
                </div>
                <br />
                <div>
                    <h5>Image Section</h5>
                    <label for="image_uploads">Choose image file to upload (PNG, JPG)</label>
                    <input type="file" id="image_uploads" name="image_uploads" accept="Image/*">
                    </input>

                    <p><bold>-OR-</bold></p>

                    <label for="image_uploads">Choose image URL to upload</label>
                    <input type="src" id="url_uploads" name="url_uploads" >
                    </input>
                    <br />
                </div>
                    <button>SUBMIT</button>
            </form>
  
        </div>
    )
}
}

export default Admin;