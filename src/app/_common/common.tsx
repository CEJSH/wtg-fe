
import React from 'react';
import 'dayjs/locale/ko';
import ThemeProvider from '../theme/theme';
const CommonProvider = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
        <ThemeProvider >{children}</ThemeProvider>
  );
};

export default CommonProvider;
