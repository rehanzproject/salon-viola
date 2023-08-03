import { myPicture } from "./constant";

function PictureExperience() {
  return (
    <div className="d-flex flex-xxl-column  gap-3">
      {myPicture.map((pict) => (
        <img key={pict} src={pict} width={420} className="img-fluid overflow-x-auto " />
      ))}
    </div>
  );
}

export default PictureExperience;
