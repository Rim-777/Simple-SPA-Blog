import React, {PropTypes} from 'react'
import Link from 'components/ui/Link';

import {rootPath} from 'helpers/routes'

import {Layout, Header, Footer, Navigation, FooterSection, FooterLinkList} from 'react-mdl';


const MainLayout = ({children}) =>(
        <Layout fixedHeader style={{  backgroundColor: 'white' }} >
            <Header title={<Link to='/' style={{ color: 'green'}}> SUPER BLOG </Link>} style={{backgroundColor: 'white'}}>
                <Navigation>
                    {<Link to='/about' style={{ color: 'grey'}}> About </Link>}
                </Navigation>
            </Header>
            {children}
            <Footer size="mini">
                <FooterSection type="left" logo="Title">
                    <FooterLinkList>
                        <a href="#">Help</a>
                        <a href="#">Privacy Terms</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>

        </Layout>
);


MainLayout.propTypes = {
    children: PropTypes.node
};

export  default MainLayout;

