import Job from './Job'
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

export default Jobs;