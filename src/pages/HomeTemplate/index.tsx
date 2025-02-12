import React from 'react';
import Header from './_components/Header';
import Footer from './_components/Footer';
import { Outlet } from 'react-router-dom';

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
