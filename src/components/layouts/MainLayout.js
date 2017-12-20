import React, {PropTypes} from 'react'

import {Layout, Header, Footer, Navigation, FooterSection, FooterLinkList} from 'react-mdl';

const MainLayout = ({children}) =>(

        <Layout fixedHeader style={{  backgroundColor: 'white' }} >
            <Header title={<span><span style={{ color: 'white' }}>Area / </span><strong>The Title</strong></span>}>
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>

                </Navigation>
            </Header>

            {children}

            <Footer size="mini">
                <FooterSection type="left" logo="Title">
                    <FooterLinkList>
                        <a href="#">Help</a>
                        <a href="#">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
        </Layout>

);

MainLayout.propTypes = {
    children: PropTypes.node
};

export  default MainLayout;

