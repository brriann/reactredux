import { Box, Card, CardActions, CardContent, IconButton, Stack, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import React from 'react';

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam malesuada viverra felis. Nulla rutrum leo a mauris finibus, in sollicitudin sapien convallis. Etiam sit amet urna lorem. Maecenas gravida id est eu malesuada. Etiam at est ut augue suscipit porta. Sed cursus orci ornare neque efficitur suscipit. Vestibulum molestie egestas urna, vel tempus ipsum tristique sit amet.';

function InfoCard() {
    return (
        <Box sx={{ minWidth: 275, maxWidth: 400 }}>
            <Card>
                <CardContent>
                    <Typography sx={{ textAlign: 'center' }} variant="h6">Card Topic</Typography>
                    <Typography sx={{ fontStyle: 'italic', fontSize: 16, textAlign: 'center' }} color="text.secondary">A more detailed description</Typography>
                    <Typography sx={{ mt: 2, fontSize: 14 }} variant="body2">{paragraph}</Typography>
                </CardContent>
                <CardActions>
                    <Stack sx={{ width: '100%' }} direction="row" justifyContent="space-between">
                        <div>
                            <IconButton>
                                <AddIcon />
                            </IconButton>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                        <div>
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        </div>
                    </Stack>
                </CardActions>
            </Card>
        </Box>
    );
}

export default InfoCard;