"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const line = {
	hidden: { opacity: 0, y: 25 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
};

const wordContainer = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.05 },
	},
};

const TOTAL_STEPS = 2;

const word = {
	hidden: { opacity: 0, y: 10 },
	show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function AnimatedText({ children }: { children: string }) {
	return (
		<motion.span variants={wordContainer}>
			{children.split(" ").map((w, i) => (
				<motion.span
					key={i}
					variants={word}
					className="inline-block mr-[0.5vw]"
				>
					{w}
				</motion.span>
			))}
		</motion.span>
	);
}

export default function Page1() {
	const [step, setStep] = useState(0);

	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center relative">
			<motion.div
				key={step}
				className="flex flex-col text-right"
				variants={container}
				initial="hidden"
				animate="show"
			>
				{/* PAGE 1 */}
				{step === 0 && (
					<div className="w-[50vw]">
						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] font-extralight"
						>
							<AnimatedText>We've now covered colors and sizes</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] font-extralight mr-auto text-left"
						>
							<AnimatedText>This is our Design Guide so far</AnimatedText>
						</motion.h1>

						<div className="border-2 border-dashed w-full py-[3vh] pt-[2vh] my-[2vh] h-[50vh] overflow-y-scroll bg-white">
							<h1 className="hand-coffe text-[4vh] text-center px-[3.5vh]">
								Design Guide
							</h1>
							<h2 className="hand-coffe text-[3vh] text-left px-[3.5vh] pt-[1.5vh] border-t-2 border-dashed mt-[1.5vh]">
								Color Pallete
							</h2>
							<div className="grid grid-cols-2 gap-[1vh] mt-[1vh] px-[3.5vh]">
								<div className="bg-[#282934] h-[4vh] w-full border border-dashed flex items-center justify-center rounded-[0.5vh]">
									<p className="text-white hand-coffe text-left text-[2.5vh]">
										#282934
									</p>
								</div>
								<p className="text-[2.25vh] hand-coffe">
									Neutral Dark - with shade of main color
								</p>
								<div className="bg-[#2B4162] h-[4vh] w-full border border-dashed flex items-center justify-center rounded-[0.5vh]">
									<p className="text-white hand-coffe text-left text-[2.5vh]">
										#2B4162
									</p>
								</div>
								<p className="text-[2.25vh] hand-coffe">Primary Color</p>
								<div className="bg-[#68d8f4] h-[4vh] w-full border border-dashed flex items-center justify-center rounded-[0.5vh]">
									<p className="text-black hand-coffe text-left text-[2.5vh]">
										#68d8f4
									</p>
								</div>
								<p className="text-[2.25vh] hand-coffe">
									Secondary - shade of the primary
								</p>
								<div className="bg-[#ffc26d] h-[4vh] w-full border border-dashed flex items-center justify-center rounded-[0.5vh]">
									<p className="text-black hand-coffe text-left text-[2.5vh]">
										#ffc26d
									</p>
								</div>
								<p className="text-[2.25vh] hand-coffe">
									Action - opposite of the primary
								</p>
								<div className="bg-[#f8fafc] h-[4vh] w-full border border-dashed flex items-center justify-center rounded-[0.5vh]">
									<p className="text-black hand-coffe text-left text-[2.5vh]">
										#f8fafc
									</p>
								</div>
								<p className="text-[2.25vh] hand-coffe">
									Neutral Light - with shade of main color
								</p>
							</div>
							<h2 className="hand-coffe text-[3vh] text-left mt-[3vh] px-[3.5vh] pt-[1.5vh] border-t-2 border-dashed">
								Text Sizes
							</h2>
							<div className="flex items-center justify-between w-fit gap-[3vw] mt-[1vh] px-[3.5vh]">
								<p className="text-[4vh] hand-coffe text-left w-[25vw]">
									The Main Heading Size
								</p>
								<p className="hand-coffe text-[3vh]">4vh</p>
							</div>
							<div className="flex items-center justify-between w-fit gap-[3vw] px-[3.5vh]">
								<p className="text-[3.25vh] hand-coffe text-left w-[25vw]">
									Sub Heading
								</p>
								<p className="hand-coffe text-[3vh]">3.25vh</p>
							</div>
							<div className="flex items-center justify-between w-fit gap-[3vw] px-[3.5vh]">
								<p className="text-[2.5vh] hand-coffe text-left w-[25vw]">
									Body Text
								</p>
								<p className="hand-coffe text-[3vh]">2.5vh</p>
							</div>
						</div>

						<motion.h1
							variants={line}
							className="hand-coffe text-[3vh] text-right"
						>
							<AnimatedText>Make your own guide along the way</AnimatedText>
						</motion.h1>
					</div>
				)}

				{/* PAGE 2 */}
				{step === 1 && (
					<div className="w-[45vw]">
						<motion.h1 variants={line} className="hand-coffe text-[5vh]">
							<AnimatedText>
								You can treat the design guide like a framework for making a
								website
							</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] mt-[4vh] text-left"
						>
							<AnimatedText>The right guide</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] text-left"
						>
							<AnimatedText>is half of the job</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] text-right mb-[3vh]"
						>
							<AnimatedText>Let's continue!</AnimatedText>
						</motion.h1>
						{/* <a
							href="/colors"
							className="px-[3vw] py-[0.5vh] hand-coffe text-[2.5vh] border-2 border-dashed cursor-pointer bg-white ml-auto"
						>
							{"->"}
						</a> */}
					</div>
				)}

				<div className="flex items-center justify-between w-full mt-[3vh]">
					{/* BACK PAGE */}
					{step == TOTAL_STEPS - TOTAL_STEPS && (
						<motion.a
							variants={line}
							href="/sizes"
							className="px-[3vw] py-[0.5vh] hand-coffe text-[2.5vh] border-2 border-dashed cursor-pointer bg-white"
						>
							{"<-"}
						</motion.a>
					)}

					{/* BACK */}
					{step > 0 ? (
						<motion.button
							variants={line}
							onClick={() => setStep((s) => Math.max(0, s - 1))}
							className="px-[3vw] py-[0.5vh] hand-coffe text-[2.5vh] border-2 border-dashed cursor-pointer bg-white"
						>
							{"<-"}
						</motion.button>
					) : (
						<div />
					)}

					{/* NEXT */}
					{step < TOTAL_STEPS - 1 && (
						<motion.button
							variants={line}
							onClick={() => setStep((s) => s + 1)}
							className="px-[3vw] py-[0.5vh] hand-coffe text-[2.5vh] border-2 border-dashed cursor-pointer bg-white"
						>
							{"->"}
						</motion.button>
					)}

					{/* NEXT PAGE */}
					{step == TOTAL_STEPS - 1 && (
						<motion.a
							variants={line}
							href="/fonts"
							className="px-[3vw] py-[0.5vh] hand-coffe text-[2.5vh] border-2 border-dashed cursor-pointer bg-white"
						>
							{"->"}
						</motion.a>
					)}
				</div>

				<motion.div
					variants={line}
					className="flex gap-[1vw] justify-center mt-[3vh]"
				>
					{Array.from({ length: TOTAL_STEPS }).map((_, i) => (
						<button
							key={i}
							onClick={() => setStep(i)}
							className={`w-[1.2vh] h-[1.2vh] rounded-full border border-dashed transition-all translate-y-[-6vh]
			${step === i ? "bg-neutral-800 scale-125" : "bg-transparent"}`}
						/>
					))}
				</motion.div>
			</motion.div>
		</div>
	);
}
