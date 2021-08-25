import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 60px;
  color: #FFF;
  font-weight: 700;
  border: none;
  background: #E02041;
  border-radius: 8px;
  display: inline-block;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  text-align: center;
  text-decoration: none;
  margin-top: 16px;
  transition: background 0.1s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }
`;
