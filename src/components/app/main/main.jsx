import styled from 'styled-components';
import Form from '../../form/form';

const MainStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Main() {
  return (
    <MainStyle>
      <h1>Feedback Form</h1>
      <Form />
    </MainStyle>
  );
}

export default Main;
