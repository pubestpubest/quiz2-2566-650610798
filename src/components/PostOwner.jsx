export const PostOwner = ({ image, name, caption, like }) => {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={"/profileImages/" + image}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">{name}</span>
      </div>

      <span>{caption}</span>

      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span className="text-muted">{like} คน</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
};
