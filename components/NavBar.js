import Link from 'next/link';

const NavBar = () => {
    return (  
        <nav>
            <div className="logo">
                <h1>Ninja list</h1>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/ninjas"><a>Ninja listing</a></Link>
            </div>
        </nav>
    );
}
 
export default NavBar;