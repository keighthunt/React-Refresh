import React, { Component, Fragment } from 'react';
import { getFunName } from '../helpers';

export default class StorePicker extends Component {

    /* below isn't needed if we convert to an arrow function to access this. if want to use this inside a custom method we must use this syntax */
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    myInput = React.createRef();

    /* if want to use this inside a custom method we must use this syntax */
    goToStore = (event) => {
        event.preventDefault();
        const store = this.myInput.value.value;
        this.props.history.push(`/store/${store}`)
        
        
    }

    // componentDidMount() {

    // }

    render() {
        return (
            <Fragment>
                {/* Fragment can be used for adjacent JS selector, could be a div tag or a form tag... */}
                <form className="test" onSubmit={this.goToStore}>
                    <h2>Please Enter a Store </h2>
                    <input
                    ref={this.myInput}
                        type="text" required placeholder="Store Name" defaultValue={getFunName()}
                    />
                    <button type="submit">Visit Store</button>
                </form>
            </Fragment>
        )
    }

}