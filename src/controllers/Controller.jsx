import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import {Inter} from "@next/font/google"

const inter = Inter({subsets: ['latin']})


const Controller = ({children}) => {
    return <main className={`${inter.className} app-controller`}>
        <Sidebar />
        <div className="main-wrapper p-7">
            <Header />
            <div className="content-wrapper">
                {children}
            </div>
        </div>
    </main>
}

export default Controller;