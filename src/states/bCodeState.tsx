import { atom } from 'recoil';

export const bCodeState = atom<string>({
  key: 'b_code',
  default: '',
});
