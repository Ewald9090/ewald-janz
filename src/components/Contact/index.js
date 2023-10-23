import { useForm } from '@formcarry/react';
import { Link } from 'react-router-dom';
import "./Contact.css"

export default function Contact() {
  const { state, submit } = useForm({
    id: '91bFGOms6v',
  });

  if (state.submitted) {
    return (
      <div className="success-message">
        Thank you! We received your submission.
      </div>
    );
  }

  return (
    <>
      <div className="side-nav">
        <Link to="/">
          <span class="material-symbols-outlined">
          arrow_back
          </span>
        </Link>
      </div>
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <br/>
      <form onSubmit={submit} className="contact-form">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" className="input-field" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" className="input-field" />
        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
    </>
  );
}
