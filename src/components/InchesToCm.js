import React, { useState, useEffect } from 'react';
import { getInchToCm } from '../services/ConverterService';

const InchesToCm = () => {
  const [inches, setInches] = useState(0);
  const [cm, setCm] = useState(0);

  useEffect(() => {
    const convertInchesToCm = async () => {
      try {
        const response = await getInchToCm(inches);
        setCm(response.data);
      } catch (error) {
        console.error('Error converting inches to cm:', error);
      }
    };

    convertInchesToCm();
  }, [inches]);

  const handleInchesChange = (event) => {
    setInches(event.target.value);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Inches to Cm</h4>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="inchesInput" className="form-label">
                  Inches:
                </label>
                <input
                  id="inchesInput"
                  type="number"
                  step="any"
                  value={inches}
                  onChange={handleInchesChange}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="cmOutput" className="form-label">
                  Cm:
                </label>
                <input
                  id="cmOutput"
                  type="text"
                  value={cm}
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

export default InchesToCm;
