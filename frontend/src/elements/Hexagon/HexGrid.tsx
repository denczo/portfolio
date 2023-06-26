import { motion } from "framer-motion";
import "./HexGrid.sass";

function createHexagons(amount: number) {
    var grid = [];
    for (var i = 0; i < amount; i++) {
        grid.push(<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.03 * i }}>
        </motion.div>);
    }
    return grid;
}

const HexGrid = ({ amount }: { amount: number }) => {
    return (<div className="main">
        <div className="container">
            {createHexagons(amount)}
        </div>
    </div>);
}

export default HexGrid;