import { supabase } from "../lib/supabaseClient";

export async function getServerSideProps() {
  const { data: pods } = await supabase.from("skill_pods").select().eq("status", "approved");
  return { props: { pods } };
}
