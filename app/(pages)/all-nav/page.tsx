"use client";
import { motion } from "framer-motion";

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const item = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const Page = () => {
	return (
		<motion.div
			className="w-screen h-screen grid grid-cols-4 gap-[2vh] py-[10vh] px-[5vw]"
			variants={container}
			initial="hidden"
			animate="show"
		>
			<motion.div
				variants={item}
				className="w-full h-full border-2 border-dashed relative flex items-center justify-center"
			>
				<p className="hand-coffe text-[2vh] absolute top-[1vh] left-[1vw]">
					01
				</p>
				<h3 className="hand-coffe text-[4vh] uppercase">Colors</h3>
			</motion.div>

			<motion.div
				variants={item}
				className="w-full h-full border-2 border-dashed relative flex items-center justify-center"
			>
				<p className="hand-coffe text-[2vh] absolute top-[1vh] left-[1vw]">
					02
				</p>
				<h3 className="hand-coffe text-[4vh] uppercase">Story</h3>
			</motion.div>

			<motion.div
				variants={item}
				className="w-full h-full border-2 border-dashed relative flex items-center justify-center"
			>
				<p className="hand-coffe text-[2vh] absolute top-[1vh] left-[1vw]">
					03
				</p>
				<h3 className="hand-coffe text-[4vh] uppercase">Sounds</h3>
			</motion.div>

			<motion.div
				variants={item}
				className="w-full h-full border-2 border-dashed relative flex items-center justify-center"
			>
				<p className="hand-coffe text-[2vh] absolute top-[1vh] left-[1vw]">
					04
				</p>
				<h3 className="hand-coffe text-[4vh] uppercase">Art</h3>
			</motion.div>

			<motion.div
				variants={item}
				className="w-full h-full border-2 border-dashed relative flex items-center justify-center"
			>
				<p className="hand-coffe text-[2vh] absolute top-[1vh] left-[1vw]">
					05
				</p>
				<h3 className="hand-coffe text-[4vh] uppercase">Fonts</h3>
			</motion.div>

			<motion.div
				variants={item}
				className="w-full h-full border-2 border-dashed relative flex items-center justify-center"
			>
				<p className="hand-coffe text-[2vh] absolute top-[1vh] left-[1vw]">
					06
				</p>
				<h3 className="hand-coffe text-[4vh] uppercase">Theme</h3>
			</motion.div>

			<motion.div
				variants={item}
				className="w-full h-full border-2 border-dashed relative flex items-center justify-center"
			>
				<p className="hand-coffe text-[2vh] absolute top-[1vh] left-[1vw]">
					07
				</p>
				<h3 className="hand-coffe text-[4vh] uppercase">Animations</h3>
			</motion.div>

			<motion.div
				variants={item}
				className="w-full h-full border-2 border-dashed relative flex items-center justify-center"
			>
				<p className="hand-coffe text-[2vh] absolute top-[1vh] left-[1vw]">
					08
				</p>
				<h3 className="hand-coffe text-[4vh] uppercase">Sizes</h3>
			</motion.div>

			<motion.div
				variants={item}
				className="w-full h-full border-2 border-dashed relative flex items-center justify-center"
			>
				<p className="hand-coffe text-[2vh] absolute top-[1vh] left-[1vw]">
					09
				</p>
				<h3 className="hand-coffe text-[4vh] uppercase">Details</h3>
			</motion.div>

			<motion.div
				variants={item}
				className="w-full h-full border-2 border-dashed relative flex items-center justify-center"
			>
				<p className="hand-coffe text-[2vh] absolute top-[1vh] left-[1vw]">
					10
				</p>
				<h3 className="hand-coffe text-[4vh] uppercase">Layout</h3>
			</motion.div>

			<motion.div
				variants={item}
				className="w-full h-full border-2 border-dashed relative flex items-center justify-center"
			>
				<p className="hand-coffe text-[2vh] absolute top-[1vh] left-[1vw]">
					11
				</p>
				<h3 className="hand-coffe text-[4vh] uppercase">Mobile</h3>
			</motion.div>

			<motion.div
				variants={item}
				className="w-full h-full border-2 border-dashed relative flex items-center justify-center"
			>
				<p className="hand-coffe text-[2vh] absolute top-[1vh] left-[1vw]">
					12
				</p>
				<h3 className="hand-coffe text-[4vh] uppercase">Colors</h3>
			</motion.div>
		</motion.div>
	);
};

export default Page;
