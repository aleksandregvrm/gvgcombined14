import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { getAllSubscribedEmails } from "../features/ad-controls/adminSlice";
import { toastStyles } from "../utils";

const GetAllEmails = () => {
  const dispatch = useDispatch();
  const { subscribedEmails, isLoading } = useSelector((store) => store.admin);
  if(isLoading){
    return <section className="all-emails">
        <Loading/>
    </section>
  }
  const { emails,subscriptionCount } = subscribedEmails;

  const handleCopyClick = () => {
    const emailsString = emails.map((email) => email).join(", ");
    navigator.clipboard
      .writeText(emailsString)
      .then(() => {
        toastStyles(true,'Emails copied');
      })
      .catch((err) => {
        console.error("Error copying to clipboard:", err);
      });
  };
  return (
    <section className="all-emails">
      <div className="emails-container">
        <button
          className="btn"
          onClick={() => {
            dispatch(getAllSubscribedEmails());
          }}
        >
          Generate Emails
        </button>
        <p
          className="emails-info"
          onClick={handleCopyClick}
        >
          {emails.map((email) => email).join(", ")}
        </p>
        <h4>Total Subscriptions : {subscriptionCount}</h4>
      </div>
    </section>
  );
};
export default GetAllEmails;
