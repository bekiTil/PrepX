import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const DashboardHome: NextPage = () => {
  const router = useRouter();

  const onAboutTextClick = useCallback(() => {
    router.push("/finance");
  }, [router]);

  return (
    <div className="relative bg-gainsboro-100 w-full h-[1083px] overflow-hidden text-left text-mini text-m3-white font-inter">
      <div className="absolute top-[0px] left-[0px] bg-gainsboro-200 w-[1440px] h-[1083px]" />
      <div className="absolute top-[calc(50%_-_982.5px)] left-[calc(50%_-_720px)] bg-m3-white w-[1440px] h-[1524px] overflow-hidden" />
      <div className="absolute top-[1px] left-[0px] bg-m3-white w-[1440px] h-[1082px]" />
      <div className="absolute top-[23px] left-[175px] w-[1171px] h-[41px]">
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
        className="absolute top-[131px] left-[1316px] rounded-11xl w-[60px] h-[60px] overflow-hidden object-cover"
        alt=""
        src="/avatar--image60@2x.png"
      />
      <div className="absolute top-[142px] left-[251px] bg-gainsboro-200 w-[526px] h-[158px]" />
      <div className="absolute top-[266.5px] left-[277.5px] box-border w-[400px] h-px border-t-[1px] border-solid border-black" />
    </div>
  );
};

export default DashboardHome;
