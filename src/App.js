import logo from './logo.svg';
import './App.css';
import HomePage from './components/outline/HomePage';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/outline/Header';
import Footer from './components/outline/Footer';
import LeftNavBar from './components/outline/LeftNavBar';
import RightNavBar from './components/outline/RightNavBar';
import JavaPage from './components/top-nav/JavaPage';
import PythonPage from './components/top-nav/PythonPage';
import JavaScriptPage from './components/top-nav/JavascriptPage';
import AboutPage from './components/top-nav/AboutPage';
import ContactPage from './components/top-nav/ContactPage';
import Converters from './components/top-nav/Converters';
import StaticPageRenderer from './components/outline/StaticPageRenderer';

function App() {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <div className="container-fluid flex-grow-1">
          <div className="row">
            <div className="col-md-3">
              <LeftNavBar />
            </div>
            <div className="col-md-6">
              <main className="p-3 overflow-auto">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/java" element={<JavaPage />} />
                  <Route path="/python" element={<PythonPage />} />
                  <Route path="/javascript" element={<JavaScriptPage />} />
                  <Route path="/converters" element={<Converters />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/static/:pageName" element={<StaticPageRenderer />} />
                </Routes>
              </main>
            </div>
            <div className="col-md-3">
              <RightNavBar />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* <div className="App">
      <h2>Hello Sud React!</h2>
      <MyComponent />
      <div className="row">
        <div className="col-lg-6">
          <MetresToKms />
        </div>
        <div className="col-lg-6">
          <KmsToMetres />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <CmToInches />
        </div>
        <div className="col-lg-6">
          <InchesToCm />
        </div>
      </div>
      <HomePage />
      </div> */}
    </Router>
    
  );
   
    
 
}

export default App;
