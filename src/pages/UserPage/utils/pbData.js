import pb from '/src/lib/api/pocketbase';

/**
 * pocketbase에서 레코드 하나만 들고오는 함수
 * @param {string} collection
 * @param {string} id
 * @returns
 */
export async function pbGetOne(collection, id) {
  return await pb.collection(collection).getOne(id);
}

/**
 * pocketbase에서 1-10 페이지 list로 들고옴
 * @param {string} collection
 * @param {string} filterRecord
 * @param {string} id
 * @returns
 */
export async function pbGetList(collection, filterRecord, id) {
  return await pb.collection(collection).getList(1, 10, {
    filter: `${filterRecord}= "${id}"`,
  });
}
