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

const TOTAL_STEPS = 3;

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
					<div className="w-[45vw]">
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
					</div>
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
							<p className="text-[4vh] hand-coffe h-[60%]">5vh</p>
							<p className="text-[4vh] hand-coffe h-[23%]">2.5vh</p>
							<p className="text-[4vh] hand-coffe h-[17%]">4vh</p>
						</div>

						<motion.h1
							variants={line}
							className="hand-coffe text-[2.5vh] mt-[4vh] w-[80%] text-center"
						>
							<AnimatedText>
								There is one size for headings, one for sub headings, and one
								for body text.
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

				{/* PAGE 3 */}
				{step === 2 && (
					<div className="w-[50vw] relative border-2 border-dashed py-[3vh] pt-[1vh] px-[3vw]">
						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] w-full text-center"
						>
							<AnimatedText>
								Padding sizes and spacing create the whole vibe of the page.
							</AnimatedText>
						</motion.h1>

						<div className="grid grid-cols-2 gap-[3vh] mt-[2vh]">
							<div className="w-full border-2 bg-white border-dashed">
								<h2 className="hand-coffe text-[2.5vh] text-left tracking-[-1px] leading-[2.75vh]">
									No padding just look cluttered and the lack of space makes it
									hard on the eyes. The letter spacing and the line spacing also
									plays crusial role by the way...
								</h2>
							</div>
							<div className="w-full border-2 bg-white border-dashed p-[4vh]">
								<h2 className="hand-coffe text-[2.45vh] text-left leading-[6vh]">
									In here there is regular padding. But the line height is
									larger.
								</h2>
							</div>
							<div className="w-full border-2 bg-white border-dashed p-[3vh]">
								<h2 className="hand-coffe text-[2.5vh] text-left">
									This has a regular amount of padding and spacing here.
								</h2>
							</div>
							<div className="w-full border-2 bg-white border-dashed p-[3vh]">
								<h2 className="hand-coffe text-[2.5vh] text-left tracking-[0.5vh]">
									You can play around with spacing to create different vibes,
									depending on what fits your website.
								</h2>
							</div>
						</div>
					</div>
				)}

				<div className="flex items-center justify-between w-full mt-[3vh]">
					{/* BACK PAGE */}
					{step == TOTAL_STEPS - TOTAL_STEPS && (
						<motion.a
							variants={line}
							href="/colors"
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
