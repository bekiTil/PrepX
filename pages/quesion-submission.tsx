import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import TextField from "../components/text-field";
import Header from "../components/header";

const QuesionSubmission: NextPage = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="relative bg-m3-white w-full h-[1965px] overflow-hidden text-left text-xs text-m3-sys-light-on-surface-variant font-m3-label-large">
      <div className="absolute top-[207px] left-[156px] rounded-t rounded-b-none w-[194px] h-14 flex flex-col items-start justify-start">
        <div className="self-stretch rounded-t rounded-b-none bg-m3-sys-light-surface-container-highest flex flex-col items-start justify-start">
          <div className="self-stretch rounded-t rounded-b-none flex flex-row py-1 pr-0 pl-4 items-center justify-start">
            <div className="flex-1 h-10 flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[16px]">Subsection</div>
              </div>
              <div className="flex flex-row items-center justify-start text-base text-m3-sys-light-on-surface">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  Protons
                </div>
              </div>
            </div>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center">
                <div className="flex flex-row p-2 items-center justify-center">
                  <img className="relative w-6 h-6" alt="" src="/icon2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-m3-sys-light-on-surface-variant" />
        <div className="self-stretch flex flex-row pt-1 px-4 pb-0 items-start justify-start">
          <div className="flex-1 relative leading-[16px]" />
        </div>
      </div>
      <div className="absolute top-[298px] left-[156px] rounded-t rounded-b-none w-[194px] h-14 flex flex-col items-start justify-start">
        <div className="self-stretch rounded-t rounded-b-none bg-m3-sys-light-surface-container-highest flex flex-col items-start justify-start">
          <div className="self-stretch rounded-t rounded-b-none flex flex-row py-1 pr-0 pl-4 items-center justify-start">
            <div className="flex-1 h-10 flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[16px]">ID</div>
              </div>
              <div className="flex flex-row items-center justify-start text-base text-m3-sys-light-on-surface">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  1.3.4.53.7
                </div>
              </div>
            </div>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center">
                <div className="flex flex-row p-2 items-center justify-center">
                  <img className="relative w-6 h-6" alt="" src="/icon2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-m3-sys-light-on-surface-variant" />
        <div className="self-stretch flex flex-row pt-1 px-4 pb-0 items-start justify-start">
          <div className="flex-1 relative leading-[16px]" />
        </div>
      </div>
      <div className="absolute top-[389px] left-[152px] rounded-t rounded-b-none w-[198px] h-14 flex flex-col items-start justify-start">
        <div className="self-stretch rounded-t rounded-b-none bg-m3-sys-light-surface-container-highest flex flex-col items-start justify-start">
          <div className="self-stretch rounded-t rounded-b-none flex flex-row py-1 pr-0 pl-4 items-center justify-start">
            <div className="flex-1 h-10 flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[16px]">Category</div>
              </div>
              <div className="flex flex-row items-center justify-start text-base text-m3-sys-light-on-surface">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  Conceptual
                </div>
              </div>
            </div>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center">
                <div className="flex flex-row p-2 items-center justify-center">
                  <img className="relative w-6 h-6" alt="" src="/icon2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-m3-sys-light-on-surface-variant" />
        <div className="self-stretch flex flex-row pt-1 px-4 pb-0 items-start justify-start">
          <div className="flex-1 relative leading-[16px]" />
        </div>
      </div>
      <div className="absolute top-[207px] left-[391px] rounded-t rounded-b-none w-[193px] h-14 flex flex-col items-start justify-start">
        <div className="self-stretch rounded-t rounded-b-none bg-m3-sys-light-surface-container-highest flex flex-col items-start justify-start">
          <div className="self-stretch rounded-t rounded-b-none flex flex-row py-1 pr-0 pl-4 items-center justify-start">
            <div className="flex-1 h-10 flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[16px]">Section</div>
              </div>
              <div className="flex flex-row items-center justify-start text-base text-m3-sys-light-on-surface">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  Subatomic Par
                </div>
              </div>
            </div>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center">
                <div className="flex flex-row p-2 items-center justify-center">
                  <img className="relative w-6 h-6" alt="" src="/icon2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-m3-sys-light-on-surface-variant" />
        <div className="self-stretch flex flex-row pt-1 px-4 pb-0 items-start justify-start">
          <div className="flex-1 relative leading-[16px]" />
        </div>
      </div>
      <div className="absolute top-[298px] left-[390px] rounded-t rounded-b-none w-[194px] h-14 flex flex-col items-start justify-start">
        <div className="self-stretch rounded-t rounded-b-none bg-m3-sys-light-surface-container-highest flex flex-col items-start justify-start">
          <div className="self-stretch rounded-t rounded-b-none flex flex-row py-1 pr-0 pl-4 items-center justify-start">
            <div className="flex-1 h-10 flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[16px]">Difficulty Level</div>
              </div>
              <div className="flex flex-row items-center justify-start text-base text-m3-sys-light-on-surface">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  3
                </div>
              </div>
            </div>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center">
                <div className="flex flex-row p-2 items-center justify-center">
                  <img className="relative w-6 h-6" alt="" src="/icon2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-m3-sys-light-on-surface-variant" />
        <div className="self-stretch flex flex-row pt-1 px-4 pb-0 items-start justify-start">
          <div className="flex-1 relative leading-[16px]" />
        </div>
      </div>
      <div className="absolute top-[207px] left-[624px] rounded-t rounded-b-none w-[195px] h-14 flex flex-col items-start justify-start">
        <div className="self-stretch rounded-t rounded-b-none bg-m3-sys-light-surface-container-highest flex flex-col items-start justify-start">
          <div className="self-stretch rounded-t rounded-b-none flex flex-row py-1 pr-0 pl-4 items-center justify-start">
            <div className="flex-1 h-10 flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[16px]">Chapter</div>
              </div>
              <div className="flex flex-row items-center justify-start text-base text-m3-sys-light-on-surface">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  Atoms
                </div>
              </div>
            </div>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center">
                <div className="flex flex-row p-2 items-center justify-center">
                  <img className="relative w-6 h-6" alt="" src="/icon2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-m3-sys-light-on-surface-variant" />
        <div className="self-stretch flex flex-row pt-1 px-4 pb-0 items-start justify-start">
          <div className="flex-1 relative leading-[16px]" />
        </div>
      </div>
      <div className="absolute top-[298px] left-[624px] rounded-t rounded-b-none w-[195px] h-14 flex flex-col items-start justify-start">
        <div className="self-stretch rounded-t rounded-b-none bg-m3-sys-light-surface-container-highest flex flex-col items-start justify-start">
          <div className="self-stretch rounded-t rounded-b-none flex flex-row py-1 pr-0 pl-4 items-center justify-start">
            <div className="flex-1 h-10 flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[16px]">Importance Level</div>
              </div>
              <div className="flex flex-row items-center justify-start text-base text-m3-sys-light-on-surface">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  4
                </div>
              </div>
            </div>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center">
                <div className="flex flex-row p-2 items-center justify-center">
                  <img className="relative w-6 h-6" alt="" src="/icon2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-m3-sys-light-on-surface-variant" />
        <div className="self-stretch flex flex-row pt-1 px-4 pb-0 items-start justify-start">
          <div className="flex-1 relative leading-[16px]" />
        </div>
      </div>
      <div className="absolute top-[207px] left-[859px] rounded-t rounded-b-none w-[193px] h-14 flex flex-col items-start justify-start">
        <div className="self-stretch rounded-t rounded-b-none bg-m3-sys-light-surface-container-highest flex flex-col items-start justify-start">
          <div className="self-stretch rounded-t rounded-b-none flex flex-row py-1 pr-0 pl-4 items-center justify-start">
            <div className="flex-1 h-10 flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[16px]">Subject</div>
              </div>
              <div className="flex flex-row items-center justify-start text-base text-m3-sys-light-on-surface">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  Chemistry
                </div>
              </div>
            </div>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center">
                <div className="flex flex-row p-2 items-center justify-center">
                  <img className="relative w-6 h-6" alt="" src="/icon2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-m3-sys-light-on-surface-variant" />
        <div className="self-stretch flex flex-row pt-1 px-4 pb-0 items-start justify-start">
          <div className="flex-1 relative leading-[16px]" />
        </div>
      </div>
      <div className="absolute top-[298px] left-[859px] rounded-t rounded-b-none w-[194px] h-14 flex flex-col items-start justify-start">
        <div className="self-stretch rounded-t rounded-b-none bg-m3-sys-light-surface-container-highest flex flex-col items-start justify-start">
          <div className="self-stretch rounded-t rounded-b-none flex flex-row py-1 pr-0 pl-4 items-center justify-start">
            <div className="flex-1 h-10 flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[16px]">Relation</div>
              </div>
              <div className="flex flex-row items-center justify-start text-base text-m3-sys-light-on-surface">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  Chemistry
                </div>
              </div>
            </div>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center">
                <div className="flex flex-row p-2 items-center justify-center">
                  <img className="relative w-6 h-6" alt="" src="/icon2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-m3-sys-light-on-surface-variant" />
        <div className="self-stretch flex flex-row pt-1 px-4 pb-0 items-start justify-start">
          <div className="flex-1 relative leading-[16px]" />
        </div>
      </div>
      <div className="absolute top-[207px] left-[1093px] rounded-t rounded-b-none w-[194px] h-14 flex flex-col items-start justify-start">
        <div className="self-stretch rounded-t rounded-b-none bg-m3-sys-light-surface-container-highest flex flex-col items-start justify-start">
          <div className="self-stretch rounded-t rounded-b-none flex flex-row py-1 pr-0 pl-4 items-center justify-start">
            <div className="flex-1 h-10 flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[16px]">Grade</div>
              </div>
              <div className="flex flex-row items-center justify-start text-base text-m3-sys-light-on-surface">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  9
                </div>
              </div>
            </div>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center">
                <div className="flex flex-row p-2 items-center justify-center">
                  <img className="relative w-6 h-6" alt="" src="/icon2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-m3-sys-light-on-surface-variant" />
        <div className="self-stretch flex flex-row pt-1 px-4 pb-0 items-start justify-start">
          <div className="flex-1 relative leading-[16px]" />
        </div>
      </div>
      <div className="absolute top-[298px] left-[1093px] rounded-t rounded-b-none w-[194px] h-14 flex flex-col items-start justify-start">
        <div className="self-stretch rounded-t rounded-b-none bg-m3-sys-light-surface-container-highest flex flex-col items-start justify-start">
          <div className="self-stretch rounded-t rounded-b-none flex flex-row py-1 pr-0 pl-4 items-center justify-start">
            <div className="flex-1 h-10 flex flex-col items-start justify-center">
              <div className="flex flex-row items-center justify-start">
                <div className="relative leading-[16px]">Question Outline</div>
              </div>
              <div className="flex flex-row items-center justify-start text-base text-m3-sys-light-on-surface">
                <div className="relative tracking-[0.5px] leading-[24px]">
                  Graphical
                </div>
              </div>
            </div>
            <div className="w-12 h-12 flex flex-col items-center justify-center">
              <div className="rounded-81xl overflow-hidden flex flex-row items-center justify-center">
                <div className="flex flex-row p-2 items-center justify-center">
                  <img className="relative w-6 h-6" alt="" src="/icon2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-m3-sys-light-on-surface-variant" />
        <div className="self-stretch flex flex-row pt-1 px-4 pb-0 items-start justify-start">
          <div className="flex-1 relative leading-[16px]" />
        </div>
      </div>
      <TextField
        inputText="Write the  question here ..."
        labelText="Question"
      />
      <TextField
        inputText="Write Choice A here ..."
        labelText="Choice A"
        propTop="779px"
        propHeight="90px"
      />
      <TextField
        inputText="Write Choice C here ..."
        labelText="Choice C"
        propTop="1029px"
        propHeight="90px"
      />
      <TextField
        inputText="Write Choice B here ..."
        labelText="Choice B"
        propTop="904px"
        propHeight="90px"
      />
      <TextField
        inputText="Write Choice D here ..."
        labelText="Choice D"
        propTop="1154px"
        propHeight="90px"
      />
      <div className="absolute top-[1492px] left-[152px] rounded box-border w-[824px] h-[236px] flex flex-col items-start justify-start text-base text-m3-sys-light-on-surface border-[2px] border-solid border-m3-sys-light-primary">
        <div className="self-stretch rounded-t rounded-b-none flex flex-row py-2 pr-0 pl-4 items-center justify-start">
          <div className="flex-1 h-10 flex flex-col items-start justify-center relative">
            <div className="flex flex-row items-center justify-start z-[0]">
              <div className="relative tracking-[0.5px] leading-[24px]">
                Write Choice D here ...
              </div>
              <img className="relative w-px h-[17px]" alt="" src="/caret.svg" />
            </div>
            <div className="my-0 mx-[!important] absolute top-[-16px] left-[-4px] bg-m3-sys-light-surface flex flex-row py-0 px-1 items-center justify-start z-[1] text-xs text-m3-sys-light-primary">
              <div className="relative leading-[16px]">Solution</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1340px] left-[152px] rounded box-border w-[364px] flex flex-col py-0 pr-[341px] pl-0 items-start justify-start text-base text-m3-sys-light-on-surface border-[2px] border-solid border-m3-sys-light-primary">
        <div className="self-stretch rounded-t rounded-b-none flex flex-row py-2 pr-0 pl-4 items-center justify-start">
          <div className="flex-1 h-10 flex flex-col items-start justify-center relative">
            <div className="flex flex-row items-center justify-start z-[0]">
              <div className="relative tracking-[0.5px] leading-[24px]">
                Select the right choice
              </div>
              <img className="relative w-px h-[17px]" alt="" src="/caret.svg" />
            </div>
            <div className="my-0 mx-[!important] absolute top-[-16px] left-[-4px] bg-m3-sys-light-surface flex flex-row py-0 px-1 items-center justify-start z-[1] text-xs text-m3-sys-light-primary">
              <div className="relative leading-[16px]">Answer</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1789px] left-[720px] rounded-81xl bg-m3-sys-light-primary overflow-hidden flex flex-row items-center justify-center text-center text-sm text-m3-white">
        <div className="rounded bg-m3-state-layers-light-on-primary-opacity-012 overflow-hidden flex flex-row py-2.5 pr-6 pl-4 items-center justify-center gap-[8px]">
          <img
            className="relative w-[18px] h-[18px] hidden"
            alt=""
            src="/icon3.svg"
          />
          <div className="relative tracking-[0.1px] leading-[20px] font-medium">
            Save and Continue
          </div>
        </div>
      </div>
      <div className="absolute top-[1849px] left-[741px] w-[117px] h-10 text-center text-sm text-m3-white">
        <div className="absolute top-[0px] left-[0px] rounded-81xl bg-m3-sys-light-primary w-[117px] overflow-hidden flex flex-row items-center justify-center">
          <div className="rounded bg-m3-state-layers-light-on-primary-opacity-012 overflow-hidden flex flex-row py-2.5 pr-6 pl-4 items-center justify-center gap-[8px]">
            <img
              className="relative w-[18px] h-[18px] hidden"
              alt=""
              src="/icon4.svg"
            />
            <div className="relative tracking-[0.1px] leading-[20px] font-medium">
              Submit
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute h-[1.22%] w-[1.67%] top-[90.13%] right-[52.71%] bottom-[8.65%] left-[45.63%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/iconsnavigate-next2.svg"
      />
      <Header onHomeTextClick={onHomeTextClick} />
    </div>
  );
};

export default QuesionSubmission;
