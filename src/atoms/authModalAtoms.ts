import { atom } from "recoil"

// Custom Typescript Type for the Authentication Modal
// open will dictate if the modal is open or not
// view will dictate the type of modal to display
export interface AuthModalState{
    open: boolean;
    view: 'login' | 'signup' | 'resetPassword';
}

const defaultModalState: AuthModalState = {
    open: false,
    view: 'login'
}

export const authModalState = atom<AuthModalState>({
    key: 'authModalState',
    default: defaultModalState,
})