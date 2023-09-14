import { FaStopCircle } from "react-icons/fa";
const StopBtn = () => {
    return (
        <div className="tooltip">
            <div className="btn btn-ghost hover:bg-transparent no-animation cursor-default text-3xl 2xl:text-7xl">
                <FaStopCircle />
            </div>
        </div>
    )
}

export default StopBtn;