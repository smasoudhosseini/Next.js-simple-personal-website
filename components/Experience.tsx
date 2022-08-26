const Experience = () => {
  return (
    <>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Cryptography and Security Expert</h3>
              <div className="subheading mb-3">ICT</div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-p">2022 - Present</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">
                <a href="http://math.sharif.ir/staff/">
                  Assistant Site Manager
                </a>
              </h3>
              <div className="subheading mb-3">
                <a href="http://www.en.sharif.edu/">
                  Sharif University of Technology(SUT)
                </a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-p">2019 - 2022</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">Cryptography and Security Expert</h3>
              <div className="subheading mb-3">MUT</div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-p">2016 - 2019</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Experience;
