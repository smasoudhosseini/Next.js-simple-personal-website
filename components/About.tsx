const About = () => {
  return (
    <>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            Seyedmasoud
            <span className="text-p">Hosseini</span>
          </h1>
          <div className="subheading">
            Cryptography and Security Expert
            <a href="mailto:smasoudhosseini@alum.sharif.edu">
              smasoudhosseini@alum.sharif.edu
            </a>
          </div>
          <p className="lead">
            <b>Cryptography</b> is the main topic that I have finished my
            master's degree in this field at MUT. I received my BSc degree in
            Mathematics from
            <a href="http://www.en.sharif.edu/">
              Sharif University of Technology
            </a>
            , Tehran, Iran. My thesis project is "Study of Algebraic Attacks on
            Lightweight Block Cipher" under the supervision of
            <a href="https://scholar.google.com/citations?hl=en&user=ULDUOj8AAAAJ&view_op=list_works&sortby=pubdate">
              Dr. Mahdi Sajadieh
            </a>
            . In my master thesis, Analysis of various lightweight block
            ciphers, such as CTC, Present and PRIDE, then implement these
            ciphers with Python in SageMath and use other software like MAGMA
            and MiniSat(SAT-Solver) to compare the implementation, are the main
            purpose. Finally, this dissertation proposes a better algebraic
            attack with Gröbner bases and these results.
          </p>
          <div className="social-icons">
            <a
              className="social-icon"
              href="https://linkedin.com/in/seyedmasoud-hosseini"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="social-icon"
              href="https://github.com/smasoudhosseini"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-icon"
              href="https://twitter.com/smasoudhosseini"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="social-icon"
              href="https://instagram.com/s.masoud.hosseini"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
