import MultipleOptionComp from "@/components/MultipleOptionComp";
import DashImageComp from "@/components/dashImageComp";
import DashboardGetStart from "@/components/dashboardGetStart";
import ToolContainer from "@/components/toolContainer";

const page = () => {
  return (
    <div className="w-full flex min-h-screen flex-col items-center my-16 z-[-5]">
      <div className="w-full flex flex-col justify-center items-center gap-20 mb-24">
        <DashboardGetStart />
        <DashImageComp />
        <MultipleOptionComp />
        <ToolContainer/>
      </div>
    </div>
  );
};

export default page;
