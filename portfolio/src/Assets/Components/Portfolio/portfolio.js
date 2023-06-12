import React from "react";

function Portfolio() {
  return (
    <div>
      <header>
        <h1>jamie charlemagne</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sLTh1ajcuNW1CbyTLF7nqIYJLX4rVzkT1A&usqp=CAU"
          alt="developer photo."
        />
        <nav>
          <a href="#about">About me</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About</h2>
          <p>
            Hello! I am an upcoming developer with a lot to contribute to your company. My guilty pleasure is Danganronpa
            and playing video games in my free time. If you want to know anything else about me, feel free to ask!
          </p>
        </section>
        <section id="work">
          <h2>Work</h2>

          <div className="application">
            <p className="title">Express Note Taker</p>
            <a
              href="https://github.com/jamiec1077/express-note-taker"
              target="_blank"
              rel="noopener noreferrer"
              title="Express Note Taker"
            ></a>
            <p className="description">
              A web application for taking and organizing notes built using Express.js.
            </p>
            <a
              href="https://express-note-taker-jamie.herokuapp.com/notes"
              target="_blank"
              rel="noopener noreferrer"
              className="view-button"
            >
              Click here to view
            </a>
          </div>

          {/* Add the remaining work applications using the same structure */}
          
        </section>
        <section id="contact">
          <h3>Contact</h3>
          <p>
            <span>###: 678-618-5865 Email: jamie.charlemagne1992@gmail.com</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
