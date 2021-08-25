import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 20px;
    margin-left: 24px;
  }

  img {
    height: 64px;
  }

  a {
    width: 100%;
    height: 60px;
    max-width: 260px;
    margin-left: 16px;
    margin-top: 0;
    font-weight: 700;
    border-radius: 10px;
    text-decoration: none;

    background: #E02041;
    color: #FFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    font-weight: 700;
    border-radius: 4px;
    transition: background 0.2s ease-in;

    display: inline-block;
    text-align: center;
    align-items: center;

    p {
      margin-top: 18px;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.primary.light}
    }

    &:active {
      background: ${({ theme }) => theme.colors.primary.dark}
    }
  }

  button {
    height: 60px;
    width: 60px;
    border: 1px solid #DCDCE6;
    background: transparent;
    margin-left: 16px;
    transition: border-color 0.2s;

    &:hover {
      border-color: #999;
    }
  }
`;

export const Cards = styled.div`
  ul {
    display: grid;

    /* Two columns with a flexible size */
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;

    li {
      background: #FFF;
      padding: 24px;
      border-radius: 8px;
      position: relative;

      button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;
        background: transparent;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.8;
        }
      }

      strong {
        display: block;
        margin-top: 16px;
        color: #41414D;
      }

      p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
      }

      p + strong {
        margin-top: 32px;
      }
    }
  }
`;
