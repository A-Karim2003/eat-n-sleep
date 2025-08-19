import Button from "../../components/Button";

function Friend({
  id,
  profilePic,
  name,
  amount,
  handleSelectedId,
  isSelected,
}) {
  return (
    <div
      className={`friend ${isSelected ? "selected" : ""}`}
      onClick={() => handleSelectedId(id)}
    >
      <div className="profile-pic">
        <img src={profilePic} alt="Random" />
      </div>
      <div className="profile-info">
        <h2>{name}</h2>
        <p className={amount > 0 ? "green" : "red"}>
          {amount > 0 ? `${name} owes you` : `You owe ${name}`} £
          {Math.abs(amount)}
        </p>
      </div>
      <Button className={"close-btn"}>Close</Button>
    </div>
  );
}
export default Friend;
