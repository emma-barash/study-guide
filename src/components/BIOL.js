import React, { Component } from 'react'
import { Header, SubjectContainer, SecondaryHeader, RevealB } from '../styles/index.js';

class BIOL extends Component {
    constructor(){
        super();
        this.state = {
            button: false
        }
    }

    revealVocab = e => {
        e.preventDefault();
        return this.setState({ button: true });
    }
    
    render() {
        return (
            <SubjectContainer>
                <Header>Biology 15B</Header> 
                <SecondaryHeader>Cells and Organisms</SecondaryHeader> 
                <RevealB onClick={this.revealVocab}>show vocabulary</RevealB>
            </SubjectContainer>
        )
    }
}

export default BIOL;




