import React,{useState,useRef} from 'react';
import {
  Box,
  Grid,
  Card,
  Typography,
  Avatar,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
   Popper, ClickAwayListener,
} from '@mui/material';
import Drawer from '@mui/material/Drawer';
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
      taken: 'Beforefood',
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

const medicationData = [
  { name: 'Paracetamol', dose: '500mg', frequency: 'Twice a day' },
  { name: 'Amoxicillin', dose: '250mg', frequency: 'Once a day' },
];

const bloodPressureData = { systolic: 122, diastolic: 78, unit: 'mmHg' };
const PatientDetailsCard = () => {
const [activeDot, setActiveDot] = useState(null); // or any initial value
const [openMedicationDialog, setOpenMedicationDialog] = useState(false);
const anchorRef = useRef(null);
const [open, setOpen] = useState(false);
const handleToggle = () => {
  setOpen(true); // or toggle it with prev => !prev
};

const handleClickAway = () => {
  setOpen(false);
};


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
            <Box display="flex" justifyContent="space-between" >
              <Typography fontSize={26} fontWeight={600} color="text.primary" mt={-2}>
                Patient’s Details
              </Typography>
              <Typography fontSize={14} fontWeight={600} color="#00a9ee">
                04-06-2025 &nbsp;&nbsp; 11:00 a.m. – 12:00 p.m.
              </Typography>
            </Box>

            <Box display="flex" gap={2} alignItems="flex-start">
              <Avatar
                src="https://randomuser.me/api/portraits/men/32.jpg"
                sx={{ width: 122, height: 140, borderRadius: 2,}}
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
                    ml:-1,
                    width: 'fit-content',
                  }}
                />
                <Typography fontWeight={700} fontSize={20} lineHeight={1.2}>
                  Ajay Pal
                </Typography>
                <Typography fontSize={13} color="gray" mb={1}>
                  (Husband)
                </Typography>

                <Box display="flex" gap={1} mb={2}>
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
              {/* Dot-based content switching */}
  {activeDot === 0 && (
    <>
      <Box>
        <Typography fontWeight={600} fontSize={22} color="text.primary">
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
    </>
  )}
  {activeDot === 1 && (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    height="100%"
    px={1}
  >
    <Box>
      <Typography fontWeight={600} fontSize={20} color="text.primary" mb={0.5}  fontFamily="Roboto" mt={-9}>
        Temperature
      </Typography>
        <Typography fontWeight={700} fontSize={30} color="#00a9ee">
          96<Typography component="span" fontSize={16}>C</Typography>
        </Typography>
      <Box display="flex" alignItems="baseline">
      </Box>
    </Box>
    <Box>
      <img
        src="https://th.bing.com/th/id/OIP.ZSyKaVqrrpsP0o3Lvvh0CQHaHa?w=182&h=183&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
        alt="blood pressure icon"
        width={130}
        height={150}
        style={{ objectFit: 'contain' }}
      />
    </Box>
  </Box>
)}
  {activeDot === 2 && (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    height="100%"
    px={1}
  >
    <Box>
      <Typography fontWeight={600} fontSize={20} color="text.primary" mb={0.5}  fontFamily="Roboto" mt={-9}>
        Blood Pressure
      </Typography>
      <Box display="flex" alignItems="baseline">
        <Typography fontWeight={700} fontSize={30} color="#00a9ee">
          {bloodPressureData.systolic}
        </Typography>
        <Typography fontWeight={700} fontSize={26} color="#00a9ee" mx={0.5}>
          /
        </Typography>
        <Typography fontWeight={700} fontSize={26} color="#00a9ee">
          {bloodPressureData.diastolic}
        </Typography>
      </Box>
    </Box>
    <Box>
      <img
        src="https://domf5oio6qrcr.cloudfront.net/medialibrary/5141/h0618j16207257185449.jpg"
        alt="blood pressure icon"
        width={130}
        height={150}
        style={{ objectFit: 'contain' }}
      />
    </Box>
  </Box>
)}
{activeDot === 3 && (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    height="100%"
    px={1}
  >
    <Box>
      <Typography fontWeight={600} fontSize={19} color="text.primary" mt={-11}>
        Height
      </Typography>
      <Typography fontWeight={700} fontSize={28} color="#00a9ee">
        186 <Typography component="span" fontSize={16}>cm</Typography>
      </Typography>
    </Box>

    <Box display="flex" flexDirection="column" alignItems="center" flexGrow={1}>
      <img
        src="https://tse1.mm.bing.net/th/id/OIP.joQ5jAT-QX49urqzIGJgxgHaJF?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="height"
        width={160}
        height={160}
        style={{ objectFit: 'contain' }}
      />
    </Box>

    <Box>
      <Typography fontWeight={600} fontSize={19} color="text.primary" mt={11}>
        Weight
      </Typography>
      <Typography fontWeight={700} fontSize={30} color="#00a9ee">
        83 <Typography component="span" fontSize={16}>kg</Typography>
      </Typography>
    </Box>
  </Box>
)}


  {/* Dot Controls */}
  <Box display="flex" justifyContent="center" gap={1} mt={2}>
    {[0, 1, 2,3].map((dot) => (
      <Box
        key={dot}
        onClick={() => setActiveDot(dot)}
        sx={{
          width: 8,
          height: 8,
          bgcolor: activeDot === dot ? '#00a9ee' : '#ccc',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      />
    ))}
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
        <Box ref={anchorRef}>
          <Chip
            label="4"
            onClick={handleToggle}
            sx={{ backgroundColor: '#eaf7fd', fontWeight: 600, cursor: 'pointer' }}
          />
        </Box>
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
  {/* Header */}
  <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
    <Typography fontWeight={700} fontSize={16}>
      Medication
    </Typography>
    <Box
      component="span"
      sx={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        backgroundColor: '#f8f7f7ff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        ml: 20,
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

  {/* Medication Tags */}
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
  <Drawer
    anchor="right"
    open={openMedicationDialog}
    onClose={() => setOpenMedicationDialog(false)}
    PaperProps={{
      sx: { width: 600, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 },
    }}
  >
    <Box sx={{ p: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography fontWeight={600}>Medication History</Typography>
        <IconButton onClick={() => setOpenMedicationDialog(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box
  sx={{
    width: 600,
    height: 264,
    top: 71,
    left: 12,
    opacity: 1,
  }}
>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
           <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell sx={{ borderRight: '1px solid #e0e0e0' }}>Medicine Name</TableCell>
              <TableCell sx={{ borderRight: '1px solid #e0e0e0' }}>Dosage</TableCell>
              <TableCell sx={{ borderRight: '1px solid #e0e0e0' }}>Duration</TableCell>
              <TableCell sx={{ borderRight: '1px solid #e0e0e0' }}>Repeat</TableCell>
              <TableCell sx={{ borderRight: '1px solid #e0e0e0' }}>Time..</TableCell>
              <TableCell SX={{   whiteSpace: 'nowrap',
    minWidth: 120, }}>To be Taken</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i}>
                <TableCell sx={{ borderRight: '1px solid #e0e0e0' }}>{row.name}</TableCell>
                <TableCell sx={{ borderRight: '1px solid #e0e0e0' }}>{row.dosage}</TableCell>
                <TableCell sx={{ borderRight: '1px solid #e0e0e0' }}>{row.duration}</TableCell>
                <TableCell sx={{ borderRight: '1px solid #e0e0e0' }}>{row.repeat}</TableCell>
                <TableCell sx={{ borderRight: '1px solid #e0e0e0' }}>{row.time}</TableCell>
                <TableCell>{row.taken}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    </Box>
  </Drawer>
</Box>




      {/* Test Recommendations */}
      <Box
        mt={-24}
        p={2}
        sx={{
          border: '2px solid white',
          borderRadius: 2,
         width:360,
          ml: 105,
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
        width: 342,
        height: 158,
        borderRadius: 1.5,
        border: '1px solid #00a9ee',
        backgroundColor: '#fff',
        p: 1.5,
        mt:-23,
        ml:-4,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
      }}
    >
       <Typography fontWeight={600} fontSize={14} color="#00a9ee">
        Diseases
      </Typography>

      <Box sx={{ backgroundColor: '#eaf7fd', borderRadius: 1.5, p: 1.5,width:318,height:72 }}>
        <Typography fontWeight={700} fontSize={14} mb={0.5}>
          Remarks
        </Typography>
        <Typography fontSize={13} color="gray">
          Lorem ipsum dolor sit amet amet amet amet met amet consectetur. lorem proin enim pretium nisi quis.
        </Typography>
      </Box>

          <Box display="flex" flexWrap="wrap" gap={0.2} ml={-2} >
            <Chip label="Symptom" sx={{ backgroundColor: '#eaf7fd', fontWeight: 600 }} />
            <Chip label="Symptom" sx={{ backgroundColor: '#eaf7fd', fontWeight: 600 }} />
            <Chip label="Symptom" sx={{ backgroundColor: '#eaf7fd', fontWeight: 600 }} />
            <Chip label="Symptom" sx={{ backgroundColor: '#eaf7fd', fontWeight: 600 }} />
                 <Box ref={anchorRef}>
          <Chip
            label="4"
            onClick={handleToggle}
            sx={{ backgroundColor: '#eaf7fd', fontWeight: 600, cursor: 'pointer' }}
          />
        </Box>

        <Popper open={open} anchorEl={anchorRef.current} placement="bottom-start" modifiers={[
    {
      name: 'offset',
      options: {
        offset: [0, 90], 
        ml:10,
      },
    },
  ]} sx={{ zIndex: 1300 }}>
          <ClickAwayListener onClickAway={handleClickAway}>
              <Paper elevation={3} sx={{ p: 1.5, mt: 1, minWidth: 300 }}>
      {/* Top bar with title and close button */}
      <Box display="flex" justifyContent="space-between" alignItems="center" >
        <Typography fontWeight={600} fontSize={20} color="black">
          More Symptom
        </Typography>
        <IconButton size="small" onClick={handleClickAway}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box display="flex" flexWrap="wrap" gap={3}  mt={2}>
            <Chip label="Symptom" sx={{ backgroundColor: '#eaf7fd', fontWeight: 600,mb:2 }} />
            <Chip label="Symptom" sx={{ backgroundColor: '#eaf7fd', fontWeight: 600 }} />
            <Chip label="Symptom" sx={{ backgroundColor: '#eaf7fd', fontWeight: 600 }} />
            <Chip label="Symptom" sx={{ backgroundColor: '#eaf7fd', fontWeight: 600 }} />
            </Box>
            
            </Paper>
          </ClickAwayListener>
        </Popper>
          </Box>
        </Card>
      </Grid>
    </Box>
  );
};

export default PatientDetailsCard;


