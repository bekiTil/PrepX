import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type GroupComponent2Type = {
  passportID?: string;
  iconCloudUpload?: string;

  /** Style props */
  propTop?: Property.Top;
  propWidth?: Property.Width;
  propTop1?: Property.Top;
  propBottom?: Property.Bottom;
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({
  passportID,
  iconCloudUpload,
  propTop,
  propWidth,
  propTop1,
  propBottom,
}) => {
  const groupDiv1Style: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const passportIDStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const iconCloudUploadStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop1,
      bottom: propBottom,
    };
  }, [propTop1, propBottom]);

  return (
    <div
      className="absolute top-[1005px] left-[503px] w-[433.62px] h-[65.65px] text-left text-xl text-darkgray-200 font-inter"
      style={groupDiv1Style}
    >
      <div className="absolute top-[0px] left-[0px] w-[433.62px] h-[65.65px]">
        <div className="absolute top-[0px] left-[0px] box-border w-[433.62px] h-[65.65px] border-[1px] border-solid border-silver" />
        <div
          className="absolute top-[22px] left-[182.29px] inline-block w-[171.24px] h-6"
          style={passportIDStyle}
        >
          {passportID}
        </div>
      </div>
      <img
        className="absolute h-[52.57%] w-[12.08%] top-[35.91%] right-[68.16%] bottom-[11.52%] left-[19.76%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={iconCloudUpload}
        style={iconCloudUploadStyle}
      />
    </div>
  );
};

export default GroupComponent2;
