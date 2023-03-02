import {Inter} from "@next/font/google"
import {Button} from "antd";
import Link from "next/link";

const inter = Inter({subsets: ['latin']})


const Home = () => {
    return <div className={inter.className}>
        <h1>Home</h1>
        <Link href={"/space"}>
            <Button className={`${inter.className} primary-btn text-white`}>Go to Space</Button>
        </Link>
    </div>
}

export default Home;