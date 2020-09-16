import styled from 'styled-components';

export const SearchItemLi = styled.li`
  text-decoration: none;
  width: 100%;
  position: relative;
  background: ${(props) => (props.active ? `#cdcdce` : `white`)};
  box-sizing: border-box;

  :last-child {
    border-radius: 0 0 10px 10px;
  }
`;

export const SearchItemLink = styled.a`
  text-decoration: none;
  color: #000000;
  display: block;
  padding: 0.5em;

  @media only screen and (max-width: 375px) {
    font-size: small;
  }

  @media only screen and (max-width: 768px) {
    font-size: medium;
  }
`;
