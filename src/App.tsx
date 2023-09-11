import { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import MemberCard from "./MemberCard";

function App() {
  const [members] = useState([
    {
      name: "Who",
      description: "About",
      image: "https://via.placeholder.com/60",
    },
    {
      name: "Taro",
      description: "About",
      image: "https://via.placeholder.com/60",
    },
    {
      name: "Hanako",
      description: "About",
      image: "https://via.placeholder.com/60",
    },
    {
      name: "Me",
      description: "About",
      image:
        "https://pbs.twimg.com/profile_images/1571789838097207297/V2aYM6_A_400x400.jpg",
    },
  ]);

  return (
    <Container
      maxWidth="xl"
      sx={{ background: "black", color: "white", height: "100vh" }}
    >
      <Grid item xs={12}>
        <Typography variant="h1">Team members</Typography>
      </Grid>
      <Grid container spacing={2}>
        {members.map((member) => {
          return <MemberCard member={member} />;
        })}
      </Grid>
    </Container>
  );
}

export default App;
