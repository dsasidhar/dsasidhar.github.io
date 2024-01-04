import About from "@/components/About";
import { AboveFold } from "@/components/AboveFold";
import Navbar from "@/components/Navbar";
import Technologies from "@/components/Technologies";

export default function Index() {
  return (
    <div className="relative z-0">
      <div>
        <Navbar />
        <AboveFold />
      </div>
      <div className="bg-about bg-cover bg-center bg-no-repeat">
        <About />
      </div>
      <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
        <Technologies />
      </div>
    </div>
  );
}
