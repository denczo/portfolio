import Hexagon from "../Hexagon/Hexagon";


function createGrid(amount: number) {
    var grid = [];
    for (var i = 0; i < amount; i++) {
        grid.push(<Hexagon />);
    }
    return grid;
}

function HexGrid({ amount }: { amount: number }) {

    let grid = createGrid(amount)

    return (<div className="flex flex-wrap">
        {grid}
    </div>);
}

export default HexGrid;