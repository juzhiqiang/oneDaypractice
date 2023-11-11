import { createChunk } from "./sparkMD5.js";
onmessage = async (e) => {
  // 异步并行计算
  const promiseArr = [];
  const { file, CHUNK_SIZE, startIndex, endIndex } = e.data;
  for (let i = startIndex; i < endIndex; i++) {
    promiseArr.push(createChunk(file, i * CHUNK_SIZE, CHUNK_SIZE));
  }

  const chunks = await Promise.all(promiseArr);

  postMessage(chunks);
};
