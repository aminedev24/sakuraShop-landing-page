import ReactDOM from 'react-dom';
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import NewsletterSection from './components/NewsletterSignUp';
import Testimonials from './components/Testimonials';
import FacebookPlugin from './components/FacebookPlugin';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FacebookPlugin />
      <FeaturedProducts />
      <Testimonials />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;




//ReactDOM.render(<App />, document.getElementById('root'));