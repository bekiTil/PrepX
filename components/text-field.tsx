import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type TextFieldType = {
  inputText?: string;
  labelText?: string;

  /** Style props */
  propTop?: Property.Top;
  propHeight?: Property.Height;
};

const TextField: NextPage<TextFieldType> = ({
  inputText,
  labelText,
  propTop,
  propHeight,
}) => {
  const textFieldStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  return (
    <div
      className="absolute top-[556px] left-[152px] rounded box-border w-[705px] h-[188px] flex flex-col items-start justify-start text-left text-base text-m3-sys-light-on-surface font-m3-label-large border-[2px] border-solid border-m3-sys-light-primary"
      style={textFieldStyle}
    >
      <div className="self-stretch rounded-t rounded-b-none flex flex-row py-2 pr-0 pl-4 items-center justify-start">
        <div className="flex-1 h-10 flex flex-col items-start justify-center relative">
          <div className="flex flex-row items-center justify-start z-[0]">
            <div className="relative tracking-[0.5px] leading-[24px]">
              {inputText}
            </div>
            <img className="relative w-px h-[17px]" alt="" src="/caret.svg" />
          </div>
          <div className="my-0 mx-[!important] absolute top-[-16px] left-[-4px] bg-m3-sys-light-surface flex flex-row py-0 px-1 items-center justify-start z-[1] text-xs text-m3-sys-light-primary">
            <div className="relative leading-[16px]">{labelText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextField;
