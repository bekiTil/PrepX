import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type FrameComponentType = {
  /** Style props */
  eTBTop?: Property.Top;
};

const FrameComponent: NextPage<FrameComponentType> = ({ eTBTop }) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      top: eTBTop,
    };
  }, [eTBTop]);

  return (
    <div
      className="absolute top-[178px] left-[150px] rounded-3xs bg-m3-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1137px] h-[109px] text-left text-xl text-darkgray-100 font-inter"
      style={frameDivStyle}
    >
      <div className="absolute top-[42px] left-[40px] w-[1068px] h-[25px]">
        <b className="absolute top-[0px] left-[981.57px] inline-block w-[86.43px] h-[25px]">
          March 23
        </b>
        <b className="absolute top-[0px] left-[443.6px] inline-block w-[203.72px] h-[25px]">
          Math
        </b>
        <b className="absolute top-[0px] left-[794.61px] inline-block text-gray-400 w-[119.06px] h-[25px]">
          50 ETB
        </b>
        <b className="absolute top-[0px] left-[0px] inline-block w-[359.82px] h-[25px]">
          Atomic Structure
        </b>
      </div>
    </div>
  );
};

export default FrameComponent;
