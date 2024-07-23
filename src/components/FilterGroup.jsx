import React from 'react';


const FilterGroup = ({ titulo, itens, formato }) => {
  return (
    <div>
      <h6 className='mt-3 fw-bold'>{titulo}</h6>
      <div className="form-group">
        {itens.map((item, index) => (
          <div className="form-check" key={index}>
            <input type="checkbox" className={`form-check-input ${formato}`} id={`item-${index}`} />
            <label className="form-check-label" htmlFor={`item-${index}`}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;
