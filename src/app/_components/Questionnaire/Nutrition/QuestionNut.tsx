interface queProps {
   english: string
}

export default function QuestionNut({ english}: queProps) {
    return (
        <>
            <div className="">
                <div className="px-5 pt-4 pb-2 flex flex-col font-medium text-sm">
                    {/* <div className="flex flex-col gap-3"> */}
                        <p>{english}</p>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}