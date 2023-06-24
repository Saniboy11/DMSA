import React from "react";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

const UserSignupPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-10 md:gap-10 gap-[453px] items-center justify-end mx-auto md:px-10 sm:px-5 px-[175px] w-full">
        <div className="flex flex-col items-center justify-start w-[36%] md:w-full">
          <div className="flex flex-col items-start justify-start pt-0.5 w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01"
              size="txtInterExtraBold30"
            >
              Create your account
            </Text>
            <div className="flex flex-col items-start justify-start mt-1 pr-0.5 pt-0.5 w-full">
              <Text
                className="text-blue_gray-700 text-sm"
                size="txtInterRegular14Bluegray700"
              >
                <span className="text-blue_gray-700 font-inter text-left font-normal">
                  Or{" "}
                </span>
                <span className="text-teal-800 font-inter text-left font-medium">
                  Already have an account?
                </span>
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-6 w-full">
            <div className="flex flex-col gap-5 items-center justify-start pb-1.5 w-full">
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text className="text-gray-800 text-sm" size="txtInterMedium14">
                  Name
                </Text>
                <Input
                  name="frame"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid flex h-[38px] rounded-md w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text className="text-gray-800 text-sm" size="txtInterMedium14">
                  Email ID
                </Text>
                <Input
                  name="frame_One"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid flex h-[38px] rounded-md w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text className="text-gray-800 text-sm" size="txtInterMedium14">
                  Phone
                </Text>
                <Input
                  name="frame_Two"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid flex h-[38px] rounded-md w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text className="text-gray-800 text-sm" size="txtInterMedium14">
                  Year of Birth
                </Text>
                <Input
                  name="frame_Three"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid flex h-[38px] rounded-md w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text className="text-gray-800 text-sm" size="txtInterMedium14">
                  Password
                </Text>
                <Input
                  name="frame_Four"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid flex h-[38px] rounded-md w-full"
                ></Input>
              </div>
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text className="text-gray-800 text-sm" size="txtInterMedium14">
                  Confirm Password
                </Text>
                <Input
                  name="frame_Five"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid flex h-[38px] rounded-md w-full"
                ></Input>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start mt-[9px] w-full">
            <CheckBox
              className="text-gray-900_01 text-left text-sm"
              inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-4 mr-[5px] rounded w-4"
              name="agreetoourpriva_One"
              id="agreetoourpriva_One"
              label="Agree to our privacy policy"
            ></CheckBox>
          </div>
          <Button className="bg-teal-800 cursor-pointer font-medium min-w-[384px] sm:min-w-full mt-[27px] py-3.5 rounded-md text-[15px] text-center text-white-A700">
            Sign up
          </Button>
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

export default UserSignupPage;
