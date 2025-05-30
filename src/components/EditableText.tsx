import React from 'react'
import useLocalStorageState from '../hooks/LocalStorage';
function EditableText({
  storageKey,
  initialValue,
}: {
  storageKey: string;
  initialValue: string;
}) {
  const [edit, setEdit] = React.useState(false);
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

export default EditableText;