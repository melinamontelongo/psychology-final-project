import { ReactNode } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface DrawerProps {
    pageContent: ReactNode,
    drawerContent: ReactNode,
}
const Drawer = ({ pageContent, drawerContent }: DrawerProps) => {
    return (<>
        <div className="drawer lg:drawer-open">
            <input id="formatsSidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="formatsSidebar" className="btn btn-primary btn-circle drawer-button lg:hidden mt-32 fixed z-30"><IoIosArrowForward className="text-xl" /></label>
                {pageContent}
            </div>
            <div className="drawer-side z-40">
                <label htmlFor="formatsSidebar" className="drawer-overlay"></label>
                <ul className="menu py-16 2xl:py-24 w-60 md:w-80 2xl:w-96 min-h-full bg-base-200 text-base-content">
                    {drawerContent}
                </ul>
            </div>
        </div>
    </>)
}

export default Drawer;