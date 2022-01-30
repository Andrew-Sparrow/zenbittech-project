import styled from 'styled-components';

const FormStyle = styled.form`

`;

function Footer() {
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
      <input
        className="form__input form__input--last"
        type="text"
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

export default Footer;
