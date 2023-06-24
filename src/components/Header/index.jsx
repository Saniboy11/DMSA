import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-teal-800 flex flex-col items-start justify-end p-[11px] w-full">
          <Text
            className="md:ml-[0] ml-[122px] text-[11px] text-white-A700"
            size="txtInterSemiBold11"
          >
            Getting any error?? Contact Admin
          </Text>
        </div>
        <div className="border-b border-gray-900_26 border-solid flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start pr-2.5 pt-2.5 w-[82%] md:w-full">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[13px] w-[17%] md:w-full">
              <Img
                className="h-[39px] md:h-auto object-cover w-[94%]"
                src="images/img_download2.png"
                alt="downloadTwo"
              />
            </div>
            <ul className="flex sm:flex-col flex-row sm:hidden items-center justify-start mb-2.5 md:ml-[0] ml-[139px] pt-2.5 px-2.5 w-[49%] md:w-full common-row-list">
              <li>
                <Text
                  className="hover:text-blue-700 text-gray-600 text-sm"
                  size="txtInterSemiBold14Gray600"
                >
                  Overview
                </Text>
              </li>
              <li>
                <Text
                  className="border-b-2 border-blue-700 border-solid ml-[23px] mt-[11px] pb-6 pt-0.5 text-blue-700 text-sm"
                  size="txtInterSemiBold14Blue700"
                >
                  Jobs
                </Text>
              </li>
              <li>
                <Text
                  className="ml-[19px] text-[15px] hover:text-blue-700 text-gray-600"
                  size="txtInterSemiBold15Gray600"
                >
                  Benefits
                </Text>
              </li>
              <li>
                <Text
                  className="ml-[19px] text-[15px] hover:text-blue-700 text-gray-600"
                  size="txtInterSemiBold15Gray600"
                >
                  Culture
                </Text>
              </li>
              <li>
                <Text
                  className="ml-[19px] text-[15px] hover:text-blue-700 text-gray-600"
                  size="txtInterSemiBold15Gray600"
                >
                  DE&I
                </Text>
              </li>
              <li>
                <Text
                  className="ml-[21px] hover:text-blue-700 text-gray-600 text-sm"
                  size="txtInterSemiBold14Gray600"
                >
                  Students
                </Text>
              </li>
              <li>
                <Text
                  className="ml-[23px] text-[15px] hover:text-blue-700 text-gray-600"
                  size="txtInterSemiBold15Gray600"
                >
                  Sustainability
                </Text>
              </li>
            </ul>
            <div className="flex flex-row gap-[18px] items-center justify-between md:ml-[0] ml-[114px] md:mt-0 mt-3.5 pb-2 pl-2 w-[15%] md:w-full">
              <Img
                className="h-[21px] md:h-auto object-cover w-5"
                src="images/img_image.png"
                alt="image"
              />
              <Button className="border border-gray-900_26 border-solid cursor-pointer font-inter font-semibold mb-[18px] min-w-[117px] py-[7px] rounded-[5px] text-[15px] text-center text-gray-900">
                Search jobs
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
