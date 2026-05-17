import { Formik } from 'formik';
import { Autocomplete, TextField } from '@mui/material';
import { searchSchema } from '../../utils/schema/searchSchema.js';

const WeatherSearch = ({ onSearch, isLoading, cities, onSelectCity }) => {
  return (
    <Formik
      initialValues={{ city: '' }}
      onSubmit={() => {}}
      validationSchema={searchSchema}
    >
      {({ values, setFieldValue, touched, errors, setFieldTouched }) => (
        <Autocomplete
          options={cities || []}
          loading={isLoading}
          inputValue={values.city}
          value={null}
          filterOptions={(options) => options}
          getOptionLabel={(city) => {
            if (!city) return '';

            const name = city.local_names?.uk || city.name;
            const state = city.state ? `, ${city.state}` : '';
            const country = city.country ? `, ${city.country}` : '';

            return `${name}${state}${country}`;
          }}
          renderOption={(props, city) => {
            const { key, ...restProps } = props;
            const name = city.local_names?.uk || city.name;
            const state = city.state ? `, ${city.state}` : '';
            const country = city.country ? `, ${city.country}` : '';

            return (
              <li key={`${city.lat}-${city.lon}`} {...restProps}>
                {`${name}${state}${country}`}
              </li>
            );
          }}
          onInputChange={(_, value, reason) => {
            if (reason === 'input') {
              setFieldValue('city', value);
              setFieldTouched('city', true);
              onSearch(value);
            }
            if (reason === 'clear') {
              setFieldValue('city', '');
              setFieldTouched('city', true);
              onSearch('');
              onSelectCity(null);
            }
          }}
          onChange={(_, selectedCity) => {
            if (selectedCity) {
              onSelectCity(selectedCity);
              setFieldValue(
                'city',
                selectedCity.local_names?.uk || selectedCity.name,
              );
            }
          }}
          onBlur={() => {
            setFieldTouched('city', true);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              size="small"
              name="city"
              placeholder="Вкажіть назву міста..."
              error={touched.city && Boolean(errors.city)}
              helperText={touched.city && errors.city}
            />
          )}
        />
      )}
    </Formik>
  );
};

export default WeatherSearch;
