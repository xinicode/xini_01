import _ from 'lodash';
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CmpPageHeaderComponent extends Vue {

    @Prop(Boolean)
    diy: boolean;

    @Prop(Boolean)
    noMenu: boolean;

    title = '';
    desc = '';
    backUrl: string;
    hasBackUrl: boolean = false;;

    created() {
        const query = this.$route.query;
        //存在cmpback时显示返回按钮，如果cmpback有内容为backUrl（返回地址）
        const hasBackQ = _.has(query, 'cmpback');
        this.backUrl = query.cmpback as string;
        this.hasBackUrl = hasBackQ;
        const hasBackHeader = _.has(query, 'cmpheader');
        this.show = true;
        let menu = null;
        if (menu) {
            this.title = menu.name;
            this.desc = menu.description;
        }
    }

    @Prop({
        type: Boolean,
        default: false
    })
    showBack: boolean;

    get canBack(): boolean {
        return this.showBack;
    }

    show = false;

    back() {
        if (this.backUrl) {
            this.$router.push(this.backUrl);
        } else {

        }
    }

}