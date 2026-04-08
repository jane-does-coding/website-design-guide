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

const TOTAL_STEPS = 4;

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
							className="hand-coffe text-[4vh] font-extralight"
						>
							<AnimatedText>This one is hard to explain</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[4vh] font-extralight ml-auto"
						>
							<AnimatedText>
								but your website needs to be built like a story
							</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[4vh] font-extralight text-center mt-[5vh] italic"
						>
							<AnimatedText>~ Think of it like a book ~</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] mr-[15vw] mt-[5vh] text-left"
						>
							<AnimatedText>Your site should FLOWWW</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] mr-[10vw] text-left"
						>
							<AnimatedText>And there are two ways of doing so</AnimatedText>
						</motion.h1>
					</div>
				)}

				{/* PAGE 2 */}
				{step === 1 && (
					<div className="w-[55vw]">
						<motion.h1 variants={line} className="hand-coffe text-[5vh]">
							<AnimatedText>
								Take a look at those sites from Awwwards
							</AnimatedText>
						</motion.h1>
						<div className="grid grid-cols-2 gap-[2vh]">
							<div className="w-full rounded-[0.5vh] border-2 border-dashed">
								<img
									src="/imgs/site1.png"
									className="w-full h-full object-cover"
									alt=""
								/>
							</div>
							<div className="w-full rounded-[0.5vh] border-2 border-dashed">
								<img
									src="/imgs/site2.png"
									className="w-full h-full object-cover"
									alt=""
								/>
							</div>
							<div className="w-full rounded-[0.5vh] border-2 border-dashed">
								<img
									src="/imgs/site3.png"
									className="w-full h-full object-cover"
									alt=""
								/>
							</div>
							<div className="w-full rounded-[0.5vh] border-2 border-dashed">
								<img
									src="/imgs/site4.png"
									className="w-full h-full object-cover"
									alt=""
								/>
							</div>
						</div>
						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] text-left"
						>
							<AnimatedText>They do have something in common...</AnimatedText>
						</motion.h1>
					</div>
				)}

				{/* PAGE 3 */}
				{step === 2 && (
					<div className="w-[55vw]">
						<motion.h1 variants={line} className="hand-coffe text-[5vh]">
							<AnimatedText>All of them have JUST ONE action</AnimatedText>
						</motion.h1>
						<div className="grid grid-cols-2 gap-[2vh]">
							<div className="w-full rounded-[0.5vh] border-2 border-dashed">
								<img
									src="/imgs/site1.png"
									className="w-full h-full object-cover"
									alt=""
								/>
							</div>
							<div className="w-full rounded-[0.5vh] border-2 border-dashed">
								<img
									src="/imgs/site2.png"
									className="w-full h-full object-cover"
									alt=""
								/>
							</div>
							<div className="w-full rounded-[0.5vh] border-2 border-dashed">
								<img
									src="/imgs/site3.png"
									className="w-full h-full object-cover"
									alt=""
								/>
							</div>
							<div className="w-full rounded-[0.5vh] border-2 border-dashed">
								<img
									src="/imgs/site4.png"
									className="w-full h-full object-cover"
									alt=""
								/>
							</div>
						</div>
						<motion.h1
							variants={line}
							className="hand-coffe text-left text-[5vh]"
						>
							<AnimatedText>
								One way the user can unfold that story
							</AnimatedText>
						</motion.h1>
					</div>
				)}

				{/* PAGE 4 */}
				{step === 3 && (
					<div className="w-[50vw]">
						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] w-[80%] ml-auto"
						>
							<AnimatedText>
								Having many actions a user can take is clutter and requires
								brain power
							</AnimatedText>
						</motion.h1>
						<motion.h1
							variants={line}
							className="hand-coffe text-[3.25vh] w-[75%] text-left mt-[5vh] mr-auto"
						>
							<AnimatedText>
								While we are trying to make the user flow through the website
								like it's a story, and see all of it, rather than having to go
								through it like a maze to discover the pages.
							</AnimatedText>
						</motion.h1>
						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] w-[60%] text-right mt-[2vh] ml-auto"
						>
							<AnimatedText>
								Make it ONE flow, ONE action on the pages.
							</AnimatedText>
						</motion.h1>
					</div>
				)}

				<div className="flex items-center justify-between w-full mt-[3vh]">
					{/* BACK PAGE */}
					{step == TOTAL_STEPS - TOTAL_STEPS && (
						<motion.a
							variants={line}
							href="/fonts"
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
							href="/page3"
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
