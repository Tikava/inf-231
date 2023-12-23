<template>
    <div class="tabs">
        <div class="tab-header">
            <ul>
                <li v-for="(tab, index) in tabs" :key="index" :class="{ active: tab.active }" @click="selectTab(tab)">
                    {{ tab.label }}
                </li>
            </ul>
        </div>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'MyTabs',
    props: {
        activeTab: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            tabs: [],
        };
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.active = (tab.label === selectedTab.label);
            });
        },
    },
    mounted() {
        this.tabs = this.$children;
        if (this.activeTab) {
            this.selectTab({ label: this.activeTab });
        }
    },
};
</script>
  
<style scoped>

.tab-header ul {
    list-style: none;
    padding: 0;
}

.tab-header li {
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
}

.tab-header li.active {
    font-weight: bold;
}

</style>
  