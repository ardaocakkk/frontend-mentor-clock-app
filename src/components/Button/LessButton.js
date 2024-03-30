import ArrowUp from "../../assets/desktop/icon-arrow-up.svg.svg";

export default function LessButton() {
    return (
        <>
            <button>
                <div className={'bg-white flex p-3 rounded-full '}>
                    <div className={''}><h6 className={'text-gray-300 ml-2 '}>MORE</h6></div>
                    <div className={'bg-arrow items-center rounded-full p-2 ml-2 hover:bg-arrow-hover '}> <img src={ArrowUp} className={'mt-auto mt-0.5'}/> </div>
                </div>
            </button>
        </>
    )
}