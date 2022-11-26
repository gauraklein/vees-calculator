export default function Button({
  label,
  onClick,
  value,
}: {
  label: string;
  onClick: Function;
  value?: string;
}) {
  return (
    <button value={value} onClick={() => onClick()}>
      {label}
    </button>
  );
}
