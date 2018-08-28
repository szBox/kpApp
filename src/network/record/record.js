import network from '../index';

export default {
	//查看详情
    async infoList (params) {
        const res = await network.post({
            url: `/challenge/getDetail`,
            data:params
        });
        return res;
    },
	//只看错题
	async errorItem (params) {
        const res = await network.post({
            url: `/answer/getEroorAnswerAll`,
            data:params
        });
        return res;
    },
   	//添加收藏
    async collectionAdd (params) {
        const res = await network.post({
            url: `/answerCollection/add`,
            data:params
        });
        return res;
    },
    //取消收藏
    async collectionDel (id) {
        const res = await network.delete({
            url: `/answerCollection/delete/${id}`,
        });
        return res;
    },
}
