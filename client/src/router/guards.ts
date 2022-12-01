import { NavigationGuard } from 'vue-router';
import { useJsonData } from '@/helpers';

export const validateDeveloper: NavigationGuard = async (to, from, next) => {
  try {
    await useJsonData(to);
  } catch (error) {
    console.log(error)
    next({
      path: 'DevNotFound'
    })
  }
  next()
}