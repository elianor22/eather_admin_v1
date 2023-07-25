import React from 'react'
import DashboardIcon from './assets/DashboardIcon'
import PropTypes from 'prop-types'
import { iconSize, iconsVariants } from '../../../constants/icons'
import CardIcon from './assets/CardIcon'
import TableIcon from './assets/TableIcon'
import StarIcon from './assets/StarIcon'
import PlayIcon from './assets/PlayIcon'
import PauseIcon from './assets/PauseIcon'
import NextIcon from './assets/NextIcon'
import PreviousIcon from './assets/PreviousIcon'
import ShuffleIcon from './assets/ShuffleIcon'
import RepeatIcon from './assets/RepeatIcon'
import FavoriteIcon from './assets/FavoriteIcon'
import OutlineFavIcon from './assets/OutlineFavIcon'
import MoreHorizontalIcon from './assets/MoreHorizontalIcon'
import ComponentIcon from './assets/ComponentIcon'
import ArrowDropUpIcon from './assets/ArrowDropUpIcon'
import ArrowDropDownIcon from './assets/ArrowDropDownIcon'
import CircleIcon from './assets/CircleIcon'
import CloseIcon from './assets/CloseIcon'
import InputIcon from './assets/InputIcon'
import AutocomplateIcon from './assets/AutocomplateIcon'
import TypographyIcon from './assets/TypographyIcon'
import ButtonIcon from './assets/ButtonIcon'
import IconsIcon from './assets/IconsIcon'
import SelectIcon from './assets/SelectIcon'
import MoreVerticalIcon from './assets/MoreVerticalIcon'
import EyeIcon from './assets/EyeIcon'

const components = {
  dashboard: DashboardIcon,
  card: CardIcon,
  table: TableIcon,
  star: StarIcon,
  play: PlayIcon,
  pause: PauseIcon,
  next: NextIcon,
  previous: PreviousIcon,
  shuffle: ShuffleIcon,
  repeat: RepeatIcon,
  favorite: FavoriteIcon,
  'outline-favorite': OutlineFavIcon,
  more: MoreHorizontalIcon,
  'more-vertical': MoreVerticalIcon,
  component: ComponentIcon,
  dropdown: ArrowDropDownIcon,
  dropup: ArrowDropUpIcon,
  circle: CircleIcon,
  close: CloseIcon,
  input: InputIcon,
  autocomplete: AutocomplateIcon,
  typography: TypographyIcon,
  button: ButtonIcon,
  icon: IconsIcon,
  select: SelectIcon,
  eye: EyeIcon,
}

const Icon = ({ variant, color, size, sx }) => {
  if (components[variant]) {
    const IconComponent = components[variant]
    return <IconComponent color={color} size={size} sx={sx} />
  }
  return null
}

Icon.propTypes = {
  variant: PropTypes.oneOf(iconsVariants),
  color: PropTypes.string,
  size: PropTypes.oneOf(iconSize),
  sx: PropTypes.object,
}

export default Icon
