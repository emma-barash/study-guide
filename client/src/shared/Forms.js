import { Component } from 'react';

class Forms extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: this.props.inputs
        }

        handleChange = e => {
            e.preventDefault();
            const { name, value } = e.target;
            this.setState(ps => {
                inputs = {
                    ...ps.inputs,
                    [ name ]: value
                }
            })

            
        }

    }
}