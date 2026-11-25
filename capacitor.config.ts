import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.freellmapi.app',
  appName: 'FreeLLMAPI',
  webDir: 'client/dist',
  server: {
    androidScheme: 'http',
    cleartext: true,
  },
};

export default config;
