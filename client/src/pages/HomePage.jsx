import React from "react";
import { Box } from "@mui/material";
import { MdDescription } from "react-icons/md";
import { BsReverseLayoutTextWindowReverse, BsImage } from "react-icons/bs";
import { BiBot } from "react-icons/bi";
import { FaPeopleArrows } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import HomeBox from "../components/HomeBox";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <HomeBox
          typo1Text="Summary Generator"
          navigateLink="/summary"
          typo2Text="TEXT SUMAMRY"
          typo3Text="Summarize long text into short sentences"
          logo={<MdDescription size={80} color="#87db6e" />}
        />
        <HomeBox
          typo1Text="Javascript Converter"
          navigateLink="/jsconverter"
          typo2Text=" Text to Code"
          typo3Text="Code from simple English Commands"
          logo={<TbBrandJavascript size={80} color="#87db6e" />}
        />
        <HomeBox
          typo1Text="Text Generation"
          navigateLink="/paragraph"
          typo2Text="TEXT GENERATION"
          typo3Text="Generate text with few words"
          logo={<BsReverseLayoutTextWindowReverse size={80} color="#87db6e" />}
        />
        <HomeBox
          typo1Text="AI ChatBot"
          navigateLink="/chatbot"
          typo2Text="Chatbot"
          typo3Text="Chat With AI Chatbot"
          logo={<BiBot size={80} color="#87db6e" />}
        />
        <HomeBox
          typo1Text="Generate Questions"
          navigateLink="/question"
          typo2Text=" Interview Questions"
          typo3Text="High quality interview questions"
          logo={<FaPeopleArrows size={80} color="#87db6e" />}
        />
        <HomeBox
          typo1Text=" AI Image Generator"
          navigateLink="/imagegenerator"
          typo2Text="Image"
          typo3Text="Generate Image"
          logo={<BsImage size={80} color="#87db6e" />}
        />
      </Box>
    </>
  );
};

export default HomePage;
