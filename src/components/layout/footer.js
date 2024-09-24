
import { Box, Container, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        py: 4,
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="center">
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            flexDirection="column"
            alignItems="start"
            textAlign="center"
          >
            <Typography variant="h6" gutterBottom>
              <img
                src="/assets/logo.svg" 
                alt="Floty Logo"
                style={{ height: 60 }}
              />
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ fontWeight: 700, mt: 10 }}
            >
              Download Our App
            </Typography>
            <Box display="flex" flexDirection="row" gap={1} justifyContent="center">
              <img
                src="/assets/footer1.svg" 
                alt="Download on App Store"
                style={{ width: 153, cursor: "pointer" }}
              />
              <img
                src="/assets/footer2.svg" 
                alt="Download on Google Play"
                style={{ width: 153, cursor: "pointer" }}
              />
            </Box>
          </Grid>

          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Grid item xs={12} md={2} textAlign="center">
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 700, fontSize: "1.5rem" }}
            >
              Features
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Playlist Manager",
                "Vendor Gallery",
                "On-Demand Video",
                "Template Builder",
                "Video Studio",
                "Weather Forecast",
                "YouTube Loader",
                "Scrolling Ticker",
                "Priority Ads",
              ].map((feature, index) => (
                <li key={index} style={{ marginTop: "15px" }}>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    {feature}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Grid item xs={12} md={2} textAlign="center">
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 700, fontSize: "1.5rem" }}
            >
              Industries
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Playlist Manager",
                "Vendor Gallery",
                "On-Demand Video",
                "Template Builder",
                "Video Studio",
                "Weather Forecast",
              ].map((industry, index) => (
                <li key={index} style={{ marginTop: "15px" }}>
                  <Link
                    href="#"
                    color="inherit"
                    sx={{ textDecoration: "none" }}
                  >
                    {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <Grid item xs={12} md={2} textAlign="center">
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 700, fontSize: "1.5rem" }}
            >
              Features
            </Typography>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["Playlist Manager", "Vendor Gallery", "On-Demand Video"].map(
                (feature, index) => (
                  <li key={index} style={{ marginTop: "15px" }}>
                    <Link
                      href="#"
                      color="inherit"
                      sx={{ textDecoration: "none" }}
                    >
                      {feature}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </Grid>
        </Grid>

        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <Box mt={4} textAlign="start">
          <Typography variant="h6" color="textSecondary">
            {"Floty © 2023. All Rights Reserved"}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
