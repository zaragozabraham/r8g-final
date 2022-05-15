import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { theme } from '../../theme/theme';

const main = theme.palette.primary.main;
const columns = [
    'Title', 'Album', 'Artist', 'Duration'
]
const MusicTable = ({ data }) => {
    return (
        <Box sx={{ m: 'auto', height: '100%', width: '100%' }}>
            <TableContainer sx={{ backgroundColor: main}}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            { columns.map((column, index) => (
                                <TableCell sx={{ fontWeight: 'bold'}}>{column}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { data.songsAlbum.map((song, index)=>(
                            <TableRow key={`${data.name}-${index}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell>{song.name}</TableCell>
                                <TableCell>{data.name}</TableCell>
                                <TableCell>{data.artists.name}</TableCell>
                                <TableCell>{song.duration.slice(3)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default MusicTable

// const rows = [
//     { id: 1, songName: 'NI BIEN NI MAL', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '03:56'},
//     { id: 2, songName: '200 Mph', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '03:56'},
//     { id: 3, songName: 'Quien Tu Eres?', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '03:56'},
//     { id: 4, songName: 'Caro', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '03:56'},
//     { id: 5, songName: 'Tenemos Que Hablar', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '03:56'},
//     { id: 6, songName: 'Otra Noche en Miami', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '03:56'},
//     { id: 7, songName: 'Ser Bichote', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '03:56'},
//     { id: 8, songName: 'Si Estuviesemos Juntos', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '03:56'},
//     { id: 9, songName: 'Solo de Mi', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '03:56'},
//     { id: 10, songName: 'Cuando Perriabas', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '03:56'},
//     { id: 11, songName: 'La Romana', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '03:56'},
//     { id: 12, songName: 'Como Antes', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '03:50'},
//     { id: 13, songName: 'RLNDT', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '04:44'},
//     { id: 14, songName: 'Estamos Bien', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '03:28'},
//     { id: 15, songName: 'MIA', albumName: 'X100PRE', artistName: 'Bad Bunny', songDuration: '03:30'},
// ];