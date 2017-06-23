import React, {PropTypes} from 'react'

import {Layout, Header, Footer, FooterSection, FooterLinkList} from 'react-mdl';


const MainLayout = ({children}) =>(

        <Layout fixedHeader>
            <Header style={{ color: 'white' }}  title="SUPER BLOG"/>
            {children}
            <Footer size="mini">
                <FooterSection type="left" logo="Title">
                    <FooterLinkList>
                        <a href="#">Help</a>
                        <a href="#">Privacy  Terms</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
        </Layout>

);


MainLayout.propTypes = {
    children: PropTypes.node
};

export default MainLayout


