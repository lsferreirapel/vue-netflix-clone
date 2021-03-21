<template>
  <Box>
    <div class="options">
      <h2>Who's watching?</h2>
      <section>
        <button
          :disabled="loading"
          type="button"
          v-for="option of LoginOptions"
          :key="option.id"
          @click="click(option.user)"
        >
          <div>
            <div class="effect" />
            <img :src="option.iconUrl" :alt="option.name">
          </div>
          <span>{{ option.name }}</span>
        </button>
      </section>
    </div>
  </Box>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import Box from '@/atomic/atoms/Box/Box.vue';
import LoginOptions from './loginOptions';
import { User } from '../services/auth.types';

export default {
  components: {
    Box,
  },
  data: () => ({
    LoginOptions,
    loading: false,
  }),
  methods: {
    ...mapActions('auth', ['ActionLogin']),
    click(selectedUser: User): void {
      // this.loading = true;
      this.ActionLogin(selectedUser);
      // this.loading = false;
      this.$router.push('/');
    },
  },

};
</script>

<style lang="scss" scoped>
  .options {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h2 {
      color: white;
      font-size: 3.5vw;
      font-weight: 400;
    }
    section {
      display: flex;
      flex-wrap: wrap;
      margin: 1em 0;
    }
    button {
      border: none;
      margin-right: 2vw;
      cursor: pointer;

      &:focus {
        outline: none;
        box-shadow: none;
      }
      &:disabled {
        filter: grayscale(1);
      }

      &:hover {
        div {
          .effect {
            position: absolute;
            width: 100%;
            height: 100%;
            border: 2px solid whitesmoke;
            background: transparent;
          }
        }

        span {
          color: whitesmoke;
        }
      }

      div {
        position: relative;
        border-radius: 4px;
        overflow: hidden;

        img {
          width: 10vw;
          height: 10vw;
          min-width: 84px;
          min-height: 84px;
          object-fit: cover;
        }
      }
      span {
        display: block;
        text-align: center;
        min-height: 1.8em;
        margin: .6em 0;
        line-height: 1.2em;
        color: grey;
        font-size: 1.3vw;
      }
    }
  }
</style>
