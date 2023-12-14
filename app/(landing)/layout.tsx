import Navbar from "@/components/navbar";
import LandingNavbar from "@/components/landingNavbar";


const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen w-screen bg-[#111827] overflow-x-auto text-white">
      <div className="h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
