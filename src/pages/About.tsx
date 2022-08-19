import {  Link } from "react-router-dom";
function About() {
    return (
      <>
        <main>
        <p>About page.</p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }

  export default About;