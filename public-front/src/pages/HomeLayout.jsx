import { useEffect } from "react";
import { Outlet} from "react-router-dom";
import { Navbar,Footer,Loading,LanguageChange } from "../components";
import { useDispatch,useSelector } from "react-redux";
import { showMe } from "../features/user/userSlice";

const HomeLayout = () => {
  const {isLoading} = useSelector((store)=>store.user);
    const dispatch = useDispatch();
    useEffect(() => {
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
      dispatch(showMe());
    }, []);
    if(isLoading){
      <>
        <Navbar />
        <section className="section-center">
          <Loading/>
        </section>
        <Footer />
      </>;
    }
  return (
    <>
      <Navbar />
      <section className="section-center">
        <LanguageChange/>
        <Outlet />
       </section>
      <Footer/>
    </>
  );
};

export default HomeLayout;
