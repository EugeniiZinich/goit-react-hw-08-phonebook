import { ThreeDots, ThreeCircles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <ThreeDots
      height="40"
      width="40"
      radius="9"
      color="#5260df"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export const Spinner = () => {
  return (
    <ThreeCircles
      height="30"
      width="30"
      color=" #394497"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
};
