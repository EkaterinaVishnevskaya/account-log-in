import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { ReactNode } from 'react';
import "./SimpleLayout.css"

export interface ISimpleLayoutProps {
    header: ReactNode,
    footer?: ReactNode,
    children?: ReactNode
}

export function SimpleLayout(props: ISimpleLayoutProps) { 
    const {header: title, children, footer} = props;
    return(
    <Layout>
        <Header className='header'>{title}</Header>
        <Content className='content'>{children}</Content>
        <Footer className='footer'>{footer}</Footer>
    </Layout>
)}

export default SimpleLayout