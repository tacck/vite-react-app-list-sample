import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";

type MemberCardProps = {
  member: MemberProps;
};

type MemberProps = {
  name: string;
  description: string;
  image: string;
};

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <Grid item xs={4}>
      <Card>
        <CardHeader title={member.name} />
        <CardContent>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={3}>
              <Avatar src={member.image} sx={{ width: 60, height: 60 }} />
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography variant="body1">{member.description}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
