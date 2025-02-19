export const AppVersionBox = () => {
  return (
    <div className="bg-white rounded-md shadow-sm p-4 mb-4 fixed bottom-4 right-4 z-50 opacity-50">
      <p className="text-lg font-bold">
        ENV: {import.meta.env.VITE_ENVIRONMENT ?? 'LOCALHOST'} - VER: {__APP_VERSION__}
      </p>
    </div>
  );
};
