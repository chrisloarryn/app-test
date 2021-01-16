import styled from 'styled-components';

export const divi = styled.div``;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardContent = styled.div`
  padding: 2px 16px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 40% !important;
  height: 30% !important;
`;

export const Description = styled.p`
  width: 90%;
  height: 24px;
  font-family: Poppins;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #58606e;
  margin-bottom: 54px;
`;
