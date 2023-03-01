import {TfiExchangeVertical} from "react-icons/tfi";
import {BsHouse} from "react-icons/bs";
import {CiSettings} from "react-icons/ci";
import {BiUser} from "react-icons/bi"
import {AiOutlineStar} from "react-icons/ai";
import {GrAdd} from "react-icons/gr";


const Sidebar = () => {

    const navItemClass = "text-sm p-2 px-3 transition-all hover:bg-slate-100 rounded-md cursor-pointer flex items-center gap-3"
    const navItems = [
        {
            title: "Home",
            redirect: "/space/",
            icon: <BsHouse/>
        },
        {
            title: "Profile",
            redirect: "/space/profile",
            icon: <BiUser/>
        },
        {
            title: "Settings",
            redirect: "/space/settings",
            icon: <CiSettings/>
        },
        // {
        //     title: "Favorites",
        //     redirect: "/space/favorite",
        //     icon: <AiOutlineStar />
        // }
    ]

    return <aside className={"sidebar"}>
        <div
            className="top flex p-2 px-4 cursor-pointer transition-all hover:shadow-sm rounded-3xl bg-slate-100 border items-center gap-4">
            <div className="avatar w-[40px] h-[40px] rounded-full overflow-hidden">
                <img className={"w-full h-full object-cover"}
                     src="https://imgs.search.brave.com/4v2R33npQKAloiJrKw0kR83rWLZ9o1NkKg38LgL4Hmk/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/RFZJRHVaVTU0bXBQ/UzRhMy1EZEx3SGFF/byZwaWQ9QXBp"
                     alt=""/>
            </div>
            <div className="name flex items-center gap-3">
                <h2 className={"text-sm font-semibold m-0"}>Niaz Morshed</h2>
                <TfiExchangeVertical/>
            </div>
        </div>
        <div className="static-navs-wrapper mt-4">
            <p className={"text-xs text-slate-500 mb-3"}>Quick Navigation</p>
            {navItems.map((item, i) => {
                return <div key={i}
                            className={`item ${navItemClass}`}>
                    {item.icon}
                    <p className={"m-0"}>{item.title}</p>
                </div>
            })}
        </div>
        <div className="dynamic-navs-wrapper mt-4">
                <p className={"text-xs text-slate-500 mb-3"}>Workspaces</p>
            <div className="organizations-wrapper">
                <div className={`item text-xs text-slate-600 select-none item-add ${navItemClass}`}>
                    <GrAdd className={"text-slate-600"} />
                    <p className={"m-0"}>Add new Organization</p>
                </div>
            </div>
        </div>
    </aside>
}

export default Sidebar;