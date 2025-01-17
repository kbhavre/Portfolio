import { motion } from "framer-motion";
import { opacity, slideUp } from "../motion/index";
import { useEffect, useState } from "react";
import loadingImg from '../assets/preLoad.svg';

const PreLoad = () => {
	const [dimension, setDimension] = useState({ width: 0, height: 0 });

	useEffect(() => {
		setDimension({ width: window.innerWidth, height: window.innerHeight });
	}, []);

	const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
		dimension.height
	} Q${dimension.width / 2} ${dimension.height + 300} 0 ${
		dimension.height
	}  L0 0`;
	const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
		dimension.height
	} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

	const curve = {
		initial: {
			d: initialPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
		},
		exit: {
			d: targetPath,
			transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
		},
	};

	return (
		<motion.div
			variants={slideUp}
			initial="initial"
			exit="exit"
			className="h-screen w-full flex items-center justify-center fixed z-[10000] bg-secondary ml-0 lg:-ml-12">
			{dimension.width > 0 && (
				<>
					<motion.div
						className="flex gap-3 md:gap-10 items-center absolute z-10 overflow-hidden"
						variants={opacity}
						initial="initial"
						animate="enter">
						<motion.p
							initial={{ y: -200 }}
							animate={{ y: 0 }}
							transition={{
								duration: 1.5,
								delay: 0.5,
								ease: [0.76, 0, 0.24, 1],
							}}
							className="font-kyiv text-myBlack font-medium text-3xl md:text-5xl leading-tight tracking-tighter ">
							Think
						</motion.p>
						<motion.img
							initial={{ rotate: 0 }}
							animate={{ rotate: 90 }}
							transition={{
								duration: 1,
								ease: [0.76, 0, 0.24, 1],
							}}
							src={loadingImg}
							alt="loadingImg"
							className="md:w-[250px] md:h-[250px] sm:w-20 sm:h-20"
						/>
						<motion.p
							initial={{ y: 200 }}
							animate={{ y: 0 }}
							transition={{
								duration: 1.5,
								delay: 0.5,
								ease: [0.76, 0, 0.24, 1],
							}}
							className="font-kyiv text-myBlack font-medium text-3xl md:text-5xl leading-tight tracking-tighter ">
							{/* Require Patience */}
                            Build
						</motion.p>
					</motion.div>
					<svg className="absolute top-0 w-full h-calc-100">
						<motion.path
							className="fill-secondary"
							variants={curve}
							initial="initial"
							exit="exit"
						/>
					</svg>
				</>
			)}
		</motion.div>
	);
}

export default PreLoad;