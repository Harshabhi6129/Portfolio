"use client"; // Make this a Client Component

import dynamic from "next/dynamic";

const AnimationLottie = dynamic(() => import("./animation-lottie"), { ssr: false });

const AnimationLottieWrapper = ({ animationPath }) => {
	return <AnimationLottie animationPath={animationPath} />;
};

export default AnimationLottieWrapper;
