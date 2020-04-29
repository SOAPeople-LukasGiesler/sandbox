<template>
    <ui5-tabcontainer class="full-width" show-overflow>
        <ui5-tab text="Bonitätsbewertung">
            <ui5-card >
                <div class="card-content">
                    <ui5-button>Test</ui5-button>
                </div>
            </ui5-card>
        </ui5-tab>
        <ui5-tab text="Auskunftslieferungen">
        </ui5-tab>
    </ui5-tabcontainer>
</template>

<script>
import '@ui5/webcomponents/dist/Button'
import '@ui5/webcomponents/dist/TabContainer'
import '@ui5/webcomponents/dist/Tab'
import '@ui5/webcomponents/dist/Card'

export default {
    name: 'CreditReports'
}
</script>

<style scoped>
.card-content{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>