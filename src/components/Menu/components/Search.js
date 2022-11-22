import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  /* display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden; */

  input {
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
`;

export default function Search({ searchValue, setSearchValue }) {
    return (
        <StyledSearch>
        <div className="form-control">
          <label className="input-group  input-group-sm">
            <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search…" className="input w-96 input-sm input-bordered" />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="#181818"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
          </label>
        </div>
         </StyledSearch>
    )

}
