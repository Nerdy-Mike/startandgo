import React from "react";

import ProjectCard from "@/components/Cards/ProjectCard";
import SectionTitle from "@/components/common/SectionTitle";
import MainContainer from "@/components/Containers/MainContainer";

const PortfolioPage = () => {
  return (
    <div className="flex flex-col">
      <MainContainer>
        <SectionTitle
          title="Portfolio"
          image="/assets/images/portfolio/portfolio1.jpg"
          description={`Revealing the synergy between our business aspirations and groundbreaking technological advancements: \n Introducing our remarkable accomplishments.`}
        />
      </MainContainer>
      <MainContainer>
        <div className="flex flex-row pb-10">
          <div className="h-8 pr-3 py-2 flex-col justify-center items-center inline-flex">
            <div className="text-center text-gray-700 text-base font-semibold leading-normal">
              All
            </div>
          </div>
          <div className="h-8 px-3 py-2 flex-col justify-center items-center inline-flex">
            <div className="text-center text-gray-700 text-base font-semibold leading-normal">
              Web-App
            </div>
          </div>
          <div className="h-8 px-3 py-2 flex-col justify-center items-center inline-flex">
            <div className="text-center text-gray-700 text-base font-semibold leading-normal">
              App
            </div>
          </div>
          <div className="h-8 px-3 py-2 flex-col justify-center items-center inline-flex">
            <div className="text-center text-gray-700 text-base font-semibold leading-normal">
              E-commerce & public websites
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-16">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </MainContainer>
    </div>
  );
};

export default PortfolioPage;
