import {Inter} from "@next/font/google"

const inter = Inter({subsets: ['latin']})


const Home = () => {
  return <div className={inter.className}>
    <h1>Home</h1>
  </div>
}

export default Home;