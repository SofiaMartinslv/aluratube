import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://ymhflbbezpavtohnvhvc.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltaGZsYmJlenBhdnRvaG52aHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkwMzc5NzMsImV4cCI6MTk4NDYxMzk3M30.XMidiCIA7GD6siSLhhSBKhEU9ik7sjolG2__aGJ5yBQ";
const supabase = createClient(PROJECT_URL, API_KEY);

export function videoService() {
  return {
    getVideos() {
      return supabase.from("video").select("*");
    },
    getPlaylists() {
      return supabase.from("playlist").select("*");
    },
    addVideo(values) {
      supabase
        .from("video")
        .insert(values)
        .then((res) => res);
    },
    async addPlaylist(name) {
      const { data } = await supabase
        .from("playlist")
        .insert({
          name: name,
        })
        .select();
      return data[0];
    },
  };
}
