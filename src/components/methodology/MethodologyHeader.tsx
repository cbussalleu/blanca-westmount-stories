
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import AnimatedVennDiagram from './AnimatedVennDiagram';
import AnimatedLogoIcon from '../AnimatedLogoIcon';

const MethodologyHeader = () => {
  return (
    <>
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-xs hover:opacity-70 transition-opacity">
          <ArrowLeft size={14} className="mr-1" /> Back to Home
        </Link>
      </div>
      
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-westmount">METHODOLOGY</h1>
        <div className="flex justify-center mt-4">
          <AnimatedLogoIcon className="h-6 mx-auto" />
        </div>
        <p className="text-sm max-w-2xl mx-auto mt-8 font-merriweather">
          An approach for navigating complexity through methods that balance structure with emergence.
        </p>
      </div>
      
      <AnimatedVennDiagram />
    </>
  );
};

export default MethodologyHeader;
