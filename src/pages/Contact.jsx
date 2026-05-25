import books from "../assets/standy.jpeg";

function Contact() {

  return (

    <div className="contact-page">

      {/* LEFT SIDE */}

      <div className="contact-left">

        <h1>Contact Us</h1>

        <form className="contact-form">

          <div className="name-row">

            <input
              type="text"
              placeholder="First Name"
            />

            <input
              type="text"
              placeholder="Last Name"
            />

          </div>

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Contact Number"
          />

          <textarea
            placeholder="Message For Enquiry"
            rows="6"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

      {/* RIGHT SIDE */}

      <div className="contact-right">

        <img
          src={books}
          alt="Books"
        />

      </div>

    </div>

  );
}

export default Contact;