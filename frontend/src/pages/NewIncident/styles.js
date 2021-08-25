import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerContent = styled.div`
  width: 100%;
  padding: 96px;
  background: #F0F0F0;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    margin: 64px 0 32px;
    font-size: 32px;
  }

  p {
    font-size: 18px;
    color: #737373;
    line-height: 32px;
  }

  .back-link {
    display: flex;
    align-items: center;
    margin-top: 32px;
    color: #41414D;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;
  }

  .back-link svg {
    margin-right: 8px;
  }

  .back-link:hover {
    opacity: 0.8;
  }
`;

export const FormGroup = styled.form`
  width: 100%;
  max-width: 450px;
  margin-left: 32px;

  textarea {
    width: 100%;
    min-height: 140px;
    color: #333;
    border: 1px solid #DCDCE6;
    border-radius: 8px;
    padding: 16px 24px;
    resize: vertical;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    outline: none;
  }

  input {
    margin-bottom: 4px;
  }
`;
