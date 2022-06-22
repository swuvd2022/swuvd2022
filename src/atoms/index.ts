import { atom } from 'recoil';
import { projectKind } from 'types/domain';

export const categoryState = atom<typeof projectKind[number]>({
  key: 'category',
  default: 'All',
});
