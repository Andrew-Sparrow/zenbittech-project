import Layout from '../layout/layout';
import styled from 'styled-components';

function withLayout(Component, className) {
  const WrapperStyle = styled.div`
    .wrapper-footer {
      position: relative;
      background-color: #FAFAFA;
      min-height: 200px;
      border-top: 1px solid #D8D8D8;
      margin-top: -201px;
      z-index: 100;
      background-color: #FAD34F;
    }
  `;

  return function wrapper(props) {
    return (
      <WrapperStyle className={className}>
        <Layout>
          <Component {...props} />
        </Layout>
        <div className="wrapper-footer"></div>
      </WrapperStyle>
    );
  };
}

withLayout.displayName = 'withLayout';

export default withLayout;
