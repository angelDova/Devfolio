/* eslint-disable react-hooks/rules-of-hooks */
import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) => {
  return emailjs.send(
    "service_b39d0tg",
    "template_79wkd7y",
    { name, email, message },
    "t1XmScqiA9voyzLfH"
  );
};

export default mail;
