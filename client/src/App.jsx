import React from "react";
import {useForm} from 'react-hook-form'

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const demo = () => {
    alert('Demo function is working!')
  }

  return (
    <div className="w-full  bg-black">
      <div className="container min-h-screen mx-auto flex items-center justify-center">
        <form onSubmit={handleSubmit(demo)} className="w-full max-w-lg py-8 px-12 rounded-xl shadow-lg shadow-red-500 transition duration-300 flex flex-col gap-8">
          <h2 className="text-white text-center text-4xl tracking-wide font-extralight">
            Register Form
          </h2>
          <input
            id="name"
            {...register("name", {
              required: true,
              minLength: 2,
              maxLength: 16,
            })}
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="text"
            placeholder="Enter name.."
          />

          {errors.name && errors.name.type === 'required' && (
            <span className="text-white">Ad hissesini doldurun</span>
          )}
          {errors.name && errors.name.type === 'minLength' && (
            <span className="text-white">Minimum 2 simvol daxil edin</span>
          )}
          {errors.name && errors.name.type === 'maxLength' && (
            <span className="text-white">Maximum 16 simvol daxil edin</span>
          )}



          <input
            id="email"
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="text"
            placeholder="Enter email.."
          />
          <input
            id="age"
            className="text-2xl border py-2 px-4 text-white w-full bg-transparent outline-none border-gray-600 transition-all duration-300 hover:rounded-lg inpt-focus"
            type="text"
            placeholder="Enter age.."
          />
          <button
            className="text-white bg-red-500 py-2 text-2xl uppercase font-bold tracking-wider transition-all duration-300 hover:rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
