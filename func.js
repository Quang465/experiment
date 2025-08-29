// Thay thông tin dự án Supabase của bạn
const SUPABASE_URL = "https://ohskhwphbmvetffrxtvt.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oc2tod3BoYm12ZXRmZnJ4dHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0MzY2MzksImV4cCI6MjA3MjAxMjYzOX0.rZb62qKQWlaz9_YS0SuMXvPKkjziE84zhVimEdFWNGQ";
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("sendBtn");

  btn.addEventListener("click", async () => {
    const { error } = await sb.from("commands").insert([
      { command: "PRINT_HELLO" }
    ]);

    if (error) {
      console.error("Lỗi:", error);
      alert("Gửi thất bại!");
    } else {
      alert("Đã gửi lệnh!");
    }
  });
});
