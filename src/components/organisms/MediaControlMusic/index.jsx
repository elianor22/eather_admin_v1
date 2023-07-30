import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Icon from '../../atoms/icons'
import { Slider } from '@mui/material'

export default function MediaControlMusic({ cover }) {
  const [play, setPlay] = React.useState(false)
  const [isShuffle, setIsShuffle] = React.useState(false)
  const [isRepeat, setIsRepeat] = React.useState(false)

  return (
    <Card
      sx={{
        display: 'flex',
        borderRadius: '8px',
        background: '#220F59',
        boxShadow: ' 0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
      }}
    >
      <CardMedia component="img" sx={{ width: 151 }} image={cover} alt="Live from space album cover" />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <CardContent sx={{ flex: '1  auto' }} width="100%">
          <Typography fontSize="14px" variant="body1" color={'#E7EAF4'}>
            Live From Space
          </Typography>
          <Typography fontSize={'11.5px'} variant="body1" color="#B0B0B0">
            Mac Miller
          </Typography>
        </CardContent>
        <Box px={'10px'}>
          <Slider defaultValue={50} aria-label="music-slider" valueLabelDisplay="auto" size="small" />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, justifyContent: 'center' }}>
          <IconButton aria-label="shuffle" color="#B0B0B0" onClick={() => setIsShuffle(!isShuffle)}>
            <Icon variant="shuffle" color={isShuffle ? '#00A991' : '#B0B0B0'} />
          </IconButton>
          <IconButton aria-label="previous" color="#B0B0B0">
            <Icon variant="previous" color="#B0B0B0" />
          </IconButton>
          <IconButton aria-label="play/pause" onClick={() => setPlay(!play)}>
            <Icon
              variant={play ? 'pause' : 'play'}
              color={play ? '#00A991' : '#B0B0B0'}
              sx={{
                width: '24px !important',
                height: '24px',
              }}
            />
          </IconButton>
          <IconButton aria-label="next" color="#B0B0B0">
            <Icon variant="next" color="#B0B0B0" />
          </IconButton>
          <IconButton aria-label="repeat" color="#B0B0B0" onClick={() => setIsRepeat(!isRepeat)}>
            <Icon variant="repeat" color={isRepeat ? '#00A991' : '#B0B0B0'} />
          </IconButton>
        </Box>
      </Box>
    </Card>
  )
}
