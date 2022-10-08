import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SelectedWorkHeader from './components/selected-work/SelectedWorkHeader';
import HeroHeader from './components/HeroHeader';
import { getScrollPercentage } from './helpers/useScrollPercentage';
import SelectedWorkDescription from './components/selected-work/SelectedWorkDescription';
import ScannerWork from './components/selected-work/scanner-work/ScannerWork';

const App = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(NaN);
  const _onScroll = (e: Event) => {
    setScrollPercentage(getScrollPercentage(e))
  }
  useEffect(() => {
    window.addEventListener('scroll', _onScroll);
    return () => {
      window.removeEventListener('scroll', _onScroll);
    };
  }, []);
  return (
    <div className="App pb-20">
      <HeroHeader />
      <ScannerWork top={34} bottom={66} scrollPercentage={scrollPercentage} />
    </div>
  );
}

export default App;
