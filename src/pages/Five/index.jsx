import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Header from "components/Header";

const FivePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-white-A700 flex flex-col items-center justify-start pb-[82px] w-full">
          <Header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full" />
          <div className="bg-white-A700 flex flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-center justify-start w-auto md:w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start pt-[30px] md:px-10 sm:px-5 px-[135px] shadow-bs w-auto md:w-full">
                <div className="flex flex-col gap-[11px] items-center justify-start max-w-[1170px] mx-auto w-full">
                  <div className="h-12 relative w-[98%] md:w-full">
                    <div className="absolute md:h-12 h-[47px] inset-[0] justify-center m-auto w-full">
                      <div className="border-b border-gray-900 border-solid h-12 m-auto w-full"></div>
                      <Img
                        className="absolute bottom-[6%] h-8 right-[1%]"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    </div>
                    <div className="absolute flex md:h-[46px] h-[47px] inset-y-[0] justify-end left-[0] my-auto w-[92%] md:w-full">
                      <div className="bg-white-A700 h-[45px] mt-auto mx-auto rounded-[22px] w-[99%]"></div>
                      <div className="absolute flex flex-col h-full inset-[0] items-center justify-start m-auto py-[1.5px] w-auto">
                        <div className="flex flex-col items-start justify-start md:pr-10 sm:pr-5 pr-[845px] py-1 w-auto">
                          <Text
                            className="sm:text-[25px] md:text-[27px] text-[29px] text-gray-600 w-auto"
                            size="txtInterBold29"
                          >
                            Search Text...
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center pb-4 px-4 w-full"
                    orientation="horizontal"
                  >
                    <div className="md:pl-10 pl-[90.59px] pr-[35.41px] pt-[17.5px] sm:px-5 relative w-[150px]">
                      <Img
                        className="h-6 ml-auto mt-auto w-6"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                      <div className="absolute flex flex-col inset-x-[0] items-start justify-end mx-auto pr-[18px] pt-[18px] top-[43%] w-full">
                        <div className="flex flex-col items-start justify-start mt-0.5">
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtInterSemiBold15"
                          >
                            Department
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="pl-[78.59px] pr-[47.41px] pt-[17.5px] md:px-10 sm:px-5 relative w-[150px]">
                      <Img
                        className="h-6 ml-auto mt-auto w-6"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                      <div className="absolute flex flex-col inset-x-[0] items-start justify-end mx-auto pr-[18px] pt-[18px] top-[43%] w-full">
                        <div className="flex flex-col items-start justify-start mt-0.5">
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtInterSemiBold15"
                          >
                            Locations
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="pl-[78.59px] pr-[47.41px] pt-[17.5px] md:px-10 sm:px-5 relative w-[150px]">
                      <Img
                        className="h-6 ml-auto mt-auto w-6"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                      <div className="absolute flex flex-col inset-x-[0] items-start justify-end mx-auto pr-[18px] pt-[18px] top-[43%] w-full">
                        <div className="flex flex-col items-start justify-start mt-0.5">
                          <Text
                            className="text-black-900 text-sm"
                            size="txtInterSemiBold14"
                          >
                            Job Type
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="md:pl-10 pl-20 sm:pl-5 pt-[17.5px] relative w-[186px]">
                      <Img
                        className="h-6 ml-auto mt-auto w-[106px]"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                      <div className="absolute flex flex-col items-start justify-end left-full pr-[18px] pt-[18px] top-[43%] w-[81%]">
                        <div className="flex flex-col items-start justify-start mt-0.5">
                          <Text
                            className="text-[15px] text-black-900"
                            size="txtInterSemiBold15"
                          >
                            Remote Eligible
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col gap-[15px] items-center justify-start max-w-[1170px] mx-auto pb-[15px] md:px-5 px-[15px] w-full">
                <div className="flex flex-col items-start justify-start pb-[30px] w-auto md:w-full">
                  <div className="flex flex-row md:gap-10 items-center justify-between p-1.5 w-full">
                    <Text
                      className="capitalize text-[11px] text-black-900"
                      size="txtInterRegular11"
                    >
                      187 results
                    </Text>
                    <div className="flex flex-row gap-[13px] items-start justify-start mr-[38px] my-[23px] w-auto">
                      <div className="flex flex-col items-start justify-start md:pl-10 sm:pl-5 pl-[43.82px] pr-[0.7px] w-auto">
                        <Text
                          className="capitalize text-[9px] text-black-900_89 text-right w-auto"
                          size="txtInterRegular9"
                        >
                          Sort by
                        </Text>
                      </div>
                      <div className="flex flex-row items-center justify-end pr-1 w-[46%]">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="capitalize text-black-900_dd text-xs"
                              size="txtInterRegular12"
                            >
                              Relevance
                            </Text>
                          </div>
                        </div>
                        <div className="border-black-900_89 border-solid border-t-[5px] border-x-[5px] h-[5px] ml-1 w-[14%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[30px] items-start justify-start w-auto md:w-full">
                    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[38px] py-[41px] w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="md:mt-0 mt-1 text-black-900 text-lg"
                          size="txtInterSemiBold18"
                        >
                          Sales Development Representative
                        </Text>
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[15px] items-start justify-start pb-[3px] pr-[15px] w-auto md:w-full">
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.39px] md:pr-10 sm:pr-5 pr-[243.2px] w-auto sm:w-full">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Categories
                            </Text>
                            <Text
                              className="text-[15px] text-black-900 w-auto"
                              size="txtInterRegular15"
                            >
                              Business Development
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.78px] md:pr-10 sm:pr-5 pr-[79.47px] w-auto">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Location
                            </Text>
                            <Text
                              className="leading-[20.00px] text-[15px] text-black-900"
                              size="txtInterRegular15"
                            >
                              <>
                                Sydney, New South Wales
                                <br />
                                Australia
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[38px] py-[41px] w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="md:mt-0 mt-[5px] text-black-900 text-lg"
                          size="txtInterSemiBold18"
                        >
                          Strategy and Planning Lead
                        </Text>
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[15px] items-start justify-start pb-[3px] pr-[15px] w-auto md:w-full">
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.39px] md:pr-10 sm:pr-5 pr-[308.2px] w-auto sm:w-full">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Categories
                            </Text>
                            <Text
                              className="text-[15px] text-black-900 w-auto"
                              size="txtInterRegular15"
                            >
                              IT Operations
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.78px] md:pr-10 sm:pr-5 pr-[89.47px] w-auto">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Location
                            </Text>
                            <Text
                              className="leading-[20.00px] text-[15px] text-black-900"
                              size="txtInterRegular15"
                            >
                              <>
                                San Francisco, California
                                <br />
                                United States
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[38px] py-[41px] w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="md:mt-0 mt-[3px] text-black-900 text-lg"
                          size="txtInterSemiBold18"
                        >
                          Solution Consultant Intern
                        </Text>
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[15px] items-start justify-start pb-[3px] pr-[15px] w-auto md:w-full">
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.39px] md:pr-10 sm:pr-5 pr-[244.2px] w-auto sm:w-full">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Categories
                            </Text>
                            <Text
                              className="text-[15px] text-black-900 w-auto"
                              size="txtInterRegular15"
                            >
                              University & New Grad
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[39%] md:w-full">
                            <Text
                              className="text-gray-600_01 text-sm"
                              size="txtInterRegular14"
                            >
                              Location
                            </Text>
                            <Text
                              className="mt-[7px] text-[15px] text-black-900"
                              size="txtInterRegular15"
                            >
                              Multiple
                            </Text>
                            <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                              <Img
                                className="h-[17px] w-4"
                                src="images/img_frame.svg"
                                alt="frame_One"
                              />
                              <Text
                                className="text-[15px] text-black-900"
                                size="txtInterRegular15"
                              >
                                Remote
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[38px] py-[41px] w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="leading-[30.00px] text-black-900 text-xl"
                          size="txtInterSemiBold20"
                        >
                          Manager, Renewal Management International
                        </Text>
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[15px] items-start justify-start pb-[3px] pr-[15px] w-auto md:w-full">
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.39px] md:pr-10 sm:pr-5 pr-[327.2px] w-auto sm:w-full">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Categories
                            </Text>
                            <Text
                              className="text-[15px] text-black-900 w-auto"
                              size="txtInterRegular15"
                            >
                              Field Sales
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.78px] md:pr-10 sm:pr-5 pr-[114.47px] w-auto">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Location
                            </Text>
                            <Text
                              className="leading-[20.00px] text-[15px] text-black-900"
                              size="txtInterRegular15"
                            >
                              <>
                                Sao Paulo, São Paulo
                                <br />
                                Brazil
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[38px] py-[41px] w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="leading-[30.00px] text-black-900 text-xl"
                          size="txtInterSemiBold20"
                        >
                          Director, Renewal Management International
                        </Text>
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[15px] items-start justify-start pb-[3px] pr-[15px] w-auto md:w-full">
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.39px] md:pr-10 sm:pr-5 pr-[327.2px] w-auto sm:w-full">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Categories
                            </Text>
                            <Text
                              className="text-[15px] text-black-900 w-auto"
                              size="txtInterRegular15"
                            >
                              Field Sales
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.78px] md:pr-10 sm:pr-5 pr-[114.47px] w-auto">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Location
                            </Text>
                            <Text
                              className="leading-[20.00px] text-[15px] text-black-900"
                              size="txtInterRegular15"
                            >
                              <>
                                Sao Paulo, São Paulo
                                <br />
                                Brazil
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[38px] py-[41px] w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="leading-[30.00px] text-black-900 text-xl"
                          size="txtInterSemiBold20"
                        >
                          Senior Software Engineer - CLM Platform Team
                        </Text>
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[15px] items-start justify-start pb-[3px] pr-[15px] w-auto md:w-full">
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.39px] md:pr-10 sm:pr-5 pr-[314.2px] w-auto sm:w-full">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Categories
                            </Text>
                            <Text
                              className="text-base text-black-900 w-auto"
                              size="txtInterRegular16"
                            >
                              Engineering
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[39%] md:w-full">
                            <Text
                              className="text-gray-600_01 text-sm"
                              size="txtInterRegular14"
                            >
                              Location
                            </Text>
                            <Text
                              className="mt-[7px] text-[15px] text-black-900"
                              size="txtInterRegular15"
                            >
                              Multiple
                            </Text>
                            <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                              <Img
                                className="h-[17px] w-4"
                                src="images/img_frame.svg"
                                alt="frame_Two"
                              />
                              <Text
                                className="text-[15px] text-black-900"
                                size="txtInterRegular15"
                              >
                                Remote
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[38px] py-[41px] w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="md:mt-0 mt-[5px] text-black-900 text-lg"
                          size="txtInterSemiBold18"
                        >
                          Principal Software Engineer
                        </Text>
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[15px] items-start justify-start pb-[3px] pr-[15px] w-auto md:w-full">
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.39px] md:pr-10 sm:pr-5 pr-[314.2px] w-auto sm:w-full">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Categories
                            </Text>
                            <Text
                              className="text-base text-black-900 w-auto"
                              size="txtInterRegular16"
                            >
                              Engineering
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[39%] md:w-full">
                            <Text
                              className="text-gray-600_01 text-sm"
                              size="txtInterRegular14"
                            >
                              Location
                            </Text>
                            <Text
                              className="mt-[7px] text-[15px] text-black-900"
                              size="txtInterRegular15"
                            >
                              Multiple
                            </Text>
                            <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                              <Img
                                className="h-[17px] w-4"
                                src="images/img_frame.svg"
                                alt="frame_Three"
                              />
                              <Text
                                className="text-[15px] text-black-900"
                                size="txtInterRegular15"
                              >
                                Remote
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[38px] py-[41px] w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="md:mt-0 mt-[5px] text-black-900 text-lg"
                          size="txtInterSemiBold18"
                        >
                          Product Manager, Identify
                        </Text>
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[15px] items-start justify-start pb-[3px] pr-[15px] w-auto md:w-full">
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.39px] md:pr-10 sm:pr-5 pr-[241.2px] w-auto sm:w-full">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Categories
                            </Text>
                            <Text
                              className="text-base text-black-900 w-auto"
                              size="txtInterRegular16"
                            >
                              Product Management
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.78px] md:pr-10 sm:pr-5 pr-[185.47px] w-auto">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Location
                            </Text>
                            <Text
                              className="leading-[20.00px] text-[15px] text-black-900"
                              size="txtInterRegular15"
                            >
                              <>
                                Paris, Paris
                                <br />
                                France
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[38px] py-[41px] w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="leading-[30.00px] text-black-900 text-xl"
                          size="txtInterSemiBold20"
                        >
                          Database Administrator, DBA – Platform
                        </Text>
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[15px] items-start justify-start pb-[3px] pr-[15px] w-auto md:w-full">
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.39px] md:pr-10 sm:pr-5 pr-[241.2px] w-auto sm:w-full">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Categories
                            </Text>
                            <Text
                              className="text-base text-black-900 w-auto"
                              size="txtInterRegular16"
                            >
                              Product Management
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-[39%] md:w-full">
                            <Text
                              className="text-gray-600_01 text-sm"
                              size="txtInterRegular14"
                            >
                              Location
                            </Text>
                            <Text
                              className="leading-[20.00px] mt-1 text-base text-black-900"
                              size="txtInterRegular16"
                            >
                              <>
                                Remote, <br />
                                United States
                              </>
                            </Text>
                            <Input
                              name="frame_Four"
                              placeholder="Remote"
                              className="p-0 placeholder:text-black-900 sm:pr-5 text-[15px] text-black-900 text-left w-full"
                              wrapClassName="flex pr-[35px] w-full"
                              prefix={
                                <Img
                                  className="mr-2.5 my-px"
                                  src="images/img_frame.svg"
                                  alt="Frame"
                                />
                              }
                            ></Input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[38px] py-[41px] w-auto md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Text
                          className="leading-[30.00px] text-black-900 text-lg"
                          size="txtInterSemiBold18"
                        >
                          Senior Operations Manager, eCommerce and Payments
                        </Text>
                        <div className="flex md:flex-1 md:flex-col flex-row gap-[15px] items-start justify-start pb-[3px] pr-[15px] w-auto md:w-full">
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.39px] md:pr-10 sm:pr-5 pr-[328.2px] w-auto sm:w-full">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Categories
                            </Text>
                            <Text
                              className="text-base text-black-900 w-auto"
                              size="txtInterRegular16"
                            >
                              Marketing
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1 items-start justify-start pb-[0.78px] md:pr-10 sm:pr-5 pr-[89.47px] w-auto">
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtInterRegular14"
                            >
                              Location
                            </Text>
                            <Text
                              className="leading-[20.00px] text-[15px] text-black-900"
                              size="txtInterRegular15"
                            >
                              <>
                                San Francisco, California
                                <br />
                                United States
                              </>
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start mb-3.5 pl-[405.31px] pr-[405.33px] md:px-10 sm:px-5 py-2 w-auto md:w-full">
                  <div className="flex flex-row gap-[7.58px] items-end justify-start pl-1 sm:pr-5 pr-[29.84px] w-auto">
                    <Text
                      className="text-[15px] text-black-900_89 w-auto"
                      size="txtInterRegular15Black90089"
                    >
                      Items per page
                    </Text>
                    <div className="flex flex-row items-center justify-center pr-1 w-[21%]">
                      <div className="flex flex-col items-start justify-start w-3">
                        <div className="flex flex-col items-center justify-start w-3">
                          <Text
                            className="text-[11px] text-black-900_dd"
                            size="txtInterRegular11Black900dd"
                          >
                            10
                          </Text>
                        </div>
                      </div>
                      <div className="border-black-900_89 border-solid border-t-[5px] border-x-[5px] h-[5px] ml-1 w-[39%]"></div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center pr-[5px] py-[5px] w-[44%]">
                    <Text
                      className="text-[10px] text-black-900_89"
                      size="txtInterRegular10"
                    >
                      1 – 10 of 187
                    </Text>
                    <Img
                      className="h-7 ml-2.5 w-7"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                    <Img
                      className="h-7 ml-3 w-7"
                      src="images/img_arrowleft.svg"
                      alt="arrowright"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FivePage;
