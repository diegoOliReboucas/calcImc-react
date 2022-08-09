import styled from 'styled-components'

export const Main = styled.div`
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 50px;
`;

export const Header = styled.header`
  @media (max-width: 770px){
    padding: 0 20px;
  }
`;

export const headerContainer = styled.div`
  max-width: 900px;
  margin: 40px auto;
`;

export const Container = styled.div`
  display: flex;
  max-width: 900px;
  margin: auto;
  gap: 80px;

  @media (max-width: 770px){
    padding: 0 20px;
    flex-direction: column;
    gap: 50px
  }
`;

export const leftSide = styled.div`
  flex: 1;

  h1{
    margin: 0;
    font-size: 40px;
    color: #3a4b5c;
  }

  p{
    font-size: 1rem;
    margin-bottom: 40px;
    color: #6a7b8b;
  }

  button{
    background-color: #227C9D;
    color: #fff;
    font-size: 15px;
    border: 0;
    border-radius: 10px;
    padding: 15px 0;
    width: 100%;
    cursor: pointer;
    margin-top: 40px;
    transition: all ease .3s;

    &:hover{
      opacity: .8;
    }

    &:disabled{
    opacity: .5;
  }
  }
`;

export const rightSide = styled.div`
  flex: 1;
  display: flex;
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 430px){
    grid-template-columns: 1fr;
  }
`;

export const rightBig = styled.div`
  flex: 1;
  display: flex;
  
  .rightArrow{
    position: absolute;
    background-color: #227c9d;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: -35px;
    margin-top: 145px;
    transition: all ease .3s;

    &:hover{
      opacity: .9;
    }

    @media (max-width: 770px){
    margin-left: 0;
    margin-top: 0;
    border-radius: 10px;
  }
  }
`;