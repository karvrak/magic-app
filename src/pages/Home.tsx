import {  Link } from "react-router-dom";

function Home() {
    return (
      <>
        <main>
          <p>home page.</p>
        </main>
        <nav>
          <Link to="/about">About</Link><br/>
          <Link to="/Browse">Browse</Link>
        </nav>
      </>
    );
  }

  export default Home;