import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 100%;
  padding: 96px;
  background: '#F0F0F5';
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
    color: #737380;
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

export const GroupForm = styled.form`
    width: 100%;
    max-width: 100%;
    margin-left: 32px;

    input {
      margin-top: 8px;
    }

    .input-group {
      display: flex;

      input + input {
        margin-left: 8px;
      }
    }
`;
