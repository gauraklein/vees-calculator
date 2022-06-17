export default function Input({
  type,
  label,
  placeholder,
}: {
  type?: string;
  label?: string;
  placeholder?: string;
}) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}
