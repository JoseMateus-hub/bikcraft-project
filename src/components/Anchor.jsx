
export default function Anchor({text, ...props}) {
  console.log("oisom");
  
  return <a href={props.route} className="text-[1.125rem] capitalize hover:text-amber-200">
    {text}
    </a>
}
