"use client";

import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

export function ContactInfo() {
  return (
    <div className="flex flex-col justify-between space-y-10 md:space-y-12">
      <div>
        <h3 className="font-display mb-3 text-2xl font-bold text-gray-900 md:mb-4 md:text-3xl">
          Contact Information
        </h3>
        <p className="mb-6 text-base text-gray-600 md:mb-8 md:text-lg">
          Tell us how we can help and we&apos;ll get in touch shortly
        </p>

        <div className="space-y-5 md:space-y-6">
          <a
            href="mailto:info@qdasglobal.com"
            className="group hover:text-primary flex items-center gap-3 text-gray-600 transition-colors md:gap-4"
          >
            <div className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-transform">
              <HiMail className="h-5 w-5" />
            </div>
            <span className="text-base font-medium md:text-lg">
              info@qdasglobal.com
            </span>
          </a>

          <a
            href="tel:+2348027891614"
            className="group hover:text-primary flex items-center gap-3 text-gray-600 transition-colors md:gap-4"
          >
            <div className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-transform">
              <HiPhone className="h-5 w-5" />
            </div>
            <span className="text-base font-medium md:text-lg">
              +234 802789 1614
            </span>
          </a>

          <div className="group flex items-start gap-3 text-gray-600 md:gap-4">
            <div className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
              <HiLocationMarker className="h-5 w-5" />
            </div>
            <span className="text-base leading-tight font-medium md:text-lg">
              No 10 Sequela Street, Wuse II, Abuja, Nigeria
            </span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-display mb-4 text-xl font-bold text-gray-900 md:mb-6 md:text-2xl">
          Business Hours
        </h3>
        <div className="space-y-2 text-base md:space-y-3 md:text-lg">
          <p className="flex items-center gap-2">
            <span className="text-primary font-semibold">
              Monday – Friday :
            </span>
            <span className="text-gray-600">9am to 5pm</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-primary font-semibold">Saturday :</span>
            <span className="text-gray-600">11 am to 3 pm</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-primary font-semibold">Sunday :</span>
            <span className="text-gray-600">closed</span>
          </p>
        </div>
      </div>
    </div>
  );
}
