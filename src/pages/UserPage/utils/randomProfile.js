import pb from '/src/lib/api/pocketbase';

export async function randomProfile() {
  let keysArr = ['n0oa97g6lcfm319', 'pdizur0fz8nfad8', '6t5bbkd357274tl'];
  let random = keysArr[[~~(Math.random() * keysArr.length)]];
  let photo = await pb.collection('users').getOne(random);
  let photo_url = `${import.meta.env.VITE_PB_URL}/api/files/users/${random}/${
    photo['user_photo']
  }`;
  console.log(photo_url);
  return photo_url;
}
