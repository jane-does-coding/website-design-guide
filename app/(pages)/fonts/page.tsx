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

const TOTAL_STEPS = 5;

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
							<AnimatedText>We got the text sizes</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="text-[4vh] font-semibold ml-auto mt-[2vh]"
						>
							<AnimatedText>Now about the text fonts</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="serif text-[4vh] mt-[2vh] text-left"
						>
							<AnimatedText>How to know what font to use?</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] mt-[2vh] text-left"
						>
							<AnimatedText>Where to find fonts?</AnimatedText>
						</motion.h1>
					</div>
				)}

				{/* PAGE 2 */}
				{step === 1 && (
					<div className="w-[50vw] relative">
						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] w-full text-center "
						>
							<AnimatedText>There are 2 main kinds of fonts</AnimatedText>
						</motion.h1>
						<div className="flex w-full mt-[2vh] border-x-2 border-dashed">
							<div className="w-1/2 flex flex-col items-start justify-center py-[0.5vh] px-[1vw] border-r-2 border-dashed">
								<h2 className="text-[3.5vh]">Sans Serif Font</h2>
								<p className="text-[2.25vh] mt-[1.5vh] text-left">
									Sans serif font is used in most modern applications and
									websites.
								</p>
								<div className="flex flex-col items-start justify-center mt-[2vh]">
									<p className="text-[2.25vh] text-left">- Modern</p>
									<p className="text-[2.25vh] text-left">- Clean</p>
									<p className="text-[2.25vh] text-left">- Minimalistic</p>
								</div>
							</div>
							<div className="w-1/2 flex flex-col items-start justify-center py-[0.5vh] px-[1vw]">
								<h2 className="text-[3.5vh] serif">Serif Font</h2>
								<p className="text-[2.25vh] mt-[1.5vh] text-left serif">
									Sans serif font is used in more odler applications, or those
									who want to seem older.
								</p>
								<div className="flex flex-col items-start justify-center mt-[2vh]">
									<p className="text-[2.25vh] text-left serif">- Trustworthy</p>
									<p className="text-[2.25vh] text-left serif">- Aged</p>
									<p className="text-[2.25vh] text-left serif">- Elegant</p>
								</div>
							</div>
						</div>
						<motion.h1
							variants={line}
							className="hand-coffe text-[4vh] w-full text-center mt-[2vh]"
						>
							<AnimatedText>There is also Monoscape Fonts</AnimatedText>
						</motion.h1>
						<div className="flex flex-col w-full mt-[2vh] border-x-2 border-dashed px-[1vw]">
							<p className="mono text-left text-[3vh]">
								Monoscape fonts are those where each letter takes up same amount
								of space
							</p>
							<p className="mono text-left text-[2vh] mt-[2vh]">
								Monoscape fonts are used for best readibily, and they are
								usually found in code editors, terminals, or sometimes text
								editors.
							</p>
						</div>
					</div>
				)}

				{/* PAGE 3 */}
				{step === 2 && (
					<div className="w-[45vw] relative">
						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] w-full text-center "
						>
							<AnimatedText>There are also Custom Fonts</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[4vh] w-full text-center mt-[1vh]"
						>
							<AnimatedText>
								The one I'm using here is called Hand Coffee Font
							</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[3vh] w-[80%] text-left mt-[4vh]"
						>
							<p>
								You can find custom fonts on websites like{" "}
								<a href="https://fonts.google.com/" className="text-blue-800">
									{" "}
									Google Fonts
								</a>
								<a href="https://www.fontspace.com/" className="text-blue-800">
									, Font Space
								</a>
								<a
									href="https://www.1001freefonts.com/"
									className="text-blue-800"
								>
									, 1001 Fonts, etc.
								</a>
							</p>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[4vh] w-full text-right mt-[4vh]"
						>
							<AnimatedText>OR YOU CAN MAKE YOUR OWN FONT!</AnimatedText>
						</motion.h1>

						<motion.h1
							variants={line}
							className="hand-coffe text-[4vh] w-full text-right mt-[1vh]"
						>
							Using websites like{" "}
							<a
								href="https://www.calligraphr.com/en/"
								className="text-blue-800"
							>
								calligraphr.com/en/
							</a>
						</motion.h1>
					</div>
				)}

				{/* PAGE 4 */}
				{step === 3 && (
					<div className="w-[45vw] relative">
						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] w-full text-center "
						>
							<AnimatedText>
								You have full power over how crazy your font can get!
							</AnimatedText>
							<div className="flex items-center justify-between my-[2vh]">
								<img
									src="/imgs/font-template.png"
									className="w-[20vw] border-2 border-dashed rounded-[0.5vh]"
									alt=""
								/>
								<p className="text-[3vh] text-right w-[40%] leading-[5vh] ml-auto">
									<AnimatedText>
										If you'd like to create a font, it's this template that you
										would be using. It is really that simple, you should try for
										yourself!
									</AnimatedText>
								</p>
							</div>
						</motion.h1>
					</div>
				)}

				{/* PAGE 5 */}
				{step === 4 && (
					<div className="w-[45vw] relative">
						<motion.h1
							variants={line}
							className="hand-coffe text-[5vh] w-full text-left pr-[5vw]"
						>
							<AnimatedText>
								You need 1-2 fonts for your website, but no more than 2!
							</AnimatedText>
							<div className="flex flex-col items-center justify-center my-[2vh]">
								<p className="text-[4vh] text-right w-full leading-[5vh] ml-auto">
									<AnimatedText>One for headings</AnimatedText>
								</p>
								<p className="text-[4vh] text-right w-full leading-[5vh] ml-auto">
									<AnimatedText>Which can be as wild as you want</AnimatedText>
								</p>
								<p className="text-[4vh] text-left w-full mt-[3vh] leading-[5vh] mr-auto">
									<AnimatedText>And one for body text</AnimatedText>
								</p>
								<p className="text-[4vh] text-left w-full mt-[1vh] leading-[5vh] mr-auto">
									<AnimatedText>
										Which must be more simple and readable
									</AnimatedText>
								</p>
							</div>
						</motion.h1>
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
							href="/story"
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
