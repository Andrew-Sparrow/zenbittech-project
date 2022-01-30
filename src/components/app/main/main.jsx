import styled from 'styled-components';
import Form from '../../form/form';
import withLayout from '../../hocs/with-layout';

const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  background-image: url('../img/map.png');
  background-repeat: no-repeat;
  background-position: right top;
  min-height: calc(100vh - 200px);

  h1 {
    color: #3E3E3E;
    font-family: 'Apercu Arabic Pro';
    margin-top: 180px;
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

export default withLayout(Main, 'layout');
