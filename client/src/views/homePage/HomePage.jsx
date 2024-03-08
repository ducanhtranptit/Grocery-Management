import Header from "../../components/header/Header";
import logo from '../../assets/images/homepage.jpg'

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container-fluid mx-0 px-0">
        <img src={logo} alt="" width="100%" className="cus-logo"/>
      </div>
    </>
  );
};

export default HomePage;
