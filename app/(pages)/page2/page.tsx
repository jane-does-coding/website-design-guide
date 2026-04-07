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
					<>
						<motion.h1
							variants={line}
							className="hand-coffe text-[4vh] font-extralight"
						>
							<AnimatedText>So we got the colors figured out!</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[2.5vh] font-extralight italic ml-auto mt-[2vh]"
						>
							<AnimatedText>What next?</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[12vh] scale-x-150 mt-[2vh] text-center"
						>
							<AnimatedText>THE SIZES</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] text-center mt-[2vh]"
						>
							<AnimatedText>Why are they so important?</AnimatedText>
						</motion.h1>
					</>
				)}

				{/* PAGE 2 */}
				{step === 1 && (
					<div className="w-[50vw] relative">
						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] w-[80%] text-center "
						>
							<AnimatedText>
								Your website should have 1-3 different text sizes, no more
								(usually).
							</AnimatedText>
						</motion.h1>
						<div className="absolute top-0 right-0 flex flex-col h-full  w-[20%] items-center justify-evenly border-l-2 border-dashed">
							<p className="text-[4vh] hand-coffe h-[66%]">5vh</p>
							<p className="text-[4vh] hand-coffe h-[17%]">2.5vh</p>
							<p className="text-[4vh] hand-coffe h-[17%]">4vh</p>
						</div>

						<motion.h1
							variants={line}
							className="hand-coffe text-[2.5vh] mt-[4vh] w-[80%] text-left"
						>
							<AnimatedText>
								There is one size for headings, one for sub headings, and body
								text.
							</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[4vh] mt-[3vh] w-[80%] text-left"
						>
							<AnimatedText>
								You usually don't need more than 3 sizes?
							</AnimatedText>
						</motion.h1>
					</div>
				)}

				{step < 3 && (
					<motion.button
						variants={line}
						onClick={() => setStep((s) => s + 1)}
						className="px-[3vw] py-[0.5vh] hand-coffe text-[2.5vh] border-2 border-dashed cursor-pointer bg-white mt-[3vh] ml-auto"
					>
						{"->"}
					</motion.button>
				)}
			</motion.div>
		</div>
	);
}
