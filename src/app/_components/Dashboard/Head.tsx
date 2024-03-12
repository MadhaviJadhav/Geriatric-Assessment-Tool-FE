import Link from "next/link";

interface Head1Props {
  name: string;
  links: string;
  to: string;
}

const Head = ({ name, links, to }: Head1Props) => {
  return (
    <>
      <div className="flex justify-between font-semibold " >
        <h1 className="uppercase">{name}</h1>
        {/* <a className="link" to={to}>{links}</a> */}
        <Link href={to} passHref className="link">{links}
        </Link>
      </div>
    </>
  )
}
export default Head;