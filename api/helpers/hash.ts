import { createHash } from "crypto";

export enum AlgorithmEnum {
  SHA256 = 'sha256',
  SHA512 = 'sha512'
}

async function hash(data: string, algorithm: AlgorithmEnum = AlgorithmEnum.SHA512) {
  return createHash(algorithm).update(data).digest('hex');
}

async function verify(source: string, destination: string, algorithm: AlgorithmEnum = AlgorithmEnum.SHA512) {
  const hashedData = createHash(algorithm).update(destination).digest('hex');
  return source === hashedData;
}

export { hash, verify }