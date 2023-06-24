import React from "react";

const sizeClasses = {
  txtInterRegular15Black90089: "font-inter font-normal",
  txtInterBold29: "font-bold font-inter",
  txtInterRegular14Bluegray700: "font-inter font-normal",
  txtInterRegular10: "font-inter font-normal",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold15: "font-inter font-semibold",
  txtInterSemiBold14Blue700: "font-inter font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterSemiBold14Gray600: "font-inter font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold15Gray600: "font-inter font-semibold",
  txtInterMedium15: "font-inter font-medium",
  txtInterMedium14Bluegray700: "font-inter font-medium",
  txtInterRegular11Black900dd: "font-inter font-normal",
  txtInterRegular14Gray60002: "font-inter font-normal",
  txtInterSemiBold11: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular11: "font-inter font-normal",
  txtInterRegular12: "font-inter font-normal",
  txtInterExtraBold30: "font-extrabold font-inter",
  txtInterRegular9: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular15: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
