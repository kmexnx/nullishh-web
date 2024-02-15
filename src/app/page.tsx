import Image from "next/image";

export default function Home() {
  const dataSolutions = [
    {
      title: "Data Engineering",
      description: "We provide data engineering services to help you build a robust data infrastructure that can scale with your business.",
      image: "data-engineering.svg",
    },
    {
      title: "Data Science",
      description: "We help you build machine learning models that can provide valuable insights and predictions for your business.",
      image: "data-science.svg",
    },
    {
      title: "Data Analytics",
      description: "We help you build dashboards and reports that can provide actionable insights for your business.",
      image: "data-analytics.svg",
    },
  ];
    

  return (
    <main className="flex flex-col items-center justify-between space-y-6 p-5">
      <div className="
        relative 
        flex 
        place-items-center 
        before:absolute before:h-[300px] 
        before:w-full sm:before:w-[480px] 
        before:-translate-x-1/2 
        before:rounded-full 
        before:bg-gradient-radial 
        before:from-white 
        before:to-transparent 
        before:blur-2xl 
        before:content-[''] 
        after:absolute 
        after:-z-20 
        after:h-[180px] 
        after:w-full 
        sm:after:w-[240px] 
        after:translate-x-1/3 
        after:bg-gradient-conic 
        after:from-sky-200 
        after:via-blue-200 
        after:blur-2xl 
        after:content-[''] 
        before:dark:bg-gradient-to-br
        before:dark:from-transparent 
        before:dark:to-blue-700 before:dark:opacity-10 
        after:dark:from-sky-900 after:dark:via-[#0141f] 
        after:dark:opacity-40 
        before:lg:h-[360px] 
        z-[-1]">
        <Image
          src="/imageedit_1_4323218192.png"
          alt="NulliShh"
          width={180}
          height={37}
        />
     </div>

      <div className="flex flex-col items-center justify-center space-y-6">
        <h5 className="text-1xl font-bold text-center">
          Data Solutions for Your Business
        </h5>
        <p className="text-xs text-center">
          We provide modern data solutions to help you unlock the potential of
          your data.
        </p>
      </div>
    </main>
  );
}
