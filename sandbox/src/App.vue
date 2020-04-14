<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link to="/home" class="router_link_sidebar">{{ $t('Menu.Sidebar.Home') }}</router-link>
          </v-list-item-content>
        </v-list-item>
        <v-list-group prepend-icon="mdi-table">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ $t('Menu.Sidebar.Group.Tables')}}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <v-list-item-content><router-link to="/vbak" class="router_link_sidebar">VBAK</router-link></v-list-item-content>
          </v-list-item>
           <v-list-item>
            <v-list-item-content><router-link to="/vbap" class="router_link_sidebar">VBAP</router-link></v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content><router-link to="/vbep" class="router_link_sidebar">VBEP</router-link></v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group prepend-icon="mdi-apps">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ $t('Menu.Sidebar.Group.Applications')}}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item>
            <v-list-item-content><router-link to="/RiskEvaluation" class="router_link_sidebar">{{ $t('Menu.Sidebar.Item.RiskEvaluation')}}</router-link></v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ $t('Application.Title')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark"><strong>Sign in</strong></a>
      <a v-if="$auth.isAuthenticated" @click="logout" class="button is-dark"><strong>Log out</strong></a>
    </v-app-bar>

    <v-content>
      <div v-if="!$auth.loading">

      <!--Container if logged in-->
      <v-container
        v-if="$auth.isAuthenticated"
        class="fill-height"
        fluid
        width="100%"
      >
        <router-view></router-view>
      </v-container>

      <!--Container if not logged in-->
      <v-container v-if="!$auth.isAuthenticated">
        <h1>Bitte zuerst einloggen</h1>
      </v-container>
      </div>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    drawer: null,
  }),

  created () {
    this.$vuetify.theme.dark = true
  }, 

  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>

<style scoped>
 .router_link_sidebar {
   text-decoration: none;
   color: white;
 }
</style>