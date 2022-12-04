import { NavigationGuard } from 'vue-router';
import { useUserStore } from '@/store';
import { ROUTE_NAME } from '@/router'

export const AuthGuard: NavigationGuard = (to, from, next) => {
    const User = useUserStore();
    User.load();

    if (User.api_token) next();
    else
        next({ name: ROUTE_NAME.AUTH });
}
