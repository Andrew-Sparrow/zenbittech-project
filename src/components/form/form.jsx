import styled from 'styled-components';

const FormStyle = styled.form`
  width: 300px;

  .form__input {
    display: block;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  .form__submit {
    width: 100%;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    background-color: #3d4aff;
  }
`;

function Form() {
  return (
    <FormStyle>
      <input
        className="form__input"
        type="text"
        placeholder="Name"
      />
      <input
        className="form__input"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <input
        className="form__input"
        type="text"
        placeholder="Message"
      />
      <button
        className="form__submit"
        type="submit"
        id="login-button"
      >Send</button>
    </FormStyle>
  );
}

export default Form;
