import React from 'react';


const FilterGroup = ({ titulo, itens}) => {
  return (
    <div>
      <h6 className='mt-3 fw-bold'>{titulo}</h6>
      <div className="form-group">
        {itens.map((item, i) => (
          <div className="form-check" key={i}>
            <input type="checkbox" className={`form-check-input`} id={`item-${i}`} />
            <label className="form-check-label" htmlFor={`item-${i}`}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;
