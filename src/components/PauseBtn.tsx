import { FaPauseCircle } from "react-icons/fa";
const PauseBtn = () => {
    return (
        <div className="tooltip">
            <div className="btn btn-ghost hover:bg-transparent no-animation cursor-default text-3xl 2xl:text-7xl">
                <FaPauseCircle />
            </div>
        </div>
    )
}

export default PauseBtn;