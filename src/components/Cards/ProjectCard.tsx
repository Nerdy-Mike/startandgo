import Image from "next/image";
import React from "react";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <Link
      href="/"
      className=" bg-white border border-gray-100 rounded-2xl hover:opacity-70 shadow-lg"
    >
      <div className="relative pb-80 lg:pb-96 overflow-hidden rounded-t-lg">
        <Image
          className="absolute inset-0 object-cover w-full h-full"
          src={
            "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="Article"
          layout="fill"
        />
      </div>
      <div className="p-5">
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          Bizman
        </p>
        <p className="mb-3 font-normal text-gray-700 ">
          A platform to create and manage referral from doctor and sleep study
          of the clinic.
        </p>
        <div className="flex justify-start gap-x-2 items-center py-2 text-base font-medium text-center text-accent-default rounded-lg  ">
          View more
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 12H20.25"
              stroke="#0B63E5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5 5.25L20.25 12L13.5 18.75"
              stroke="#0B63E5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
