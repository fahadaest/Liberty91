import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '@/auth/providers/JWTProvider';
import { LayoutProvider, LoadersProvider, MenusProvider, SettingsProvider, TranslationProvider } from '@/providers';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';
const queryClient = new QueryClient();
const ProvidersWrapper = ({
  children
}) => {
  return <QueryClientProvider client={queryClient}>
    <ReduxProvider store={store}>
      <AuthProvider>
        <SettingsProvider>
          <TranslationProvider>
            <HelmetProvider>
              <LayoutProvider>
                <LoadersProvider>
                  <MenusProvider>{children}</MenusProvider>
                </LoadersProvider>
              </LayoutProvider>
            </HelmetProvider>
          </TranslationProvider>
        </SettingsProvider>
      </AuthProvider>
    </ReduxProvider>
  </QueryClientProvider>;
};
export { ProvidersWrapper };