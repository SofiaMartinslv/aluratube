import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  input {
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundLevel2};
  }

  span {
    background-color: ${({ theme }) => theme.backgroundBase};
  }

  span svg {
    stroke:  ${({ theme }) => theme.textColorBase};
  }
`;

export default function Search({ searchValue, setSearchValue }) {
    return (
        <StyledSearch>
        <div className="form-control">
          <label className="input-group input-group-sm">
            <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search…" className="input w-96 input-sm input-bordered" />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
          </label>
        </div>
         </StyledSearch>
    )

}
