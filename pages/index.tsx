import type { NextPage } from "next";

const Frame: NextPage = () => {
  return (
    <div className="relative w-full flex flex-row items-center justify-center text-center text-sm text-m3-sys-light-on-surface-variant font-m3-label-large">
      <div className="relative w-[137px] h-12">
        <div className="absolute top-[calc(50%_-_24px)] left-[0px] w-12 h-12 flex flex-col items-center justify-center">
          <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center">
            <div className="flex flex-row p-2 items-center justify-center">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsnavigate-before.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[4px] left-[48px] flex flex-col items-start justify-start">
          <div className="rounded-81xl overflow-hidden flex flex-row py-2.5 pr-1 pl-2 items-center justify-center gap-[8px]">
            <div className="relative tracking-[0.1px] leading-[20px] font-medium">
              Now
            </div>
            <img
              className="relative w-[18px] h-[18px] hidden"
              alt=""
              src="/icon.svg"
            />
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_24px)] left-[89px] w-12 h-12 flex flex-col items-center justify-center">
          <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center">
            <div className="flex flex-row p-2 items-center justify-center">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/iconsnavigate-next.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
