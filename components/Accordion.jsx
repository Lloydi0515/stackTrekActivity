import "./Home.css";

const Accordion = () => {
  return (
    <>
      <section
        id="questions"
        className="m-5"
        data-aos=""
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <h2 className="text-center mb-4 text-primary">About The App</h2>
        <div className="accordion accordion-flush" id="questions" />
        {/* <!-- Item 1 --> */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-one"
              aria-expanded="false"
            >
              What is SleepEarn?
            </button>
          </h2>
          <div
            id="question-one"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#questions"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quia nihil dignissimos? Odio velit quisquam soluta cumque rem
              facere! Consequuntur maiores dolores saepe consequatur quidem
              natus ut nam voluptas illo.
            </div>
          </div>
        </div>
        {/* <!-- Item 2 --> */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-two"
              aria-expanded="false"
            >
              How It Works?
            </button>
          </h2>
          <div
            id="question-two"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#questions"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quia nihil dignissimos? Odio velit quisquam soluta cumque rem
              facere! Consequuntur maiores dolores saepe consequatur quidem
              natus ut nam voluptas illo.
            </div>
          </div>
        </div>
        {/* <!-- Item 3 --> */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-three"
              aria-expanded="false"
            >
              What Will I Earn?
            </button>
          </h2>
          <div
            id="question-three"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#questions"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quia nihil dignissimos? Odio velit quisquam soluta cumque rem
              facere! Consequuntur maiores dolores saepe consequatur quidem
              natus ut nam voluptas illo.
            </div>
          </div>
        </div>
        {/* <!-- Item 4 --> */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-four"
              aria-expanded="false"
            >
              Is There a Payment?
            </button>
          </h2>
          <div
            id="question-four"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#questions"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quia nihil dignissimos? Odio velit quisquam soluta cumque rem
              facere! Consequuntur maiores dolores saepe consequatur quidem
              natus ut nam voluptas illo.
            </div>
          </div>
        </div>
        {/* <!-- Item 5 --> */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#question-five"
              aria-expanded="false"
            >
              What Are The Requirements?
            </button>
          </h2>
          <div
            id="question-five"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#questions"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quia nihil dignissimos? Odio velit quisquam soluta cumque rem
              facere! Consequuntur maiores dolores saepe consequatur quidem
              natus ut nam voluptas illo.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accordion;
