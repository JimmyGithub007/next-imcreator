import Shell from "@/components/Shell";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";


function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Banner = () => {
    return (<Shell>
        <div className="flex flex-col gap-2">
            <div className="flex flex-col items-end">
                <button className="bg-blue-950 px-6 py-2 rounded-3xl shadow-md text-white">Create New</button>
            </div>
            <div className="bg-slate-200 p-4 rounded-2xl shadow-md shadow-slate-200/40 text-white">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow
                                sx={{ 'th': { borderColor: "#172554" } }}
                            >
                                <TableCell className="font-bold text-blue-950">Sorting</TableCell>
                                <TableCell className="font-bold text-blue-950" align="right">Title</TableCell>
                                <TableCell className="font-bold text-blue-950" align="right">Gallery</TableCell>
                                <TableCell className="font-bold text-blue-950" align="right">Status</TableCell>
                                <TableCell className="font-bold text-blue-950" align="right">Date Created</TableCell>
                                <TableCell className="text-blue-950" align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ 'td, th': { borderColor: "#172554" }, '&:last-child td, &:last-child th': { border: 0 }}}
                                >
                                    <TableCell className="text-blue-950" component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell className="text-blue-950" align="right">{row.calories}</TableCell>
                                    <TableCell className="text-blue-950" align="right">{row.fat}</TableCell>
                                    <TableCell className="text-blue-950" align="right">{row.carbs}</TableCell>
                                    <TableCell className="text-blue-950" align="right">{row.protein}</TableCell>
                                    <TableCell className="text-blue-950" align="right"></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    </Shell>)
}

export default Banner;