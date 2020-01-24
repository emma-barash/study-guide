import React from 'react';
import { Header, SubjectContainer } from '../styles/index.js';

const NPSY = () => {
    return (
        <SubjectContainer>
            <Header>Brains 11B</Header>
            <h4>1/15/20</h4>
                <ul>
                    <li><b>neurons</b></li>
                    <li><b>chem. impulses</b> - easy to modify</li>
                    <li><b>action pot.</b></li>
                    <li><b>spikes</b></li>
                    <li><b>electrical signals</b> - fast, uses voltage</li>
                </ul>
                <h3>Neurotransmission</h3>
                <ol>
                    <li>Net charge b/w inside and outside the neuron: -65 to -70 mV</li>
                    <li>There are protein channels that travel through the cell membrane, they are also thought of as "gates"<br/>
                    because they can open and close.</li>
                    <li>The voltage is depolarized to a magnitude called "firing potential".  Then, the "gated channels" will open up and sodium ions<br/>
                    fly into the neuron and all of the sodium channels will also open up becuase their thresholds will be reached; the neuron is flooded<br/>
                    with sodium.  Potassium channels open and make the sodium channels inactive by flushig out the positive voltage.</li>
                </ol>
                <article>
                    Uses voltages, there are sodium (Na+) ions outside of the neurons.<br/>
                    Inside the neuron there are potassium (K-) ions (more inside that on the outside).<br/>
                    <br/>
                    If the "gates" or "channels" were always open, potassium would flow freely in and out of the neuron.  There would be <br/>
                    no equilibruim potential.
                </article>
        </SubjectContainer>
    );
};

export default NPSY;