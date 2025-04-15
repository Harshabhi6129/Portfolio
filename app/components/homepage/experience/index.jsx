// @flow strict
import dynamic from "next/dynamic";
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from "../../../assets/lottie/code.json";
import AnimationLottieWrapper from "../../helper/AnimationLottieWrapper"; //  Use the new client wrapper

import GlowCard from "../../helper/glow-card";

function Experience() {
	return (
		<div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
			<Image
				src="/section.svg"
				alt="Hero"
				width={1572}
				height={795}
				className="absolute top-0 -z-10"
			/>

			<div className="flex justify-center my-5 lg:py-8">
				<div className="flex  items-center">
					<span className="w-24 h-[2px] bg-[#1a1443]"></span>
					<span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
						Experiences
					</span>
					<span className="w-24 h-[2px] bg-[#1a1443]"></span>
				</div>
			</div>

			<div className="py-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
					<div className="flex justify-center items-start">
						<div className="w-full h-full">
							<AnimationLottieWrapper animationPath={experience} />
						</div>
					</div>

					<div>
						<div className="flex flex-col gap-6">
							{experiences.map((experience) => (
								<GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
									<div className="p-3 relative">
										<Image
											src="/blur-23.svg"
											alt="Hero"
											width={1080}
											height={200}
											className="absolute bottom-0 opacity-80"
										/>
										<div className="flex justify-center">
											<p className="text-xs sm:text-sm text-[#16f2b3]">{experience.duration}</p>
										</div>
										<div className="flex items-center gap-x-8 px-3 py-5">
											<div className="text-violet-500  transition-all duration-300 hover:scale-125">
												<BsPersonWorkspace size={36} />
											</div>
											<div>
												<p className="text-base sm:text-xl mb-2 font-medium uppercase">
													{experience.title}
												</p>
												<p className="text-sm sm:text-base">{experience.company}</p>
											</div>
										</div>

										{/* Tech Stack */}
										{/* <div className="px-3 py-2">
											<p className="text-sm font-semibold text-gray-300">Tech Stack:</p>
											<div className="flex flex-wrap gap-2 mt-1">
												{experience.techStack.map((tech, index) => (
													<span
														key={index}
														className="px-2 py-2 text-xs bg-gray-800 text-gray-100 rounded-md"
													>
														{tech}
													</span>
												))}
											</div>
										</div> */}

										{/* Description */}
										{/* <div className="px-3 py-2">
											<p className="text-sm font-semibold text-gray-300">Key Contributions:</p>
											<ul className="list-disc list-inside mt-1 mb-1 text-sm text-gray-400 px-2">
												{experience.description.map((point, index) => (
													<li className="mb-1" key={index}>
														{point}
													</li>
												))}
											</ul>
										</div> */}
									</div>
								</GlowCard>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
