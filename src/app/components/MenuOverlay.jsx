import React from "react";
import Link from "next/link";

const MenuOverlay = () => {
  return (
    <ul className="flex p-4 md:p-0 flex-col items-center">
      <li>
        <Link
          href={"/#works"}
          className="text-[#574F4A] hover:text-[#574F4A70] font-bold block py-2 pl-3 pr-4"
        >
          Works
        </Link>
      </li>
      <li>
        <Link
          href={"/about"}
          className="text-[#574F4A] hover:text-[#574F4A70] font-bold block py-2 pl-3 pr-4"
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          href={""}
          className="text-[#574F4A] hover:text-[#574F4A70] font-bold block py-2 pl-3 pr-4 
                        border-2 border-[#574F4A] hover:border-[#574F4A70] rounded-full"
        >
          Resume
        </Link>
      </li>
    </ul>
  );
};

export default MenuOverlay;
