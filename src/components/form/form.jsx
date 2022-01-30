import styled from 'styled-components';

const FormStyle = styled.form`
  width: 557px;
  margin-left: 150px;

  .form__input {
    display: block;
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 45px;
    padding-right: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    font-family: 'Apercu Arabic Pro', 'Arial', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #2D2D2D;
    font-size: 18px;
    line-height: 32px;

    &--last {
      margin-bottom: 25px;
    }
  }

  .form__submit {
    width: 218px;
    color: #fff;
    letter-spacing: 1px;
    padding-top: 27px;
    padding-bottom: 27px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    background: #FAD34F;
    border-radius: 500px;
    border: none;
    font-size: 18px;
    line-height: 18px;

    &:hover {
      background-color: #f2c737;
    }
  }

  textarea {
    resize: none;
    min-height: 189px;
  }

  .form__input::placeholder,
  textarea::placeholder {
    color: #2D2D2D;
    font-size: 18px;
    line-height: 32px;
  }
`;

function Form() {
  return (
    <FormStyle>
      <input
        className="form__input"
        type="text"
        placeholder="Your name*"
      />
      <input
        className="form__input"
        type="email"
        name="email"
        placeholder="Your e-mail*"
        required
      />
      <textarea
        className="form__input form__input--last"
        placeholder="Your message*"
      />
      <button
        className="form__submit"
        type="submit"
        id="login-button"
      >Send message</button>
    </FormStyle>
  );
}

export default Form;
