import cms from "top/_cms.ts";

cms.git();

const user = Deno.env.get("CMS_USER") ?? "admin";
const pass = Deno.env.get("CMS_PASSWORD") ?? "";

cms.auth({
  [user]: pass,
})

export default cms;
