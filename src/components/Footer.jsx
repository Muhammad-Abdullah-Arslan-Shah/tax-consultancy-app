import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-500 text-center py-2">
      <p className="text-white text-sm">
        &copy; {new Date().getFullYear()} Financial Crest Consulting. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
