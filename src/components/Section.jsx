import Image from 'next/image';
import Background from '../../public/images/1.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Section() {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", 'end start']
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <>
            {/* Texto Grande "MARIA DEL RIO" fuera de la imagen */}
            <div className="w-full text-left my-20 mb-0">
                <h1 className="text-8xl font-bold">
                    MARIA DEL RIO
                </h1>
            </div>

            {/* Sección con imagen de fondo y video */}
            <div
                ref={container}
                className='relative flex items-center justify-center h-screen overflow-hidden'
                style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
            >
                <div className='relative z-10 p-20 text-white w-full h-full flex flex-col justify-between'>
                    {/* Video en el centro */}
                    <div className="absolute inset-0 flex justify-center items-center">
                        <video className="w-[40vw] h-auto" controls>
                            <source src="/videos/1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Imagen de fondo */}
                <div className='fixed top-[-10vh] left-0 h-[120vh] w-full p-2'>
                    <motion.div style={{y}} className='relative w-full h-full'>
                        <Image src={Background} fill alt="image" style={{objectFit: "cover"}}/>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
