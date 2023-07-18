import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="container-md mx-auto px-36 pt-32">
        <Header />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
