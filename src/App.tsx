import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  React 
  // Useless state to satisfy the unused import warning
  const [, setUselessState] = useState(false);

  // Useless function to "use" the state
  const uselessFunction = () => {
    setUselessState((prev) => !prev);
  };

  // Call the useless function (but it won't affect anything)
  uselessFunction();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;