import { myPict } from "./constant";

function PictureBeauty() {
  return (
    <div className="d-flex flex-xxl-column gap-3">
      {myPict.map((pict) => (
        <img key={pict} src={pict} width={420} className="img-fluid overflow-x-auto" />
      ))}
    </div>
  );
}

export default PictureBeauty;