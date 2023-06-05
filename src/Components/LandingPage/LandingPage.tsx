import React from 'react';
import AnimatedSection from '../../Components/AnimatedSection/AnimatedSection'
import { motion, useScroll } from "framer-motion";
import { photos } from "../../../public/data/photos";

import {ProgressBar} from './styles'

/**
 * landing page component that have vertical progress bar and the photo iterator

 * @returns {*}   React Componenet
 */

const LandingPage = () => {
    const { scrollYProgress } = useScroll();
    return (
        <div>
        <ProgressBar as={motion.div} style={{
            scaleY: scrollYProgress,
            transformOrigin: '0% 0%', }}>
        </ProgressBar>
            <div>
                {photos.map(({id , src , title, placeholder , width, height}) => (
                    <AnimatedSection id={id} src={src} title={title} placeholder={placeholder} width={width} height={height} />
                ))}
            </div>
        </div>
    );
};

export default LandingPage;
