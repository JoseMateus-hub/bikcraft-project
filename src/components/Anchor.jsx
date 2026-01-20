
export default function Anchor({text, ...props}) {
  return <a href={props.route} className="text-[1.125rem] capitalize hover:text-amber-200">
    {props.text}
    </a>
}
