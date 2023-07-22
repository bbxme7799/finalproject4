import { User } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import styles from './index.module.css'
import $ from 'jquery';
const Users = [
    {
        "id": 1,
        "service": "Instagram Likes Free Trial",
        "src": "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
        "cost": "100",
        "start": "410",
        "count": "10",
        "status": "เสร็จสิ้น",
        "more": "Show",
    },
    {
        "id": 2,
        "service": "Instagram Likes Free Trial",
        "src": "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
        "cost": "100",
        "start": "410",
        "count": "10",
        "status": "ยกเลิก",
        "more": "Show",
    },
    {
        "id": 3,
        "service": "Instagram Likes Free Trial",
        "src": "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
        "cost": "100",
        "start": "410",
        "count": "10",
        "status": "ยกเลิก",
        "more": "Show",
    },
    {
        "id": 4,
        "service": "Instagram Likes Free Trial",
        "src": "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
        "cost": "100",
        "start": "410",
        "count": "10",
        "status": "เสร็จสิ้น",
        "more": "Show",
    },
    {
        "id": 5,
        "service": "Instagram Likes Free Trial",
        "src": "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
        "cost": "100",
        "start": "410",
        "count": "10",
        "status": "ยกเลิก",
        "more": "Show",
    },
    {
        "id": 6,
        "service": "Instagram Likes Free Trial",
        "src": "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
        "cost": "100",
        "start": "410",
        "count": "10",
        "status": "คืนบางส่วน",
        "more": "Show",
    },
    {
        "id": 7,
        "service": "Instagram Likes Free Trial",
        "src": "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
        "cost": "100",
        "start": "410",
        "count": "10",
        "status": "เสร็จสิ้น",
        "more": "Show",
    },
    {
        "id": 8,
        "service": "Instagram Likes Free Trial",
        "src": "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
        "cost": "100",
        "start": "410",
        "count": "10",
        "status": "คืนบางส่วน",
        "more": "Show",
    },
    {
        "id": 9,
        "service": "Instagram Likes Free Trial",
        "src": "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
        "cost": "100",
        "start": "410",
        "count": "10",
        "status": "เสร็จสิ้น",
        "more": "Show",
    },
    {
        "id": 10,
        "service": "Instagram Likes Free Trial",
        "src": "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
        "cost": "100",
        "start": "410",
        "count": "10",
        "status": "เสร็จสิ้น",
        "more": "Show",
    },
    {
        "id": 11,
        "service": "Instagram Likes Free Trial",
        "src": "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
        "cost": "100",
        "start": "410",
        "count": "10",
        "status": "เสร็จสิ้น",
        "more": "Show",
    },
]



