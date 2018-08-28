import network from '../index';
const preUrlPath = '/auth';

export default {
    async login (params) {
        const res = await network.post({
            url: `${preUrlPath}/web/login`,
            data: params
        });
        return res;
    },
    
    async xiugaimima (params) {
        const res = await network.post({
            url: `${preUrlPath}/user/updatePassword`,
            data: params
        });
        return res;
    }
}
