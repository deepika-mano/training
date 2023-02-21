import Circle from "./Circle";
import Square from "./Square";
import Rhombus from "./Rhombus";
import Triangle from "./Triangle";
import Trapezoid from "./Trapezoid";
function Shapes() {
  return (
    <div>
      <h1>Area of Shapes</h1>
      Square :
      <Square />
      <br></br>
      Circle :
      <Circle />
      <br></br>
      Rhombus :
      <Rhombus />
      <br></br>
      Triangle :
      <Triangle />
      <br></br>
      Trapezoid :
      <Trapezoid />
      <br></br>
    </div>
  );
}

export default Shapes;
