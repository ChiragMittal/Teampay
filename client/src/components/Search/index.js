import React from "react";

const SearchInput = ({
  query,
  onQueryChange,
  submitForm
}) => (
  <form className="search__form" onSubmit={submitForm}>
    <input
      className="search__input"
      type="text"
      placeholder="search books"
      onChange={onQueryChange}
      value={query}
      autoFocus
    />
  </form>

);

export default SearchInput;