import React,{useState} from 'react';
import {
  Box,
  Grid,
  Card,
  Typography,
  Avatar,
  Chip,
   Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import LifestyleDietaryTabs from './diet';
import CloseIcon from '@mui/icons-material/Close';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const pulseData = [
  { time: '10:00', bpm: 78 },
  { time: '10:10', bpm: 80 },
  { time: '10:20', bpm: 82 },
  { time: '10:30', bpm: 83 },
  { time: '10:40', bpm: 81 },
  { time: '10:50', bpm: 85 },
  { time: '11:00', bpm: 83 },
];
 const data = [
    {
      name: 'Paracetamol',
      dosage: '1 Tablet',
      duration: '1 Week',
      repeat: 'Everyday',
      time: 'Morning',
      taken: 'After food',
    },
    {
      name: 'Paracetamol',
      dosage: '1 Tablet',
      duration: '1 Week',
      repeat: 'Alternate days',
      time: 'Night',
      taken: 'Before food',
    },
    {
      name: 'Paracetamol',
      dosage: '1 Tablet',
      duration: '1 Week',
      repeat: 'Specific...',
      time: 'Both',
      taken: 'Before food',
      hasIcon: true,
    },
    {
      name: 'Paracetamol',
      dosage: '1 Tablet',
      duration: '1 Week',
      repeat: 'Everyday',
      time: 'Both',
      taken: 'Before food',
    },
    {
      name: 'Paracetamol',
      dosage: '1 Tablet',
      duration: '1 Week',
      repeat: 'Everyday',
      time: 'Both',
      taken: 'Before food',
    },
  ];

  

const PatientDetailsCard = () => {
  const [openMedicationDialog, setOpenMedicationDialog] = useState(false);

  return (
    <Box px={2} py={1}>
      {/* Row 1 */}
      <Grid container spacing={2} wrap="nowrap">
        {/* Patient Details Card */}
        <Grid item>
          <Card
            sx={{
              borderRadius: 3,
              px: 2,
              py: 2,
              minWidth: 350,
              ml: -4,
              backgroundColor: '#fff',
              height: 178,
              display: 'flex',
            
              flexDirection: 'column',
              justifyContent: 'space-between',
              
            }}
          >
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography fontSize={13} fontWeight={600} color="text.secondary">
                Patient’s Details
              </Typography>
              <Typography fontSize={13} fontWeight={600} color="#00a9ee">
                04-06-2025 &nbsp;&nbsp; 11:00 a.m. – 12:00 p.m.
              </Typography>
            </Box>

            <Box display="flex" gap={2} alignItems="flex-start">
              <Avatar
                src="https://randomuser.me/api/portraits/men/32.jpg"
                sx={{ width: 122, height: 122, borderRadius: 2 }}
              />
              <Box display="flex" flexDirection="column">
                <Chip
                  label="ID - 61984164984"
                  sx={{
                    bgcolor: '#00a9ee',
                    color: '#fff',
                    height: 22,
                    fontSize: 12,
                    mb: 0.5,
                    width: 'fit-content',
                  }}
                />
                <Typography fontWeight={700} fontSize={20} lineHeight={1.2}>
                  Ajay Pal
                </Typography>
                <Typography fontSize={13} color="gray" mb={1}>
                  (Husband)
                </Typography>

                <Box display="flex" gap={1}>
                  <Box
                    sx={{
                      backgroundColor: '#f9fcff',
                      border: '1px solid #e0ecf3',
                      borderRadius: 2,
                      px: 1.5,
                      py: 0.7,
                      display: 'flex',
                      alignItems: 'center',
                      width: 150,
                    }}
                  >
                    <Box
                      sx={{
                        width: 15,
                        height: 15,
                        borderRadius: 1,
                        background: 'linear-gradient(to bottom right, #cce9fb, #e6f5fd)',
                        mr: 1,
                      }}
                    />
                    <Typography fontSize={13} color="gray" mr={0.5}>
                      Age
                    </Typography>
                    <Typography fontSize={13} fontWeight={700} color="#000">
                      32 years old
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      backgroundColor: '#f9fcff',
                      border: '1px solid #e0ecf3',
                      borderRadius: 2,
                      px: 1.5,
                      py: 0.7,
                      display: 'flex',
                      alignItems: 'center',
                      width: 100,
                      height: 32,
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: 1,
                        background: 'linear-gradient(to bottom right, #cce9fb, #e6f5fd)',
                        mr: 1,
                      }}
                    />
                    <Typography fontSize={13} color="gray" mr={0.5}>
                      Gender
                    </Typography>
                    <Typography fontSize={13} fontWeight={700} color="#000">
                      Male
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* Pulse Card */}
        <Grid item>
          <Card
            sx={{
              borderRadius: 3,
              px: 2,
              py: 2,
             
              width: 324,
              height: 178,
              backgroundColor: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
             
              
            }}
          >
            <Box>
              <Typography fontWeight={600} fontSize={14} color="text.secondary" mb={0.5}>
                Pulse
              </Typography>
              <Typography fontWeight={700} fontSize={28} color="#00a9ee">
                83 <Typography component="span" fontSize={16}>bpm</Typography>
              </Typography>
            </Box>

           <Box display="flex" justifyContent="center" alignItems="center" flexGrow={1} height={60}>
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={pulseData}>
      <XAxis dataKey="time" hide />
      <YAxis hide domain={['auto', 'auto']} />
      <Tooltip />
      <Line type="monotone" dataKey="bpm" stroke="#00a9ee" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
