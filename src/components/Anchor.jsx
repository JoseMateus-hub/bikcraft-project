
export default function Anchor({ text, href }) {
  return (
    <a 
      href={href} 
      className="text-white font-medium text-lg uppercase tracking-wider transition-colors duration-300 hover:text-[#ffbb00] relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-[#ffbb00] after:transition-all after:duration-300 hover:after:w-full"
    >
      {text}
    </a>
  );
}
