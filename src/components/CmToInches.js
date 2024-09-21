import React, { useState, useEffect } from 'react';
import { getCmToInches } from '../services/ConverterService';

const CmToInches = () => {
  const [cm, setCm] = useState(0);
  const [inches, setInches] = useState(0);

  useEffect(() => {
    const convertCmToInches = async () => {
      try {
        const response = await getCmToInches(cm);
        setInches(response.data);
      } catch (error) {
        console.error('Error converting cm to inches:', error);
      }
    };

    convertCmToInches();
  }, [cm]);

  const handleCmChange = (event) => {
    setCm(event.target.value);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Cm to Inches</h4>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="cmInput" className="form-label">
                  Cm:
                </label>
                <input
                  id="cmInput"
                  type="number"
                  step="any"
                  value={cm}
                  onChange={handleCmChange}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="inchesOutput" className="form-label">
                  Inches:
                </label>
                <input
                  id="inchesOutput"
                  type="text"
                  value={inches}
                  readOnly
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmToInches;
