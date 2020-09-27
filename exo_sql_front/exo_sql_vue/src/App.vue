<template>
  <div>
    <ul v-for="(departement, i) in departements" :key="i">
      <li>Département : {{departement.departement_nom}} - {{departement.departement_code}}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      departements: [],
    };
  },
  methods: {
    async getDepartements() {
      const apiRes = await axios.get(
        process.env.VUE_APP_BACKEND_URL + "/departements"
      );
      this.departements = apiRes.data;
      console.log(apiRes)
    },
  },
  created() {
      try {
        this.getDepartements();
      } catch (err) {
        console.error(err);
      }
    },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
