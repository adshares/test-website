import styled from 'styled-components'

export const Line = styled.span`
  width: 40px;
  height: 4px;
  margin-bottom: 8px;
  display: block;
  background-color: var(--white);

  &:last-of-type {
    width: 25px;
  }
`

export const HamburgerButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`
