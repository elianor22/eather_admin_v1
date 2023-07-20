/* eslint-disable react/no-unescaped-entities */
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import SimpleAutocomplate from '../../../components/molecules/forms/autocomplate/SimpleAutocomplate'
import { useForm } from 'react-hook-form'
import { mockDataAutocomplate } from '../../../dummy/mocksData'
import BaseCard from '../../../components/molecules/Cards/BaseCard'
import Typography from '../../../components/atoms/Typography/Typography'
import Link from '../../../components/atoms/Link'
import ControlledAutocomplete from '../../../components/molecules/forms/autocomplate/ControlledAutocomplete'

const Autocomplate = () => {
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
          <Typography
            sx={{
              mt: 1,
            }}
          >
            Props Optionals
          </Typography>
          <Table
            sx={{
              my: 2,
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>optionLabel</TableCell>
                <TableCell>string</TableCell>
                <TableCell>
                  optionLabel for rendering and get label by optionLabel. example "label" but if object you can use like
                  this "category.name". Optional props
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>getValueBy</TableCell>
                <TableCell>string</TableCell>
                <TableCell>returning value by getValueBy</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>renderKey</TableCell>
                <TableCell>string</TableCell>
                <TableCell>unique key for each list</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography>But also support all props from Mui Autocomplate</Typography>
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

export default Autocomplate
