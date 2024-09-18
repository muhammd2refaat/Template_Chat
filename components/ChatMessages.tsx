import React, { Suspense } from "react";
import ListMessages from "./ListMessages";
import { supabaseServer } from "@/lib/supabase/server";
import InitMessages from "@/lib/store/InitMessages";
import { LIMIT_MESSAGE } from "@/lib/constant";
import { Imessage } from "@/lib/store/messages";

export default async function ChatMessages() {
  const supabase = supabaseServer();
  let msgs :Imessage[] = [];

  const { data } = await supabase
    .from("messages")
    .select("*")
    .range(0, LIMIT_MESSAGE)
    .order("created_at", { ascending: false });

  if (data) {
    const userIds = [...new Set(data.map((message) => message.send_by))];
    const { data: users } = await supabase
      .from("users")
      .select("*")
      .in("id", userIds);
    if (users) {
      const messagesWithUsers = data.map((message) => ({
        ...message,
        users: users.find((user) => user.id === message.send_by),
      }));
      msgs = messagesWithUsers as Imessage[]
    }
  }

  return (
    <Suspense fallback={"loading.."}>
      <ListMessages />
      <InitMessages messages={(msgs?.reverse())} />
    </Suspense>
  );
}