</Box>


            <Box display="flex" justifyContent="center" gap={1} mt={1}>
              <Box width={8} height={8} bgcolor="#00a9ee" borderRadius="50%" />
              <Box width={8} height={8} bgcolor="#ccc" borderRadius="50%" />
              <Box width={8} height={8} bgcolor="#ccc" borderRadius="50%" />
            </Box>
          </Card>
        </Grid>
        <Grid item>
          <LifestyleDietaryTabs />
        </Grid>
      </Grid>

<Grid container spacing={2} mt={-22.5}  ml={-4}>
  {/* Complaint Card */}
  <Grid item>
    <Card
      sx={{
        width: 342,
        height: 158,
        borderRadius: 1.5,
        border: '1px solid #00a9ee',
        backgroundColor: '#fff',
        p: 1.5,
        mt:0,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
      }}
    >
      <Typography fontWeight={600} fontSize={14} color="#00a9ee">
        Complaint
      </Typography>

      <Box sx={{ backgroundColor: '#eaf7fd', borderRadius: 1.5, p: 1.5,width:318,height:72 }}>
        <Typography fontWeight={700} fontSize={14} mb={0.5}>
          Remarks
        </Typography>
        <Typography fontSize={13} color="gray">
          Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.
        </Typography>
      </Box>

      <Box display="flex" flexWrap="wrap" gap={1}>
        {[...Array(4)].map((_, index) => (
          <Chip
            key={index}
            label="Symptom"
            sx={{
              backgroundColor: '#eaf7fd',
              fontWeight: 600,
              fontSize: 10,
              width:68,
              height:22,
              borderRadius: '999px',
            }}
          />
        ))}
        <Chip
          label="+4"
          sx={{
            backgroundColor: '#eaf7fd',
            fontWeight: 600,
            fontSize: 10,
            width:30,
            borderRadius: '999px',
          }}
        />
      </Box>
    </Card>
  </Grid>
  <Grid item>
    <Card
      sx={{
        width: 208,
        height: 150,
        borderRadius: 2,
        border: '1px solid #e9eaecff',
        backgroundColor: '#ffffff',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        mt:0
      }}
    >
      <Typography fontWeight={700} fontSize={14} color="#00a9ee">
        Prescription
      </Typography>
      <Box
        sx={{
          backgroundColor: '#eaf7fd',
          borderRadius: 2,
          p: 1.2,
          flexGrow: 1,
        }}
      >
        <Typography fontSize={13} color="gray">
          Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.
        </Typography>
      </Box>
    </Card>
  </Grid>

  {/* Allergies Card */}
  <Grid item>
    <Card
      sx={{
        width: 184,
        height: 150,
        borderRadius: 3,
        backgroundColor: '#ffffff',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        mt:0,
        boxShadow: '0px 1px 4px rgba(0,0,0,0.08)',
      }}
    >
      <Typography fontWeight={700} fontSize={14}>
        Allergies
      </Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {['Pollen', 'Lactose', 'Animal Dander', 'Dust Mitest'].map((label) => (
          <Chip
            key={label}
            label={label}
            size="small"
            sx={{
              backgroundColor: '#f2f2f2',
              fontSize: 13,
              fontWeight: 500,
              borderRadius: '16px',
              px: 1.5,
            }}
          />
        ))}
      </Box>
    </Card>
  </Grid>
</Grid>
<Box
  sx={{
    mt: 2,
    ml: 44, 
    width: 439,
    borderRadius: 3,
    backgroundColor: 'offwhite',
    p: 2,
    boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
  }}
>
  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} >
    <Typography fontWeight={700} fontSize={16}>
      Medication
    </Typography>
    <Box
      component="span"
      sx={{
        width:28,
        height: 28,
        borderRadius: '50%',
        backgroundColor: '#f8f7f7ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        ml:20,
      }}
      onClick={() => window.open('https://example.com/full-medication', '_blank')}
    >
      <img
        src="https://img.icons8.com/material-rounded/24/000000/expand-arrow.png"
        alt="open"
        width={16}
        height={16}
      />
    </Box>
  </Box>
