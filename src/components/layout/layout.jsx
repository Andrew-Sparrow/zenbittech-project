import PropTypes from 'prop-types';
import Footer from '../footer/footer';

function Layout(props) {
  const {children} = props;

  return (
    <div>
      {children}
      <Footer/>
    </ div>
  );
}

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
