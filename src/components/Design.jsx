const Design = () => {
  return (
    <div className="container">
      <h1 className="uppercase">Design system</h1>

      <section id="colors" style={{ margin: "4rem 0" }}>
        <h2 className="numbered-title">
          <span>01</span> colors
        </h2>
        <div className="flex">
          <div style={{ flexGrow: 1 }}>
            <div
              className="bg-dark text-white ff-serif fs-500"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </div>
          <div style={{ flexGrow: 1 }}>
            <div
              className="bg-accent text-dark ff-serif fs-500"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #D0D6F9
            </div>
            <p>
              <span className="text-accent">RGB</span> 208, 214, 249
            </p>
            <p>
              <span className="text-accent">HSL</span> 231°, 77%, 90%
            </p>
          </div>
          <div style={{ flexGrow: 1 }}>
            <div
              className="bg-white text-dark ff-serif fs-500"
              style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
            >
              #FFFFFF
            </div>
            <p>
              <span className="text-accent">RGB</span> 255, 255, 255
            </p>
            <p>
              <span className="text-accent">HSL</span> 0°, 0%, 100%
            </p>
          </div>
        </div>
      </section>

      <section id="typography" style={{ margin: "4rem 0" }}>
        <h2 className="numbered-title">
          <span>02 </span>Typography
        </h2>
        <div className="flex">
          <div
            className="flow"
            style={{ flexBasis: "100%", "--flow-space": "3rem" }}
          >
            <div>
              <p className="text-accent">
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p className="fs-900 ff-serif uppercase">Earth</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className="fs-800 ff-serif uppercase">Venus</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
            </div>
            <div>
              <p className="text-accent">
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p className="fs-600 ff-serif uppercase">
                Uranus, Neptune, & Pluto
              </p>
            </div>
            <div>
              <p className="text-accent">
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                Space
              </p>
              <p className="text-accent fs-500 ff-sans-normal uppercase letter-spacing-1">
                So, you want to travel to space
              </p>
            </div>
          </div>

          <div
            className="flow"
            style={{ flexBasis: "100%", "--flow-space": "3rem" }}
          >
            <div>
              <p className="text-accent">
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p className="fs-400 ff-serif uppercase">384,400 km</p>
            </div>
            <div>
              <p className="text-accent">
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p className="fs-200 ff-sans-cond uppercase letter-spacing-3">
                Avg. Distance
              </p>
            </div>
            <div>
              <p className="text-accent">
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p className="fs-300 ff-sans-cond  uppercase letter-spacing-2">
                Europa
              </p>
            </div>
            <div>
              <p className="text-accent">Body Text</p>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
                neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
                libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
                mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Phasellus hendrerit.
                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel,
                dapibus id, mattis vel, nisi.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flow grid" id="interactive-elements">
        <h2 className="numbered-title">
          <span>03</span> Interactive elements
        </h2>

        {/* Navigation */}
        <div>
          <nav>
            <ul className="primary-navigation underline-indicators flex">
              <li className="active">
                <a href="#" className="text-white uppercase letter-spacing-2">
                  <span>01</span> Active
                </a>
              </li>
              <li>
                <a href="#" className="text-white uppercase letter-spacing-2">
                  <span>02</span> Hovered
                </a>
              </li>
              <li>
                <a href="#" className="text-white uppercase letter-spacing-2">
                  <span>03</span> Idle
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex" style={{ "--gap": "8rem" }}>
          <div style={{ marginTop: "5rem" }}>
            {/* Explore Button */}
            <a
              href="#"
              className="large-button uppercase fs-600 ff-serif text-dark bg-white"
            >
              Explore
            </a>
          </div>

          <div
            className="flow"
            style={{ marginBottom: "50vh", "--flow-space": "4em" }}
          >
            {/* Tabs */}
            <div className="underline-indicators flex tab-buttons">
              <button
                aria-selected={true}
                className="text-accent bg-dark ff-sans-cond uppercase letter-spacing-2"
              >
                Moon
              </button>
              <button
                aria-selected={false}
                className="text-accent bg-dark ff-sans-cond uppercase letter-spacing-2"
              >
                Mars
              </button>
              <button
                aria-selected={false}
                className="text-accent bg-dark ff-sans-cond uppercase letter-spacing-2"
              >
                Europa
              </button>
            </div>
            {/* Dots */}
            <div className="dot-indicators flex" style={{ "--gap": "2rem" }}>
              <button aria-selected={true}>
                <span className="sr-only">Slide title</span>
              </button>
              <button aria-selected={false}>
                <span className="sr-only">Slide title</span>
              </button>
              <button aria-selected={false}>
                <span className="sr-only">Slide title</span>
              </button>
            </div>
            {/* Numbers */}
            <div
              className="numbered-indicators grid "
              style={{ "--gap": "2rem" }}
            >
              <button
                aria-selected={true}
                className="text-accent bg-dark ff-serif fs-500"
              >
                1
              </button>
              <button
                aria-selected={false}
                className="text-accent bg-dark ff-serif fs-500"
              >
                2
              </button>
              <button
                aria-selected={false}
                className="text-accent bg-dark ff-serif fs-500"
              >
                3
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design;
