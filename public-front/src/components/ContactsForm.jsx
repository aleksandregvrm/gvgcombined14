import { useState } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {
  faEnvelope,
  faUser,
  faPenToSquare,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sendMessage } from "../features/user/userSlice";
import { handleChange } from "../utils";
import CustomInput from './CustomInput';

/* contacts form which utilises icons next to the input which is not the classical method, because the template was written in tailwind.css. form itself sends message of the user to the email */
const initialState = {
  name:'',
  email:'',
  message:'',
}
const ContactsForm = () => {
  const {english} = useSelector((store)=>store.menu);
  const dispatch = useDispatch();
  const [values,setProductValues] = useState(initialState);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(sendMessage({fullName:values.name,email:values.email,message:values.message}))
    setProductValues(initialState)
  }
  return (
    <div className="contact-form-container">
      <div>
        <form className="contact-form" onSubmit={submitHandler}>
          <h3>{!english ? "მოგვწერეთ" : "Send us a message"}</h3>
          {/* inputs */}
          <div className="input-container">
            <label htmlFor="fullname">
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input
              className="contact-input"
              type="text"
              placeholder={!english ? "სახელი" : "Full name"}
              id="fullname"
              name="name"
              required
              onChange={(e) => handleChange({ setProductValues, e })}
              value={values.name}
            />
          </div>
          <div className="input-container">
            <label htmlFor="contact-email">
              <FontAwesomeIcon icon={faEnvelope} />
            </label>
            <input
              className="contact-input"
              type="email"
              name="email"
              placeholder={!english ? "მეილი" : "Email"}
              id="contact-email"
              required
              onChange={(e) => handleChange({ setProductValues, e })}
              value={values.email}
            />
          </div>
          {/* inputs end */}
          {/* text area */}
          <div className="textarea-container">
            <label htmlFor="textarea">
              <FontAwesomeIcon icon={faPenToSquare} />
            </label>
            <textarea
              id="textarea"
              cols="25"
              rows="10"
              placeholder={!english ? "მესიჯი..." : "Message..."}
              name="message"
              required
              onChange={(e) => handleChange({ setProductValues, e })}
              value={values.message}
            ></textarea>
          </div>
          {/* text area */}
          <button type="submit" className="btn submit-btn">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactsForm;
