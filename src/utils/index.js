export const getForecast24h = (forecast) => {
  return (
    forecast?.list?.slice(0, 8).map((item) => ({
      time: new Date(item.dt * 1000).toLocaleTimeString('uk-UA', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      temperature: Math.round(item.main.temp),
    })) || []
  );
};

export const getWeeklyForecast = (forecast) => {
  return (
    forecast?.list
      ?.filter((item) => item.dt_txt.includes('12:00:00'))
      .map((item) => ({
        time: new Date(item.dt * 1000).toLocaleDateString('uk-UA', {
          weekday: 'short',
        }),
        temperature: Math.round(item.main.temp),
      })) || []
  );
};
export const getCountryName = (countryCode) => {
  if (!countryCode) return '';

  const regionNames = new Intl.DisplayNames(['uk'], {
    type: 'region',
  });

  return regionNames.of(countryCode);
};
