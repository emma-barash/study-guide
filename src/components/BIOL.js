import React from 'react';
import Toggle from '../shared/Toggle.js';
import { 
    Header, 
    SubjectContainer, 
    SecondaryHeader, 
    VocabContainer,
    VocabHeader 
} from '../styles/index.js';

const BIOL = () => {
        return (
            <SubjectContainer>
                <Header>Biology 15B</Header> 
                <SecondaryHeader>Cells and Organisms</SecondaryHeader> 
                <Toggle render ={({ on, toggler }) => 
                    !on ?
                    <>
                        <VocabContainer onClick={ toggler }>
                            <VocabHeader>Show Vocabulary</VocabHeader> 
                        </VocabContainer>
                    </>
                    :
                    <>
                        <VocabContainer onClick={ toggler }>
                            <VocabHeader>Here is the Vocabulary!</VocabHeader>
                        </VocabContainer>
                    </>
            } />
            </SubjectContainer>
        )
    }


export default BIOL;




