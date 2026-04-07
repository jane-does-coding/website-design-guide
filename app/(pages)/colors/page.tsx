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

						<div className="grid grid-cols-2 gap-[4vw] mt-[5vh]">
							<div className="w-full flex flex-col gap-[0.5vh] h-[17.5vh]">
								<p className="hand-coffe text-[3vh] text-center">
									Same color, different shades
								</p>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-200"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-400"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-800"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-950"></div>
							</div>
							<div className="w-full flex flex-col gap-[0.5vh] h-[17.5vh]">
								<p className="hand-coffe text-[3vh] text-center">60-30-10</p>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-200"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-950/70"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-indigo-500"></div>
							</div>
							<div className="w-full flex flex-col gap-[0.5vh] h-[17.5vh]">
								<p className="hand-coffe text-[3vh] text-center">
									4 contrasting colors
								</p>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-red-500"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-yellow-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-green-400"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-blue-500"></div>
							</div>
							<div className="w-full flex flex-col gap-[0.5vh] h-[17.5vh]">
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
							Opposites on the Color Wheel + neutral
						</p>
						<div className="grid grid-cols-2 gap-[4vw] mt-[1vh]">
							<div className="w-full flex flex-col gap-[0.5vh] h-[17.5vh]">
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-yellow-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-purple-400"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-slate-950/70"></div>
							</div>
							<div className="w-full flex flex-col gap-[0.5vh] h-[17.5vh]">
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-green-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-pink-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-950/70"></div>
							</div>
						</div>
						<p className="hand-coffe text-[3vh] text-center mt-[3vh]">
							Same Color, Different Shades
						</p>
						<div className="grid grid-cols-2 gap-[4vw] mt-[1vh]">
							<div className="w-full flex flex-col gap-[0.5vh] h-[17.5vh]">
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-500"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-700"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-amber-950"></div>
							</div>
							<div className="w-full flex flex-col gap-[0.5vh] h-[17.5vh]">
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-indigo-300"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-indigo-500"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-indigo-700"></div>
								<div className="h-full w-full rounded-[0.5vh] border-2 border-dashed bg-indigo-950"></div>
							</div>
						</div>
					</div>
				)}

				{step < 3 && (
					<motion.button
						variants={line}
						onClick={() => setStep((s) => s + 1)}
						className="px-[3vw] py-[0.5vh] hand-coffe text-[2.5vh] border-2 border-dashed cursor-pointer mt-[5vh] ml-auto"
					>
						{"->"}
					</motion.button>
				)}
			</motion.div>
		</div>
	);
}
