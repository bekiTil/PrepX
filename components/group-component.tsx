import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type GroupComponentType = {
  labelText?: string;
  labelText1?: string;

  /** Style props */
  propHeight?: Property.Height;
  propTop?: Property.Top;
  propDisplay?: Property.Display;
  propAlignItems?: Property.AlignItems;
  propWidth?: Property.Width;
  propHeight1?: Property.Height;
};

const GroupComponent: NextPage<GroupComponentType> = ({
  labelText,
  labelText1,
  propHeight,
  propTop,
  propDisplay,
  propAlignItems,
  propWidth,
  propHeight1,
}) => {
  const groupDivStyle: CSS.Properties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const buttonStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const listFromThisStyle: CSS.Properties = useMemo(() => {
    return {
      display: propDisplay,
      alignItems: propAlignItems,
      width: propWidth,
      height: propHeight1,
    };
  }, [propDisplay, propAlignItems, propWidth, propHeight1]);

  return (
    <div
      className="absolute top-[0px] left-[0px] w-[129px] h-[133px] text-center text-sm text-m3-sys-light-primary font-m3-label-large"
      style={groupDivStyle}
    >
      <div className="absolute top-[41px] left-[12px] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
        <div className="bg-m3-state-layers-light-primary-opacity-008 flex flex-row py-2.5 pr-6 pl-4 items-center justify-center">
          <div className="relative tracking-[0.1px] leading-[20px] font-medium">
            {labelText}
          </div>
        </div>
      </div>
      <div
        className="absolute top-[93px] left-[12px] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-m3-sys-light-outline"
        style={buttonStyle}
      >
        <div className="bg-m3-state-layers-light-primary-opacity-008 flex flex-row py-2.5 pr-6 pl-4 items-center justify-center">
          <div className="relative tracking-[0.1px] leading-[20px] font-medium">
            {labelText1}
          </div>
        </div>
      </div>
      <div
        className="absolute top-[0px] left-[0px] tracking-[0.1px] leading-[20px] text-black text-left"
        style={listFromThisStyle}
      >
        List from this author
      </div>
    </div>
  );
};

export default GroupComponent;
