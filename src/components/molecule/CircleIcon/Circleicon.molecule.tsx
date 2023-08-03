import { circleIconMap } from "./constant";

function Circleicon() {
  return (
    <div className="d-flex flex-row justify-content-center gap-5">
      {circleIconMap.map((list) => (
        <div key={list.id}>
          <div
            className={`position-relative  rounded-circle p-4 ${
              list.active ? "bg-warning" : "bg-secondary"
            }`}
          >
            {<list.icon />}
          </div>
          <p className="mt-2">{list.text}</p>
          <hr className="position-absolute top-50 bottom-50"/>
        </div>
      ))}
    </div>
  );
}

export default Circleicon;
