import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

const http = (Vue as any).http;

http.options.root = `${process.env.VUE_APP_TMDB_URL}`

export { http };
