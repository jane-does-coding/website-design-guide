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

const word = {
	hidden: { opacity: 0, y: 10 },
	show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const TOTAL_STEPS = 6;

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

export default function Colors() {
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
					<>
						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] font-extralight text-center"
						>
							<AnimatedText>Let's talk colors!</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[4vh] mt-[0vh] font-extralight ml-auto"
						>
							<AnimatedText>
								There are multiple ways to go about colors
							</AnimatedText>
						</motion.h1>

						<div className="grid grid-cols-2 gap-[4vw] gap-y-[4vh] mt-[5vh]">
							<div className="w-full flex flex-col gap-[0.5vh] h-[20vh]">
								<p className="hand-coffe text-[3vh] text-center">
									Same color, different shades
								</p>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-200"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-400"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-800"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-950"></div>
							</div>
							<div className="w-full flex flex-col gap-[0.5vh] h-[20vh]">
								<p className="hand-coffe text-[3vh] text-center">
									2 Opposites, 2 Neutral
								</p>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-yellow-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-indigo-500"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-50"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-950/70"></div>
							</div>
							<div className="w-full flex flex-col gap-[0.5vh] h-[20vh]">
								<p className="hand-coffe text-[3vh] text-center">
									4 contrasting colors
								</p>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-red-500"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-yellow-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-green-400"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-blue-500"></div>
							</div>
							<div className="w-full flex flex-col gap-[0.5vh] h-[20vh]">
								<p className="hand-coffe text-[3vh] text-center">
									Black & White
								</p>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-neutral-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-neutral-500"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-neutral-600"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-neutral-800"></div>
							</div>
						</div>
					</>
				)}

				{/* PAGE 2 */}
				{step === 1 && (
					<div className="w-[45vw]">
						<motion.h1 variants={line} className="hand-coffe text-[5vh]">
							<AnimatedText>What NOT to do</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[4vh] text-center ml-auto mt-[4vh]"
						>
							<AnimatedText>No Absolutes</AnimatedText>
						</motion.h1>
						<div className="w-full flex gap-[0.5vw] mt-[1vh]">
							<div className="h-[6vh] w-full border-dashed border-2 flex items-center justify-center rounded-[0.5vh] bg-black">
								<p className="text-white hand-coffe text-[2.75vh] text-center">
									no 100% black
								</p>
							</div>
							<div className="h-[6vh] w-full border-dashed border-2 flex items-center justify-center rounded-[0.5vh] bg-white">
								<p className="text-black hand-coffe text-[2.75vh] text-center">
									no 100% black
								</p>
							</div>
						</div>
						<p className="text-center hand-coffe text-[2.5vh] mt-[2vh]">
							Absolute colors, meaning 100% of one color are way sharp on the
							eyes, and lowering them down smoothes the design
						</p>
						<motion.h1
							variants={line}
							className="hand-coffe text-[4vh] text-center ml-auto mt-[4vh]"
						>
							<AnimatedText>No Mid-Colors</AnimatedText>
						</motion.h1>
						<div className="w-full flex gap-[0.5vw] mt-[1vh]">
							<div className="h-[6vh] w-full border-dashed border-2 flex items-center justify-center rounded-[0.5vh] bg-neutral-400">
								<p className="text-white hand-coffe text-[2.75vh] text-center">
									Bad Contrast
								</p>
							</div>
							<div className="h-[6vh] w-full border-dashed border-2 flex items-center justify-center rounded-[0.5vh] bg-neutral-400">
								<p className="text-black hand-coffe text-[2.75vh] text-center">
									Also Bad Contrast
								</p>
							</div>
						</div>
						<p className="text-center hand-coffe text-[2.5vh] mt-[2vh]">
							Where are you gonna use this color? White or black text both look
							meh on it, and it's hard to impliment it anywhere.
						</p>
					</div>
				)}

				{/* PAGE 3 */}
				{step === 2 && (
					<div className="w-[45vw]">
						<motion.h1 variants={line} className="hand-coffe text-[5vh]">
							<AnimatedText>What to do</AnimatedText>
						</motion.h1>

						<p className="hand-coffe text-[3vh] text-center mt-[2vh]">
							Opposites on the Color Wheel + 2 Neutral
						</p>
						<div className="grid grid-cols-2 gap-[4vw] mt-[1vh]">
							<div className="w-full flex flex-col gap-[0.5vh] h-[20vh]">
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-yellow-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-purple-400"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-slate-100"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-slate-700"></div>
							</div>
							<div className="w-full flex flex-col gap-[0.5vh] h-[20vh]">
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-green-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-pink-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-50"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-950/80"></div>
							</div>
						</div>
						<p className="hand-coffe text-[3vh] text-center mt-[3vh]">
							Same Color, Different Shades
						</p>
						<div className="grid grid-cols-2 gap-[4vw] mt-[1vh]">
							<div className="w-full flex flex-col gap-[0.5vh] h-[20vh]">
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-500"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-700"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-950"></div>
							</div>
							<div className="w-full flex flex-col gap-[0.5vh] h-[20vh]">
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-indigo-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-indigo-500"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-indigo-700"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-indigo-950"></div>
							</div>
						</div>
					</div>
				)}

				{/* PAGE 4 */}
				{step === 3 && (
					<div className="w-[45vw]">
						<motion.h1 variants={line} className="hand-coffe text-[5vh]">
							<AnimatedText>What to do</AnimatedText>
						</motion.h1>

						<p className="hand-coffe text-[3vh] text-center mt-[2vh]">
							4 Contrasting Colors
						</p>
						<div className="grid grid-cols-2 gap-[4vw] mt-[1vh]">
							<div className="w-full flex flex-col gap-[0.5vh] h-[20vh]">
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-red-500"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-yellow-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-sky-400"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-green-400"></div>
							</div>
							<div className="w-full flex flex-col gap-[0.5vh] h-[20vh]">
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-indigo-400"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-purple-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-50"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-950/80"></div>
							</div>
						</div>
						<p className="hand-coffe text-[3vh] text-center mt-[4vh]">
							Buddies on the Color Wheel + 2 Neutrals
						</p>
						<div className="grid grid-cols-2 gap-[4vw] mt-[1vh]">
							<div className="w-full flex flex-col gap-[0.5vh] h-[20vh]">
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-purple-400"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-blue-400"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-neutral-50"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-neutral-700"></div>
							</div>
							<div className="w-full flex flex-col gap-[0.5vh] h-[20vh]">
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-green-400"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-yellow-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-50"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-yellow-950"></div>
							</div>
						</div>
					</div>
				)}

				{/* PAGE 5 */}
				{step === 4 && (
					<div className="w-[45vw] relative">
						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] translate-y-[5vh]"
						>
							<AnimatedText>Try it?</AnimatedText>
						</motion.h1>

						<p className="absolute top-[12vh] left-[3vw] text0black hand-coffe text-[3vh]">
							Purple here {"->"}
						</p>
						<p className="absolute top-[27vh] right-[3vw] text0black hand-coffe text-[3vh]">
							{"<-"}Yellow here
						</p>
						<div className="w-[20vw] overflow-hidden rounded-full border border-dashed mx-auto relative">
							<img
								src="/imgs/color-wheel.png"
								className="w-full rounded-full object-cover scale-130"
								alt=""
							/>
						</div>
						<p className="hand-coffe ml-[2vw] text-[3vh] text-left mt-[3vh]">
							Purple and Yellow are opposites
						</p>
						<p className="hand-coffe mr-[6vw] text-[3vh] text-right">
							Then we add light and dark neutrals
						</p>
						<div className="grid grid-cols-2 gap-[4vw] mt-[3vh]">
							<div className="w-full flex flex-col gap-[0.5vh] h-[17vh]">
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-[#662C91]"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-yellow-400"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-[#F3FFC6]"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-neutral-800"></div>
							</div>
							<div className="w-full flex flex-col gap-[0.5vh] h-[20vh] items-center justify-start">
								<p className="text-right text-[2.5vh] hand-coffe w-[70%]">
									Kinda gives Halloween vibes, but you get the main idea
								</p>
							</div>
						</div>
					</div>
				)}

				{/* PAGE 6 */}
				{step === 5 && (
					<div className="w-[45vw] relative">
						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] translate-y-[0vh]"
						>
							<AnimatedText>What do you need?</AnimatedText>
						</motion.h1>

						<p className="hand-coffe ml-[2vw] text-[3vh] text-left mt-[3vh]">
							What is it that's needed to call the pallete full?
						</p>

						<div className="grid grid-cols-2 gap-[4vw] mt-[3vh]">
							<div className="w-full flex flex-col gap-[0.5vh] h-[25vh]">
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed flex items-center justify-center">
									<p className="text-[2.5vh] hand-coffe">Main Color</p>
								</div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed flex items-center justify-center">
									<p className="text-[2.5vh] hand-coffe">Secondary Color</p>
								</div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed flex items-center justify-center">
									<p className="text-[2.5vh] hand-coffe">Light Neutral</p>
								</div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed flex items-center justify-center">
									<p className="text-[2.5vh] hand-coffe">Dark Neutral</p>
								</div>
							</div>
							<div className="w-full flex flex-col gap-[0.5vh] h-[25vh] items-start justify-evenly">
								<p className="text-[2.5vh] hand-coffe">- Primary</p>
								<p className="text-[2.5vh] hand-coffe">- Accent & Details</p>
								<p className="text-[2.5vh] hand-coffe">- Background</p>
								<p className="text-[2.5vh] hand-coffe">
									- Text, Borders, Details
								</p>
							</div>
						</div>
					</div>
				)}

				<div className="flex items-center justify-between w-full mt-[5vh]">
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
							href="/page2"
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
