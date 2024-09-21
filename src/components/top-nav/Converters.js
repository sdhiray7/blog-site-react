// src/components/Converters.js
import React from 'react';
import MyComponent from '../MyComponent';
import MetresToKms from '../MetresToKms';
import KmsToMetres from '../KmsToMetres';
import CmToInches from '../CmToInches';
import InchesToCm from '../InchesToCm';

function Converters() {
  return (
    <div className="converters">
      <h2>Converters</h2>
      <div className="row">
        <div className="col-md-6">
          <MetresToKms />
        </div>
        <div className="col-md-6">
          <KmsToMetres />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-6">
          <CmToInches />
        </div>
        <div className="col-md-6">
          <InchesToCm />
        </div>
      </div>
    </div>
  );
}

export default Converters;
