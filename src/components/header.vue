<template>
    <div class="header">
        <div class="left-icon">
            <span v-if="showback" @click="back" class="icon-back"></span>
        </div>
        <div class="header-title">
            <span class="title">{{title}}</span>
        </div>
        <div class="right-icon">
            <span v-if="showmore" class="icon"></span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: '标题'
        },
        showback: {
            type: Boolean,
            default: true
        },
        showmore: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        back() {
            
        }
    }
}
</script>
<style lang="less" scoped>
    .header{
        background: linear-gradient(#5250ae,#702dfe);
        color: white;
        height: 44px;
        line-height: 44px;
        display: flex;
        .left-icon, .right-icon{
            flex: 1;
        }
        .header-title{
            flex: 3;
            span{
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
</style>

