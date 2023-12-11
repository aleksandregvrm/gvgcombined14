import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {deleteSubscribedEmail} from '../features/ad-controls/adminSlice'
import {handleChange} from '../utils'

const DeleteEmail = () => {
  const dispatch = useDispatch();
  const { subscribedEmails} = useSelector((store) => store.admin);
  const { emails } = subscribedEmails;
  const [productValue, setProductValues] = useState({ email: "" });
  useEffect(() => {
    if (emails.length > 0) {
      setProductValues({ email: emails[0] });
    }
  }, [emails]);
  if (emails.length < 1) {
    return (
      <section className="delete-email">
        <h3>Generate The emails first</h3>
      </section>
    );
  }
  return (
    <section className="delete-email">
      <h2>Delete Email</h2>
      <select
        type="text"
        name="email"
        value={productValue.email}
        onChange={(e) => handleChange({ setProductValues, e })}
        id="email"
      >
        {emails.map((email, index) => (
          <option key={index} value={email}>
            {email}
          </option>
        ))}
      </select>
      <button
        className="btn"
        type="submit"
        onClick={()=>dispatch(deleteSubscribedEmail({email:productValue.email}))}
      >
        Delete
      </button>
    </section>
  );
};
export default DeleteEmail;
