<template>
  <v-container>
    <h1>Verkaufsbeleg: Positionsdaten (VBAP)</h1>
    <v-data-table
     :headers="headers"
     :items="sets"
     :items-per-page="5"
     class="elevation-1"
    >
    </v-data-table>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      headers: [
        {
         text: 'MANDT',
         align: 'start',
         sortable: false,
         value: 'MANDT'
        },
        {
          text: 'VBELN', 
          value: 'VBELN'
        }, 
        {
          text: 'ERDAT',
          value: 'ERDAT'
        },
        {
          text: 'ERZET',
          value: 'ERZET'
        },
        {
          text: 'ERNAM',
          value: 'ERNAM'
        },
        {
          text: 'ANGDT', 
          value: 'ANGDT'
        }
      ], 
      sets: [
        {
          MANDT: 200,
          VBELN: 1000000001,
          ERDAT: '22.01.2020',
          ERZET: '14:00',
          ERNAM: 'LUGIE',
          ANGDT: 10000000002
        }
      ]
    }),
  }
</script>
