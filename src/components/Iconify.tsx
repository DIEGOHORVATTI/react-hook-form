import { Icon, IconifyIcon, iconExists } from '@iconify/react'
import { Box, BoxProps, SxProps } from '@mui/material'

interface Props extends BoxProps {
  sx?: SxProps
  icon: IconifyIcon | string
  size?: number
}

const fallbackIcon = (icon: IconifyIcon | string) => {
  if (typeof icon !== 'string' || iconExists(icon)) {
    return icon
  }

  return icon.replace('fa6-solid:', 'fa-solid:')
}

export const Iconify = ({ icon, size = 2, sx, ...other }: Props) => {
  return (
    <Box
      component={Icon}
      icon={fallbackIcon(icon)}
      sx={{ fontSize: size * 10, ...sx }}
      {...other}
    />
  )
}

export default Iconify
