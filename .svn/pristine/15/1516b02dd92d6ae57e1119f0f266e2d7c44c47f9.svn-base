import network from '../index';
const preUrlPath = '/readBook';

export default {
    async homeBooks (params) {
        const res = await network.post({
            url: `${preUrlPath}/list/challengeBookPage`,
            data: params
        });
        return res;
    },
    //判断 必读是否全部通关
    async isMust (gradeId) {
        const res = await network.get({
            url: `/challenge/isMustReadChallengPass`,
            data:gradeId
        });
        return res;
    },
    //每本书的闯关记录以及书本详情
    async beginChallenge (params) {
        const res = await network.post({
            url: `/challenge/beginChallenge`,
            data: params
        });
        return res;
    },
    //交卷
    async handIn (params) {
        const res = await network.post({
            url: `challenge/add`,
            data: params
        });
        return res;
    },
}
