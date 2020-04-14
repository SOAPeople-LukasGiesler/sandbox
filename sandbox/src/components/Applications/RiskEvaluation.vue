<template>
  <v-container fluid>
    <v-toolbar>
      <v-toolbar-title>Risk Evaluation</v-toolbar-title>
    </v-toolbar>
    <v-row>
      <v-col cols="1">
        <vc-donut :sections="sections" :size="100" unit="px" background="#212121"><h1>75%</h1></vc-donut>
      </v-col>
      <v-col cols="3">
        <v-card tile dark>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ Name }}</v-list-item-title>
              <v-list-item-subtitle>{{ GPNMR }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ Street }} {{ HouseNumber }}, {{ ZipCode }} {{ City }}, {{ Country }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-card tile dark>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>{{ $t('RiskEvaluation.ListItem.Title.Scorecard')}}: {{ Scorecard_Label }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ $t('RiskEvaluation.ListItem.Title.RecRiskClass')}}: {{ RecommendedRiskclass_Label }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ $t('RiskEvaluation.ListItem.Title.RecCreditLock')}}: {{ RecommendedCreditLock_Label }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col>
        <v-chip class="ma-2" color="green" text-color="white"> {{ $t('RiskEvaluation.Badge.LowRisk') }}</v-chip>
        <v-chip class="ma-2" color="orange" text-color="white">
          {{ $t('RiskEvaluation.Badge.AutomaticScorecardFinding') }}
        </v-chip>
        <v-chip class="ma-2" color="green" text-color="white">
          {{ $t('RiskEvaluation.Badge.Creditlock')}}
        </v-chip>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1">
      </v-col>
      <v-col cols="8">

      </v-col>
    </v-row>
          






      







      

    <v-tabs
     v-model="tab"
     background-color="orange"
     dark
     color="white"   
    >
    <v-tab
     v-for="item in items"
     :key="item.tab"
     dark
    >
     {{ item.tab }}
    </v-tab>
    </v-tabs>
    
    <v-tabs-items v-model="tab">
     <v-tab-item
      v-for="item in items"
      :key="item.tab"
     >
      <v-card flat>
        <apexchart width="100%" height="300px" type="line" :options="options" :series="series" :stroke="stroke"></apexchart>
      </v-card>
     </v-tab-item>
    </v-tabs-items>
    
  </v-container>
</template>

<script>

  export default {
    name: 'RiskEvaluation',

    data: () => ({
      tab: null, 
      items: [
        {tab: 'Scoring', content: 'Tab 1 Content'},
        {tab: 'Payment experience', content: 'Tab 2 Content'}, 
        {tab: 'Negative characteristics', content: 'Tab 3 Content'}
      ], 
      Name: 'Ready 4 Credit Management SE', 
      GPNMR: '1001012019', 
      Street: 'Am Hardtwald',
      HouseNumber: 11,
      ZipCode: 76527,
      City: 'Ettlingen',
      Country: 'Germany', 
      Scorecard_Label: 'Debitoren mit KVSprint', 
      RecommendedRiskclass_Label: '100 Geringes Risiko',
      RecommendedCreditLock_Label: 'nicht setzen', 
      sections: [
        {value: 75, color: 'green'},
        {value: 25, color: 'grey'}
      ], 
      DonutChart_Percentage: '75%',
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      }, 
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 39, 60, 70, 91]
      }], 
      stroke: {
        curve: 'smooth'
      }
    }),
  }
</script>
