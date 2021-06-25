import Link from 'next/link';

const Banner = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand">
                            Administrative Office of the Courts <br />
                            Personnel Action Request Form
                        </a>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Banner;