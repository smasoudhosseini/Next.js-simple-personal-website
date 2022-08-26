const PublicationAward = () => {
  return (
    <div>
      <section className="resume-section" id="pawards">
        <div className="resume-section-content">
          <h2 className="mb-5">PUBLICATIONS & Awards</h2>
          <ul className="fa-ul mb-0">
            <li>
              <span className="fa-li">
                <i className="fas fa-trophy text-warning"></i>
              </span>
              Best researcher of MUT in 2018
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-archive text-warning"></i>
              </span>
              <div className="item" style={{ textAlign: "justify" }}>
                Seyedmasoud Hosseini,
                <a href="https://www.researchgate.net/profile/Shahrooz_Janbaz">
                  Shahrooz Janbaz
                </a>
                .
                <b>
                  Hats for thinking: mathematicians' magic tricks with hats.
                </b>
                (<a href="http://mct.iranjournals.ir/article_284.html">here</a>)
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default PublicationAward;
