import PocketBase from 'pocketbase';



export const pb = new PocketBase('http://127.0.0.1:8090');

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
  const pb = new PocketBase('http://127.0.0.1:8090');
  const record = await pb.collection('posts_together').create(data);
}
