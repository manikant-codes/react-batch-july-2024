import React from "react";

function Verses() {
  return (
    <div>
      <div class="mx-auto mb-16 max-w-5xl px-4 py-8 font-inter sm:px-6">
        <a href="/chapter/1/verse/1">
          <div class="flex w-full flex-col justify-between rounded-lg px-6 py-2 hover:cursor-pointer hover:bg-box-bg dark:hover:bg-dark-100 lg:flex-row lg:py-5">
            <div class="font-medium uppercase text-my-orange lg:w-1/5 leading-loose">
              Verse 1
            </div>
            <div class="flex-1 text-gray-900 dark:text-gray-50 sm:col-span-4 sm:mt-0 leading-loose">
              Dhritarashtra said, "What did my people and the sons of Pandu do
              when they had assembled together, eager for battle, on the holy
              plain of Kurukshetra, O Sanjaya?"
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Verses;
