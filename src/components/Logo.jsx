 
 export default function Logo({ text }) {
  return (
    <a href="/" className="text-2xl font-bold uppercase tracking-tighter text-white hover:opacity-80 transition-opacity">
      {text}<span className="text-[#ffbb00]">.</span>
    </a>
  );
}
