import { motion } from "framer-motion";
import "./Hexagon.sass";

function Hexagon({ image }: { image: string }) {
    return (
    <motion.div className="Hexagon"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 2.5 }}
    >
    <div className="HexImage"><img src={image} /></div>
        </motion.div>);
}

export default Hexagon;