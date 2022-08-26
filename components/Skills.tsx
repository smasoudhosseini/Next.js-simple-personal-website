const Skills = () => {
  return (
    <div>
      <section className="resume-section" id="skills">
        <section className="skills-section section">
          <h2 className="section-title">
            <span className="icon-holder"></span>Programming Skills
          </h2>
          <div className="skillset">
            {/* <!--//item--> */}
            <br />
            <div className="item">
              <h3 className="level-title">Back End:</h3>
              <h4 className="level-title">
                PHP &amp; Laravel &amp; Python &amp; Django
              </h4>
              <div className="pr level-bar">
                <div
                  className="pr-bar theme-pr-bar"
                  style={{ width: "95%" }}
                  aria-valuenow = {95}
                aria-valuemin = {0}
                  aria-valuemax= {100}
                ></div>
              </div>
            </div>

            {/* <!--//item--> */}
            <br />
            <div className="item">
              <h3 className="level-title">Front End:</h3>
              <h4 className="level-title">
                REACT &amp; HTML &amp; CSS &amp; JavaScript
              </h4>
              <div className="pr level-bar">
                <div
                  className="pr-bar theme-pr-bar"
                  style={{ width: "95%" }}
                  aria-valuenow={95}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>

            {/* <!--//item--> */}
            <br />
            <div className="item">
              <h3 className="level-title">Cryptography:</h3>
              <h4 className="level-title">Python &amp; SageMath &amp; MAGMA</h4>
              <div className="pr level-bar">
                <div
                  className="pr-bar theme-pr-bar"
                  style={{ width: "85%" }}
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>

            {/* <!--//item--> */}
            <br />
            <div className="item">
              <h3 className="level-title">Data Analysis:</h3>
              <h4 className="level-title">Python &amp; R</h4>
              <div className="pr level-bar">
                <div
                  className="pr-bar theme-pr-bar"
                  style={{ width: "80%" }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--//skills-section--> */}
      </section>
    </div>
  );
};
export default Skills;
