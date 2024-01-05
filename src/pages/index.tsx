import About from "@/components/About";
import { AboveFold } from "@/components/AboveFold";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
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

      <div
        className="rounded-br-[150px] rounded-tl-[150px] bg-experience bg-cover 
            bg-center bg-no-repeat"
      >
        <div
          className="rounded-br-[130px] rounded-tl-[150px] bg-experienceLight 
            bg-cover bg-center bg-no-repeat"
        >
          <Experiences />
        </div>
      </div>

      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
}
