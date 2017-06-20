import React, {PropTypes} from 'react'

import {Layout, Header, Footer, Navigation, Drawer, FooterSection, FooterLinkList} from 'react-mdl';


const MainLayout = ({children}) =>{
    <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader>
            <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </Navigation>
            </Drawer>
            <Content />
        </Layout>



        <Footer size="mini">
            <FooterSection type="left" logo="Title">
                <FooterLinkList>
                    <a href="#">Help</a>
                    <a href="#">Privacy & Terms</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>
    </div>


};


MainLayout.propTypes = {
    children: PropTypes.node
};



