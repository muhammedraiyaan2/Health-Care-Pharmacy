import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function order() {
  return (
    <><br />
    <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-2xl md:text-3xl font-extrabold text-gray-900">Order your medicine</h2>
            <p className="mt-2 text-center text-sm text-indigo-600 font-bold text-base">
              Free Home Delivery
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="medicine"
                  name="medicine"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Medicine Name"
                />
              </div><br />
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                />
              </div><br />
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="number"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Mobile Number"
                />
              </div><br />
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <textarea
                  id="address"
                  row="4"
                  name="address"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Full Address"
                />
              </div>
            </div>

            

            <div>
              <button
                onClick={thi}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
    </>
  )
  async function thi() {
    let id = Math.floor(Math.random() * 9999999999)
    let name = document.getElementById("name")
    let medicine = document.getElementById("medicine")
    let address = document.getElementById("address")
    let mobile = document.getElementById("mobile")
    let time = new Date()
    let js = {
      Name: name.value,
      Medicine: medicine.value,
      Mobile: mobile.value,
      Address: address.value,
      Date: `${time.getDate()}/${time.getMonth()}/${time.getFullYear()}`,
      Time: `${time.getHours()}:${time.getMinutes()}`,
      OrderId: id
    }
    await fetch(process.env.NEXT_PUBLIC_DB+"Orders.json",
      {
        method: "POST",
        body: JSON.stringify(js)
      })
    toast.success(`Thank you for your order is successfully placed your order id: ${id}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // alert("Thank you for ordering on our pharmacy this is your order id: "+id+" please note the order id. We will contact you in 5 to 10 minutes or else you can contact on: 8056503859")
  }
}

export default order