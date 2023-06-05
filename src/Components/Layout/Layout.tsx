import { motion } from "framer-motion";
/**
 * A HOC that take any page and give it smooth transtion felling

 * @returns {*}   A HOC
 */
const Layout = ({ children }) => (
    <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
        }}
    >
        {children}
    </motion.div>
);
export default Layout;
