import {Inter} from "@next/font/google"
import {Button, Form, Input, Select} from "antd";
import Link from "next/link";

const Option = Select;

const inter = Inter({subsets: ['latin']})

const Org = () => {
    return <main className={`${inter.className} w-screen flex flex-col items-center h-screen`}>
        <header className={"mx-[8%] fixed w-10/12 flex items-center py-5 px-6 border-slate-200"}>
            <img className={"w-[50px] h-[]"}
                 src="https://imgs.search.brave.com/vij5hORwBsg0YCniN2XhUn_yeirdsdhzN59SEnlNnwI/rs:fit:800:800:1/g:ce/aHR0cHM6Ly9jYW5u/eS5pby9pbWFnZXMv/MTU1MjU1ZTQ0YTM1/NzRiMzYwMGEwMTg4/YzYzZWRjYzAucG5n"
                 alt=""/>
        </header>
        <div className="wrapper h-full w-full flex flex-col items-center justify-center">
            <h1 className={"text-2xl underline underline-offset-4 decoration-primary font-semibold"}>Create
                Organization</h1>
            <Form className={`mt-10 w-[400px]`} layout={"vertical"}>
                <Form.Item name={"organization_name"}
                           label={<p className={`${inter.className}`}>Organization Name</p>}
                           rules={[{required: true, message: "Organization name is required!"}]}>
                    <Input rootClassName={`${inter.className}`} type={'text'} placeholder={'Enter name'}/>
                </Form.Item>
                <Form.Item name={"organization_members"} label={<p className={`${inter.className}`}>Share With</p>}>
                    <Select defaultValue={"niazmorshed@gmail.com"} mode={"multiple"}>
                        <Option value={"niazmorshed@gmail.com"}>
                            <div className={"flex items-center gap-2"}>
                                <div
                                    className="avatar w-[20px] h-[20px] text-xs bg-green-500 rounded-full flex items-center justify-center">N
                                </div>
                                <p>niazmorshed@gmail.com</p>
                            </div>
                        </Option>
                        <Option value={"projectmember@gmail.com"}>
                            <div className={"flex items-center gap-2"}>
                                <div
                                    className="avatar w-[20px] h-[20px] text-xs bg-orange-500 rounded-full flex items-center justify-center">P
                                </div>
                                <p>projectmember@gmail.com</p>
                            </div>
                        </Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button className={`${inter.className} primary-btn mt-7 w-full`} type={"primary"}
                            htmlType={"submit"}>Create Organization</Button>
                </Form.Item>
            </Form>
            <Link href={"/space/"}>
                <p className={"text-xs underline decoration-slate-400"}>Switch back to home</p>
            </Link>
        </div>
    </main>
}

export default Org;