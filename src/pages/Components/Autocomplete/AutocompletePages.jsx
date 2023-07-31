/* eslint-disable react/no-unescaped-entities */
import { Box } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { mockDataAutocomplate } from '../../../dummy/mocksData'
import BaseCard from '../../../components/molecules/Cards/BaseCard'
import Typography from '../../../components/atoms/Typography/Typography'
import Link from '../../../components/atoms/Link'
import SimpleAutocomplate from '../../../components/molecules/forms/autocomplate/SimpleAutocomplate'
import ControlledAutocomplete from '../../../components/molecules/forms/autocomplate/ControlledAutocomplete'

const AutocomplatePages = () => {
  const {
    control,
    formState: { errors },
  } = useForm()
  return (
    <Box>
      <BaseCard>
        <Box>
          <Typography>
            We wrap all custom Autocomplete with Controller from{' '}
            <Link href="https://react-hook-form.com/" target="blank" rel="noopener noreferrer">
              react-hook-form
            </Link>
          </Typography>
          <Typography>For example using SimpleAutocomplete</Typography>
        </Box>
        <Box mt={2}>
          <SimpleAutocomplate
            name="example"
            options={mockDataAutocomplate}
            control={control}
            errors={errors}
            getValueBy={'label'}
            label="Simple Autocomplete"
          />
        </Box>
      </BaseCard>
      <BaseCard
        sx={{
          mt: 2,
        }}
      >
        <ControlledAutocomplete
          name="controlledAutocomplete"
          control={control}
          errors={errors}
          options={mockDataAutocomplate}
          isOptionEqualToValue={(opt, val) => opt.label === val.label}
          renderOption={(props, option) => <li {...props}>{option.label}</li>}
          label={'Controlled Autocomplete'}
        />
      </BaseCard>
    </Box>
  )
}

export default AutocomplatePages
