
"use client";

import { Accordion } from "flowbite-react";

export default function Accordions() {
  return (
    <>
    <h1 className="text-[22px] sm:text-[32px] font-semibold sm:w-[60vw] w-[80vw] mt-[10vh] mb-[5vh]  mx-auto">
        FAQ'S
    </h1>
    <Accordion className="sm:w-[60vw] w-[80vw] mx-auto bg-black" >
      <Accordion.Panel>
        <Accordion.Title>What is Adifie</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio repudiandae doloremque aut, rem mollitia, deleniti a veritatis maiores, labore illo eos porro!
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Is there any membership for Adifie</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus voluptas blanditiis?
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
               design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How to Buy Ads?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat voluptas vel impedit itaque qui quasi ab consequatur est, earum architecto hic!
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            
            <li>hii</li>
            <li>hellow</li>
            <li>bye</li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </>
  );
}
