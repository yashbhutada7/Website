import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <div className="contentWrapper">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
