import React from 'react'
import { token } from '../../../theme';
import { Typography, useTheme, Box } from '@mui/material';

const PageHeader = ({title, subTitle}) => {
	const theme = useTheme();
	const colors = token(theme.palette.mode);
	return (
		<Box mb="10px">
			<Typography
				variant='h2'
				color={colors.grey[100]}
			>{title}</Typography>
			<Typography variant='h2'
				color={colors.greenAccent[500]}>{subTitle}</Typography>
		</Box>
	)
}

export default PageHeader;