import { Button, Grid } from "@mui/material";
import React from "react";
import pricing from "../image/pricing.png";
function Section3() {
  return (
    <div>
      <Grid container className="flex flex-wrap justify-evenly bg-[#E9E9E3] pb-10 pt-10 px-5" >
        <Grid item className="">
          <div className="md:w-[50%] m-auto my-10">
            <p className="text-[#6F6F64] font-bold"> Menu</p>
            <h1 className="text-[#6F6F64] text-center lg:text-left md:text-[25px]">
              We change our menu every season. Here is what we are currently
              dishing up.
            </h1>
          </div>
          <Grid lg={8} md={9} sx={{display:"flex",justifyContent:"center",flexDirection:'column',margin:"auto"}} >
            <Button 
              sx={{
                bgcolor: "#6F6F64",
               
                color: "white",
                "&:hover": { bgcolor: "#6F6F64" },
              }}
            >
              Food Menu
            </Button>
            <Button variant="outlined"   sx={{ margin:'10px 0px 10px 0px' }}>
              Drinks Menu
            </Button>
            <Button variant="outlined"  >
              Takeaway Menu
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <img className="w-[500px]" src={pricing} alt="pricing" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Section3;
