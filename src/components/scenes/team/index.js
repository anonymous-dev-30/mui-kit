import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { token } from '../../../theme';
import {
	AdminPanelSettingsOutlined,
	LockOpenOutlined, 
	SecurityOutlined
} from '@mui/icons-material';
import PageHeader from '../../appbar/PageHeader';
import { mockDataTeam } from '../../../data/mockData';

const Team = () => {
	const theme = useTheme();
	const colors = token(theme.palette.mode);

	const columns = [
		{ field: "id", headerName: "ID" },
		{ field: "name", headerName: "Name", flex: 1, cellClassName: "" },
		{ field: "age", headerName: "Age", headerAlign: "left", align: "left" },
		{ field: "phone", headerName: "Phone No.", flex: 1 },
		{ field: "email", headerName: "Email" },
		{
			field: "access", headerName: "Access Level", flex: 1,
			renderCell: ({ row: {access} }) => {
				return <Box
					width="60%"
					m="0 auto"
					p="5px"
					display='flex'
					justifyContent='center'
					backgroundColor={access === 'admin' ? colors.greenAccent[500] : colors.greenAccent[700]}
					borderRadius="4px"
				>
					{access === 'admin' && <AdminPanelSettingsOutlined sx={{ color: colors.grey[100], mr: "5px" }} />}
					{access === 'manager' && <SecurityOutlined sx={{ color: colors.grey[100], mr: "5px" }} />}
					{access === 'user' && <LockOpenOutlined sx={{ color: colors.grey[100], mr: "5px" }} />}
					<Typography color={colors.grey[100]} sx={{
						ml: '5px'
						
					}} >{access}</Typography>
				</Box>
			}
		}
	];

	// TODO: useTable hook
	return (
		<Box m='20px' height='75vh'>
			<PageHeader title={"TEAM"} subTitle={"Managing team members"} />
			<Box m='40px 0 0 0' height='75vh'>
				<DataGrid
					rows={mockDataTeam}
					columns={columns}
					pageSize={10}
				/>
			</Box>			
		</Box>
	)
}

export default Team;