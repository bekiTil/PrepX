import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import NewRequests from "../components/new-requests";

const DashboardContributersNote: NextPage = () => {
  const router = useRouter();

  const onAboutTextClick = useCallback(() => {
    router.push("/finance");
  }, [router]);

  return (
    <div className="relative bg-gainsboro-100 w-full h-[1083px] overflow-hidden text-left text-mini text-m3-white font-inter">
      <div className="absolute top-[0px] left-[0px] bg-gainsboro-200 w-[1440px] h-[1083px]" />
      <div className="absolute top-[calc(50%_-_982.5px)] left-[calc(50%_-_720px)] bg-m3-white w-[1440px] h-[1524px] overflow-hidden" />
      <div className="absolute top-[1px] left-[0px] bg-m3-white w-[1440px] h-[1082px]" />
      <img
        className="absolute top-[23px] left-[1316px] rounded-11xl w-[60px] h-[60px] overflow-hidden object-cover"
        alt=""
        src="/avatar--image60@2x.png"
      />
      <img
        className="absolute top-[128px] left-[95px] w-32 h-[885px]"
        alt=""
        src="/group-55142.svg"
      />
      <div className="absolute top-[23px] left-[205px] w-[1171px] h-[41px]">
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
      <div className="absolute top-[199px] left-[260px] w-[1116px] h-[852.7px] text-smi-6 text-gray-600">
        <div className="absolute top-[0px] left-[796px] rounded-9xs-6 bg-gray-100 box-border w-[306px] overflow-hidden flex flex-row py-[9px] px-[14.399999618530273px] items-start justify-start gap-[9px] border-[0.9px] border-solid border-gainsboro-300">
          <img
            className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
            alt=""
            src="/searchsm.svg"
          />
          <div className="flex-1 relative leading-[140%] font-light">
            Search by name, state,country
          </div>
        </div>
        <NewRequests />
      </div>
    </div>
  );
};

export default DashboardContributersNote;
