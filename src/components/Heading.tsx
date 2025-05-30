import EditableText from "./EditableText";
function Heading() {
  return (
    <section id="title">
      <h1 style={{ display: "flex", alignItems: "center" }}>
        <EditableText storageKey="first" initialValue="Ulf" />
        <span className="dash"></span>
        <EditableText storageKey="last" initialValue="Dellbrügge" />
        <span className="dash"></span>
        <EditableText storageKey="title" initialValue="Medior Web Developer" />
      </h1>
    </section>
  );
}

export default Heading;