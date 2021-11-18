import styled from "styled-components";

interface ModalWrapperProps {
  open?: boolean;
}
export const ModalWrapper = styled.div<ModalWrapperProps>`
  position: fixed;

  display: ${(props) => (props.open ? "block" : "none")};
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.67);

  overflow: hidden;

  .modal-content {
    margin: 23.6rem auto;
    text-align: center;
    width: 100%;
    max-width: 74.1rem;
    height: 48.866rem;
    background: #ffffff;
    color: #979797;
    padding-top: 4.4rem;
    box-shadow: 0px 2px 17px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0.8rem;

    @media(max-width:768px){
      margin-top: 8rem;
    }

    small {
      margin-top: 2rem;
      margin-bottom: 2rem;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s;

      :hover {
        font-weight: bold;
      }
    }

    svg {
      margin-bottom: 7.2rem;
    }
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-weight: 500;
      font-size: 1.8rem;
      line-height: 2.2rem;
      text-align: center;
      :nth-child(2) {
        margin-bottom: 0.9rem;
      }
    }
    button {
      margin-top: 8rem;
    }

    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;
