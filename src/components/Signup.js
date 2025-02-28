"use client";
import { UniversitySelect } from "@/components/UniSelect";
import Image from "next/image";
import { useState } from "react";

export default function Signup({
  phoneNumber,
  setPhoneNumber,
  selectedUniversity,
  setSelectedUniversity,
  handleSubmit,
}) {
  return (
    <section className="flex flex-col gap-8 w-full sm:w-[40%] h-full px-5 sm:pl-20">
      <div className="flex justify-between items-center w-[90%] sm:w-[70%] mt-10">
        <Image
          src={"/Qitt-Text-Logo.png"}
          width={130}
          height={130}
          unoptimized
          alt="Qitt Logo"
        />
        <div className="h-8 flex justify-center items-center px-3 py-2 rounded-full bg-[#D3FAD9] text-[#00934D]">
          Coming Soon!
        </div>
      </div>

      <h1 className="font-extrabold text-3xl">Get early access!</h1>
      <p className="w-[100%]">
        University life just got easier! Be among the first to experience the
        future of student life. Join the waitlist now!
      </p>

      <form className="mb-4 w-[100%]" onSubmit={handleSubmit}>
        <label className="block text-gray-900 text-sm font-bold mb-2">
          Enter University
        </label>
        <UniversitySelect
          value={selectedUniversity}
          onChange={setSelectedUniversity}
        />

        <div className="h-4 w-full"></div>

        <label className="block text-gray-900 text-sm font-bold mb-2">
          Phone Number (WhatsApp)
        </label>
        <input
          className="shadow border rounded w-full p-3"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your WhatsApp number"
          required
        />

        <button
          className="bg-[#0A32F8] hover:bg-blue-700 text-white mt-6 font-bold p-4 rounded flex items-center gap-3 w-full g justify-center"
          onClick={handleSubmit}
        >
          <span>Submit</span>
          <Image src={"/right-arrow.png"} width={12} height={12} alt="right-icon"/>
        </button>
      </form>
    </section>
  );
}
