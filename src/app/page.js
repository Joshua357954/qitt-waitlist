"use client";
import { addUser } from "@/api";
import Registered from "@/components/Registered";
import Signup from "@/components/Signup";
import { UniversitySelect } from "@/components/UniSelect";
import { getUserFromLS } from "@/utils";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [user, setUser] = useState(() => getUserFromLS() || {});
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedUniversity || !phoneNumber) {
      alert("Please fill in all fields");
      return;
    }

    const formData = {
      university: selectedUniversity,
      phone: phoneNumber,
    };
    toast.loading("Adding User To Waitlist");

    addUser(formData?.university, formData?.phone)
      .then((newUser) => {
        if (!newUser.success) {
          toast.dismiss();
          console.log(formData);
          toast.error("An Error Occurred, Try Again");
        } else {
          toast.dismiss();
          setUser(formData);
          toast.success("Welcome to the Gang");
        }
      })
      .catch(() => {
        toast.dismiss();
        toast.error("An Error Occurred");
      });
  };

  return (
    <main className="flex h-screen justify-between max-w-screen font-aeonik ">
      {/* Section 1 */}
      {user?.phone ? (
        <Registered />
      ) : (
        <Signup
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          selectedUniversity={selectedUniversity}
          setSelectedUniversity={setSelectedUniversity}
          handleSubmit={handleSubmit}
        />
      )}

      {/* Section 2 */}
      <section className="hidden sm:flex w-[45%] relative h-full">
        <Image
          width={10}
          height={10}
          src={"/qitt-waitlist-image-1.png"}
          alt="Qitt Waitlist"
          className="w-full h-full object-top"
          unoptimized
        />
      </section>
    </main>
  );
}
