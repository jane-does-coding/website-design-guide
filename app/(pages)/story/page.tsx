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
					<>
						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] font-extralight"
						>
							<AnimatedText>First things first...</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] font-extralight italic ml-auto"
						>
							<AnimatedText>
								Throw away all you know about modern web dev
							</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] mr-[15vw] mt-[4vh] text-left"
						>
							<AnimatedText>You CAN have</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] mr-[15vw] text-left"
						>
							<AnimatedText>Custom Fonts</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] mr-[15vw] text-left"
						>
							<AnimatedText>Custom Sounds</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] mr-[15vw] text-left"
						>
							<AnimatedText>Custom Art</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] text-right"
						>
							<AnimatedText>Custom Everything!</AnimatedText>
						</motion.h1>
					</>
				)}

				{/* PAGE 2 */}
				{step === 1 && (
					<div className="w-[45vw]">
						<motion.h1 variants={line} className="hand-coffe text-[5vh]">
							<AnimatedText>Now we will make a design guide</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] ml-auto"
						>
							<AnimatedText>using which you can make a website!</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] mt-[4vh] text-left"
						>
							<AnimatedText>Follow along</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] text-left"
						>
							<AnimatedText>To make soething awesome</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] text-right mb-[3vh]"
						>
							<AnimatedText>And build something fun.</AnimatedText>
						</motion.h1>
						{/* <a
							href="/colors"
							className="px-[3vw] py-[0.5vh] hand-coffe text-[2.5vh] border-2 border-dashed cursor-pointer bg-white ml-auto"
						>
							{"->"}
						</a> */}
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
							href="/colors"
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
