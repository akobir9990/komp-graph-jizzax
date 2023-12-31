import * as React from "react";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player/youtube";
import { items } from "./videosData";
import { Accordion, AccordionSummary } from "./const";
import { AccordionDetails } from "@mui/material";

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("");
  const [videoId, setVideoId] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div className="h-[100vh]">
      {items.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.panel}
          onChange={handleChange(item.panel)}
          onClick={() => setVideoId(item.id)}
        >
          <AccordionSummary>
            <Typography>{item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails className="flex justify-center flex-col items-center">
            {expanded && videoId === item.id && (
              <ReactPlayer
                url={item.url}
                controls
                className="min-w-[100%] max-w-[60%] min-h-[100%] max-h-[60%] px-2"
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                }}
              />
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
