import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "./Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div className="container-md mx-auto px-36">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}
