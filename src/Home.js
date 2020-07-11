import React from 'react';
import { MyCard } from './components/MyCard';
import { SmallCard } from './components/SmallCard';
import { Footer } from './components/Footer';
import { Intro } from './components/Intro';

export const Home = () => (
    <div>
        <Intro />
        <MyCard />
        <SmallCard />
        <Footer />
    </div>
)