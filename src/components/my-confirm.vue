<template>
    <transition name="my-dialog-fade">
        <div class="my-confirm" v-show="showDialog">
            <div class="mask"></div>
            <div class="domain" :style="styleObj">
                <div class="title">{{title}}</div>
                <div class="content">{{content}}</div>
                <div class="btn-group">
                    <template v-if="type == 'confirm'">
                        <button class="cancle-btn" @click="cancel" :style="cancelBtn.style">{{cancelBtn.text}}</button>
                        <button class="sure-btn" @click="sure" :style="confirmBtn.style">{{confirmBtn.text}}</button>
                    </template>
                    <template v-else>
                        <button class="back-btn" @click="cancel" :style="backBtn.style">{{backBtn.text}}</button>
                    </template>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'myConfirm',
    props: {
        type: {
            type: String,
            default : 'confirm'
        },
        title: {
            type: String,
            default: 'Hello'
        },
        content: {
            type: String,
            default: 'Hello'
        },
        styleObj: {
            type: Object,
            default () { return {} }
        },
        confirmBtn: {
            type: Object,
            default () {
                return { text: '确定' ,style: {}};
            }
        },
        cancelBtn: {
            type: Object,
            default () {
                return { text: '取消' ,style: {}};
            }
        },
        backBtn: {
            type: Object,
            default () {
                return { text: '返回' ,style: {}};
            }
        }
    },
    data() {
        return {
            showDialog: true
        }
    },
    methods: {
        cancel(e) {
            this.hide();
            this.$emit('cancel', e);
        },
        sure(e) {
            this.hide();
            this.$emit('sure', e);
        },
        show() {
            this.showDialog = true;
        },
        hide() {
            this.showDialog = false;
        }
    }
}
</script>
<style lang="less" scoped>
.my-confirm{
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    .mask{
        height: 100%;
        width: 100%;
        background: #000;
        opacity: 0.3;
    }
    .domain{
        padding-top: 145px;
        background-image: url('/static/images/pop-bg-dt.png');
        background-size: 100%;
        background-repeat: no-repeat;
        z-index: 1000;
        height: 450px;
        box-sizing: border-box;
        position: absolute;
        width: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        .title{
            font-size: 22px;
            font-weight: 700;
            color: #008FF8;
            text-align: center;
            line-height: 60px;
            height: 60px;
        }
        .content{
            color: #838383;
            font-size: 16px;
            text-align: center;
            line-height: 1.3;
            height: 100px;
            padding: 0 30px;
        }
        .btn-group{
            text-align: center;
            button{
                width: 100px;
                border: none;
                background: none;
                margin: 10px;
                font-size: 16px;
                border-radius: 5px;
                padding: 8px;
                &.sure-btn{
                    border: 1px solid #B0B0B0;
                    color: black;
                    background: #F4F4F4;
                }
                &.cancle-btn{
                    color: white;
                    background: #008FF8;
                }
                &.back-btn{
                    color: white;
                    background: #008FF8;
                    width: 250px;
                }
            }
        }
    }
}
 
</style>

