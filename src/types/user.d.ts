import { BaseApiResponse } from './baseResponse';

interface IUser {
    id: number;
    accountId: string;
    nickname: string;
    loginRole: string;
    loginType: string;
    role: string;
    preferredSize: string;
    gender: string;
    isRegistered: boolean;
    recommendationCount: number;
    careCompletionCount: number;
    isCareAvailable: boolean;
    mbti: string;
}

//	GET profile informations
interface ProfileApiParams {
    userId: string;
}
interface ProfileApiResponse extends BaseApiResponse {
    data: {
        responseCode: string;
        message: string;
        id: number;
        accountId: string;
        nickname: string;
        profileImg: string;
        role: string;
        preferredSizes: string[];
        gender: string;
        introduction: string;
        isRegistered: boolean;
        recommendationCount: number;
        careCompletionCount: number;
        isCareAvailable: boolean;
        mbti: string;
        region: string;
    };
}

export type { IUser, ProfileApiParams, ProfileApiResponse };
