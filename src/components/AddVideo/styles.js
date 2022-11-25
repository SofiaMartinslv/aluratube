import styled from "styled-components";

export const StyledAddVideo = styled.div`
  .add-video {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: white;
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: 0;
    background-color: red;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
  }
  .close-modal {
    font-weight: bold;
    position: absolute;
    top: 8px;
    right: 16px;
    cursor: pointer;
  }
  .modal-box {
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  input, select {
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundLevel2};
    font-weight: inherit;
  }

  .red-button {
    background-color: red;
    border: none;
    color: white;
  }

  img {
    width: 218px;
    border-radius: var(--rounded-btn, 0.5rem);
    margin: auto;
  }
`;
