import { Component } from 'react';

class Toggle extends Component {
    constructor(){
        super();
        this.state = {
            on: false
        }
    }

        toggle = () => {
            this.setState(ps => ({ on: !ps.on }))
        }
        render(){
            return this.props.render({ on: this.state.on, toggler: this.toggle }) // returns the state of the toggle and the function to turn the toggle on and off
        }
    }
    
export default Toggle;