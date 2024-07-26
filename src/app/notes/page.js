import { createClient } from '@/utils/supabase/server';

export default async function Notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return <pre style={{marginTop : "180px",marginRight:"20px"}}>{JSON.stringify(notes, null, 2)}</pre>
}