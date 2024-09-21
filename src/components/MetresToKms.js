import React, { useState, useEffect } from 'react';
import { getMetresToKms } from '../services/ConverterService';

const MetresToKms = () => {
  const [metres, setMetres] = useState(0);
  const [kms, setKms] = useState(0);

  useEffect(() => {
    const convertMetresToKms = async () => {
      try {
        const response = await getMetresToKms(metres);
        setKms(response.data);
      } catch (error) {
        console.error('Error converting metres to kms:', error);
      }
    };

    convertMetresToKms();
  }, [metres]);

  const handleMetresChange = (event) => {
    setMetres(event.target.value);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Metres to Kms</h4>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="metresInput" className="form-label">
                  Metres:
                </label>
                <input
                  id="metresInput"
                  type="number"
                  step="any"
                  value={metres}
                  onChange={handleMetresChange}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="kmsOutput" className="form-label">
                  Kms:
                </label>
                <input
                  id="kmsOutput"
                  type="text"
                  value={kms}
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

export default MetresToKms;
