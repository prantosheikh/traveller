import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="text-slate-800">
        <h1 className="text-3xl">Leave A Review</h1>
        <p className="my-9">Your email address will not be published.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="py-3 ps-4 me-4 border rounded-lg w-[48%]"
        placeholder="Enter Name"
        {...register("example")}
      />
      <input
        className="py-3 ps-4 border rounded-lg w-1/2"
        placeholder="Email"
        {...register("exampleRequired", { required: true })}
      />{" "}
      <br />
      <textarea
        className="w-full border mt-4 py-3 px-4 rounded-lg"
        id="myTextarea"
        name="myTextarea"
        placeholder="Your Review"
        rows="6"
        cols="50"
      ></textarea>
      <input className="px-16 py-4 mt-4 cursor-pointer bg-orange-500 text-white font-semibold rounded-lg" type="submit" />
    </form>
    </div>
  );
};

export default Review;
