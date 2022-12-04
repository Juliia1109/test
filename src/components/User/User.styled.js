import styled from 'styled-components';

// export const Paragraph = styled.p`
//   color: red;
//   font-size: large;
// `;

// export const Sponge = styled.span`
//   color: aqua;
//   font-size: small;
//   ${Paragraph}:hover & {
//     background-color: brown;
//   }
// `;

export const Sponge = styled.span`
  color: ${({ isRed }) => (isRed ? 'red' : 'aqua')};
  font-size: small;
`;
export const Paragraph = styled.p`
  color: red;
  font-size: large;
  &:hover ${Sponge} {
    background-color: brown;
  }
`;
