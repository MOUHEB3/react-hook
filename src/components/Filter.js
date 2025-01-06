import React from 'react';

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        onChange={(e) => setFilterTitle(e.target.value)}
        className="filter-input"
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        onChange={(e) => setFilterRating(e.target.value)}
        className="filter-input"
      />
    </div>
  );
};

export default Filter;
