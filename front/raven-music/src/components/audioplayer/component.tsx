import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useAppSelector } from '../../app/hooks';
import { songSelector } from '../../features/musicSlice';
// const song = 'https://res.cloudinary.com/ravendata/video/upload/v1652679861/Music/Flashing_Lights_pzwqw1.mp3';
const AudioPlayerView = () => {
    // Bug: First song you select doens't fully load.
    const song = useAppSelector(songSelector);
    const [show, setShow] = useState<Boolean>(false);

    useEffect(() => {
        console.log(song.audioFile)
        if (song !== undefined) {
            setShow(true);
        }
    }, [song])

    return (
        <Box sx={{ width: '100%', position: 'sticky', bottom: '0px', display: show ? 'flex' : 'none' }}>
            <AudioPlayer
                autoPlay
                header={song.name}
                footer={song.album.name}
                src={song.audioFile}
                onPlay={e => console.log('onPlay')}
            />
        </Box>
    )
};

export default AudioPlayerView;