import React from 'react';
import { HeroSection } from '../component/feature-carousel'; // Adjust the import path as needed

const ModernSlider = ({images}) => {


  const title = (
    <>
      Edit Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Photos </span> on the Go
    </>
  );

  return (
    <div className="w-full">
      <HeroSection
        title={title}
        subtitle="Use all our AI-powered photo editing tools on your phone, available for all iOS and Android."
        images={images}
        appStoreLink="#"
        googlePlayLink="#"
      />
    </div>
  );
};

export default ModernSlider;
