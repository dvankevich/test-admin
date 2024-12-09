// https://marmelab.com/react-admin/Tutorial.html#writing-a-custom-field
// https://marmelab.com/react-admin/Tutorial.html#customizing-styles
import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const MyUrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  //console.log(`https://${record[source]}`);
  
  return record ? (
    <Link href={`https://${record[source]}`} sx={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer" >
            {record[source]}
            <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
        </Link>
    ) : null;
};

export default MyUrlField;