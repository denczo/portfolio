import { motion } from "framer-motion";
import "./Hexagon.sass";

function Hexagon({ image, title }: { image: string, title: string }) {
    return (
        <motion.div className="Hexagon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.75 }}>
            <div className="HexImage"><img src={image} /></div>
            <div className="">{title}</div>
        </motion.div>);
}

export default Hexagon;