import { NavigationGuard } from 'vue-router';
import { useUserStore } from '@/store';
import { ROUTE_NAME } from '@/router'

export const AuthGuard: NavigationGuard = (to, from, next) => {
    const User = useUserStore();
    User.load();

    if (User.api_token) next();
    else if (from.name !== ROUTE_NAME.AUTH) void next({ name: ROUTE_NAME.AUTH });
    else void next({ name: ROUTE_NAME.GUEST_HOME })
}
