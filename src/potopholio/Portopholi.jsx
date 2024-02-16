import React from 'react'
import './portopholio.css'
import img1 from '../assets/img/poert1.png'
import img2 from '../assets/img/port2.png'
import img3 from '../assets/img/port3.png'
import { useEffect, useState } from 'react'



export default function Portfolio() {


    const [src, setSrc] = useState("")

    useEffect(() => {
        let projects = document.querySelectorAll(".project")

        for (let i = 0; i < projects.length; i++) {
            projects[i].addEventListener("click", function () {
                setSrc(this.children[0].src)
                document.querySelector("#fixed-box").classList.remove("d-none")
            })
        }

        document.querySelector("#fixed-box").addEventListener("click", function (e) {
            document.querySelector("#fixed-box").classList.add("d-none")
        })
        document.querySelector("#fixed-box img").addEventListener("click", function (e) {
            e.stopImmediatePropagation()
        })

    })



    return (
        <>

            <div className="bg-white position-absolute top-0 bottom-0 start-0 end-0 z-n1"></div>

            <div id='fixed-box' className="d-none fixed-box bg-primary bg-opacity-50 d-flex justify-content-center align-items-center position-fixed  top-0 bottom-0 start-0 end-0 z-3">

                <div className="container">
                    <div className="inner-img w-50 mx-auto ">
                        <img src={src} alt="" className='w-100' />
                    </div>
                </div>
            </div>


            <section id="portfolio" className='text-center bg-white  py-5 '>
                <div className="container ">
                <div className="title  container text-center text-light mt-5  mb-5 ">
                <h1 className='title'>PORTFOLIO COMPONENT</h1>
                 <div className="iconte"><i _ngcontent-cmh-c6="" className="fa-solid fa-star mt-3 "></i></div>
            </div>

                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 text-start px-5  gy-4 mt-1">

                        <div className="col">
                            <div className={` position-relative overflow-hidden rounded-3 project`}>
                                <img className='w-100 ' src={img1} alt="house" />
                                <div  className="upper-layer  d-flex flex-column justify-content-center align-items-center"> <i className="fa-solid fa-plus text-light border-0 fs-1 " ></i> </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className={` position-relative overflow-hidden rounded-3 project`}>
                                <img className='w-100 ' src={img2} alt="cake" />
                                <div  className="upper-layer  d-flex flex-column justify-content-center align-items-center"> <i className="fa-solid fa-plus text-light border-0 fs-1 " ></i> </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className={` position-relative overflow-hidden rounded-3 project`}>
                                <img className='w-100 ' src={img3} alt="tent" />
                                <div  className="upper-layer  d-flex flex-column justify-content-center align-items-center"> <i className="fa-solid fa-plus text-light border-0 fs-1 " ></i> </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className={` position-relative overflow-hidden rounded-3 project`}>
                                <img className='w-100 ' src={img1} alt="house" />
                                <div  className="upper-layer  d-flex flex-column justify-content-center align-items-center"> <i className="fa-solid fa-plus text-light border-0 fs-1 " ></i> </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className={` position-relative overflow-hidden rounded-3 project`}>
                                <img className='w-100 ' src={img2} alt="cake" />
                                <div  className="upper-layer  d-flex flex-column justify-content-center align-items-center"> <i className="fa-solid fa-plus text-light border-0 fs-1 " ></i> </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className={` position-relative overflow-hidden rounded-3 project`}>
                                <img className='w-100 ' src={img3} alt="tent" />
                                <div  className="upper-layer  d-flex flex-column justify-content-center align-items-center"> <i className="fa-solid fa-plus text-light border-0 fs-1 " ></i> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
