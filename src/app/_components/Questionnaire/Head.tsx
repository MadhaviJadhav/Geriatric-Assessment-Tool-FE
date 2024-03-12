import ProgressBar from "./Progressbar";

interface Head1Props {
    name: string,
    count: number,
    progress:number,
}

export default function HeadComp({ name, count, progress }: Head1Props) {
    

    return (
        <>
            <div className="flex flex-col gap-2 mx-5">
                <div className="flex gap-3">

                    <div className="flex items-center justify-center w-6 h-6 bg-black text-white rounded-full">
                        <span className="text-sm">{count}</span>
                    </div>
                    <h2>{name}</h2>
                </div>
                <div>
                    <hr />
                </div>
                <ProgressBar progress={progress}/>
            </div>
        </>
    )

}