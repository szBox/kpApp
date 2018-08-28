import network from '../index';
//查看个人信息
const student = '/student'; 
//获取错题分析
const error ='/answer';
//获取错题 书本 
const errorbook ='/challenge';
//获取收藏题目
const shoucangTimu ='/answerCollection';
//获取审核列表
const readVerify='/readVerify';

export default {
	//个人资料
    async get (id) {
        const res = await network.get({
            url: `${student}/get/${id}`,
        });
        return res;
    },
    async edit (params) {
        const res = await network.put({
            url: `${student}/edit`,
            data:params
        });
        return res;
    },
    //个人错题分析
    async errChart (params) {
        const res = await network.post({
            url: `${error}/getEroorAnswerAll`,
            data:params
        });
        return res;
    },
     async errBooks () {
        const res = await network.get({
            url: `${errorbook}/getBookAnswerCount`,
        });
        return res;
    },
    //我收藏的题目
    async shoucangBook (params) {
        const res = await network.post({
            url: `${shoucangTimu}/getBookCount`,
            data:params
        });
        return res;
    },
    async shoucangTimu (params) {
        const res = await network.post({
            url: `${shoucangTimu}/list/page`,
            data:params
        });
        return res;
    },
    async shoucangTimuDel (id) {
        const res = await network.delete({
            url: `${shoucangTimu}/delete/${id}`,
        });
        return res;
    },
	 //我的申请
	async readVerify (params) {
        const res = await network.post({
            url: `${readVerify}/list/page`,
            data:params
        });
        return res;
    },
    // 我的申请 -添加   判断是否全部通关
    async isMustAll (gradeId) {
        const res = await network.get({
            url: `/challenge/isChallengPass`,
            data:gradeId
        });
        return res;
    },
    async readVerifySee (id) {
        const res = await network.get({
            url: `${readVerify}/get/${id}`,
        });
        return res;
    },
    async readVerifyAdd (params) {
        const res = await network.post({
            url: `${readVerify}/repeatAnswerVerify`,
            data:params
        });
        return res;
    },
}
