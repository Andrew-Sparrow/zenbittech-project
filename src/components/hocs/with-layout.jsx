import Layout from '../layout/layout';
import styled from 'styled-components';

function withLayout(Component, className) {
  const LayoutStyle = styled.div`
    width: 1440px;
    margin-left: auto;
    margin-right: auto;
  `;

  return function wrapper(props) {
    return (
      <LayoutStyle className={className}>
        <Layout>
          <Component {...props} />
        </Layout>
      </LayoutStyle>
    );
  };
}

withLayout.displayName = 'withLayout';

export default withLayout;
