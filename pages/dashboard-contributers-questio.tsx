import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import GroupComponent4 from "../components/group-component4";

const DashboardContributersQuestio: NextPage = () => {
  const router = useRouter();

  const onAboutTextClick = useCallback(() => {
    router.push("/finance");
  }, [router]);

  return (
    <div className="relative bg-gainsboro-100 w-full h-[1083px] overflow-hidden text-center text-sm text-m3-white font-m3-label-large">
      <div className="absolute top-[0px] left-[0px] bg-gainsboro-200 w-[1440px] h-[1083px]" />
      <div className="absolute top-[calc(50%_-_982.5px)] left-[calc(50%_-_720px)] bg-m3-white w-[1440px] h-[1524px] overflow-hidden" />
      <div className="absolute top-[1px] left-[0px] bg-m3-white w-[1440px] h-[1082px]" />
      <img
        className="absolute top-[23px] left-[1316px] rounded-11xl w-[60px] h-[60px] overflow-hidden object-cover"
        alt=""
        src="/avatar--image60@2x.png"
      />
      <div className="absolute top-[33px] left-[175px] w-[1171px] h-[41px] text-left text-mini font-inter">
        <div className="absolute top-[13px] left-[765px] inline-block w-[54px]">
          Home
        </div>
        <div
          className="absolute top-[13px] left-[849px] inline-block w-[72px] cursor-pointer"
          onClick={onAboutTextClick}
        >
          About
        </div>
        <div className="absolute top-[13px] left-[951px] inline-block w-[83px]">
          Register
        </div>
        <div className="absolute top-[13px] left-[1064px] inline-block w-[107px]">
          Log In
        </div>
        <div className="absolute top-[0px] left-[0px] text-11xl font-typographica inline-block w-[97px] h-[41px] text-black">
          <span>Prep</span>
          <span className="text-m3-sys-light-primary">X</span>
        </div>
      </div>
      <img
        className="absolute top-[147px] left-[68px] w-32 h-[885px]"
        alt=""
        src="/group-5514.svg"
      />
      <div className="absolute top-[163px] left-[222px] w-[140px] h-10 text-m3-sys-light-primary">
        <div className="absolute top-[0px] left-[35px] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-m3-sys-light-outline">
          <div className="bg-m3-state-layers-light-primary-opacity-008 flex flex-row py-2.5 pr-6 pl-4 items-center justify-center">
            <div className="relative tracking-[0.1px] leading-[20px] font-medium">
              10.5.3.6.4
            </div>
          </div>
        </div>
        <div className="absolute top-[10px] left-[0px] tracking-[0.1px] leading-[20px] font-medium text-black">
          QID
        </div>
      </div>
      <div className="absolute top-[522.5px] left-[623.5px] box-border w-px h-[157px] border-r-[1px] border-solid border-black" />
      <b className="absolute top-[542px] left-[638px] tracking-[0.1px] leading-[20px] flex text-black items-center justify-center w-[348px] h-32">
        Camera flashes do not make your eyes turn red. The inside of your eyes
        are always red. The bright light of the camera flash just makes the
        color more obvious. Your eye is essentially a hollow ball filled with
        clear fluid.
      </b>
      <div className="absolute top-[216px] left-[1184px] w-48 h-[763px]">
        <div className="absolute top-[0px] left-[192px] rounded-mini bg-gainsboro-200 w-[763px] h-48 [transform:_rotate(90deg)] [transform-origin:0_0]" />
        <GroupComponent4 />
      </div>
    </div>
  );
};

export default DashboardContributersQuestio;
