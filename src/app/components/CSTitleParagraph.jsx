import React from "react";

const CSTitleParagraph = ({
  largetitle,
  title,
  paragraph,
  paragraph2,
  paragraph3,
  columns,
}) => {
  return (
    <div className="pb-16">
      <div>
        <h2 className="text-xl font-semibold text-[#B0B0B0] pb-2">{title}</h2>
        <h2 className="text-2xl font-semibold text-[#363636] pb-6">
          {largetitle}
        </h2>
      </div>

      <div>
          <p className="text-[#636363] leading-loose pb-8">{paragraph}</p>
          <p className="text-[#636363] leading-loose pb-8">{paragraph2}</p>
      </div>
    </div>
  );
};

export default CSTitleParagraph;
