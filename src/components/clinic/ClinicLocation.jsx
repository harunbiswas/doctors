import SingleMap from "../map/SingleMap";

export default function ClinicLocation({ data }) {
  return (
    <div className="clinic-location">
      <SingleMap info={data} />
    </div>
  );
}
