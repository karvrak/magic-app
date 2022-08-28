import {  Link } from "react-router-dom";

export function Home() {
    return (
      <>
        <main>
          <p>home page.</p>
        </main>
        <nav>
          <Link to="/about">About</Link><br/>
          <Link to="/Browse">Browse</Link><br/>
          <Link to="/add-items">AddItems</Link><br/>
          <Link to="/Overview/1">ov/1</Link>
        </nav>
      </>
    );
  }
