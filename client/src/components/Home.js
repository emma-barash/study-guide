import React from 'react';
import { Welcome, Uni } from '../styles/index.js';

const Home = () => {
    return (
        <div>
            <Uni>
                Brandeis University
            </Uni>
            <Welcome>
                Emma Barash
            </Welcome>
            <Welcome>
                2020
            </Welcome>
        </div>
    );
};

export default Home;