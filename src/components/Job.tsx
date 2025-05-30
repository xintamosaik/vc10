
function Job({
  title,
  company,
  time,
  city,
  description,
}: {
  title: string;
  company: string;
  time: string;
  city: string;
  description: React.ReactNode;
}) {
  return (
    <div className="job entry">
      <h3>
        <span>{title}</span>
        <span className="dash"></span>
        <span>{company}</span>
      </h3>
      <h4>
        <span>{time}</span>
        <span className="dash"></span>
        <span>{city}</span>
      </h4>

      {description}
    </div>
  );
}
export default Job;