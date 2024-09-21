import React, { useState, useEffect } from 'react';
import { getKmsToMetres } from '../services/ConverterService';

const KmsToMetres = () => {
  const [kms, setKms] = useState(0);
  const [metres, setMetres] = useState(0);

  useEffect(() => {
    const convertKmsToMetres = async () => {
      try {
        const response = await getKmsToMetres(kms);
        setMetres(response.data);
      } catch (error) {
        console.error('Error converting kms to metres:', error);
      }
    };

    convertKmsToMetres();
  }, [kms]);

  const handleKmsChange = (event) => {
    setKms(event.target.value);
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Kms to Metres</h4>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="kmsInput" className="form-label">
                  Kms:
                </label>
                <input
                  id="kmsInput"
                  type="number"
                  step="any"
                  value={kms}
                  onChange={handleKmsChange}
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="metresOutput" className="form-label">
                  Metres:
                </label>
                <input
                  id="metresOutput"
                  type="text"
                  value={metres}
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

export default KmsToMetres;
