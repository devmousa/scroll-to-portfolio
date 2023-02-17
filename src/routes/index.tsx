import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export const sectionScrollIntoView = (id: string) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export default component$(() => {
  const technologies: string[] = [
    "HTML",
    "CSS",
    "SASS",
    "Tailwind",
    "JavaScript",
    "React",
    "TypeScript",
    "Qwik",
    "Python",
    "Django",
  ];
  const projects: Array<[string, string]> = [
    ["Github Profiles Search App", "https://github-profiles-search-mm.netlify.app/"],
    ["To Do List", "https://qwik-todo-list.netlify.app/"],
    ["LPA", "https://lpa.netlify.app/"],
    ["old portfolio", "https://mousaaboubaker.netlify.app/"],
  ];
  const contacts: Array<[string, string]> = [
    ["Linked in", "https://www.linkedin.com/in/mousaaboubaker/"],
    ["discord", "https://discord.gg/MousaAboubaker#4571"],
    ["Telegram", "https://web.telegram.org/k/#@MousaAboubaker"],
    ["What's App", "https://api.whatsapp.com/send?phone=+218942810234&text=Hello%20Mr.%20Mousa"],
  ];
  const following: Array<[string, string]> = [
    ["Github", "https://github.com/mousaAM/"],
    ["Twitter", "https://twitter.com/mousaAM_"],
    ["Facebbok", "https://www.facebook.com/mastermousa.hamed/"],
    ["Youtube", "https://www.youtube.com/channel/MousaAboubakerAr"],
  ];
  return (
    <div class="h-screen overflow-hidden">
      <div
        id="first"
        class="h-screen bg-rose-50 relative flex justify-center items-center"
      >
        <h2 class="text-gray-900 text-3xl text-center font-poppins font-bold">
          Mousa Aboubaker
          <br />
          Full Stack Developer
        </h2>
        <span
          class="absolute bottom-0 text-4xl animate-bounce cursor-pointer border-2 border-black bg-white p-2 rounded-3xl transition-all hover:rounded-xl"
          onClick$={() => sectionScrollIntoView("second")}
        >
          &#8675;
        </span>
        <span class="absolute bottom-20 opacity-5 animate-pulse">
          Click me &#10534;
        </span>
      </div>

      <div
        id="second"
        class="h-screen bg-sky-50 relative flex justify-center items-center"
      >
        <span
          class="absolute top-0 text-4xl animate-reversed-bounce cursor-pointer border-2 border-black bg-white p-2 rounded-3xl transition-all hover:rounded-xl"
          onClick$={() => sectionScrollIntoView("first")}
        >
          &#8673;
        </span>

        <p class="text-gray-900 text-3xl text-center font-poppins font-bold">
          My name is Mousa Aboubaker Hamed, I was born in 2005, <br />
          I love programming and technology, <br />
          I try every day to optimize my programming knowledge, <br />
          currently, I can build websites and cross platform apps
        </p>

        <span
          class="absolute bottom-0 text-4xl animate-bounce cursor-pointer border-2 border-black bg-white p-2 rounded-3xl transition-all hover:rounded-xl"
          onClick$={() => sectionScrollIntoView("third")}
        >
          &#8675;
        </span>
      </div>

      <div
        id="third"
        class="h-screen bg-teal-50 relative flex flex-col justify-center items-center"
      >
        <span
          class="absolute top-0 text-4xl animate-reversed-bounce cursor-pointer border-2 border-black bg-white p-2 rounded-3xl transition-all hover:rounded-xl"
          onClick$={() => sectionScrollIntoView("second")}
        >
          &#8673;
        </span>

        <h2 class="mb-4 text-gray-900 text-3xl text-center font-poppins font-bold">
          Technologies that I used ⚒️
        </h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 grid-rows-5 sm:grid-rows-4 gap-2">
          {technologies.map((value, index) => {
            return (
              <div
                key={index}
                class="px-4 py-6 rounded-xl cursor-default border-2 border-transparent text-teal-900 transition-all hover:bg-teal-100 hover:text-black hover:border-teal-200 text-center font-poppins font-bold"
              >
                {value}
              </div>
            );
          })}
        </div>

        <span
          class="absolute bottom-0 text-4xl animate-bounce cursor-pointer border-2 border-black bg-white p-2 rounded-3xl transition-all hover:rounded-xl"
          onClick$={() => sectionScrollIntoView("fourth")}
        >
          &#8675;
        </span>
      </div>

      <div
        id="fourth"
        class="h-screen bg-emerald-50 relative flex flex-col justify-center items-center"
      >
        <span
          class="absolute top-0 text-4xl animate-reversed-bounce cursor-pointer border-2 border-black bg-white p-2 rounded-3xl transition-all hover:rounded-xl"
          onClick$={() => sectionScrollIntoView("third")}
        >
          &#8673;
        </span>

        <h2 class="mb-4 text-gray-900 text-3xl text-center font-poppins font-bold">
          My Projects
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-2">
          {projects.map((value, index) => {
            return (
              <a
                key={index}
                href={value[1]}
                target="_blank"
                class="px-4 py-6 rounded-xl cursor-pointer border-2 border-transparent text-emerald-900 transition-all hover:bg-emerald-100 hover:text-black hover:border-emerald-200 text-center font-poppins font-bold"
              >
                {value[0]}
              </a>
            );
          })}
        </div>

        <span
          class="absolute bottom-0 text-4xl animate-bounce cursor-pointer border-2 border-black bg-white p-2 rounded-3xl transition-all hover:rounded-xl"
          onClick$={() => sectionScrollIntoView("fifth")}
        >
          &#8675;
        </span>
      </div>

      <div
        id="fifth"
        class="h-screen bg-yellow-50 relative flex flex-col justify-center items-center"
      >
        <span
          class="absolute top-0 text-4xl animate-reversed-bounce cursor-pointer border-2 border-black bg-white p-2 rounded-3xl transition-all hover:rounded-xl"
          onClick$={() => sectionScrollIntoView("fourth")}
        >
          &#8673;
        </span>

        <h2 class="mb-4 text-gray-900 text-3xl text-center font-poppins font-bold">
          Contact me
        </h2>

        <div class="grid grid-cols-2 grid-rows-2 gap-2">
          {contacts.map((value, index) => {
            return (
              <a
                key={index}
                href={value[1]}
                target="_blank"
                class="px-4 py-6 rounded-xl cursor-pointer border-2 border-transparent text-yellow-900 transition-all hover:bg-yellow-100 hover:text-black hover:border-yellow-200 text-center font-poppins font-bold"
              >
                {value[0]}
              </a>
            );
          })}
        </div>

        <span
          class="absolute bottom-0 text-4xl animate-bounce cursor-pointer border-2 border-black bg-white p-2 rounded-3xl transition-all hover:rounded-xl"
          onClick$={() => sectionScrollIntoView("sixth")}
        >
          &#8675;
        </span>
      </div>

      <div
        id="sixth"
        class="h-screen bg-orange-50 relative flex flex-col justify-center items-center"
      >
        <span
          class="absolute top-0 text-4xl animate-reversed-bounce cursor-pointer border-2 border-black bg-white p-2 rounded-3xl transition-all hover:rounded-xl"
          onClick$={() => sectionScrollIntoView("fifth")}
        >
          &#8673;
        </span>

        <h2 class="mb-4 text-gray-900 text-3xl text-center font-poppins font-bold">
          Follow me
        </h2>

        <div class="grid grid-cols-2 grid-rows-2 gap-2">
          {following.map((value, index) => {
            return (
              <a
                key={index}
                href={value[1]}
                target="_blank"
                class="px-4 py-6 rounded-xl cursor-pointer border-2 border-transparent text-orange-900 transition-all hover:bg-orange-100 hover:text-black hover:border-orange-200 text-center font-poppins font-bold"
              >
                {value[0]}
              </a>
            );
          })}
        </div>

        <span
          class="absolute bottom-0 text-4xl animate-bounce cursor-pointer border-2 border-black bg-white p-2 rounded-3xl transition-all hover:rounded-xl"
          onClick$={() => sectionScrollIntoView("seventh")}
        >
          &#8675;
        </span>
      </div>

      <div
        id="seventh"
        class="h-screen bg-slate-50 relative flex flex-col justify-center items-center"
      >
        <span
          class="absolute top-0 text-4xl animate-reversed-bounce cursor-pointer border-2 border-black bg-white p-2 rounded-3xl transition-all hover:rounded-xl"
          onClick$={() => sectionScrollIntoView("sixth")}
        >
          &#8673;
        </span>

        <h2 class="mb-4 text-gray-900 text-3xl text-center font-poppins font-bold">
          I just want to tell you
          <br />
          Thanks for reaching the end of this site 😊
        </h2>

        <span
          class="absolute bottom-0 right-2 text-4xl animate-bounce cursor-pointer border-2 border-black bg-white p-2 rounded-3xl transition-all hover:rounded-xl"
          onClick$={() => sectionScrollIntoView("first")}
        >
          &#8673;
        </span>
        <span class="absolute bottom-20 right-2 opacity-5 animate-pulse">
          Top &#10534;
        </span>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Mousa Aboubaker's Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Mousa Aboubaker, Full Stack Developer and this website is a simple portfolio for him",
    },
  ],
};
