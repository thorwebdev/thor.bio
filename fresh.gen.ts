// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/_404.tsx";
import * as $1 from "./routes/_500.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/blog/[...slug].tsx";
import * as $4 from "./routes/gfm.css.ts";
import * as $5 from "./routes/index.tsx";
import * as $6 from "./routes/showcase.tsx";

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_500.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/blog/[...slug].tsx": $3,
    "./routes/gfm.css.ts": $4,
    "./routes/index.tsx": $5,
    "./routes/showcase.tsx": $6,
  },
  islands: {},
  baseUrl: import.meta.url,
  config,
};

export default manifest;
