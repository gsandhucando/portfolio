import React, { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  let [message, setMessage] = useState({});
  let [errMessage, setErrMessage] = useState("");
  let [mobile, setMobile] = useState(false);

  let updateDimensions = () => {
    if (window.innerWidth < 635) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  let sendEmail = e => {
    e.preventDefault();
    axios
      .post("/email", message)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Email failed! Try again");
        }
        setErrMessage(response.data);
        setMessage({});
      })
      .catch(err => {
        setErrMessage(err.message);
      });
  };

  return (
    <div className={mobile ? "contact-mobile-container" : "contact-container"}>
      <form
        id="contact"
        className={mobile ? "contact-mobile-form" : "contact-form"}
        onSubmit={sendEmail}
      >
        <input
          onChange={e => setMessage({ ...message, name: e.target.value })}
          className="contact-name"
          type="text"
          value={message.name || ""}
          placeholder="YOUR NAME"
          autoComplete="on"
          required
        />
        <input
          onChange={e => setMessage({ ...message, number: e.target.value })}
          className="contact-phone"
          type="text"
          value={message.number || ""}
          placeholder="YOUR PHONE NUMBER"
          autoComplete="on"
          required
        />
        <input
          onChange={e => setMessage({ ...message, from: e.target.value })}
          className="contact-email"
          type="text"
          value={message.from || ""}
          placeholder="YOUR EMAIL"
          autoComplete="on"
          required
        />
        <textarea
          onChange={e => setMessage({ ...message, text: e.target.value })}
          className="contact-textarea"
          value={message.text || ""}
          placeholder="YOUR MESSAGE"
          required
        />
        <button type="submit" className="contact-btn">
          SUBMIT
        </button>
      </form>
      <div>{errMessage.length > 0 ? <p>{errMessage}</p> : null}</div>
    </div>
  );
};

export default Contact;
