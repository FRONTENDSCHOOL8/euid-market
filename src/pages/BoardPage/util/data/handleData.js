
import pb from '/src/lib/api/pocketbase';

export function createData(args) {
  const data = {
    "status": args.status,
    "type": args.type,
    "location": args.location,
    "title": args.title,
    "requirements": args.requirements,
    "time": args.time,
    "max_people": args.max_people,
    "curr_people": args.curr_people,
    "content": args.content
  };
  return data;
}

export async function addData(data) {
  const record = await pb.collection('posts').create(data);
}

export async function getData() {
  const response = await fetch(
    `${import.meta.env.VITE_PB_API}/collections/posts/records`
  );
  response.data = await response.json();
  const items = response.data.items;
  return items;
}
