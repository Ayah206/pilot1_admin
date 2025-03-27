import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Box } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";

const Hotbtn = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  const handleClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
          setOpen(true);
        },
        (error) => {
          alert("Error getting location. Please enable location services.");
          console.error(error);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const sendAlert = async () => {
    if (!location) return;
    try {
      await fetch("http://localhost:5000/send-alert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lat: location.lat,
          lng: location.lng,
          phone: "+2347018838766",
        }),
      });
      alert("Emergency alert sent!");
      setOpen(false);
    } catch (error) {
      console.error("Error sending alert:", error);
    }
  };

  return (
    <>
      <Box sx = {{

      }}>
      <Button sx = {{
        padding: '35px 30px',
        fontSize: 24,
        textAlign: 'center',
        cursor: 'pointer',
        color: 'white',
        backgroundColor: 'red',
        border: 'none',
        borderRadius: '100px',
        boxShadow: '0 9px #999',
        transition: 'font-size 0.5s',
        '&:active':{
          boxShadow: '0 5px #666',
          transform: 'translateY(4px)',
        },
        '&:hover':{
          backgroundColor: 'red',
          fontSize: 28,
        }  
      }}>SOS</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Emergency Alert</DialogTitle>
        <DialogContent>
          Are you sure you want to send an emergency alert with your location?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button  color="error" variant="contained">
            Send Alert
          </Button>
        </DialogActions>
      </Dialog>
      </Box>
    </>
  );
};

export default Hotbtn;
