
import useLocalStorageState from '../hooks/LocalStorage';
import EditableText from './EditableText';

function ToggleUrlEdit({
  key,
  placeholderKey,
  placeholderUrl,
}: {
  key: string;
  placeholderKey: string;
  placeholderUrl: string;
}) {
  const [active, setActive] = useLocalStorageState(key + "-active", false);
  const handleCheckboxChange = () => {
    setActive((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", gridTemplateColumns: "1fr 1fr 1fr" }}>
      <input
        type="checkbox"
        name={key + "-active"}
        id="linkedin-active"
        checked={active}
        onChange={handleCheckboxChange}
        style={{ marginRight: "10px" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <EditableText
          storageKey={key + "-label"}
          initialValue="LinkedIn"
        ></EditableText>
        <EditableText
          storageKey={key + "-url"}
          initialValue={placeholderUrl}
        ></EditableText>
      </div>
    </div>
  );
}
function ContactEdit() {
  return (
    <div>
      <h2>Contact</h2>
      <ToggleUrlEdit
        key="linkedin"
        placeholderKey="linkedin"
        placeholderUrl="https://www.linkedin.com/in/yourname/"
      />
      <ToggleUrlEdit
        key="email"
        placeholderKey="email"
        placeholderUrl="mailto:yourmail@yourprovider.com"
      />
      <ToggleUrlEdit
        key="github"
        placeholderKey="github"
        placeholderUrl="https://github.com/yourusername"
      />
    </div>
  );
}
function Contact() {
  return (
    <section id="contact">
      <span>
        <a href="https://www.linkedin.com/in/ulfdellbruegge/" target="_blank">
          LinkedIn
        </a>
      </span>
      <span className="dash"></span>
      <span>
        <a href="mailto:ulfdellbruegge@gmail.com">ulfdellbruegge@gmail.com</a>
      </span>
      <span className="dash"></span>
      <span>
        <a href="https://github.com/xintamosaik" target="_blank">
          github.com/xintamosaik
        </a>
      </span>
      <span className="dash"></span>
      <EditableText
        storageKey="location"
        initialValue="Osnabrück, Niedersachsen, Germany"
      ></EditableText>
    </section>
  );
}

export { Contact, ContactEdit };