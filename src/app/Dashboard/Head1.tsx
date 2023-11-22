interface Head1Props {
    name: string;
    links: string;
  }
   
const  Head1 =  ({ name, links }:Head1Props) =>
{
    return (
        <>
        <div className="flex justify-between font-semibold uppercase" >
              <h1>{name}</h1>
              <a className="text-gray-1 text-sm underline hover:no-underline capitalize" href="http://">{links}</a>
            </div>
        </>
    )
}
export default Head1;