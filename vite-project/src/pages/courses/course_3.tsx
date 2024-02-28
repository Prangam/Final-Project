import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LockIcon from '@mui/icons-material/Lock';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Container } from '@mui/material';
import React, { useEffect, useState } from "react";
import axios from 'axios';

interface Post {
    category: string;
    description: string;
    name: string;
}

const baseURL = "https://4c3df3b6-b312-4e45-a3c7-ff03e2531966-00-28y59ks05cj8d.janeway.replit.dev/courses/3";

const Course_3: React.FC = () => {
    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            console.log(response.data);
        });
    }, []);

    if (!post) return null;


    return (
        <Container sx={{marginTop: '3rem', marginBottom: '3rem'}}>
        <h2>{post.name}</h2>
        <br/>
        <h4>{post.description}</h4>
        <br/>
            <Box sx={{ width: '100%', bgcolor: '#515A5A ', borderRadius: 10 }}>
                <nav>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="/#/introlecture3" >
                                1 &nbsp; &nbsp; &nbsp;
                                <ListItemIcon>
                                    <PlayCircleIcon sx={{color: 'yellow'}} />
                                </ListItemIcon>
                                <ListItemText primary="Build Machine Learning Models" />
                                <ListItemText primary="8.07" sx={{ textAlign: 'right' }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
            <br />
            <Box sx={{ width: '100%', bgcolor: '#515A5A ', borderRadius: 10 }}>
                <nav>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                2 &nbsp; &nbsp; &nbsp;
                                <ListItemIcon>
                                    <LockIcon />
                                </ListItemIcon>
                                <ListItemText primary="Foundation of Machine Learning and Perceptrons" />
                                <ListItemText primary="9.16" sx={{ textAlign: 'right' }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
            <br />
            <Box sx={{ width: '100%', bgcolor: '#515A5A ', borderRadius: 10 }}>
                <nav>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                3 &nbsp; &nbsp; &nbsp;
                                <ListItemIcon>
                                    <LockIcon />
                                </ListItemIcon>
                                <ListItemText primary="Getting Started with TensorFlow" />
                                <ListItemText primary="14.45" sx={{ textAlign: 'right' }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
            <br />
            <Box sx={{ width: '100%', bgcolor: '#515A5A ', borderRadius: 10 }}>
                <nav>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                4 &nbsp; &nbsp; &nbsp;
                                <ListItemIcon>
                                    <LockIcon />
                                </ListItemIcon>
                                <ListItemText primary="Classification" />
                                <ListItemText primary="13.57" sx={{ textAlign: 'right' }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
            <br />
            <Box sx={{ width: '100%', bgcolor: '#515A5A ', borderRadius: 10 }}>
                <nav>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                5 &nbsp; &nbsp; &nbsp;
                                <ListItemIcon>
                                    <LockIcon />
                                </ListItemIcon>
                                <ListItemText primary="Machine Learning in the Real World" />
                                <ListItemText primary="16.28" sx={{ textAlign: 'right' }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
            <br />
            <Box sx={{ width: '100%', bgcolor: '#515A5A ', borderRadius: 10 }}>
                <nav>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                6 &nbsp; &nbsp; &nbsp;
                                <ListItemIcon>
                                    <LockIcon />
                                </ListItemIcon>
                                <ListItemText primary="Machine Learning Portfolio Project" />
                                <ListItemText primary="30.08" sx={{ textAlign: 'right' }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
            <br />
            <Box sx={{ width: '100%', bgcolor: '#515A5A ', borderRadius: 10 }}>
                <nav>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                7 &nbsp; &nbsp; &nbsp;
                                <ListItemIcon>
                                    <LockIcon />
                                </ListItemIcon>
                                <ListItemText primary="Next Steps" />
                                <ListItemText primary="24.32" sx={{ textAlign: 'right' }} />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
            <br />
        </Container>
    );
}

export default Course_3
