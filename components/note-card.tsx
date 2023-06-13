import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

interface QuestionBoxProps {
  subject: string;
  note: string;
  topic: string;
}

const NoteBox: React.FC<QuestionBoxProps> = ({ subject, note, topic }) => {
  return (
    <Card sx ={{px:4}}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom variant="subtitle1">
          {subject}
        </Typography>

        <Typography color="textSecondary" gutterBottom variant="subtitle2">
          {note}
        </Typography>

        <Typography  gutterBottom variant="subtitle2">
          <b>{topic}</b>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteBox;
