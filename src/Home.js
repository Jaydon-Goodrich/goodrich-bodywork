import React from 'react';
import { MyCard } from './components/MyCard';
import { MyCard1 } from './components/MyCard1';
import { MyCard2 } from './components/MyCard2';
import { Footer } from './components/Footer';
import { Intro } from './components/Intro';

export const Home = () => (
    <div>
        <Intro />
        <MyCard />
        <MyCard1 />
        <MyCard2 />
        <Footer />
    </div>
)