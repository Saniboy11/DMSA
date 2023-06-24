import React from "react";

import { Img, Line, Text } from "components";

const UseraccountpendingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-10 md:gap-10 gap-[294px] items-start justify-end mx-auto md:px-10 sm:px-5 px-[175px] w-full">
        <div className="md:h-[537px] h-[538px] md:mt-0 mt-[214px] relative w-[49%] md:w-full">
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-end my-auto py-[49px] right-[11%] w-[73%]">
            <div className="flex flex-col items-center justify-start mt-[39px] pt-7 w-full">
              <Img
                className="h-[100px] md:h-auto object-cover w-[100px]"
                src="images/img_icons8sandwatch100.png"
                alt="icons8sandwatch"
              />
              <div className="flex flex-row gap-[5px] items-center justify-center mt-[33px] w-[46%] md:w-full">
                <Img
                  className="h-[29px] md:h-auto object-cover w-[21%]"
                  src="images/img_updateleftrotation.png"
                  alt="updateleftrotat"
                />
                <Text
                  className="text-blue_gray-700 text-sm"
                  size="txtInterRegular14Bluegray700"
                >
                  <span className="text-blue_gray-700 font-inter text-left font-normal">
                    {" "}
                  </span>
                  <span className="text-teal-800 font-inter text-left font-medium">
                    Refresh Status here
                  </span>
                </Text>
              </div>
              <div className="flex flex-col gap-3.5 items-center justify-start mt-[156px] w-full">
                <div className="h-5 relative w-full">
                  <Line className="absolute bg-blue_gray-100 h-px inset-[0] justify-center m-auto w-full" />
                  <Text
                    className="absolute bg-white-A700 h-full inset-[0] justify-center m-auto px-[15px] text-center text-gray-600_02 text-sm w-max"
                    size="txtInterRegular14Gray60002"
                  >
                    Or
                  </Text>
                </div>
                <Text
                  className="bg-white-A700 h-5 justify-center pt-4 sm:px-5 px-[35px] rounded-md text-[15px] text-center text-shadow-ts text-teal-800 w-96"
                  size="txtInterMedium15"
                >
                  Back to Login Page
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="absolute inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01 top-[0] w-max"
            size="txtInterExtraBold30"
          >
            Waiting for administrative approval.
          </Text>
        </div>
        <div className="flex flex-col gap-5 items-start justify-start w-[18%] md:w-full">
          <Line className="bg-gradient  h-[406px] ml-2.5 md:ml-[0] w-px" />
          <Img
            className="h-12 md:h-auto object-cover w-full"
            src="images/img_download2.png"
            alt="downloadTwo"
          />
          <Line className="bg-gradient1  h-[406px] ml-2.5 md:ml-[0] w-px" />
        </div>
      </div>
    </>
  );
};

export default UseraccountpendingPage;
