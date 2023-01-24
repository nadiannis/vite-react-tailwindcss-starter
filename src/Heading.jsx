export default function Heading({ children, color }) {
  return (
    <h1 className={`text-center font-bold text-5xl ${color}`}>{children}</h1>
  );
}
