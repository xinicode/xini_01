import { Component, Vue, Prop } from "vue-property-decorator";
import asyncLoadComp from './asyncLoadComp.vue';

@Component({
    components: { asyncLoadComp }
})
export default class CmpPageComponent extends Vue {


    @Prop(Boolean)
    noTabs: boolean;

    @Prop()
    className: string;

    components = [];
    loading = true;

    created(){
        let parent: any = this.$parent;
        this.loading = false;
        // this.loading = '$isLoadingInit' in parent ? parent.$isLoadingInit : true;
    }

    get classEx() {
        const ex = this.className ? { [this.className]: true } : {};
        return {
            "bin-page": true,
            "bin-page-tabs": !this.noTabs,
            ...ex
        };
    }

    setCompnent(component: any, params?: any) {
        this.components.push({ cp: component, params: params });
    }
}