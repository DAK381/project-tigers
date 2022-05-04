import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 60px 50px;
  background: #242424;
  bottom: 0;
  width: 100%;
  margin-top: auto;
  positon: absolute;

   
  @media (max-width: 1000px) {
    padding: 50px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto -20px;
`  
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(250px, 1fr));
  grid-gap: px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 70px;
`;
   

   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
  font-style: normal;
`;
