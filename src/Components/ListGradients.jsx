import { gradients } from "../gradients";

function ListGradients({ setGradient }) {
  return (
    <div className="flex flex-row gap-4 flex-wrap items-center justify-center mt-2">
      {gradients.map((grad, idx) => (
        <div
          className={`${
            grad.direction + " " + grad.colors
          } rounded relative hover:cursor-pointer`}
          key={idx}
          style={{
            height: "140px",
            width: "140px",
          }}
          onClick={() => {
            setGradient(grad.direction + " " + grad.colors);
          }}
        >
          <div
            className="absolute m-auto left-0 right-0 bottom-1 bg-black text-white uppercase font-bold
          rounded p-2 text-center  font-paul"
          >
            {grad.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListGradients;
