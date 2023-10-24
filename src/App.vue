<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import HeaderMenu from '@/components/HeaderMenu.vue'
// import { createServiceNoToken } from '@/service/axios'
import { ref, onMounted, watch } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const el = ref(2)
const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')

const schema = yup.object({
  email: yup.string().email().required(),
});

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf('?') > -1) {
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})

onMounted(() => {
  console.log('el.value: ', el.value);
  console.log('import.meta.env.VITE_BASE_URL: ', import.meta.env.VITE_BASE_URL);
})

// function onSubmit(values) {
//   alert(JSON.stringify(values, null, 2));
// }

</script>

<template>
  <!-- <button id="count" @click="el++">{{ el }}</button> -->
  <HeaderMenu />
  <!-- <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p> -->
  <!-- <Form :validation-schema="schema" @submit="onSubmit">
    <Field name="email" type="email" />
    <ErrorMessage name="email" />
    <button>Sign up for newsletter</button>
  </Form> -->
  <RouterView />
</template>
