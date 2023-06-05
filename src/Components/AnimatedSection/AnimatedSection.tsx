import { motion, Variants } from "framer-motion";
import {Card , CardContainer } from './styles'
import {AnimatedSectionTypes} from './types'
import Photo from '../Photo';

const cardVariants: Variants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 50,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: .5,
            duration: 1
        }
    }
};

/**
 * AnimatedSection component that handle the bouncing animation of each card/photo element
 * @param   {id}  string    id of the Photo
 * @param   {src}  string   the image resource
 * @param   {placeholder}  string   the image placeholder
 * @param   {width}  number  the image width
 * @param   {height}  number  the image height
 * @returns {*}   A card container the have a bounce animation
 */
function AnimatedSection({id , src , title, placeholder , width, height}: AnimatedSectionTypes) {
    return (
        <CardContainer
            as={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <Card as={motion.div} variants={cardVariants}>
                <Photo id={id} src={src} title={title} placeholder={placeholder} width={width} height={height}/>
            </Card>
        </CardContainer>
    );
}

export default AnimatedSection;
