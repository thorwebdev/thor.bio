import { Head } from "$fresh/runtime.ts";
import Projects, { Project } from "../components/Projects.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import projects from "../data/showcase.json" assert { type: "json" };

export default function ShowcasePage() {
  return (
    <>
      <Head>
        <title>Showcase | Thor.Bio</title>
      </Head>
      <Header title="showcase" active="/showcase" />

      <div class="flex flex-col min-h-screen">
        <div class="flex-1">
          <Showcase items={projects} />
        </div>
        <Footer />
      </div>
    </>
  );
}

function Showcase({ items }: { items: Project[] }) {
  return (
    <section class="max-w-screen-lg mx-auto my-16 px(4 sm:6 md:8) space-y-4">
      <h2 class="text(3xl gray-600) font-bold">Showcase</h2>
      <p class="text-gray-600">
        Explore some of my recent work and contributions 👇
      </p>
      <Projects items={items} class="gap-16" />
    </section>
  );
}
