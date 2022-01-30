import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FooterSTyle = styled.footer`
    background-color: orange;
    min-height: 200px;

    .icons {
      padding-top: 80px;
      margin-left: 200px;
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
    <FooterSTyle>
      <ul class="icons">
        <li class="icons__item">
          <Link to="https://www.linkedin.com">
            <svg width="13" height="13">
              <use xlinkHref="#linkedin"></use>
            </svg>
          </Link>
        </li>
        <li class="icons__item">
          <Link to="https://twitter.com">
            <svg width="16" height="13">
              <use xlinkHref="#twitter"></use>
            </svg>
          </Link>
        </li>
        <li class="icons__item">
          <Link to="https://www.facebook.com">
            <svg width="8" height="16">
              <use xlinkHref="#facebook"></use>
            </svg>
          </Link>
        </li>
        <li class="icons__item">
          <Link to="https://www.pinterest.com">
            <svg width="13" height="13">
              <use xlinkHref="#pinterest"></use>
            </svg>
          </Link>
        </li>
      </ul>
    </FooterSTyle>
  );
}

export default Footer;
