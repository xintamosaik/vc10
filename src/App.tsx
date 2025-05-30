import React, { useState } from "react";
import "./App.css";
function useLocalStorageState<T>(key: string, initialValue: T) {
  const [state, setState] = React.useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  React.useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch {
      // ignore write errors
    }
  }, [key, state]);

  return [state, setState] as const;
}

function EditableText({
  storageKey,
  initialValue,
}: {
  storageKey: string;
  initialValue: string;
}) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useLocalStorageState(storageKey, initialValue);

  return (
    <span style={{ cursor: edit ? "text" : "pointer" }}>
      {edit && (
        <input
          type="text"
          className="fly"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => setEdit(false)}
          onAbort={() => setEdit(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "Escape") {
              setEdit(false);
            }
          }}
          autoFocus
        />
      )}
      <span onClick={() => setEdit(true)}>{value || "<empty>"}</span>
    </span>
  );
}

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

function ToggleUrlEdit({ key, placeholderKey, placeholderUrl }: { key: string, placeholderKey: string; placeholderUrl: string }) {
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
      <ToggleUrlEdit key="linkedin" placeholderKey="linkedin" placeholderUrl="https://www.linkedin.com/in/yourname/" />
      <ToggleUrlEdit key="email" placeholderKey="email" placeholderUrl="mailto:yourmail@yourprovider.com" />
      <ToggleUrlEdit key="github" placeholderKey="github" placeholderUrl="https://github.com/yourusername" />
  
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
      <span>Düsseldorf, Germany</span>
    </section>
  );
}

function Summary() {
  return (
    <section id="summary">
      <h2>Summary</h2>
      <p>
        Outcome-oriented Web Developer with a strong focus on simplifying
        complex systems, enabling team alignment, and driving practical
        improvements — even in ambiguous, fast-moving environments. Experienced
        in modern TypeScript-based development, internal tooling, and migrating
        legacy systems toward maintainable, observable, and testable
        architectures.
      </p>
      <p>
        I care about process, collaboration, and long-term value. Colleagues
        appreciate my initiative, low-ego mentoring, and ability to spot
        structural issues early — but I wait for readiness and co-shape change,
        rather than forcing it. Whether building template tooling that cut
        development loops from minutes to seconds or quietly replacing thousands
        of fragile lines with 60 that just work, I bring options — and make
        change easier.
      </p>
      <p>
        Now growing further into team-enabling roles through better listening,
        architecture clarity, and servant-leader practices.
      </p>
    </section>
  );
}
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
function Jobs() {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <Job
        title="Web Developer"
        company="Qanuk GmbH"
        time="January 2024 - Present"
        city="Osnabrück, Niedersachsen, Germany"
        description={
          <ul>
            <li>
              <strong>Driving TypeScript-based development</strong> in a
              React/Next.js environment, focusing on internal tooling and
              migration of legacy systems.
            </li>
            <li>
              <strong>Improving team alignment</strong> through better
              documentation, process clarity, and collaborative practices.
            </li>
            <li>
              <strong>Mentoring junior developers</strong> to foster growth and
              knowledge sharing.
            </li>
          </ul>
        }
      />
    </section>
  );
}

function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <ul>
        <li>
          <strong>Languages:</strong> TypeScript/Javascript, PHP, Golang, Java,
          CSS, HTML
        </li>
        <li>
          <strong>Frameworks:</strong> React, Tailwind, Next, Vite, Webpack
        </li>
        <li>
          <strong>Tools/Platforms:</strong> Git, Docker, Github (Actions), AWS
        </li>
        <li>
          <strong>Methodologies:</strong> Agile, Pair/Ensemble Programming,
          TDD/BDD
        </li>
      </ul>
    </section>
  );
}

function Educations() {
  return (
    <section>
      <h2>Education</h2>

      <div className="education entry">
        <h3>
          <span>Master of Arts in Sociology</span>
          <span className="dash"></span>
          <span>Universität Bielefeld</span>
        </h3>
        <h4>
          <span>September 2021</span>
          <span className="dash"></span>
          <span>Bielefeld, NRW, Germany</span>
        </h4>
        <p>
          Specialization: Qualitative Studies and Workplace
          Studies/Ethnomethodology
        </p>
      </div>
    </section>
  );
}

function App() {
  return (
    <main>
      <Heading />
      <ContactEdit />
      <Contact />
      <Summary />
      <Jobs />
      <Skills />
      <Educations />
    </main>
  );
}

export default App;
