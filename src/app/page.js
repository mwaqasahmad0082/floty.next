import BroadcastOnHomeIcon from "@mui/icons-material/BroadcastOnHome";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";

const Page = () => {
  return (
    <div>
      <Container maxWidth="xl" className="backgroundimg">
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Typography
              className="page-one"
              variant="h2"
              sx={{ color: "white" }}
            >
              <span>We Provide the best</span>
              <span style={{ fontWeight: 500 }}>AI-Powered</span>
              <span>tracking for your fleet</span>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              className="page-second"
              variant="h6"
              sx={{ color: "white", width: "80%" }}
            >
              <img src="/assets/arrow.svg" className="arrow-img" />
              The sun set over the calm sea, painting the sky with shades of
              pink and orange. A gentle breeze whispered through the trees,
              bringing peace.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      {/* /////////////////////////////////////////////////////////////////////////////////////////////hover effect container/////////////////////////// */}

      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Typography
              className="hover-header"
              variant="h3"
              sx={{ fontWeight: "600" }}
            >
              <span>Everything you need for your</span>
              <span>fleet, now all in one place</span>
            </Typography>
          </Grid>

          <Container maxWidth="xl" className="hover-container">
            <Grid container spacing={3} justifyContent={"center"}>
              <Grid
                className="hover-box"
                item
                xl={3}
                lg={3}
                md={11}
                sm={11}
                xs={11}
                sx={{ margin: 4 }}
              >
                <ManageAccountsIcon sx={{ fontSize: "4rem" }} />
                <Typography variant="h6">Real time gps tracking</Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    "@media (max-width: 375px)": {
                      fontSize: "1rem",
                    },
                  }}
                >
                  GPS tracking is a versatile technology with broad applications
                  in security, logistics, personal safety, and beyond. GPS
                  tracking is a versatile technology with broad applications in
                  security, logistics, personal safety, and beyond.
                </Typography>
              </Grid>
              <Grid
                className="hover-box"
                item
                xl={3}
                lg={3}
                md={11}
                sm={11}
                xs={11}
                sx={{ margin: 4 }}
              >
                <BroadcastOnHomeIcon sx={{ fontSize: "4rem" }} />
                <Typography variant="h6">
                  Telematics for Enhanced Vehicle Monitoring
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    "@media (max-width: 375px)": {
                      fontSize: "0.8rem",
                    },
                  }}
                >
                  Telematics is transforming how vehicles are managed, providing
                  deeper insights, improving efficiency, and enhancing safety
                  across various industries. Telematics is transforming how
                  vehicles are managed, providing deeper insights, improving
                  efficiency, and enhancing safety across various industries.
                </Typography>
              </Grid>
              <Grid
                className="hover-box"
                item
                xl={3}
                lg={3}
                md={11}
                sm={11}
                xs={11}
                sx={{ margin: 4 }}
              >
                <BusinessCenterIcon sx={{ fontSize: "4rem" }} />
                <Typography variant="h6">AI Powered Analytics</Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1rem",
                    "@media (max-width: 375px)": {
                      fontSize: "1rem",
                    },
                  }}
                >
                  GPS tracking is a versatile technology with broad applications
                  in security, logistics, personal safety, and beyond.
                  Telematics is transforming how vehicles are managed, providing
                  deeper insights, improving efficiency, and enhancing safety
                  across various industries.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Container>

      {/* ///////////////////////////////////////////////////////////////////////////////////////here we start animation//////////////////////////// */}

      <Container
        maxWidth="xl"
        className="animation-container"
        sx={{ mt: 5, mb: 5 }}
      >
        <img src="/assets/animation1.svg" />
        <img src="/assets/animation2.svg" />
        <img src="/assets/animation3.svg" />
        <img src="/assets/animation4.svg" />
        <img src="/assets/animation5.svg" />
        <img src="/assets/animation6.svg" />
        <img src="/assets/animation7.svg" />
        <img src="/assets/animation8.svg" />
        <img src="/assets/animation4.svg" />
        <img src="/assets/animation3.svg" />
        <img src="/assets/animation5.svg" />
        <img src="/assets/animation6.svg" />
      </Container>

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////video container//////////////////////////// */}
      <Container maxWidth="xl" sx={{ backgroundColor: " #f5f5f5", pt: "2rem" }}>
        <Grid className="video-container" xs={12}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "600", textAlign: "center" }}
          >
            Fleet managment Software
          </Typography>
          <Typography variant="p">
            <span>
              Floty's easy-to-use platform empowers you to streamline your
              entair opration.
            </span>
            <br />
            <span>
              {" "}
              from job menagment to cost analysis,with power automation and
              actionable insights
            </span>
          </Typography>
        </Grid>
        <Grid sx={{ pt: "2rem" }} className="video-container-img" xs={12}>
          <img src="/assets/video.svg" className="video-img" />
        </Grid>
      </Container>
      {/* ////////////////////////////////////////////////////////////////////////////////////////red container///////////////////////////////////////// */}

      <Container maxWidth="xl" sx={{ backgroundColor: "#990000", mt: "2rem" }}>
        <Grid container sx={{ py: "2rem" }}>
          <Grid
            className="red-one"
            item
            xs={12}
            sx={{
              color: "white",
              fontSize: "2rem",
              mb: "2rem",
              pb: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            We are the Global Leader in Fleet
            <br /> Management and Connected Services
          </Grid>
          <Grid
            className="red-number"
            item
            xs={6}
            sx={{
              color: "#ff9999",
              fontSize: "6.5rem",
              textAlign: "center",
              borderBottom: "1px solid black",
              pb: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            170 billion+
          </Grid>
          <Grid
            className="red-text"
            item
            xs={6}
            sx={{
              color: "white",
              fontSize: "1.5rem",
              textAlign: "center",
              borderBottom: "1px solid black",
              pb: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Data points processed monthly
          </Grid>
          <Grid
            className="red-number"
            item
            xs={6}
            sx={{
              color: "#ff9999",
              fontSize: "6.5rem",
              textAlign: "center",
              borderBottom: "1px solid black",
              pb: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            2,100,00+
          </Grid>
          <Grid
            className="red-text"
            item
            xs={6}
            sx={{
              color: "white",
              fontSize: "1.5rem",
              textAlign: "center",
              borderBottom: "1px solid black",
              pb: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Active subscribers across 23 countries
          </Grid>
          <Grid
            className="red-number"
            item
            xs={6}
            sx={{
              color: "#ff9999",
              fontSize: "6.5rem",
              textAlign: "center",
              pb: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            115,000+
          </Grid>
          <Grid
            className="red-text"
            item
            xs={6}
            sx={{
              color: "white",
              fontSize: "1.5rem",
              textAlign: "center",
              pb: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Businesses trust us
          </Grid>
        </Grid>
        {/* ///////////////////////////////////////////////////////////////////////////////////////form container/////////////////////// */}
      </Container>
      <Container className="form-container" maxWidth="xl">
        <Grid container>
          <Grid className="form-field" item sm={12} md={4} lg={4} spacing={2}>
            <TextField
              className="input-fields"
              label="Name"
              variant="outlined"
              fullWidth
            />

            <TextField
              className="input-fields"
              label="Email Address"
              variant="outlined"
              fullWidth
            />

            <TextField
              className="input-fields"
              label="Phone Number"
              variant="outlined"
              fullWidth
            />

            <Button className="form-button" variant="contained" fullWidth>
              Get Protected
            </Button>
            <Typography className="contect-info" variant="h6">
              Speak to an Expert:Start tracking today
              <span>
                <span> CALL NOW </span>
                <span className="contect">12342123</span>
              </span>
            </Typography>
          </Grid>
          <Grid item lg={2} md={2}></Grid>
          <Grid className="form-content"sx={{mt:"20px"}} item sm={12} md={6} lg={6}>
            <Typography variant="h3">
              <img src="/assets/arrow2.svg" />
              Get a Superior vehicle tracking unit today
            </Typography>
            <Typography variant="h6">
              Contact us and transform your fleet Managementwith floty's
              advanced tracking and AI solutions
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Page;
