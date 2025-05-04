import Messages from "@/components/messages";
import { connection } from "next/server";
export default async function MessagesPage() {
  const response = await fetch("http://localhost:8080/messages", {
    next: {
      revalidate: 5,
    },
  });
  // headers: {
  //   "X-ID": "page",
  // },
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
