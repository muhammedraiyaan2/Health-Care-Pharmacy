import React,{useEffect} from 'react'
import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styles from'../styles/Home.module.css'
import jwt from "jsonwebtoken"
function login() {
  useEffect(()=>{
  if(localStorage.getItem("Name")===null){
    localStorage.setItem("Name",``)
  }
  })
  async function log(){
    let email=document.getElementById(`email-address`)
    let password=document.getElementById(`password`)
    let name=document.getElementById(`name`)
    let data={
      name:name.value,
      email: email.value,
      password: password.value
    }
    let tok=jwt.sign(data,"my_secret")
    localStorage.setItem('Login',tok)
    localStorage.setItem("Name",name.value)
    let api={
      token:tok
    }
    await fetch(process.env.NEXT_PUBLIC_DB+"Login.json",
    {
      method: "POST",
      body: JSON.stringify(api)
    })
    toast.success(`Succesfully logined`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <>
  <Head>
    <title>Health care pharmacy - Login</title>
  </Head>
  <ToastContainer />
  <div className={styles.login}>
  <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-xl md:text-3xl font-extrabold opacity-[0.79]">Login to your account</h2>
          
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                /><br/>
                <input
                  id="name"
                  name="name"
                  type="type"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                />
              </div>
              <div><br />
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-black">
                  Remember me
                </label>
              </div>

            </div>

            <div>
              <button
                onClick={log}
                className="group w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 focus:bg-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <span className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Login in
              </button>
            </div>
          </form>
        </div>
      </div>
  </div>
    </>
  )
}

export default login