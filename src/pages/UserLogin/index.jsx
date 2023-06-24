import React from "react";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

const UserLoginPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-10 md:gap-10 gap-[449px] items-center justify-end mx-auto md:px-10 sm:px-5 px-[175px] w-full">
        <div className="flex flex-col gap-6 items-center justify-start w-[36%] md:w-full">
          <div className="flex flex-col items-start justify-start pt-0.5 w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900_01"
              size="txtInterExtraBold30"
            >
              User Login
            </Text>
            <div className="flex flex-col items-start justify-start mt-1 w-full">
              <Text
                className="text-blue_gray-700 text-sm"
                size="txtInterRegular14Bluegray700"
              >
                <span className="text-blue_gray-700 font-inter text-left font-normal">
                  Or{" "}
                </span>
                <span className="text-teal-800 font-inter text-left font-medium">
                  Create a new account
                </span>
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-5 items-center justify-start pb-[17px] w-full">
              <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                <Text className="text-gray-800 text-sm" size="txtInterMedium14">
                  Email ID
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
                  Password
                </Text>
                <Input
                  name="frame_One"
                  placeholder=""
                  className="p-0 w-full"
                  wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid flex h-[38px] rounded-md w-full"
                ></Input>
              </div>
              <div className="flex flex-row items-start justify-between w-full">
                <CheckBox
                  className="text-gray-900_01 text-left text-sm"
                  inputClassName="bg-white-A700 border border-blue_gray-100 border-solid h-4 mr-[5px] rounded w-4"
                  name="rememberme"
                  id="rememberme"
                  label="Remember me"
                ></CheckBox>
                <a
                  href="javascript:"
                  className="mt-0.5 text-blue_gray-700 text-sm"
                >
                  <Text size="txtInterMedium14Bluegray700">
                    Forgot your password?
                  </Text>
                </a>
              </div>
            </div>
            <Button className="bg-teal-800 cursor-pointer font-medium min-w-[384px] sm:min-w-full mt-[38px] py-3.5 rounded-md text-[15px] text-center text-white-A700">
              Sign in
            </Button>
            <div className="h-5 md:h-8 mt-3 relative w-full">
              <Line className="absolute bg-blue_gray-100 h-px inset-[0] justify-center m-auto w-full" />
              <a
                href="javascript:"
                className="absolute bg-white-A700 h-full inset-[0] justify-center m-auto px-[7px] text-gray-600_02 text-sm w-max"
              >
                <Text size="txtInterRegular14Gray60002">Or continue with</Text>
              </a>
            </div>
            <Button className="bg-white-A700 cursor-pointer font-medium min-w-[384px] sm:min-w-full mt-3 py-3.5 rounded-md shadow-bs1 text-[15px] text-center text-teal-800">
              Login with OTP
            </Button>
          </div>
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

export default UserLoginPage;
