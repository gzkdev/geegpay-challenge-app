import ProfileImage from "../assets/profile.png";

import {
  ArrowRight,
  Box,
  Category,
  DiscountShape,
  InfoCircle,
  Logout,
  Profile2User,
  Setting2,
  TrendUp,
} from "iconsax-react";

export function MobileMenu({ open }: { open: boolean }) {
  return (
    <div
      className="fixed top-0 left-0 z-10 w-full h-screen duration-200 max-w-80"
      style={{
        transform: open ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      {/*  lg:hidden lg:pointer-events-none */}
      <div className="bg-[#F7F8FA] w-full h-full p-5 flex flex-col justify-between">
        <nav>
          <ul className="flex flex-col gap-2">
            <li>
              <a className="inline-flex items-center gap-2 p-2" href="#">
                <Category size={24} variant="Bulk" />
                Category
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 p-2" href="#">
                <TrendUp size={24} />
                Trends
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 p-2" href="#">
                <Profile2User size={24} />
                Profiles
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 p-2" href="#">
                <Box size={24} />
                Packages
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 p-2" href="#">
                <DiscountShape size={24} />
                Discounts
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 p-2" href="#">
                <InfoCircle size={24} />
                More Info
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <a className="inline-flex items-center gap-2 p-2" href="#">
                <ArrowRight size={24} variant="Broken" />
                Get More
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 p-2" href="#">
                <Setting2 size={24} variant="Broken" />
                Settings
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 p-2" href="#">
                <Logout size={24} variant="Broken" />
                Log Out
              </a>
            </li>
          </ul>
        </nav>

        <button className="flex items-center justify-between w-full p-1.5 border rounded-full">
          <span className="w-10 h-10 overflow-hidden rounded-full">
            <img
              src={ProfileImage}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </span>
          <span className="flex flex-col items-center flex-grow gap-1">
            <span className="">Justin Bergson</span>
            <span>Justin@gmail.com</span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M3.19841 6.20675C3.43891 5.95614 3.81525 5.93336 4.08045 6.1384L4.15643 6.20675L10 12.2955L15.8436 6.20675C16.0841 5.95614 16.4604 5.93336 16.7256 6.1384L16.8016 6.20675C17.0421 6.45735 17.064 6.84951 16.8672 7.12585L16.8016 7.20502L10.479 13.7933C10.2385 14.0439 9.86217 14.0666 9.59697 13.8616L9.52099 13.7933L3.19841 7.20502C2.93386 6.92935 2.93386 6.48241 3.19841 6.20675Z"
              fill="#0D062D"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
