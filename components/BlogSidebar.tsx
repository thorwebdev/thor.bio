import { Head } from "$fresh/runtime.ts";
import {
  CATEGORIES,
  TableOfContentsCategory,
  TableOfContentsCategoryEntry,
} from "../data/blog.ts";

export default function BlogSidebar(props: { path: string; mobile?: boolean }) {
  const id = String(Math.random()).replaceAll(".", "");
  return (
    <>
      <ul class="list-decimal list-inside font-semibold nested">
        {CATEGORIES.map((category) => (
          <SidebarCategory path={props.path} category={category} />
        ))}
      </ul>
    </>
  );
}

const link = "text(gray-900 hover:gray-600)";
const linkActive = "text(green-600 hover:green-500)";

export function SidebarCategory(props: {
  path: string;
  category: TableOfContentsCategory;
}) {
  const { title, href, entries } = props.category;

  const outerLink = `${href == props.path ? linkActive : link} font-bold`;

  return (
    <li class="my-2 block">
      <a href={href} class={outerLink}>
        {title}
      </a>
      {entries.length > 0 && (
        <ul class="pl-4 list-decimal nested">
          {entries.map((entry) => (
            <SidebarEntry path={props.path} entry={entry} />
          ))}
        </ul>
      )}
    </li>
  );
}

export function SidebarEntry(props: {
  path: string;
  entry: TableOfContentsCategoryEntry;
}) {
  const { title, href } = props.entry;

  const innerLink = `${href == props.path ? linkActive : link} font-normal`;

  return (
    <li class="my-0.5">
      <a href={href} class={innerLink}>
        {title}
      </a>
    </li>
  );
}
