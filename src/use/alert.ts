import { ref } from 'vue'

const alert = ref('You know, this is an alert box. 🤔')

export const useAlert = () => {
  const updateAlert = (text: string) => {
    alert.value = text
  }

  return {
    alert,
    updateAlert
  }
}
