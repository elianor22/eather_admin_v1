import { Box, FormControl, FormLabel } from '@mui/material'
import React from 'react'
import Typography from '../../../components/atoms/Typography/Typography'
import { inputTypes, inputVariants } from '../../../constants/input'
import Icon from '../../../components/atoms/icons'
import InputField from '../../../components/molecules/Inputs/InputField'
import InputPassword from '../../../components/molecules/Inputs/InputPassword/Index'
import ControlledInput from '../../../components/molecules/Inputs/ControlledInput'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../../../components/atoms/Button/Button'
import { controlledInputValidations } from '../../../utils/formValidations/inputPages/exampleValidation'
import BaseCard from '../../../components/molecules/Cards/BaseCard'
import { ColorProps } from '../../../utils/thema/colors'
import { useTheme } from '@emotion/react'
import InputFieldMulti from '../../../components/molecules/Inputs/InputFieldMultiple'

export const InputPages = () => {
  const {
    control,
    formState: { errors },
  } = useForm()
  const {
    control: validationCrontrol,
    formState: { errors: validationErrors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(controlledInputValidations),
  })

  const { palette } = useTheme()

  function submit(form) {
    alert(JSON.stringify(form))
    reset()
  }

  return (
    <Box>
      <BaseCard>
        <Box mt={2}>
          <Typography
            sx={{
              mt: 1,
            }}
          >
            Base input
          </Typography>

          <InputField />
          <Typography>Error</Typography>
          <InputField error={true} />
          <Box mt={1}>
            <Typography>Full width input</Typography>
            <InputField fullWidth={true} />
          </Box>
        </Box>
      </BaseCard>

      <Box mt={3}>
        <BaseCard>
          <Typography>Variant inputs</Typography>

          {inputVariants.map((variant) => (
            <Box key={variant} my={1}>
              <InputField
                name={variant}
                variant={variant}
                label={variant}
                placeholder={variant}
                sx={{
                  width: '100%',
                  maxWidth: '400px',
                }}
              />
            </Box>
          ))}
        </BaseCard>
      </Box>
      <Box mt={3}>
        <BaseCard>
          <Typography>Input Type</Typography>
          <Box display={'flex'} flexWrap={'wrap'} flexDirection={'row'}>
            {inputTypes.map((type) => (
              <Box key={type} my={1} width={'50%'} display={'flex'} pl={1}>
                <FormControl fullWidth>
                  <FormLabel>{type}</FormLabel>
                  <InputField type={type} fullWidth={true} name={type} />
                </FormControl>
              </Box>
            ))}
          </Box>
          <Typography>Input Passwod</Typography>
          <Typography variant="body2"> importing {`<InputPassword />`}</Typography>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputPassword />
          </FormControl>
        </BaseCard>
      </Box>

      <Box mt={3}>
        <BaseCard>
          <Typography>Input with andornment</Typography>
          <Box
            display={'flex'}
            flexDirection={'column'}
            sx={{
              width: '100%',
              maxWidth: '400px',
            }}
          >
            <InputField startAdornmentText={'IDR'} placeholder={'125.000'} />
            <InputField
              startIcon={<Icon variant={'favorite'} />}
              sx={{
                my: 1,
              }}
            />
          </Box>
          <Box mt={1} width={'100%'} maxWidth={'500px'}>
            <Typography>Input Multiline</Typography>
            <Typography color={ColorProps['typo.3'][palette.mode]}>Hit enter to make new lines</Typography>
            <InputFieldMulti />
          </Box>
        </BaseCard>
      </Box>
      <Box mt={3}>
        <BaseCard>
          <Typography>Controlled Input</Typography>
          <Typography variant="body2" color={ColorProps['typo.3'][palette.mode]} fontWeight={300}>
            Component Controlled Input are controlled by react-hook-form
          </Typography>
          <form>
            <ControlledInput name="controlled_input" label="Controlled Input" control={control} errors={errors} />
          </form>
          <Box mt={2} maxWidth={'450px'}>
            <BaseCard>
              <Typography
                sx={{
                  mb: 1,
                }}
              >
                Controlled Input with yup validation
              </Typography>
              <form onSubmit={handleSubmit(submit)}>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} maxWidth={'400px'}>
                  <ControlledInput
                    name="username"
                    label="Username"
                    control={validationCrontrol}
                    errors={validationErrors}
                  />
                  <ControlledInput name="name" label="Name" control={validationCrontrol} errors={validationErrors} />
                </Box>
                <Box mt={1}>
                  <Button variant={'contained'} type="submit">
                    Submit
                  </Button>
                </Box>
              </form>
            </BaseCard>
          </Box>
        </BaseCard>
      </Box>
    </Box>
  )
}
