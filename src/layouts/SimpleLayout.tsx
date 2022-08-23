import { Layout } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import { ReactNode } from 'react';

export interface ISimpleLayoutProps {
    header: ReactNode,
    footer?: ReactNode,
    children?: ReactNode
}

export function SimpleLayout(props: ISimpleLayoutProps) { 
    const {header: title, children, footer} = props;
    return(
    <Layout>
        <Header>{title}</Header>
        <Content>{children}</Content>
        <Footer>{footer}</Footer>
    </Layout>
)}

export default SimpleLayout