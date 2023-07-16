import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Box, ButtonGroup, Card, CardContent } from '@mui/material'
import Typography from '../../../atoms/Typography/Typography'
import Button from '../../../atoms/Button/Button'
import Icon from '../../../atoms/icons'

const CardItemUser = ({ name, desc, userImage, onClick, onClickRemove }) => {
  return (
    <Card>
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: '16px',
        }}
      >
        <Box display={'flex'}>
          <Avatar src={userImage} alt={name} />
          <Box paddingLeft={'8px'}>
            <Typography fontWeight={700}>{name}</Typography>
            <Typography fontSize={'11.2px'}>{desc}</Typography>
          </Box>
        </Box>
        <ButtonGroup>
          <Button
            variant="icon"
            onClick={onClick}
            disableRipple
            sx={{
              padding: '0px',
              minWidth: 'unset',
              marginRight: '12px',
            }}
          >
            <Icon variant="favorite" color={'red'} />
          </Button>
          <Button
            variant="icon"
            onClick={onClickRemove}
            sx={{
              padding: '0px',
              minWidth: 'unset',
            }}
          >
            <Icon variant={'more'} />
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  )
}

CardItemUser.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
  userImage: PropTypes.string,
  onClick: PropTypes.func,
  onClickRemove: PropTypes.func,
}

export default CardItemUser
