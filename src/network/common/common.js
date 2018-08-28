import network from '../index';

export default {
	//年级
    async gradeOption (params) {
        const res = await network.get({
            url: 'grade/options',
            data: params
        });
        return res;
    },
    //书籍
    async bookOption (params) {
        const res = await network.post({
            url: 'readBook/option',
            data: params
        });
        return res;
    },
    
}    
