import PropTypes from 'prop-types';
import Footer from '../footer/footer';

function Layout(props) {
  const {children} = props;

  return (
    <div className="layout">
      {children}
      <Footer/>
    </ div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
