import React, { useState } from "react"

const Form = (props) => {
  let submitState = props.submitState;
  let setSubmitState = props.setSubmitState;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "india",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });


  function inputChangeHandler(event){
    const {name, type, value, checked} = event.target;
    setFormData( prevState => {
        return({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }
        );
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);

    let data = Object.keys(formData).map(key => `${key} = ${formData[key]}`);
    data = data.join("\n");
    setSubmitState(true);
  }

  return (
    <div>
      <form 
        onSubmit={submitHandler}
        className="bg-white md:w-1/2 md:max-w-[1000px] rounded-md p-[30px] mx-auto flex flex-col gap-2 shadow-md" 
      >
        
        {/* First Name */}
        <div>
            <label htmlFor="firstName" className='font-medium text-sm'>First Name</label>
            <input 
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                placeholder="Jerry"
                onChange={inputChangeHandler}
                className='w-full border border-blue-400 rounded-md p-2 mt-2'
                required
            />
        </div>

        {/* Last Name */}
        <div>
            <label htmlFor="lastName" className='font-medium text-sm'>Last Name</label>
            <input 
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Patel"
                value={formData.lastName}
                onChange={inputChangeHandler}
                className='w-full border border-blue-400 rounded-md p-2 mt-2'
                required
            />
        </div>

        {/* Email */}
        <div>
            <label htmlFor="email" className='font-medium text-sm'>Email</label>
            <input 
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="jerryp@gmail.com"
                onChange={inputChangeHandler}
                className='w-full border border-blue-400 rounded-md p-2 mt-2'
                required
            />
        </div>

        {/* Country */}
        <div>
            <label htmlFor="country" className='font-medium text-sm'>Country</label>
            <select 
                name="country" 
                id="country"
                value={formData.country}
                onChange={inputChangeHandler}
                className='w-full border border-blue-400 rounded-md p-2 mt-2'
                required
            >
                <option value="india">India</option>
                <option value="united states">United States</option>
                <option value="Japan">Japan</option>
                <option value="united kingdom">United Kingdom</option>
                <option value="russia">Russia</option>
            </select>
        </div>

        {/* Streets */}
        <div>
            <label htmlFor="streetAddress" className='font-medium text-sm'>Street address</label>
            <textarea 
                name="streetAddress" 
                id="streetAddress"
                placeholder="124 Dalal St"
                value={formData.streetAddress}
                onChange={inputChangeHandler}
                className='w-full border border-blue-400 rounded-md p-2 mt-2'
                required
            />
        </div>
        
        {/* City */}
        <div>
            <label htmlFor="city" className='font-medium text-sm'>City</label>
            <input 
                type="text"
                placeholder="Mumbai"
                id="city"
                name="city"
                value={formData.city}
                onChange={inputChangeHandler}
                className='w-full border border-blue-400 rounded-md p-2 mt-2'
                required
            />
        </div>

        {/* State / Province */}
        <div>
            <label htmlFor="state" className='font-medium text-sm'>State / Province</label>
            <input 
                type="text"
                name="state"
                id="state"
                placeholder="Maharashtra"
                value={formData.state}
                onChange={inputChangeHandler}
                className='w-full border border-blue-400 rounded-md p-2 mt-2'
                required
            />
        </div>

        {/* Zip / Postal */}
        <div>
            <label htmlFor="zip" className='font-medium text-sm'>Zip / Postal</label>
            <input 
                type="number" 
                id="zip"
                name="zip"
                placeholder="400001"
                value={formData.zip}
                onChange={inputChangeHandler}
                className=' w-full border border-blue-400 rounded-md p-2 mt-2'
                required
            />
        </div>

        {/* By Email Checkboxes */}
        <div className='mb-4'>
            <label className='font-medium text-sm'>By Email</label>
            <div className='flex items-start gap-4 mt-2'> 
                <input 
                    type="checkbox" 
                    name="comments" 
                    id="comments"
                    checked={formData.comments}
                    onChange={inputChangeHandler} 
                    className='w-4 h-4 mt-[6px]'
                />
                <div>
                    <label htmlFor="comments" className='font-medium text-sm'>Comments</label>
                    <p className='text-sm text-gray-500'>Get notified when someones posts a comment on a posting</p>
                </div>
            </div>
            <div className='flex items-start gap-4 mt-2'>
                <input 
                    type="checkbox" 
                    name="candidates"
                    id="candidates"
                    checked={formData.candidates}
                    onChange={inputChangeHandler}
                    className='w-4 h-4 mt-[6px]'
                />
                <div>
                    <label htmlFor="candidates" className='font-medium text-sm'>Candidates</label>
                    <p className='text-sm text-gray-500'>Get notified when a candidate applies for a job</p>
                </div>
            </div>
            <div className='flex items-start gap-4 mt-2'>
                <input 
                    type="checkbox" 
                    name="offers" 
                    id="offers"
                    checked={formData.offers}
                    onChange={inputChangeHandler}
                    className='w-4 h-4 mt-[6px]'
                />
                <div>
                    <label htmlFor="offers" className='font-medium text-sm'>Offers</label>
                    <p className='text-sm text-gray-500'>Get notified when a candidate accepts or rejects an offer</p>
                </div>
            </div>
        </div>

        {/* Push Notifications */}
        <div>
            <label className='font-medium text-sm'>Push Notifications</label>
            <p className='text-sm text-gray-500'>These are delivered via SMS to your mobile phone</p>

            <div className='flex gap-4 items-center mt-2'>
                <input 
                    type="radio" 
                    name="pushNotifications" 
                    id="radio1"
                    value="everything"
                    onChange={inputChangeHandler}
                    className='w-4 h-4'
                />
                <label htmlFor="radio1" className='font-medium text-sm'>Everything</label>
            </div>
            <div className='flex gap-4 items-center mt-2'>
                <input 
                    type="radio"
                    name="pushNotifications"
                    id="radio2"
                    value="same as email"
                    onChange={inputChangeHandler}
                    className='w-4 h-4'
                />
                <label htmlFor="radio2" className='font-medium text-sm'>Same as email</label>
            </div>
            <div className='flex gap-4 items-center mt-2'>
                <input 
                    type="radio" 
                    name="pushNotifications" 
                    id="radio3" 
                    value="no push notifications"
                    onChange={inputChangeHandler}
                    className='w-4 h-4'
                />
                <label htmlFor="radio3" className='font-medium text-sm'>No push notifications</label>
            </div>
        </div>
        
        {/* Sumbit Button */}
        <button 
            type="submit"
            className='bg-blue-500 max-w-[80px] mt-2 font-medium text-white py-2 px-4 rounded-md hover:bg-blue-600
            transition-all duration-200'
        >
            Save
        </button>

      </form>
    </div>
  )
};

export default Form;
