import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

interface ISectionTitleProps {
  image?: string;
  title: string;
  description?: string;
}

const SectionTitle: FC<ISectionTitleProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-center space-y-4 lg:space-y-6 w-full items-center"
      )}
    >
      {image && (
        <div className="flex items-center">
          <Image src={image} alt={title} width={550} height={550} />
        </div>
      )}
      <div
        className={clsx(
          "font-bold text-2xl leading-normal md:text-4xl md:leading-normal lg:text-[56px] lg:leading-snug text-text-default uppercase py-2 text-center"
        )}
      >
        {title}
      </div>
      {description && (
        <div
          className={clsx(
            "text-lg text-text-dark lg:w-[650px] lg:text-xl leading-loose text-center mx-8 lg:mx-24 whitespace-pre-line	"
          )}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
