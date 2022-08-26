const Education = () => {
  return (
    <>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">
                <a href="http://www.en.sharif.edu/">
                  Sharif University of Technology
                </a>
              </h3>
              <div className="subheading mb-3">
                <a href="http://math.sharif.ir/">BSc in Mathematics</a>
              </div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-p">2012 - 2016</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0">MUT</h3>
              <div className="subheading mb-3">MSc in Cryptography</div>
            </div>
            <div className="flex-shrink-0">
              <span className="text-p">2016 - 2018</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Education;
