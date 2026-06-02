import { computed } from 'vue';
import { useUserStore } from '@/store/modules/user';
import defaultLogo from '@/assets/images/logo.png';

const defaultProjectName = 'HotGo管理系统';

export function useAppBrand() {
  const userStore = useUserStore();

  const projectName = computed(() => userStore.loginConfig?.projectName || defaultProjectName);
  const projectLogo = computed(() => userStore.loginConfig?.projectLogo || defaultLogo);

  return {
    projectName,
    projectLogo,
  };
}
