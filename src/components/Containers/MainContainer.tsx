import clsx from "clsx";
import React, { FC, Suspense } from "react";

import Loading from "@/components/common/Loading";

interface IAnimalsIntroProps {
  background?: string;
  className?: string;
  children: React.ReactNode;
}

const MainContainer: FC<IAnimalsIntroProps> = ({
  background,
  children,
  className,
}: IAnimalsIntroProps) => {
  return (
    <Suspense fallback={<Loading />}>
      {background && (
        <section
          className={clsx(
            "bg-cover bg-no-repeat h-full flex flex-col justify-start items-center mt-[-30px] px-10 lg:px-0",
            className
          )}
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="flex flex-col items-center justify-center lg:max-w-7xl space-y-14 lg:space-y-20  pb-24 lg:pb-32 pt-20 max-w-2xl md:max-w-4xl">
            {children}
          </div>
        </section>
      )}
      {!background && (
        <section
          className={clsx(
            "flex flex-col items-center justify-center py-14 bg-white px-10 lg:px-0",
            className
          )}
        >
          <div className="max-w-7xl">{children}</div>
        </section>
      )}
    </Suspense>
  );
};

export default MainContainer;
