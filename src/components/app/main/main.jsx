import styled from 'styled-components';
import Form from '../../form/form';

const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 180px;

  h1 {
    color: #3E3E3E;
    font-family: 'Apercu Arabic Pro';
    font-weight: 400;
    margin-left: 150px;
    margin-bottom: 30px;
    font-size: 40px;
    line-height: 52px;
  }
`;

function Main() {
  return (
    <MainStyle>
      <h1>Reach out to us!</h1>
      <Form />
    </MainStyle>
  );
}

export default Main;
