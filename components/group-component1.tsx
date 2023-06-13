import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type GroupComponent1Type = {
  questions?: string;
  prop?: string;

  /** Style props */
  propLeft?: Property.Left;
  propWidth?: Property.Width;
  propLeft1?: Property.Left;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  questions,
  prop,
  propLeft,
  propWidth,
  propLeft1,
}) => {
  const groupDiv2Style: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const bStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      left: propLeft1,
    };
  }, [propWidth, propLeft1]);

  return (
    <div
      className="absolute top-[175px] left-[170px] w-[173.34px] h-[130px] text-left text-mini text-gray-200 font-inter"
      style={groupDiv2Style}
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-m3-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[173.34px] h-[103px]" />
      <div className="absolute top-[112px] left-[1.81px] inline-block w-[71.32px] h-[18px]">
        {questions}
      </div>
      <b
        className="absolute top-[22px] left-[39px] text-29xl inline-block text-black w-[94px] h-[58px]"
        style={bStyle}
      >
        {prop}
      </b>
    </div>
  );
};

export default GroupComponent1;
