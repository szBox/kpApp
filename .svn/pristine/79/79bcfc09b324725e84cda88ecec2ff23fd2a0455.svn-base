import network from '../index';
export default {
//推荐类别
    async tuijianTypeOption (params) {
        const res = await network.post({
            url: 'recommendType/list/page',
            data: params
        });
        return res;
    },
//推荐 书籍   列表
    async tuijianBookList (params) {
        const res = await network.post({
            url: 'recommendBook/list/page',
            data: params
        });
        return res;
    },
    
//挑战书籍 列表
	async tiaozhanBookList (params) {
        const res = await network.post({
            url: 'challenge/getAnswerRecordAll',
            data: params
        });
        return res;
    },
//阅读 书籍   下拉
    async readBookOption (params) {
        const res = await network.post({
            url: 'readBook/option',
            data: params
        });
        return res;
    },    
    
}    