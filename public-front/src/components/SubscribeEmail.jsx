import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { subscribeEmail } from "../features/user/userSlice";
import { handleChange } from "../utils";

const SubscribeEmail = () => {
  const {isLoading} = useSelector((store)=>store.user);
  const {english} = useSelector((store)=>store.menu);
    const [userEmail,setProductValues] = useState({email:""});
    const dispatch = useDispatch();
    const emailHandler = (e) => {
      e.preventDefault();
      fbq?.("track", "Purchase", { currency: "USD", value: 30.0 });
      dispatch(subscribeEmail({email:userEmail.email}));
    }
    useEffect(()=>{
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", "298056935934320");
      fbq("track", "PageView");
    })
  return (
    <div className="subscribe">
      <div className="subscribe-container">
        <form>
          <div className="subscribe-text ge">
            <input
              placeholder={!english ? "მეილი" : "Email..."}
              className="subscribe-input"
              type="email"
              required
              name="email"
              id="email"
              onChange={(e)=>handleChange({ setProductValues, e})}
            />
            <label htmlFor="email">
              <FontAwesomeIcon className="letterbox" icon={faEnvelope} />
            </label>
          </div>
          <div className="underline subscribe-underline"></div>
          <button onClick={emailHandler} type="submit" className="btn subscribe-btn" disabled={isLoading}>
            {!english ? 'გამოწერა' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeEmail;
