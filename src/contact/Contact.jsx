import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className=' container text-center text-light mt-5  mb-5'>
            <div className="title">
                <h1 className='title'>CONATCT SECTION</h1>
                <div className="iconte"><i _ngcontent-cmh-c6="" className="fa-solid fa-star mt-3 "></i></div>
            </div>

            <div className="mt-5 form d-flex flex-column justify-content-center align-items-center">
            <input  id="userName" type="text" placeholder="userName" name="userName" className=" w-50 form-control border-0 border-bottom  position-relative mb-5  ng-touched"/>
            <input  id="userName" type="number" placeholder="userAge" name="userName" className=" w-50 form-control border-0 border-bottom  position-relative mb-5  ng-touched"/>
            <input  id="userName" type="email" placeholder="userEmail" name="userName" className=" w-50 form-control border-0 border-bottom  position-relative mb-5  ng-touched"/>
            <input  id="userName" type="password" placeholder="userPassword" name="userName" className=" w-50 form-control border-0 border-bottom  position-relative mb-5  ng-touched"/>
            </div>
        </div>
   
  )
}
