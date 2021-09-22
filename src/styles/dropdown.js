import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
  span {
    color: #828494;
  }

  button {
    border: ${(props) => (props.show ? "1px solid #000" : "1px solid #474e61")};
    outline: none;
    background-color: transparent;
    padding: 0.6rem 1rem;
    margin-left: 10px;
    font-size: 0.8rem;
    cursor: pointer;
    border-radius: 5px;
    transition: border 0.6s ease;

    .icon {
      font-size: 1rem;
      margin-top: 10px;
      color: #000;
      position: relative;
      padding: 0 0.5rem;

      .arrow-down,
      .arrow-up {
        position: absolute;
        top: 25%;
        left: 50%;
      }

      .arrow-up {
        transform: ${({ show }) =>
          show ? "translateY(0px)" : "translateY(-15px)"};
        opacity: ${({ show }) => (show ? 1 : 0)};
        transition: all 0.2s ease-in-out;
      }

      .arrow-down {
        transform: ${({ show }) =>
          show ? "translateY(15px)" : "translateY(0)"};
        opacity: ${({ show }) => (show ? 0 : 1)};
        transition: all 0.2s ease-in-out;
      }
    }
  }
`;

export const DropdownItem = styled.div`
  background-color: white;
  width: auto;
  border-radius: 5px;
  box-shadow: 2px 0px 25px 2px #ddd;
  margin-top: 1rem;
  position: absolute;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.2s ease-out;

  ul {
    padding: 0.25rem;
  }

  ul li {
    list-style: none;
    margin: 0.2rem 0;
    background-color: transparent;
    width: auto;
    padding: 0.7rem;
    cursor: pointer;
    color: #828494;
    transition: all 0.3s ease-in-out;
    border-radius: 3px;
    font-size: 0.9rem;

    &:hover {
      background-color: whitesmoke;
      color: #474e61;
    }

    svg {
        margin-right: 1rem;
    }
  }
`;
