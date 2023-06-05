import { AnimatePresence } from "framer-motion";


function PhotoLoader({ Component, pageProps, router }) {
    return (
        <AnimatePresence
            mode="wait"
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            <Component {...pageProps} key={router.asPath} />;
        </AnimatePresence>
    );
}
export default PhotoLoader;
