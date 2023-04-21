import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-github.tsx";
import BrandTwitter from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/brand-twitter.tsx";

export default function NavigationBar(props: {
  active: string;
  class?: string;
}) {
  const items = [
    {
      name: "Showcase",
      href: "/showcase",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];
  const isHome = props.active == "/";
  return (
    <nav class={"flex " + props.class ?? ""}>
      <ul class="flex justify-center items-center gap-4 mx-4 my-6 flex-wrap">
        {items.map((item) => (
          <li>
            <a
              href={item.href}
              class={`p-2 ${
                isHome ? "text-green-900" : "text-gray-600"
              } hover:underline ${
                props.active == item.href ? "font-bold" : ""
              }`}
            >
              {item.name}
            </a>
          </li>
        ))}

        <li class="flex items-center">
          <a
            href="https://twitter.com/thorwebdev"
            class="hover:text-thor-neon inline-block"
          >
            <BrandTwitter />
          </a>
        </li>
        <li class="flex items-center">
          <a
            href="https://github.com/thorwebdev"
            class="hover:text-thor-neon inline-block"
          >
            <BrandGithub />
          </a>
        </li>
      </ul>
    </nav>
  );
}
