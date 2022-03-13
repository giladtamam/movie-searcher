<template>
  <q-page padding>
    <div class="fullscreen bg-blue1 text-center q-pa-md1 flex flex-center">
      <q-card class="my-card" style="">
        <div class="q-pa-md" style="max-width: 500px">
          <h2>הרשמה</h2>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="email"
              type="email"
              label="מייל"
              hint="הקלד את כתובת המייל שלך"
              lazy-rules
              :rules="[(val) => true || 'נא הקלד כתובת מייל תקינה']"
            ></q-input>

            <q-input
              filled
              type="password"
              v-model="password"
              label="סיסמא"
              lazy-rules
              :rules="[
                (val) => true || 'הקלד סיסמא',
                (val) => true || 'נא הקלד סיסמא תקינה',
              ]"
            ></q-input>

            <q-input
              filled
              type="password"
              v-model="verifyPassword"
              label="אימות סיסמא"
              lazy-rules
              :rules="[
                (val) => true || 'הקלד סיסמא שנית',
                (val) => true || 'נא הקלד סיסמא שנית',
              ]"
            ></q-input>

            <div>
              <q-btn label="הירשם" type="submit" color="primary"></q-btn>
            </div>
          </q-form>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent, ref } from 'vue';
import { api } from 'src/boot/axios';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SignUp',
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    // const data = ref<string>('');
    const email = ref(null);
    const password = ref(null);
    const verifyPassword = ref(false);

    return {
      email,
      password,
      verifyPassword,
      async onSubmit() {
        try {
          await api.post('/auth/signup', {
            email: email.value,
            password: password.value,
          });
          await router.push('/signin');
        } catch (error) {
          $q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem',
          });
        }
        // if (verifyPassword.value !== true) {
        //   $q.notify({
        //     color: 'red-5',
        //     textColor: 'white',
        //     icon: 'warning',
        //     message: 'You need to accept the license and terms first',
        //   });
        // } else {
        //   $q.notify({
        //     color: 'green-4',
        //     textColor: 'white',
        //     icon: 'cloud_done',
        //     message: 'Submitted',
        //   });
        // }
      },
    };
  },
});
</script>
<style scoped>
.my-card {
  width: 100%;
  max-width: 500px;
}
</style>
