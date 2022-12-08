import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Showcase from './components/Showcase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Project from './components/Project';
import TestScroll from './components/TestScroll';
const App = () => {

  return (
    <div className="App text-white">
      <BrowserRouter>
        <Routes>
          <Route index element={<Showcase />}></Route>
          <Route path='/project/example' element={<Project />}></Route>
          <Route path='/testscroll' element={<TestScroll />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
