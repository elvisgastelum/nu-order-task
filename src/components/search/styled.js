import styled from 'styled-components';

export const SearchContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  font-size: 1.2rem;

  @media only screen and (max-width: 375px) {
    font-size: 16px;
  }
`

export const SearchElements = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 47%;
  position: relative;
  top: 5em;
  height: max-content;

  @media only screen and (max-width: 375px) {
    width: 70%;
  }

  @media only screen and (max-width: 768px) {
    width: 60%;
  }
`

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const SearchBoxLogo = styled.img`
  min-height: 5em;
  max-height: 5em;
  align-self: flex-end;
  position: relative;
  top: 1em;

  @media only screen and (max-width: 375px) {
    min-height: 4em;
  }

  @media only screen and (max-width: 768px) {
    min-height: 4em;
  }
`

export const SearchTitle = styled.h1`
  text-align: center;

  @media only screen and (max-width: 375px) {
    font-size: 1.5em;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1.7em;
  }
`

export const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const SearchInput = styled.input`
  border-radius: 5px;
  border: 1px solid #cdcdce;
  padding: 0 0.5em;
  line-height: 2.5em;
  font-size: 1.1rem;
  max-height: 2.5em;

  :focus {
    outline: 0;
    border-radius: 5px 5px 0 0;
  }

  @media only screen and (max-width: 375px) {
    line-height: 1.7em;
    font-size: 1rem;
    max-height: 2em;
  }

  @media only screen and (max-width: 768px) {
    line-height: 2em;
    font-size: 1rem;
    max-height: 2em;
  }
`

