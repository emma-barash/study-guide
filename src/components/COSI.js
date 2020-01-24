import React, { Component } from 'react';
import { Header, SubjectContainer } from '../styles/index.js';

class COSI extends Component {
    constructor(){
        super();
        this.state = {
            button: false
        }
    } // create a toggle render prop?
    render(){ 
        return (
        <SubjectContainer>
            <Header>Computer Science 12B</Header>
        </SubjectContainer>
        );
    };
};

export default COSI;