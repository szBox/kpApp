<template>
    <div class="game">
        <MyHeader :title="title"></MyHeader>
        <div class="content">
            <div class="type">
                <span  @click="dialog">{{gameTitle}}<i></i></span>
                <div class="dialog" :class="{show: isShow}">
                    <div style="height: 300px">
                        <cube-scroll
                            ref="scroll"
                            :options="options">
                            <ul>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                                <li>fsd</li>
                            </ul> 
                        </cube-scroll>
                    </div>
                </div>
            </div>
            <div class="info">
                <p class="first">第 20180804024 期    倒计时：07:31:07</p>
                <p>最新开奖：1 0 2 1 9</p>
                <p class="end">余额：0.0000 元</p>
            </div>
            <div class="action">
                <div class="first">
                    <a href="">
                        <img src="@/assets/images/yaoyiyao.png" alt="">
                        点击机选
                    </a>
                </div>
                <div class="end">
                    <a href="">
                        <img src="@/assets/images/refresh.png" alt="">
                        近期开奖
                    </a>
                    
                </div>
            </div>
            <div class="choose">
                <cube-scroll
                    ref="scroll"
                    :options="options">
                    <ul>
                        <li v-for="item in 30" :key="item">fsd</li>
                    </ul> 
                </cube-scroll>
            </div>
            <div class="foot">
                <div class="first">
                    <cube-button class="foot-action-btn disabled" :inline="true">重选</cube-button>
                </div>
                <div class="middle">
                    <div>0注   共0元</div>
                    <div>奖金0元|盈利0元</div>
                </div>
                <div class="end">
                    <cube-button class="foot-action-btn" :inline="true">选号</cube-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MyHeader from '@/components/header';
export default {
    data() {
        return {
            title: '重庆时时彩',
            gameTitle: '直选三',
            isShow: false,
            scrollbar: true,
            scrollbarFade: true,
            startY: 0
        }
    },
    computed: {
        options() {
            return {
                scrollbar: this.scrollbarObj,
                startY: this.startY
            }
        },
        scrollbarObj: function() {
            return this.scrollbar ? { fade: this.scrollbarFade } : false
        }
    },
    methods: {
        dialog() {
            this.isShow = !this.isShow;
        }
    },
    components: {
        MyHeader
    }
}
</script>
<style lang="less" scoped>
    .game{
        height: 100%;
        .content{
            height: calc(100% - 44px);
            display: flex;
            flex-direction: column;
            .type{
                position: relative;
                background: #eee;
                font-size: 18px;
                font-weight: 700;
                width: 100%;
                z-index: 111;
                color: #95948f;
                box-shadow: 0 6px 8px rgba(195,199,206,.4);
                span{
                    display: block;
                    position: relative;
                    cursor: pointer;
                    padding: 10px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    i{
                        &::after{
                        border: 3px solid #c8c8cd;
                        border-bottom-width: 0;
                        border-left-width: 0;
                        content: " ";
                        top: 44%;
                        right: 20px;
                        position: absolute;
                        width: 8px;
                        height: 8px;
                        -webkit-transform: translateY(-50%) rotate(45deg);
                        transform: translateY(-50%) rotate(135deg);
                        }
                    }
                }
                .dialog{
                    &.show{
                        height: 300px;
                    }
                    overflow: hidden;
                    transition: height 0.5s;
                    border-radius: 5px;
                    background: white;
                    z-index: 555;
                    // top: 0;
                    position: absolute;
                    width: 100%;
                    height: 0;
                    box-shadow: 0 6px 8px rgba(195,199,206,.4);
                }
            }
            .info{
                p{
                    &.first{
                        color: #000;
                    }
                    &.end{
                        border: none;
                    }
                    padding: 6px;
                    background-color: rgba(162,158,147,.21);
                    border: 1px dashed #f1f1f1;
                    text-align: center;
                    color: #727272;
                    text-shadow: 0 1px 0 #fff;
                    font-size: 13px;
                }
            }
            .action{
                padding: 0 10px;
                height: 40px;
                background: #f2f2f2;
                display: flex;
                line-height: 40px;
                div{
                    font-size: 18px;
                    flex: 1;
                    a{
                        color: #666;
                    }
                    img{
                        position: relative;
                        top: 5px;
                        left: 4px;
                        width: 24px;
                        height: 24px;
                    }
                    &.first{
                        text-align: left;
                    }
                    &.end{
                        text-align: right;
                    }
                }
            }
            .foot{
                height: 57px;
                display: flex;
                align-items: center;
                .first, .end{
                    flex: 1;
                }
                .middle{
                    align-self: stretch;
                    flex: 2;
                    display: flex;
                    flex-direction: column;
                    div{
                        color: #727272;
                        line-height: 28.5px;
                        flex: 1;
                        font-size: 14px;
                    }
                }
            }
            .choose{
                height: 1px;
                background: #f2f2f2;
                flex: 1;
            }
        }
    }
</style>

