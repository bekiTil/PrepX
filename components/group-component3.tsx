import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type GroupComponent3Type = {
  /** Style props */
  propTop?: Property.Top;
  propLeft?: Property.Left;
};

const GroupComponent3: NextPage<GroupComponent3Type> = ({
  propTop,
  propLeft,
}) => {
  const groupDiv3Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[796px] left-[186px] w-[505.56px] h-[191px] text-left text-xl text-black font-inter"
      style={groupDiv3Style}
    >
      <div className="absolute top-[0px] left-[0px] w-[505.56px] h-[191px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-m3-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[505.56px] h-[191px]" />
        <div className="absolute top-[141px] left-[36px] text-mini inline-block w-[82px] h-[18px]">
          Cardiology
        </div>
        <b className="absolute top-[24px] left-[37px] inline-block text-darkgray-100 w-[93px] h-6">
          Biology
        </b>
        <div className="absolute top-[59px] left-[36.23px] text-gray-300 inline-block w-[423.83px] h-[72px]">
          Pacemakers is an electronic device used to pace the heart when the
          normal conduction pathway is damaged or diseased.
        </div>
      </div>
    </div>
  );
};

export default GroupComponent3;
