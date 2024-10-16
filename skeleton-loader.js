import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const SkeletonWrapper = styled.div`
  display: inline-block;
  height: ${({ height }) => height || "1em"};
  width: ${({ width }) => width || "100%"};
  background-color: #e0e0e0;
  background-image: linear-gradient(
    90deg,
    #e0e0e0 25%,
    #f0f0f0 50%,
    #e0e0e0 75%
  );
  background-size: 1000px 100%;
  animation: ${shimmer} 2s infinite;
  border-radius: ${({ borderRadius }) => borderRadius || "4px"};
`;

const SkeletonLoader = ({ width, height, borderRadius }) => {
  return (
    <SkeletonWrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};

export default SkeletonLoader;
