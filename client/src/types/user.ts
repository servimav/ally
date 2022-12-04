export interface IUserProfile {
    id: number;
    email: string;
    name: string;
    avatar: string;
}

/**
 * IUserResponseAuth
 */
export interface IUserResponseAuth {
    profile: IUserProfile;
    api_token: string;
}
/**
 * IUserRequestLogin
 */
export interface IUserRequestLogin {
    email: string;
    password: string;
}
/**
 * IUserRequestRegister
 */
export interface IUserRequestRegister {
    email: string;
    name: string;
    password: string;
    password_confirmation: string;
}
