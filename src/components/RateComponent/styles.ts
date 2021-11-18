import styled from "styled-components";

export const RatedComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2.8rem;

`;

export const AllStars = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 77.4rem;
  gap: 1.1rem;
  border-bottom: 1px solid #dedede;

  svg {
    margin-bottom: 2.7rem;
    cursor: pointer;
    transition: all 0.3s;

    @media (max-width: 576px) {
      transform: scale(0.8);
    }
  }

`;
