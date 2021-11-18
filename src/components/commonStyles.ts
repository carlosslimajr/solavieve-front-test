import styled from "styled-components";

export const Title = styled.h1`
  font-size: 4.8rem;
  line-height: 5.9rem;
  text-align: center;
  color: #273040;
  margin-bottom: 7.7rem;

  @media (max-width: 576px) {
    font-size: 3.4rem;
    text-align: center;
  }
`;

interface SubTitleProps {
  margin?: string;
}

export const SubTitle = styled.h2<SubTitleProps>`
  font-size: 2.4rem;
  line-height: 2.9rem;
  text-align: center;
  color: #273040;
  margin-bottom: 3.6rem;
  margin: ${(props) => (props.margin ? props.margin : "")};
`;

export const TextArea = styled.textarea`
  display: block;
  padding: 1.6rem 2.2rem;
  width: 100%;
  max-width: 89.6rem;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 2.2rem;
  border-radius: 0.9rem;
  border: none;
  background: #ffffff;
  resize: none;

  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);

  &::placeholder {
    color: #c8c8c8;
  }
`;

interface ButtonProps {
  width?: string;
  height?: string;
  margin?: string;
}

export const Button = styled.button<ButtonProps>`
  display: block;
  width: ${(props) => (props.width ? props.width : "18.4rem")};
  height: ${(props) => (props.height ? props.height : "4.8rem")};
  margin: ${(props) => (props.margin ? props.margin : "5.5rem auto")};
  background: #11c4b0;
  border-radius: 8rem;
  border: none;

  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;

  :enabled {
    :hover {
      transition: all 0.2s;
      transform: scale(1.03);
      box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
    }
  }

  :disabled {
    background: #dedede;
  }
`;
