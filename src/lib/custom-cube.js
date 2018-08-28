import Vue from 'vue';
import MyConfirm from '@/components/my-confirm';
import {createAPI} from 'cube-ui';

createAPI(Vue, MyConfirm, ['sure','cancel'], true);

export default {}