function index() {

    const [query, setquery] = useState("");
    const [btn, setbtn] = useState("");
    const [currentPage, setcurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = Users.slice(firstIndex, lastIndex);
    const npage = Math.ceil(Users.length / recordsPerPage);
    const number = [...Array(npage + 1).keys()].slice(1);


    useEffect(() => {
        $(document).on('click', '.sectionli', function () {
            $(this).addClass('active').siblings().removeClass('active')
        })
    }, [])

    console.log(btn)
    // console.log(Users.filter(user => user.first_name.toLocaleLowerCase.includes("Em")))
    return (
        <div className="ml-[255px] mt-[65px] h-auto">
            <div className="bg-white my-[2px] ">
                <div className="flex mx-2 py-2 ">
                    <h1 className="font-bold text-lg"> New order :</h1>
                    <p className="text-lg pl-2"> คำสั่งซื้อใหม่</p>
                </div>
            </div>
            <div className="mx-[50px] my-6 shadow-md h-full">
                <div className="bg-white h-auto rounded-lg px-8 py-8 ">
                    <div className="relative">
                        <div className="border-b-2 border-gray-200">
                            <ul className={styles.section}>
                                <li className="sectionli mx-1 my-3 bg-gray-50 text-gray-500 px-5 py-2 rounded-lg  active" onClick={(e) => setbtn(e.target.value)} value=""><button onClick={(e) => setbtn(e.target.value)} value="">All</button></li>
                                <li className="sectionli mx-1 my-3 bg-gray-50 text-gray-500 px-5 py-2 rounded-lg " onClick={(e) => setbtn(e.target.value)} value="โปรดรอ.."><button onClick={(e) => setbtn(e.target.value)} value="โปรดรอใใ">โปรดรอ..</button></li>
                                <li className="sectionli mx-1 my-3 bg-gray-50 text-gray-500 px-5 py-2 rounded-lg  " onClick={(e) => setbtn(e.target.value)} value="ดำเนินการ"><button onClick={(e) => setbtn(e.target.value)} value="ดำเนินการ">ดำเนินการ</button></li>
                                <li className="sectionli mx-1 my-3 bg-gray-50 text-gray-500 px-5 py-2 rounded-lg " onClick={(e) => setbtn(e.target.value)} value="เสร็จสิ้น"><button onClick={(e) => setbtn(e.target.value)} value="เสร็จสิ้น">เสร็จสิ้น</button></li>
                                <li className="sectionli mx-1 my-3 bg-gray-50 text-gray-500 px-5 py-2 rounded-lg " onClick={(e) => setbtn(e.target.value)} value="คืนบางส่วน"><button onClick={(e) => setbtn(e.target.value)} value="คืนบางส่วน">คืนบางส่วน</button></li>
                                <li className="sectionli mx-1 my-3 bg-gray-50 text-gray-500 px-5 py-2 rounded-lg " onClick={(e) => setbtn(e.target.value)} value="ประมาลผล"><button onClick={(e) => setbtn(e.target.value)} value="ประมาลผล">ประมาลผล</button></li>
                                <li className="sectionli mx-1 my-3 bg-gray-50 text-gray-500 px-5 py-2 rounded-lg " onClick={(e) => setbtn(e.target.value)} value="ยกเลิก"><button onClick={(e) => setbtn(e.target.value)} value="ยกเลิก">ยกเลิก</button></li>
                            </ul>
                        </div>
                        <div className="flex justify-end my-3">
                            <input type="text" placeholder="Seach..." className=" border-2 rounded-md px-3 py-2 "
                                onChange={(e) => setquery(e.target.value)} />
                        </div>

                        <div className="w-full my-5 mx-5 px-5 py-5">
                            <table className="w-[98%]">
                                <tbody>
                                    <tr>
                                        <th className="w-[5%] text-left">ID</th>
                                        <th className="w-[25%] text-left">บริการ</th>
                                        <th className="w-[40%] text-left">ลิงก์</th>
                                        <th className="w-[5%] text-center">ค่าใช้จ่าย</th>
                                        <th className="w-[5%] text-center">เริ่ม</th>
                                        <th className="w-[5%] text-center">ปริมาณ</th>
                                        <th className="w-[10%] text-center">Status</th>
                                        <th className="w-[5%] text-center">เพิ่มเติม</th>
                                    </tr>
                                    {records.filter((user) => user.status.toLowerCase().includes(query || btn)).map((item) => (
                                        <tr key={item.id}  >
                                            <td className="text-left"><p className="mx-2 my-3">{item.id}</p></td>
                                            <td className="text-left"><p className="my-3">{item.service}</p></td>
                                            <td className="text-left"><p className="my-3">{item.src}</p></td>
                                            <td className="text-center"><p className="my-3">{item.cost}</p></td>
                                            <td className="text-center"><p className="my-3">{item.start}</p></td>
                                            <td className="text-center"><p className="my-3">{item.count}</p></td>
                                            <td className="text-center"><p className="my-3">{item.status}</p></td>
                                            <td className="text-center"><p className="my-3">{item.more}</p></td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div>
                                <nav>
                                    <ul className="flex justify-end mx-1 my-5">
                                        <li className="page-item mx-1 border-2 rounded-l-xl px-2 py-1">
                                        <a href="#" className="page-link" onClick={prePage} >
                                            Prev
                                        </a>
                                        </li>
                                        {
                                            number.map((n, i ) => (
                                                <li className={`page-item mx-1 px-3 text-center items-center rounded-md ${currentPage === n ? 'active' : ''}`} key={i}>
                                                    <a href="#" className="page-link flex justify-items-center mt-1" 
                                                    onClick={() => changeCPage(n)}>{n}</a>
                                                </li>
                                            ))
                                        }
                                         <li className="page-item mx-1 border-2 rounded-r-xl px-2 py-1">
                                        <a href="#" className="page-link" onClick={nextPage} >
                                            Next
                                        </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function nextPage() {
        if(currentPage !== lastIndex){
            setcurrentPage(currentPage + 1)
        }
    }
    function prePage() {
        if(currentPage !== firstIndex){
            setcurrentPage(currentPage - 1);
        }
    }
    function changeCPage(id){

    }

}

export default index;
