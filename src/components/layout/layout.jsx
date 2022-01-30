import PropTypes from 'prop-types';
import Footer from '../footer/footer';
import styled from 'styled-components';


function Layout(props) {
  const {children} = props;

  const LayoutStyle = styled.div`
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
    z-index: 200;
    position: relative;
  `;

  return (
    <LayoutStyle className="layout">
      {children}
      <Footer />
    </LayoutStyle>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
