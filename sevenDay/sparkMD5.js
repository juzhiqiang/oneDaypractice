export function createChunk(file, index, chunkSize) {
  return new Promise((resolve, reject) => {
    const start = index * chunkSize;
    const end = start + chunkSize;
    // const spark = new SparkMD5.ArrayBuffer();
    const fileRender = new FileReader();
    fileRender.onload = (e) => {
      // spark.append(e.target.result);
      resolve({
        start,
        end,
        index,
        // hash: spark.end(),
      });
    };
    fileRender.readAsArrayBuffer(file.slice(start, end));
  });
}
