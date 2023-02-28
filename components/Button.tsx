type ButtonProps = {
  text: string;
  type?: "primary" | "secondaty";
  onClick: () => void;
};

export default function Button({ text, type, onClick }: ButtonProps) {
  return (
    <button
      className='rounded-2xl bg-teal-600 px-4 py-2 font-bold text-white hover:scale-105 hover:opacity-80'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
