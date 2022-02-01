import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FooterStyle = styled.footer`
    min-height: 200px;
    border-top: 1px solid #D8D8D8;
    background-image: url("../img/footer-balloons.svg");
    background-position: top -40px right 0;
    background-repeat: no-repeat;
    background-color: #FAFAFA;
    box-sizing: border-box;

    .icons {
      padding-top: 70px;
      margin-left: 280px;
      margin-top: 0;
      margin-bottom: 0;
      list-style: none;
      display: flex;

      &__item {
        margin-right: 20px;
        cursor: pointer;
      }
    }
`;

function Footer() {
  return (
    <FooterStyle>
      <ul className="icons">
        <li className="icons__item">
          <Link to="https://www.linkedin.com">
            <svg width="13" height="13">
              <use xlinkHref="#linkedin"></use>
            </svg>
          </Link>
        </li>
        <li className="icons__item">
          <Link to="https://twitter.com">
            <svg width="16" height="13">
              <use xlinkHref="#twitter"></use>
            </svg>
          </Link>
        </li>
        <li className="icons__item">
          <Link to="https://www.facebook.com">
            <svg width="8" height="16">
              <use xlinkHref="#facebook"></use>
            </svg>
          </Link>
        </li>
        <li className="icons__item">
          <Link to="https://www.pinterest.com">
            <svg width="13" height="13">
              <use xlinkHref="#pinterest"></use>
            </svg>
          </Link>
        </li>
      </ul>
    </FooterStyle>
  );
}

export default Footer;
