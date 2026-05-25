import books from "../assets/banner.jpeg";

function Home( { setOpenModal }) {

  return (

    <div className="home-page">

      <section className="hero-section">

        {/* LEFT SIDE TEXT */}

        <div className="hero-text">

          <h1>
            Welcome To Millennium Book Store
          </h1>

          <p>
            All School & College Books, Xerox, Printout,
            Spiral Binding, Lamination & Stationery Available Here.
          </p>

          <button
            className="visit-shop-btn"
            onClick={() => setOpenModal(true)}
          >
            Visit Shop
          </button>

        </div>

        {/* RIGHT SIDE IMAGE */}

        <div className="right-image">

          <img
            src={books}
            alt="Millennium Book Store"
          />

        </div>

      </section>

    </div>

  );
}

export default Home;