import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

export default function Registered() {
  const websiteLink = "tinyurl.com/useqitt";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(websiteLink);
      toast.success("Link Copied");
    } catch (err) {
      toast.error("Failed to copy:");
    }
  };

  return (
    <section className="flex flex-col justify-start gap-8 w-full sm:w-[40%] h-full px-5 sm:pl-20 ">
      <div className="flex justify-start items-center  mt-10 ">
        <Image
          src={"/Qitt-Text-Logo.png"}
          width={130}
          height={130}
          unoptimized
          alt="Qitt Logo"
        />
      </div>

      <div className=" font-aeonik ">
        <h1 className="text-3xl font-bold">You’re In!</h1>
        <p className="text-md">
          You’re now on the list! Stay tuned—Qitt is about to make your
          university experience smoother. We’ll reach out to you on WhatsApp
          soon. Get ready to stay connected like never before!
        </p>
      </div>

      <div className="h-1 bg-gray-400 w-full"> &nbsp;</div>
      <div>
        <h2 className="text-lg font-bold">Spread the Word! 🚀</h2>
        <p className="text-md">
          Great things are better with friends! Share the link and invite others
          to join the waitlist. The more, the better—let’s make student life
          easier together!
        </p>
      </div>

      <div class="flex items-center gap-5 justify-between rounded-sm  w-full max-w-md">
        <input
          type="text"
          value={websiteLink}
          class=" text-gray-900 p-4 text-md border border-gray-300 flex-grow outline-none cursor-not-allowed"
          readonly
        />
        <button
          onClick={handleCopy}
          class="border border-gray-500 text-gray-900 px-3 py-3 rounded-sm flex items-center space-x-1 hover:bg-gray-100"
        >
          <span>Copy</span>
          <Image src={"/copy-icon.png"} width={20} height={20} />
        </button>
      </div>

      <div className="flex space-x-3 w-full justify-between">
        {/* Instagram Link */}
        <Link
          href="https://instagram.com/useqitt"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-500 px-4 py-2 rounded-sm flex items-center space-x-2 hover:bg-pink-100 transition"
        >
          <Image src="/insta.png" alt="Instagram" width={12} height={10} />
          <span className="mt-1">Instagram</span>
        </Link>

        {/* Facebook Link */}
        <Link
          href="https://facebook.com/useqitt"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-500 px-4 py-2 rounded-sm flex items-center space-x-2 hover:bg-blue-100 transition"
        >
          <Image src="/facebook.png" alt="Facebook" width={8} height={10} />
          <span className="mt-1">Facebook</span>
        </Link>

        {/* X (Twitter) Link */}
        <Link
          href="https://x.com/useqitt"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-500 text-black px-4 py-2 rounded-sm flex items-center space-x-2 hover:bg-gray-200 transition"
        >
          <Image src="/x-icon.png" alt="X" width={12} height={10} />
          <span className="mt-1">X</span>
        </Link>
      </div>
    </section>
  );
}