<Box display="flex" flexWrap="wrap" gap={2}>
  {[
    { label: 'Current Medicine' },
    ...Array(11).fill({ label: 'Medicine' }),
  ].map((med, index) => (
    <Box
      key={index}
      onClick={() => index === 0 && setOpenMedicationDialog(true)} 
      sx={{
        px: 1.5,
        py: 0.8,
        borderRadius: 1.5,
        border: '1px solid #c7d3e0',
        fontSize: 13,
        fontWeight: 600,
        backgroundColor: index === 0 ? '#e6f2ff' : 'transparent',
        color: '#000',
        display: 'inline-block',
        cursor: 'pointer',
      }}
    >
      {med.label}
    </Box>
  ))}
</Box>
<Dialog
  open={openMedicationDialog}
  onClose={() => setOpenMedicationDialog(false)}
  maxWidth="md"
  fullWidth
>
  <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Typography fontWeight={600}>Medication History</Typography>
    <IconButton onClick={() => setOpenMedicationDialog(false)}>
      <CloseIcon />
    </IconButton>
  </DialogTitle>
  <DialogContent>
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Medicine Name</TableCell>
            <TableCell>Dosage</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Repeat</TableCell>
            <TableCell>Time of Day</TableCell>
            <TableCell>To be Taken</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.dosage}</TableCell>
              <TableCell>{row.duration}</TableCell>
              <TableCell>{row.repeat}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.taken}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </DialogContent>
</Dialog>
</Box>



      {/* Test Recommendations */}
      <Box
        mt={-24}
        p={2}
        sx={{
          border: '2px solid white',
          borderRadius: 2,
          maxWidth: 395,
          ml: 'auto',
          mr: -4,
          height:155,
          boxShadow: '0px 4px 12px grey',
          backgroundColor: '#f9fbfd',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography fontWeight={600}>Test Recommendations</Typography>
          <img
            src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
            alt="download"
            width={18}
            height={18}
          />
        </Box>
        <Box
          sx={{
            border: '1px solid #e0e0e0',
            borderRadius: 2,
            backgroundColor: '#f7f9fb',
            p: 1,
          }}
        >
          <Box
            sx={{
              bgcolor: '#fff',
              borderRadius: 1,
              p: 1,
              mb: 1,
              border: '1px solid #edf0f3',
              fontSize: 14,
              color: 'gray',
            }}
          >
            Name
          </Box>
          <Box
            sx={{
              bgcolor: '#fff',
              borderRadius: 1,
              p: 1,
              border: '1px solid #edf0f3',
              fontSize: 14,
              color: 'gray',
            }}
          >
            Name
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" mt={1} gap={1}>
          <Box width={8} height={8} bgcolor="#00a9ee" borderRadius="50%" />
          <Box width={8} height={8} bgcolor="#ccc" borderRadius="50%" />
          <Box width={8} height={8} bgcolor="#ccc" borderRadius="50%" />
          <Box width={8} height={8} bgcolor="#ccc" borderRadius="50%" />
        </Box>
      </Box>

      {/* Disease Card */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            mt: -24,
            borderRadius: 2,
            backgroundColor: '#fff',
            p: 2,
            ml: -4,
            width:338,
            height: 160,
            border: '1px solid #e0e0e0',
          }}
        >
          <Typography fontWeight={600} fontSize={14} color="#00a9ee" mt={-2}>
            Disease
          </Typography>
          <Typography fontSize={13} color="text.secondary" mb={2}>
            Lorem ipsum dolor sit amet amet.
          </Typography>
          <Box
            sx={{
              backgroundColor: '#eaf7fd',
              borderRadius: 2,
              p: 1.5,
              mb: 2,
              width:318,
            }}
          >
            <Typography fontWeight={700} fontSize={14} mb={.5}>
              Diagnosis
            </Typography>
            <Typography fontSize={13} color="gray">
              Lorem ipsum dolor sit amet amet amet amet amet consectetur. lorem proin enim pretium nisi quis.
            </Typography>
          </Box>
          <Box display="flex" flexWrap="wrap" gap={0.2} ml={-2}>
            <Chip label="Symptom" sx={{ backgroundColor: '#eaf7fd', fontWeight: 600 }} />
            <Chip label="Symptom" sx={{ backgroundColor: '#eaf7fd', fontWeight: 600 }} />
            <Chip label="Symptom" sx={{ backgroundColor: '#eaf7fd', fontWeight: 600 }} />
            <Chip label="Symptom" sx={{ backgroundColor: '#eaf7fd', fontWeight: 600 }} />
            <Chip label="+4" sx={{ backgroundColor: '#eaf7fd', fontWeight: 600 }} />
          </Box>
        </Card>
      </Grid>
    </Box>
  );
};

export default PatientDetailsCard;
