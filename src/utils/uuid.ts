import { v4 as uuidv4 } from 'uuid';

export function generateUUID() {
  const newUuid = uuidv4();
  return newUuid;
}
