import { keyframes } from 'styled-components'

export const scaleIn = keyframes`
  to {
    transform: scale(1) rotateX(0); 
  }`

export const fadeIn = keyframes`
  to {
    transform: scale(1); 
    opacity: 1; 
  }`

export const slideIn = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`
