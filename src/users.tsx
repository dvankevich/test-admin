//Step 3
// https://marmelab.com/react-admin/Tutorial.html#composing-components

import { useMediaQuery, Theme } from "@mui/material";
import { List, SimpleList, Datagrid, TextField, EmailField, UrlField } from "react-admin";

export const UserList = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
    return (
        <List>
            {isSmall ? (
                <SimpleList
                    primaryText={(record) => record.name}
                    secondaryText={(record) => record.username}
                    tertiaryText={(record) => record.email}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" />
                    {/* <TextField source="username" /> */}
                    <EmailField source="email" />
                    {/* <TextField source="address.street" /> */}
                    <TextField source="phone" />
                    <UrlField source="website" />
                    <TextField source="company.name" />
                </Datagrid>
            )}
        </List>
    );
};
// Step 1
// import { Datagrid, EmailField, List, TextField } from 'react-admin';

// export const UserList = () => (
// 	<List>
// 		<Datagrid>
// 			<TextField source="id" />
// 			<TextField source="name" />
// 			<TextField source="username" />
// 			<EmailField source="email" />
// 			<TextField source="address.street" />
// 			<TextField source="phone" />
// 			<TextField source="website" />
// 			<TextField source="company.name" />
// 		</Datagrid>
// 	</List>
// );

// Step 2
//import { List, SimpleList } from "react-admin";

// export const UserList = () => (
//     <List>
//         <SimpleList
//           primaryText={(record) => record.name}
//           secondaryText={(record) => record.username}
//           tertiaryText={(record) => record.email}
//         />
//     </List>
// );