import React from 'react';
// Components
import Form from './components/Form';
import Hero from './components/Hero';
import MainLayout from './components/layouts/MainLayout';

const App = () => {
  return (
    <div>
      <MainLayout>
        <Hero />
        <Form />
      </MainLayout>
    </div>
  );
};

export default App;
