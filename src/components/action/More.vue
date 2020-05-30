<template>
    <div class="more">
        <el-dropdown trigger="click" class="toolIcon" v-if="showDropDown" @command="handleSelect">
            <span>
                <i class="el-icon-more"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item, index) in options" :key="index" :command="item">{{ item }}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        <Accuse v-else @accuseIt="accuseIt" @close="close"></Accuse>
        <el-dialog title="举报" :visible.sync="showReason">
            <div class="popContainer">
                <div class="accuseContent">
                    <div class="accuseCard">
                        <h3 class="title">{{reason.title}}</h3>
                        <div class="subtitle">{{reason.subtitle}}</div>
                        <div class="reason">
                            <div class="item" v-for="(item,index) in reason.children" :key="index">
                                <div>{{item.title}}</div>
                                <i v-if="item.children || item.details!='undefined'" class="el-icon-arrow-right"></i>
                            </div>
                        </div>
                        <div class="action">
                            <el-button>返回</el-button>
                            <el-button type="primary">举报</el-button>
                        </div>
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import Accuse from './Accuse';
export default {
    name: 'More',
    components: { Accuse },
    props: {
        items: {
            type: Array,
            default() {
                return ['没有帮助', '举报', '禁止转载', '不感兴趣'];
            }
        }
    },
    data() {
        return {
            showDropDown: true,
            options: this.items,
            showReason: false,
            reason: {
                title: '举报',
                subtitle: '请选择举报理由',
                children: [
                    {
                        title: '低质问题',
                        subtitle: '请选择举报理由',
                        children: [
                            { title: '不构成提问', subtitle: '' },
                            {
                                title: '包含主观判断',
                                subtitle: '包含主观判断',
                                details: ''
                            }
                        ]
                    },
                    { title: '垃圾广告信息', subtitle: '请选择举报理由' },
                    {
                        title: '辱骂、人身攻击等不友善行为',
                        subtitle: '请选择举报理由'
                    },
                    { title: '有害信息', subtitle: '请选择举报理由' },
                    { title: '涉嫌侵权', subtitle: '请选择举报理由' }
                ]
            }
        };
    },
    methods: {
        handleSelect(cmd) {
            if (cmd == '没有帮助') {
                let idx = this.options.indexOf(cmd);
                this.options.splice(idx, 1, '撤销没有帮助');
            } else if (cmd == '撤销没有帮助') {
                let idx = this.options.indexOf(cmd);
                this.options.splice(idx, 1, '没有帮助');
            } else if (cmd == '不感兴趣') {
                this.$emit('haveNoInterest');
            } else if (cmd == '禁止转载') {
                let routeData = this.$router.resolve({
                    path: '/terms',
                    name: 'terms'
                });
                window.open(routeData.href, '_blank');
            } else {
                this.accuseIt();
            }
        },
        accuseIt() {
            this.showReason = true;
        },
        close() {
            this.showReason = false;
        }
    },
    mounted() {
        if (this.items && this.items.length == 1 && this.items[0] == '举报') {
            this.showDropDown = false;
        }
    }
};
</script>

<style scoped lang="less">
.more {
    display: inline-block;
    cursor: pointer;
    .popContainer {
        .accuseContent {
            .accuseCard {
                .title,
                .subtitle {
                    text-align: center;
                }
                .subtitle {
                    color: #646464;
                }
                .reason {
                    cursor: pointer;
                    .item {
                        display: flex;
                        justify-content: space-between;
                        height: 50px;
                        line-height: 50px;
                        border-bottom: 1px solid lightgray;
                        .el-icon-arrow-right {
                            height: 50px;
                            line-height: 50px;
                        }
                    }
                }
                .action {
                    text-align: center;
                    margin-top: 40px;
                }
            }
        }
    }
}
</style>
