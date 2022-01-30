import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FooterSTyle = styled.footer`
    background-color: orange;
    min-height: 200px;
`;

function Footer() {
  return (
    <FooterSTyle>
      <Link to="https://www.linkedin.com">
        <svg className="place-card__bookmark-icon" width="13" height="13">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
      </Link>
    </FooterSTyle>
  );
}

export default Footer;
