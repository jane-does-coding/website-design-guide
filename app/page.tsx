"use client";

import { motion } from "framer-motion";

const mainContainer = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const item = {
	hidden: { opacity: 0, y: 30 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.8 },
	},
};

const corners = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delay: 1.2,
			duration: 0.6,
		},
	},
};

const wordContainer = {
	hidden: {},
	show: {
		transition: { staggerChildren: 0.06 },
	},
};

const word = {
	hidden: { opacity: 0, y: 15 },
	show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

function AnimatedText({ text }: { text: string }) {
	return (
		<motion.span variants={wordContainer}>
			{text.split(" ").map((w, i) => (
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

export default function Home() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center relative">
			{/* corners */}
			<motion.p
				variants={corners}
				initial="hidden"
				animate="show"
				className="text-[3vh] absolute top-[2vh] left-[2vw] hand-coffe"
			>
				2026
			</motion.p>

			<motion.a
				variants={corners}
				initial="hidden"
				animate="show"
				href="/all-nav"
				className="text-[3vh] absolute top-[2vh] right-[2vw] hand-coffe"
			>
				All Nav
			</motion.a>

			<motion.p
				variants={corners}
				initial="hidden"
				animate="show"
				className="text-[3vh] absolute bottom-[2vh] right-[2vw] hand-coffe"
			>
				by Jane
			</motion.p>

			{/* main content */}
			<motion.div
				className="flex flex-col text-right"
				variants={mainContainer}
				initial="hidden"
				animate="show"
			>
				<motion.h1
					variants={item}
					className="hand-coffe text-[5vh] font-extralight"
				>
					<AnimatedText text="Want to make a" />{" "}
					<span className="border-b-2 border-dashed italic">
						<AnimatedText text="website?" />
					</span>
				</motion.h1>

				<motion.h1
					variants={item}
					className="hand-coffe text-[5vh] font-extralight border-b-2 border-dashed w-fit ml-auto italic"
				>
					<AnimatedText text="a pretty website?" />
				</motion.h1>

				<motion.h1
					variants={item}
					className="hand-coffe text-[5vh] font-extralight mr-[15vw] mt-[4vh]"
				>
					<AnimatedText text="I will guide you!" />
				</motion.h1>

				<motion.a
					href="/page1"
					variants={item}
					className="px-[3vw] py-[0.5vh] hand-coffe text-[2.5vh] border-2 border-dashed cursor-pointer mt-[1vh] ml-auto"
				>
					Start
				</motion.a>
			</motion.div>
		</div>
	);
}
