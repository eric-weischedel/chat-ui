import { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import {
  Button,
  TextField,
  Typography,
  Grid,
  Avatar,
  Box,
  Modal,
  MenuItem,
  Tooltip,
} from '@mui/material';
import Send from '@mui/icons-material/Send';
import Info from '@mui/icons-material/Info';
import Face from '@mui/icons-material/Face';
import Gen from './assets/avatars/gen.png';
import Kohaku from './assets/avatars/kohaku.png';
import Senku from './assets/avatars/senku.png';
import Suika from './assets/avatars/suika.png';
import Tsukasa from './assets/avatars/tsukasa.png';

const { REACT_APP_CHAT_SERVER_URL } = process.env;

const avatarMap = {
  gen: Gen,
  kohaku: Kohaku,
  senku: Senku,
  suika: Suika,
  tsukasa: Tsukasa,
};

interface ChatMessage {
  message: string;
  display_name?: string;
  avatar_key?: string;
  time?: Date;
}

function App() {
  const [socket, setSocket] = useState<Socket>(null);
  const [messageInput, setMessageInput] = useState('');
  const [chatLog, setChatLog] = useState<Array<ChatMessage>>([]);
  const [displayName, setDisplayName] = useState<string>(null);
  const [avatarKey, setAvatarKey] = useState<string>('none');
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const newSocket = io(REACT_APP_CHAT_SERVER_URL, {});

    newSocket.on('user-joined', () => {
      setChatLog((log) =>
        log.concat({
          message: 'Someone joined the chat room.',
          time: new Date(),
        })
      );
    });
    newSocket.on('user-left', () => {
      setChatLog((log) =>
        log.concat({
          message: 'Someone left the chat room.',
          time: new Date(),
        })
      );
    });
    newSocket.on('chat-message', (message: ChatMessage) => {
      setChatLog((log) =>
        log.concat({
          ...message,
          time: new Date(),
          display_name: message.display_name ?? 'Anonymous',
        })
      );
    });

    setSocket(newSocket);
  }, []);

  const sendMessage = () => {
    // check if empty
    if (messageInput.trim() === '') {
      return;
    }

    setMessageInput('');
    socket.emit('chat-message', {
      message: messageInput,
      display_name: displayName,
      avatar_key: avatarKey === 'none' ? null : avatarKey,
    } as ChatMessage);
  };

  return (
    <>
      <Grid
        container
        direction="column"
        style={{
          position: 'absolute',
          bottom: 0,
          paddingBottom: 25,
          paddingRight: 25,
          paddingLeft: 25,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            {chatLog.map((message) => (
              <Grid item>
                <Grid container direction="row" sx={{ py: 2 }} wrap="nowrap">
                  {message.display_name ? (
                    <Grid item>
                      {message.avatar_key ? (
                        <Avatar
                          alt={message.display_name}
                          sx={{ mr: 1 }}
                          src={avatarMap[message.avatar_key]}
                        />
                      ) : (
                        <Avatar alt={message.display_name} sx={{ mr: 1 }}>
                          {message.display_name.charAt(0)}
                        </Avatar>
                      )}
                    </Grid>
                  ) : (
                    <Grid item>
                      <Avatar
                        variant="rounded"
                        alt="Info"
                        sx={{ mr: 1, backgroundColor: 'lightgray' }}
                      >
                        <Info />
                      </Avatar>
                    </Grid>
                  )}
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          fontSize={14}
                          fontWeight="bold"
                          lineHeight="1rem"
                          display="inline"
                          gutterBottom
                        >
                          {message.display_name ?? 'System'}
                        </Typography>
                        {message.time && (
                          <Tooltip
                            title={message.time.toLocaleString()}
                            placement="top"
                            arrow
                          >
                            <Typography
                              fontSize={10}
                              fontWeight="light"
                              lineHeight="1rem"
                              display="inline"
                              gutterBottom
                            >
                              &nbsp; &nbsp;
                              {message.time.toLocaleTimeString([], {
                                hour: 'numeric',
                                minute: 'numeric',
                              })}
                            </Typography>
                          </Tooltip>
                        )}
                      </Grid>
                      <Grid item>
                        <Typography variant="body2">
                          {message.message}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <Grid item style={{ display: 'flex' }}>
              <Tooltip title="Edit Profile" placement="top" arrow>
                <Button onClick={() => setModalOpen(true)} variant="outlined">
                  <Face />
                </Button>
              </Tooltip>
            </Grid>
            <Grid item sx={{ flex: 1, pl: 1 }}>
              <TextField
                onChange={(event) => setMessageInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    sendMessage();
                  }
                }}
                value={messageInput}
                autoFocus
                placeholder="Chat with the village..."
                fullWidth
              />
            </Grid>
            <Grid item style={{ display: 'flex' }}>
              <Button onClick={sendMessage} variant="contained">
                <Send />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Profile
          </Typography>
          <TextField
            label="Display Name"
            onChange={(event) => setDisplayName(event.target.value)}
            value={displayName}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <TextField
            label="Avatar"
            onChange={(event) => setAvatarKey(event.target.value)}
            value={avatarKey}
            fullWidth
            variant="outlined"
            margin="normal"
            select
          >
            <MenuItem key={0} value={'none'}>
              None
            </MenuItem>
            <MenuItem key={1} value={'senku'}>
              Senku
            </MenuItem>
            <MenuItem key={2} value={'suika'}>
              Suika
            </MenuItem>
            <MenuItem key={3} value={'gen'}>
              Gen
            </MenuItem>
            <MenuItem key={4} value={'kohaku'}>
              Kohaku
            </MenuItem>
            <MenuItem key={5} value={'tsukasa'}>
              Tsukasa
            </MenuItem>
          </TextField>
          <Button
            onClick={() => setModalOpen(false)}
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
            fullWidth
          >
            Confirm
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default App;
