import parse from "html-react-parser"

export function Description({ text }: { text: string }) {
  return <>{parse(text)}</>
}