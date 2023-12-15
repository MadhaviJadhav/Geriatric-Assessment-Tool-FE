import '../../../styles/global.css'

interface Head1Props {
    name: string;
    links: string;
  }
   
const  Head1 =  ({ name, links }:Head1Props) =>
{
    return (
        <>
        <div className="flex justify-between font-semibold " >
              <h1 className="uppercase">{name}</h1>
              <a className="link" href="http://">{links}</a>
            </div>
        </>
    )
}
export default Head1;