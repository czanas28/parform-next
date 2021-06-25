import Banner from './Banner';

const Layout = (props) => {
    return <div><Banner /><div className="mt-2">{props.children}</div></div>
}

export default Layout;