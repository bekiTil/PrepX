import {
    Box,
    Button,
    CircularProgress,
    Container,
    Divider,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Theme,
    Toolbar,
    Typography,
    createStyles,
    makeStyles,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";

  import dynamic from "next/dynamic";
  import "quill/dist/quill.snow.css";
  import "katex/dist/katex.min.css";
  import Quill from "quill";
  import katex from "katex";
  import {createQuestions, editQuestion} from  "../../backend-utils/questions-utils"
  import { useRouter } from "next/router";
  import NewRequests from "../../components/new-requests";
import NavbarAuth from "../../components/headern";

  const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
    ssr: false,
    loading: () =><CircularProgress/>
  });
  if (typeof window !== "undefined") {
    const Quill = require("quill");
    const BlockEmbed = Quill.import("blots/block/embed");
  
    class FormulaBlot extends BlockEmbed {
      static create(value: any) {
        const node = super.create();
        katex.render(value, node, { throwOnError: false });
        node.setAttribute("data-value", value);
        return node;
      }
  
      static value(node: any) {
        return node.getAttribute("data-value");
      }
    }
  
    FormulaBlot.blotName = "formula";
    FormulaBlot.tagName = "div";
  
    Quill.register(FormulaBlot);
  }
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video", "formula"],
      // Add the formula button here
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
    keyboard: {
      bindings: {
        handleEnter: {
          key: 13,
          handler() {
            return false; // Prevent new line on Enter key press
          },
        },
      },
    },
  };
  
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "formula", // Add 'formula' format here
  ];
  const SingleQuestions: React.FC = () => {
    const router = useRouter()
    const { qid } = router.query;
 
    const [isFormValid, setIsFormValid] = useState(false);
  
    const [questionList, setQuestionList] = useState<any>([]);
  
    const [subsection, setSubsection] = useState("");
    const [section, setSection] = useState("");
    const [chapter, setChapter] = useState("");
    const [subject, setSubject] = useState("");
    const [grade, setGrade] = useState("");
    const [id, setId] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [importance, setImportance] = useState("");
    const [relation, setRelation] = useState("");
    const [questionOutline, setQuestionOutline] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("Write the  question here ...");
  
    const handleQuillChange = (value: any) => {
      console.log(value);
      setContent(value);
    };
    const [contentSo, setContentSo] = useState("Explain the Solution here ...");
  
    const handleQuillChangeSo = (value: any) => {
      console.log(value);
      setContentSo(value);
    };
    const [contents, setContents] = useState("Write Choice A here ...");
  
    const handleQuillChanges = (value: any) => {
      console.log(value);
      setContents(value);
    };
    const [contentB, setContentB] = useState("Write Choice B here ...");
  
    const handleQuillChangeB = (value: any) => {
      console.log(value);
      setContentB(value);
    };
    const [contentC, setContentC] = useState("Write Choice C here ...");
  
    const handleQuillChangeC = (value: any) => {
      console.log(value);
      setContentC(value);
    };
    const [contentD, setContentD] = useState("Write Choice D here ...");
  
    const handleQuillChangeD = (value: any) => {
      console.log(value);
      setContentD(value);
    };
    const [contentAn, setContentAn] = useState("Write the Answer here ...");
  
    const handleQuillChangeAn = (value: any) => {
      console.log(value);
      setContentAn(value);
    };
    const [loading,setLoading]= useState(false);
    const handleSaveAndContinue = () => {
      // Create a new question object with the current input values
      const newQuestion = {
        subsection,
        section,
        chapter,
        subject,
        grade,
        id,
        difficulty,
        importance,
        relation,
        questionOutline,
        category,
        content,
        contents,
        contentB,
        contentC,
        contentD,
        contentAn,
        contentSo,
      };
    
      // Add the new question to the questionList
      setQuestionList([...questionList, newQuestion]);
    
      // Clear the input values for the next question
      setSubsection("");
      setSection("");
      setChapter("");
      setSubject("");
      setGrade("");
      setId("");
      setDifficulty("");
      setImportance("");
      setRelation("");
      setQuestionOutline("");
      setCategory("");
      setContent("Write the question here ...");
      setContents("Write Choice A here ...");
      setContentB("Write Choice B here ...");
      setContentC("Write Choice C here ...");
      setContentD("Write Choice D here ...");
      setContentAn("Write the Answer here ...");
      setContentSo("Explain the Solution here ...");
    };
    const onSubmitHandle =()=>{
      const newQuestion = {
        subsection,
        section,
        chapter,
        subject,
        grade,
        id,
        difficulty,
        importance,
        relation,
        questionOutline,
        category,
        content,
        contents,
        contentB,
        contentC,
        contentD,
        contentAn,
        contentSo,
      };
    
      // Add the new question to the questionList
      
      
      setLoading(true)
      questionList.push(newQuestion)
      editQuestion('df',1,newQuestion)
      .then((res) => res.json())
      .then((data)=>{
     
      })
      .finally(()=>{
        setLoading(false)
          router.push("home")
      })
  
    }
    const validateForm = () => {
      // Check if all the required inputs have a value
      if (
        subsection.trim() !== "" &&
        section.trim() !== "" &&
        chapter.trim() !== "" &&
        subject.trim() !== "" &&
        grade.trim() !== "" &&
        difficulty.toString().trim() !== "" &&
        importance.toString().trim() !== "" &&
        relation.trim() !== "" &&
        questionOutline.trim() !== "" &&
        category.trim() !== "" &&
        content.trim() !== "" &&
        contents.trim() !== "" &&
        contentB.trim() !== "" &&
        contentC.trim() !== "" &&
        contentD.trim() !== "" &&
        contentAn.trim() !== "" &&
        contentSo.trim() !== ""
      ) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    };
    
    useEffect(() => {
      validateForm();
    }, [subsection, section, chapter, subject, grade, difficulty, importance, relation, questionOutline, category, content, contents, contentB, contentC, contentD, contentAn, contentSo]);
    
    return (
      <div>
        <NavbarAuth />
        <Toolbar></Toolbar>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 2,
            px: 5,
          }}
        >
          <Container maxWidth={false}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <InputLabel id="demo-select-small">Subsection</InputLabel>
                <TextField
                  id="subsection"
                  fullWidth
                  value={subsection}
                  onChange={(event) => setSubsection(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <InputLabel id="demo-select-small">Section</InputLabel>
                <TextField
                  id="section"
                  fullWidth
                  value={section}
                  onChange={(event) => setSection(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <InputLabel id="demo-select-small">Chapter</InputLabel>
                <TextField
                  id="chapter"
                  fullWidth
                  value={chapter}
                  onChange={(event) => setChapter(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <InputLabel id="demo-select-small">Subject</InputLabel>
                <TextField
                  id="subject"
                  fullWidth
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <InputLabel id="grade-label">Grade</InputLabel>
                <Select
                  labelId="grade-label"
                  id="grade"
                  value={grade}
                  fullWidth
                  onChange={(event) => setGrade(event.target.value)}
                >
                  <MenuItem value="1">G-1</MenuItem>
                  <MenuItem value="2">G-2</MenuItem>
                  <MenuItem value="3">G-3</MenuItem>
                  <MenuItem value="4">G-4</MenuItem>
                  <MenuItem value="5">G-5</MenuItem>
                  <MenuItem value="6">G-6</MenuItem>
                  <MenuItem value="7">G-7</MenuItem>
                  <MenuItem value="8">G-8</MenuItem>
                  <MenuItem value="9">G-9</MenuItem>
                  <MenuItem value="10">G-10</MenuItem>
                  <MenuItem value="11">G-11</MenuItem>
                  <MenuItem value="12">G-12</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={2}>
                <InputLabel id="grade-label">ID</InputLabel>
                <TextField
                  id="id"
                  fullWidth
                  value={id}
                  onChange={(event) => setId(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <InputLabel id="difficulty-label">Difficulty Level</InputLabel>
                <Select
                  labelId="difficulty-label"
                  id="difficulty"
                  value={difficulty}
                  fullWidth
                  onChange={(event) => setDifficulty(event.target.value)}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12} md={2}>
                <InputLabel id="importance-label">Importance Level</InputLabel>
                <Select
                  labelId="importance-label"
                  id="importance"
                  value={importance}
                  fullWidth
                  onChange={(event) => setImportance(event.target.value)}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </Grid>
  
              <Grid item xs={12} md={2}>
                <InputLabel id="demo-select-small">Relation</InputLabel>
                <TextField
                  id="chapter"
                  fullWidth
                  value={relation}
                  onChange={(event) => setRelation(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <InputLabel id="demo-select-small">Question Outline</InputLabel>
                <TextField
                  id="chapter"
                  fullWidth
                  value={questionOutline}
                  onChange={(event) => setQuestionOutline(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <InputLabel id="demo-select-small">Category</InputLabel>
                <TextField
                  id="chapter"
                  fullWidth
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                />
              </Grid>
            </Grid>
            <Grid marginTop={4} container spacing={2}>
              <Grid item xs={12} md={10}>
                <InputLabel id="demo-select-small">Questions</InputLabel>
                <QuillNoSSRWrapper
                  id="quill"
                  value={content}
                  onChange={handleQuillChange}
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  className="bg-white border border-gray-300 p-2"
                />
              </Grid>
              <Grid item xs={12} md={10}>
                <InputLabel id="demo-select-small">Choice A</InputLabel>
                <QuillNoSSRWrapper
                  id="quill"
                  value={contents}
                  onChange={handleQuillChanges}
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  className="bg-white border border-gray-300 p-2"
                />
              </Grid>
              <Grid item xs={12} md={10}>
                <InputLabel id="demo-select-small">Choice B</InputLabel>
                <QuillNoSSRWrapper
                  id="quill"
                  value={contentB}
                  onChange={handleQuillChangeB}
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  className="bg-white border border-gray-300 p-2"
                />
              </Grid>
              <Grid item xs={12} md={10}>
                <InputLabel id="demo-select-small">Choice C</InputLabel>
                <QuillNoSSRWrapper
                  id="quill"
                  value={contentC}
                  onChange={handleQuillChangeC}
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  className="bg-white border border-gray-300 p-2"
                />
              </Grid>
              <Grid item xs={12} md={10}>
                <InputLabel id="demo-select-small">Choice D</InputLabel>
                <QuillNoSSRWrapper
                  id="quill"
                  value={contentD}
                  onChange={handleQuillChangeD}
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  className="bg-white border border-gray-300 p-2"
                />
              </Grid>
              <Grid item xs={12} md={5}>
              <InputLabel id="demo-select-small">Answer</InputLabel>
              <QuillNoSSRWrapper
          id="quill"
          value={contentAn}
          onChange={handleQuillChangeAn}
          modules={modules}
          formats={formats}
          theme="snow"
          className="bg-white border border-gray-300 p-2"
        />
              </Grid>
              <Grid item xs={12} md={12}>
              <InputLabel id="demo-select-small">Solution</InputLabel>
              <QuillNoSSRWrapper
          id="quill"
          value={contentSo}
          onChange={handleQuillChangeSo}
          modules={modules}
          formats={formats}
          theme="snow"
          className="bg-white border border-gray-300 p-2"
        />
              </Grid>
            </Grid>
            <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 2,
            }}
          >
           
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 2,
            }}
          >
              <Button onClick={onSubmitHandle}  disabled={!isFormValid || loading} color="primary" variant="contained" type="submit">
             Edit 
            </Button>
              </Box>
          </Container>
        </Box>
      </div>
    );
  };
  
  export default SingleQuestions;
  