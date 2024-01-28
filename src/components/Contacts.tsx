import "../style/Contacts.css";
export const Contacts = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="text-contact">Contact</h2>
          <p>Looking forward to hearing from you</p>

          <h3>Phone</h3>

          <a href="tel:+1234567890">+1 (234) 567-890</a>

          <h3>Email</h3>
          <a href="mailto:info@mysite.com">info@mysite.com</a>
        </div>
        <div>
          <p>First Name</p>
          <input type="text" />
          <p>Last Name</p>
          <input type="text" />
          <p>Message</p>
          <input type="text" />
          <button className="custom-button button">Submit</button>
        </div>
      </div>
    </>
  );
};
